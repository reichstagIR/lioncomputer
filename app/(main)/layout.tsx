// Components
import MainHeader from "@/shared/components/main-header";
import MainFooter from "@/shared/components/main-footer";
// Next
import { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        template:
            "%s | لیون کامپیوتر | قیمت و خرید کامپیوتر و سیستم اسمبل شده لیون کامپیوتر",
        default:
            "لیون کامپیوتر | قیمت و خرید کامپیوتر و سیستم اسمبل شده لیون کامپیوتر",
    },
    description: "وبسایت رسمی لیون کامپیوتر - خرید و فورش سیستم و قطعات پی سی",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <MainHeader />
            <main>{children}</main>
            <MainFooter />
        </>
    );
}
