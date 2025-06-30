// Font
import { vazirmatn } from "./fonts/font";
// Style
import "./globals.css";
// Provider
import Provider from "./providers";
// HeroUI
import { ToastProvider } from "@heroui/toast";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fa-IR">
            <body
                className={`${vazirmatn.variable} antialiased`}
                suppressHydrationWarning
            >
                <Provider>
                    <ToastProvider />
                    {children}
                </Provider>
            </body>
        </html>
    );
}
