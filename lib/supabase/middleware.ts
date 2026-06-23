import { NextResponse, type NextRequest } from 'next/server'
import { createSupabaseServerClient } from './server-client'

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({ request })

  const supabase = await createSupabaseServerClient();

  const { data: { user } } = await supabase.auth.getUser()

  const protectedPaths = ['/profile', '/profile/recipes', '/profile/recipes/add', '/profile/recipes/edit',, "/profile/edit", "/profile/password"]
  const isProtected = protectedPaths.some((p) =>
    request.nextUrl.pathname.startsWith(p)
  )

  if (isProtected && !user) {
    const url = request.nextUrl.clone()
    url.pathname = '/login'
    return NextResponse.redirect(url)
  }

  return supabaseResponse
}