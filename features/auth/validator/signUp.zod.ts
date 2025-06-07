/* eslint-disable unicorn/filename-case */
// Zod
import zod from "zod";
// Messages
import * as messages from "@/messages/zod.message.json";

export const signUpZodSchema = zod.object({
    name: zod.string().min(1, messages.required.message),
    email: zod.string().email(messages.invalid_type.message),
    password: zod
        .string()
        .regex(
            new RegExp(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!#$%&*@^])(?=.{8,})/
            ),
            messages.invalid_type.message
        ),
});

export type signUpZodType = zod.infer<typeof signUpZodSchema>;
