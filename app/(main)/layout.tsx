// Components
import MainHeader from "@/components/main-header";
import MainFooter from "@/components/main-footer";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <MainHeader />
            {children}
            <MainFooter />
        </>
    );
}
