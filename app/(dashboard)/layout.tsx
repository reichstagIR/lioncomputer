// Next Auth
import { Metadata } from "next";
// Component
import DashboardWrapper from "@/features/dashboard/components/dashboard-wrapper";

interface ILayoutProperties {
    children: React.ReactNode;
}

export const metadata: Metadata = {
    title: {
        template: "%s | داشبور لیون کامپیوتر",
        default: " داشبور لیون کامپیوتر",
    },
};

export default async function Layout({ children }: ILayoutProperties) {
    return <DashboardWrapper>{children}</DashboardWrapper>;
}
