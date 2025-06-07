// Next Auth
import { auth } from "@/auth";
// Next
import { NextResponse } from "next/server";

export default auth((request) => {
    const isLoggedIn = !!request.auth;

    const isDashboardRoute = request.nextUrl.pathname.startsWith("/dashboard");
    const isAuthenticationRoute = request.nextUrl.pathname.startsWith("/auth");

    if (isDashboardRoute && !isLoggedIn) {
        const loginUrl = new URL(process.env.NEXTAUTH_SIGNOUT, request.url);
        return NextResponse.redirect(loginUrl);
    }

    if (isAuthenticationRoute && isLoggedIn) {
        const dashboardUrl = new URL(process.env.NEXTAUTH_SIGNIN, request.url);
        return NextResponse.redirect(dashboardUrl);
    }

    return NextResponse.next();
});

export const config = {
    matcher: [
        "/((?!_next|[^?]*\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
        "/(api|trpc)(.*)",
    ],
};
