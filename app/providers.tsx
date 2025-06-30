"use client";

// Hero
import { HeroUIProvider } from "@heroui/react";
// Theme
import { ThemeProvider as NextThemesProvider } from "next-themes";
// React
import { useState, useEffect } from "react";
// Redux
import { Provider as ReduxProvider } from "react-redux";
// Store
import { store } from "@/shared/redux/store.redux";
// Next Auth
import { SessionProvider } from "next-auth/react";

interface IProviderProperties {
    children: React.ReactNode;
}

export default function Provider({ children }: IProviderProperties) {
    //Hydration fix for Next.js
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return;
    }

    return (
        <SessionProvider>
            <HeroUIProvider>
                <ReduxProvider store={store}>
                    <NextThemesProvider
                        attribute="class"
                        defaultTheme="system"
                        enableSystem
                    >
                        {children}
                    </NextThemesProvider>
                </ReduxProvider>
            </HeroUIProvider>
        </SessionProvider>
    );
}
