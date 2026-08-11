import 'server-only'

import { prisma } from '@/lib/db'
import { getPaymentAccessExpiration } from '@/lib/payment-access'

export function isAdminEmail(email: string | null | undefined) {
  if (!email) {
    return false
  }

  const adminEmails = (process.env.ADMIN_EMAILS ?? '')
    .split(',')
    .map((value) => value.trim().toLowerCase())
    .filter(Boolean)

  return adminEmails.includes(email.toLowerCase())
}

export type AdminStudentSummary = {
  totalUsers: number
  newUsersLast7Days: number
  newUsersLast30Days: number
  usersWithAttempts: number
  usersWithPurchases: number
  activeAccessGrants: number
  onlineUsers: number
  onlineStudents: AdminOnlineStudent[]
  students: AdminStudentListItem[]
}

export type AdminOnlineStudent = {
  id: string
  name: string
  email: string
  lastSeenAt: string
  lastSeenPath: string | null
  hasActiveAccess: boolean
}

export type AdminStudentListItem = {
  id: string
  name: string
  email: string
  planExpiresAt: string | null
  hasActiveAccess: boolean
  lastActivityAt: string | null
  lastActivityPath: string | null
}

export type AdminPendingPaymentAccess = {
  id: string
  email: string
  status: string
  createdAt: string
  updatedAt: string
}

export async function listPendingPaymentAccesses(): Promise<AdminPendingPaymentAccess[]> {
  const accesses = await prisma.paymentAccess.findMany({
    where: {
      accessGranted: false,
    },
    orderBy: {
      updatedAt: 'desc',
    },
    select: {
      id: true,
      email: true,
      status: true,
      createdAt: true,
      updatedAt: true,
    },
    take: 100,
  })

  return accesses.map((access) => ({
    id: access.id,
    email: access.email,
    status: access.status,
    createdAt: access.createdAt.toISOString(),
    updatedAt: access.updatedAt.toISOString(),
  }))
}

export async function getAdminStudentSummary(): Promise<AdminStudentSummary> {
  const now = new Date()
  const sevenDaysAgo = new Date(now)
  sevenDaysAgo.setDate(now.getDate() - 7)

  const thirtyDaysAgo = new Date(now)
  thirtyDaysAgo.setDate(now.getDate() - 30)

  const onlineThreshold = new Date(now.getTime() - 5 * 60 * 1000)

  const [
    totalUsers,
    newUsersLast7Days,
    newUsersLast30Days,
    onlineUsers,
    onlineStudents,
    usersWithAttempts,
    usersWithLegacyPurchases,
    activeLegacyAccessGrants,
    registeredUsers,
    approvedEmailAccesses,
    activeEmailAccesses,
    students,
    accessGrants,
    paymentAccesses,
  ] = await Promise.all([
    prisma.user.count(),
    prisma.user.count({
      where: {
        createdAt: {
          gte: sevenDaysAgo,
        },
      },
    }),
    prisma.user.count({
      where: {
        createdAt: {
          gte: thirtyDaysAgo,
        },
      },
    }),
    prisma.user.count({
      where: {
        lastSeenAt: {
          gte: onlineThreshold,
        },
      },
    }),
    prisma.user.findMany({
      where: {
        lastSeenAt: {
          gte: onlineThreshold,
        },
      },
      orderBy: {
        lastSeenAt: 'desc',
      },
      select: {
        id: true,
        name: true,
        email: true,
        lastSeenAt: true,
        lastSeenPath: true,
      },
      take: 25,
    }),
    prisma.user.count({
      where: {
        simulationAttempts: {
          some: {},
        },
      },
    }),
    prisma.user.findMany({
      where: {
        purchases: {
          some: {},
        },
      },
      select: {
        email: true,
      },
    }),
    prisma.accessGrant.findMany({
      where: {
        status: 'ACTIVE',
        expiresAt: {
          gt: now,
        },
      },
      select: {
        user: {
          select: {
            email: true,
          },
        },
      },
    }),
    prisma.user.findMany({
      select: {
        email: true,
      },
    }),
    prisma.paymentAccess.findMany({
      where: {
        accessGranted: true,
      },
      select: {
        email: true,
      },
    }),
    prisma.paymentAccess.findMany({
      where: {
        accessGranted: true,
      },
      select: {
        email: true,
        updatedAt: true,
      },
    }),
    prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        lastSeenAt: true,
        lastSeenPath: true,
        simulationAttempts: {
          orderBy: {
            createdAt: 'desc',
          },
          take: 1,
          select: {
            createdAt: true,
          },
        },
      },
    }),
    prisma.accessGrant.findMany({
      select: {
        status: true,
        expiresAt: true,
        user: {
          select: {
            email: true,
          },
        },
      },
    }),
    prisma.paymentAccess.findMany({
      where: {
        accessGranted: true,
      },
      select: {
        email: true,
        updatedAt: true,
      },
    }),
  ])

  const registeredEmails = new Set(registeredUsers.map((user) => user.email.toLowerCase()))
  const usersWithPurchases = new Set(
    usersWithLegacyPurchases.map((user) => user.email.toLowerCase())
  )

  for (const access of approvedEmailAccesses) {
    const normalizedEmail = access.email.toLowerCase()
    if (registeredEmails.has(normalizedEmail)) {
      usersWithPurchases.add(normalizedEmail)
    }
  }

  const activeAccessEmails = new Set(
    activeLegacyAccessGrants
      .map((grant) => grant.user.email?.toLowerCase())
      .filter((email): email is string => Boolean(email))
  )

  for (const access of activeEmailAccesses) {
    const normalizedEmail = access.email.toLowerCase()
    if (registeredEmails.has(normalizedEmail) && getPaymentAccessExpiration(access) > now) {
      activeAccessEmails.add(normalizedEmail)
    }
  }

  const planExpirationsByEmail = new Map<string, Date>()

  for (const grant of accessGrants) {
    const normalizedEmail = grant.user.email.toLowerCase()
    const currentExpiration = planExpirationsByEmail.get(normalizedEmail)

    if (!currentExpiration || grant.expiresAt > currentExpiration) {
      planExpirationsByEmail.set(normalizedEmail, grant.expiresAt)
    }
  }

  for (const access of paymentAccesses) {
    const normalizedEmail = access.email.toLowerCase()
    const expiration = getPaymentAccessExpiration(access)
    const currentExpiration = planExpirationsByEmail.get(normalizedEmail)

    if (!currentExpiration || expiration > currentExpiration) {
      planExpirationsByEmail.set(normalizedEmail, expiration)
    }
  }

  const studentList = students
    .map((student) => {
      const latestSimulationAttempt = student.simulationAttempts[0]?.createdAt ?? null
      const lastActivityAt =
        student.lastSeenAt && latestSimulationAttempt
          ? student.lastSeenAt > latestSimulationAttempt
            ? student.lastSeenAt
            : latestSimulationAttempt
          : student.lastSeenAt ?? latestSimulationAttempt

      const normalizedEmail = student.email.toLowerCase()

      return {
        id: student.id,
        name: student.name,
        email: student.email,
        planExpiresAt: planExpirationsByEmail.get(normalizedEmail)?.toISOString() ?? null,
        hasActiveAccess: activeAccessEmails.has(normalizedEmail),
        lastActivityAt: lastActivityAt?.toISOString() ?? null,
        lastActivityPath: student.lastSeenPath,
      }
    })
    .sort((a, b) => {
      if (a.lastActivityAt && b.lastActivityAt) {
        return new Date(b.lastActivityAt).getTime() - new Date(a.lastActivityAt).getTime()
      }

      if (a.lastActivityAt) {
        return -1
      }

      if (b.lastActivityAt) {
        return 1
      }

      return a.name.localeCompare(b.name)
    })

  return {
    totalUsers,
    newUsersLast7Days,
    newUsersLast30Days,
    onlineUsers,
    onlineStudents: onlineStudents
      .filter((student) => student.lastSeenAt)
      .map((student) => ({
        id: student.id,
        name: student.name,
        email: student.email,
        lastSeenAt: student.lastSeenAt!.toISOString(),
        lastSeenPath: student.lastSeenPath,
        hasActiveAccess: activeAccessEmails.has(student.email.toLowerCase()),
      })),
    usersWithAttempts,
    usersWithPurchases: usersWithPurchases.size,
    activeAccessGrants: activeAccessEmails.size,
    students: studentList,
  }
}
