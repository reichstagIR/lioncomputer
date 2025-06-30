"use server";

/* eslint-disable unicorn/no-null */
// Zod
import {
    signUpZodType,
    signUpZodSchema,
} from "@/features/auth/validator/signUp.zod";
import { ZodError } from "zod";
import { signInZodSchema } from "@/features/auth/validator/signIn.zod";
// Prisma
import { prisma } from "@/prisma";
// Message
import * as zodMessage from "@/messages/zod.message.json";
import * as authMessage from "@/messages/auth.message.json";
// BCrypt
import bcrypt from "bcryptjs";

export async function signUpUser(credentials: signUpZodType) {
    try {
        const { email, name, password } = signUpZodSchema.parse(credentials);

        const isExist = await prisma.user.findFirst({ where: { email } });

        if (isExist)
            return {
                success: false,
                message: authMessage.account_exist.message,
            };

        const hashedPassword = await bcrypt.hash(password, 10);
        await prisma.user.create({
            data: {
                email,
                name,
                password: hashedPassword,
            },
        });

        return { success: true, message: authMessage.signup_success.message };
    } catch (error) {
        if (error instanceof ZodError) {
            return { success: false, message: zodMessage.invalid_type.message };
        }

        return { success: false, message: authMessage.problem.message };
    }
}

export async function signInUser(credentials: unknown) {
    try {
        const { email, password } = signInZodSchema.parse(credentials);

        const user = await prisma.user.findFirst({
            where: {
                email,
            },
        });

        if (!user || !user?.password) {
            return null;
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password);

        if (!isPasswordCorrect) {
            return null;
        }

        return user;
    } catch {
        return null;
    }
}
