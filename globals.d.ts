// eslint-disable-next-line @typescript-eslint/no-unused-vars
import NextAuth from "next-auth";
// Prisma
import { Role } from "./app/generated/prisma";

declare module "next-auth" {
    interface User {
        name: string;
        email: string;
        password: string | null;
        id: string;
        role: Role;
    }
}
