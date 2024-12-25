import { NextRequest, NextResponse } from "next/server";
import getSession from "./libs/session";

const publicPath = new Set(["/", "/log-in", "/create-account"]);

export default async function middleware(request: NextRequest) {
  const session = await getSession();
  const requestPathname = request.nextUrl.pathname;
  if (!session.id && !publicPath.has(requestPathname)) {
    return NextResponse.redirect(new URL("/", request.url));
  }
  if (session.id && publicPath.has(requestPathname)) {
    return NextResponse.redirect(new URL("/profile", request.url));
  }
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
