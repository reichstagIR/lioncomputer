"use server";

// Zod
import {
    signInZodType,
} from "@/features/auth/validator/signIn.zod";
// Message
import * as authMessage from "@/messages/auth.message.json";
// Next Auth
import { signIn } from "@/auth";
import { AuthError } from "next-auth";
// Next
import { isRedirectError } from "next/dist/client/components/redirect-error";

export default async function signInAction(credentials: signInZodType) {
    try {
        await signIn("credentials", {
            ...credentials,
            redirectTo: process.env.NEXTAUTH_SIGNIN,
        });

        return {
            success: true,
            message: authMessage.signin_success.message,
        };
    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case "CredentialsSignin": {
                    return {
                        success: false,
                        message: authMessage.credentials_problem.message,
                    };
                }

                default: {
                    return {
                        success: false,
                        message: authMessage.problem.message,
                    };
                }
            }
        }

        // Prevent redirect crashing
        if (isRedirectError(error)) throw error;

        return {
            success: false,
            message: authMessage.problem.message,
        };
    }
}
