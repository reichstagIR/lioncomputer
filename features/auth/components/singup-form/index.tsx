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
// React hook form
import { useForm } from "react-hook-form";
// Zod
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpZodSchema, signUpZodType } from "../../validator/signUp.zod";
// DAL
import { signUpUser } from "@/data/auth.data";
// React
import { useTransition } from "react";

export default function SingUpForm() {
    const dispatch = useAppDispatch();

    const [isPending, startTransition] = useTransition();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<signUpZodType>({
        resolver: zodResolver(signUpZodSchema),
        defaultValues: {
            email: "",
            password: "",
            name: "",
        },
    });

    const clickHandler = () => {
        dispatch(setAuthForm({ value: EAuthFormCode.SING_IN }));
    };

    const submitHandler = (data: signUpZodType) => {
        startTransition(async () => {
            const response = await signUpUser(data);

            if (response.success) {
                addToast({
                    description: response.message,
                    color: "success",
                });
                dispatch(setAuthForm({ value: EAuthFormCode.SING_IN }));
            } else {
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
                {...register("name")}
                label="نام"
                name="name"
                validate={() => errors.name?.message}
            />
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
                description="حداقل 8 کاراکتر و ترکیبی از عدد و حرف باشد."
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
                ثبت نام
            </Button>
            <Divider />
            <p className="text-default-500 text-center text-sm">
                حسابی دارید؟{" "}
                <span className="cursor-pointer" onClick={clickHandler}>
                    وارد
                </span>{" "}
                شوید.
            </p>
        </form>
    );
}
