import { NextResponse, NextRequest, NextFetchEvent } from "next/server";

export function middleware(req: NextRequest, ev: NextFetchEvent) {
  const { pathname } = req.nextUrl;
  if (pathname == "/") {
    return NextResponse.redirect("/home");
  }
  return NextResponse.next();
}
