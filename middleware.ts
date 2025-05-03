import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|signin|api/auth/.*).*)",
  ],
};

export function middleware(request: NextRequest) {
  // Retrieve session token from cookies (covering both dev and prod environments)
  const authSessionToken =
    request.cookies.get("authjs.session-token")?.value ||
    request.cookies.get("__Secure-authjs.session-token")?.value;

  const url = request.nextUrl;
  const protectedRoutes = ["/", "/dashboard", "/profile"]; // Adjust based on your app
  // Redirect to sign-in for protected routes if no session token
  if (
    !authSessionToken &&
    protectedRoutes.some((route) => url.pathname.startsWith(route))
  ) {
    const signInUrl = new URL("/signin", url);
    signInUrl.searchParams.set("callbackUrl", url.pathname);
    return NextResponse.redirect(signInUrl);
  }

  // Proceed with the request
  return NextResponse.next();
}