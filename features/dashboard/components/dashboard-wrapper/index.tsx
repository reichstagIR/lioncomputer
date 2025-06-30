// Component
import DashboardAside from "../dashboard-aside";
import DashboardHeader from "../dashboard-header";

interface IDashboardWrapperProperties {
    children: React.ReactNode;
}

export default function DashboardWrapper({
    children,
}: IDashboardWrapperProperties) {
    return (
        <div className="flex h-screen">
            <DashboardAside />
            <main className="w-full">
                <DashboardHeader />
                <div className="container h-[calc(100vh-57px)] space-y-7 overflow-y-auto px-15 py-10">
                    {children}
                </div>
            </main>
        </div>
    );
}
