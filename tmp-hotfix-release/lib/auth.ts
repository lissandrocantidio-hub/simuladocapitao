import { compare } from 'bcryptjs'
import type { NextAuthOptions } from 'next-auth'
import { getServerSession } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { z } from 'zod'
import { prisma } from '@/lib/db'

const credentialsSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
})

export const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/login',
  },
  providers: [
    CredentialsProvider({
      name: 'Entrar',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Senha', type: 'password' },
      },
      async authorize(credentials) {
        const parsed = credentialsSchema.safeParse(credentials)

        if (!parsed.success) {
          return null
        }

        const email = parsed.data.email.toLowerCase().trim()
        const user = await prisma.user.findUnique({
          where: { email },
        })

        if (!user) {
          return null
        }

        const passwordMatches = await compare(parsed.data.password, user.passwordHash)

        if (!passwordMatches) {
          return null
        }

        return {
          id: user.id,
          email: user.email,
          name: user.name,
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.sub = user.id
        token.email = user.email
        token.name = user.name
      }

      return token
    },
    async session({ session, token }) {
      if (session.user && token.sub) {
        session.user.id = token.sub
        session.user.email = token.email ?? session.user.email ?? ''
        session.user.name = token.name ?? session.user.name ?? ''
      }

      return session
    },
  },
}

export async function getCurrentUser() {
  const session = await getServerSession(authOptions)

  return session?.user ?? null
}
