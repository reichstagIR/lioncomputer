/* eslint-disable unicorn/no-null */
// Prisma
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/prisma";
// Next Auth
import Credentials from "next-auth/providers/credentials";
import NextAuth from "next-auth";
// DAL
import { signInUser } from "./shared/dal/user.dal";

export const { handlers, signIn, signOut, auth } = NextAuth({
    adapter: PrismaAdapter(prisma),
    session: {
        strategy: "jwt",
    },
    providers: [
        Credentials({
            authorize: async (credentials) => {
                try {
                    const user = await signInUser({
                        ...credentials,
                    });

                    return user ?? null;
                } catch {
                    return null;
                }
            },
        }),
    ],
    callbacks: {
        async signIn() {
            return true;
        },
        async session({ session }) {
            return session;
        },
        async jwt({ token }) {
            return token;
        },
    },
});
