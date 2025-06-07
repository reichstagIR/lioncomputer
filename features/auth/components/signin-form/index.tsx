"use client";

// HeroUi
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";
import { Divider } from "@heroui/divider";
import { addToast } from "@heroui/toast";
// Redux
import { useAppDispatch } from "@/redux/hooks";
// Reducer
import { setAuthForm } from "../../redux/auth.reducer";
// Enum
import EAuthFormCode from "../../enum/formCode.enum";
// React Hook Form
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
// Zod
import { signInZodSchema, signInZodType } from "../../validator/signIn.zod";
// DAL
import { signInAction } from "@/data/auth.data";
// React
import { useTransition } from "react";

export default function SignInForm() {
    const dispatch = useAppDispatch();

    const [isPending, startTransition] = useTransition();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<signInZodType>({
        resolver: zodResolver(signInZodSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const clickHandler = () => {
        dispatch(setAuthForm({ value: EAuthFormCode.SIGN_UP }));
    };

    const submitHandler = (data: signInZodType) => {
        startTransition(async () => {
            const response = await signInAction(data);

            if (!response.success) {
                addToast({
                    title: "خطا",
                    description: response.message,
                    color: "danger",
                });
            }
        });
    };

    return (
        <form
            className="mt-4 space-y-6 text-right"
            onSubmit={handleSubmit(submitHandler)}
        >
            <Input
                {...register("email")}
                label="ایمیل"
                name="email"
                placeholder="مثال alibabayi@gmail.com"
                type="email"
                validate={() => errors.email?.message}
            />
            <Input
                {...register("password")}
                autoComplete="off"
                label="رمز عبور"
                name="password"
                type="password"
                validate={() => errors.password?.message}
            />
            <Button
                className="w-full"
                color="success"
                disabled={isPending}
                type="submit"
            >
                ورود
            </Button>
            <Divider />
            <p className="text-default-500 text-center text-sm">
                حسابی ندارید؟{" "}
                <span className="cursor-pointer" onClick={clickHandler}>
                    ثبت نام
                </span>{" "}
                کنید.
            </p>
        </form>
    );
}
