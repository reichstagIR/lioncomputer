"use client";

// Component
import CardWrapper from "@/features/auth/components/card-wrapper";
// Forms
import LoginForm from "@/features/auth/components/signin-form";
import SingUpForm from "@/features/auth/components/singup-form";
// Redux
import { useAppSelector } from "@/redux/hooks";
// Enum
import EAuthFormCode from "@/features/auth/enum/formCode.enum";

export default function Page() {
    const state = useAppSelector((state) => state.authForm.value);

    let form;

    switch (state) {
        case EAuthFormCode.SING_IN: {
            form = <LoginForm />;
            break;
        }
        case EAuthFormCode.SIGN_UP: {
            form = <SingUpForm />;
            break;
        }
        default: {
            form = <LoginForm />;
        }
    }

    return <CardWrapper>{form}</CardWrapper>;
}
