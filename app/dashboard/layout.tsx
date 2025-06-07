"use server";

// Next Auth
import { auth } from "@/auth";

interface ILayoutProperties {
    admin: React.ReactNode;
    user: React.ReactNode;
}

export default async function Layout({ user, admin }: ILayoutProperties) {
    const session = await auth();

    return session?.user?.role === "USER" ? user : admin;
}
