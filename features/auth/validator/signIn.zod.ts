/* eslint-disable unicorn/filename-case */
// Zod
import zod from "zod";
// Messages
import * as messages from "@/messages/zod.message.json";

export const signInZodSchema = zod.object({
    email: zod.string().email(messages.invalid_type.message),
    password: zod.string().min(1, messages.required.message),
});

export type signInZodType = zod.infer<typeof signInZodSchema>;
