"use server";

// Prisma
import { prisma } from "@/prisma";
// Next Auth
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export async function getMenus() {
    const session = await auth();

    if (session) {
        const menus = await prisma.menu.findMany();
        return menus;
    } else {
        redirect(process.env.NEXTAUTH_SIGNOUT);
    }
}
