export function sanitizeNextPath(pathname?: string | null) {
  if (!pathname || !pathname.startsWith('/')) {
    return '/prova-marinha'
  }

  if (pathname.startsWith('//')) {
    return '/prova-marinha'
  }

  return pathname
}
