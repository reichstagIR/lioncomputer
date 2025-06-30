// Component
import DashboardTitle, {
    TBreadcrumbs,
} from "@/features/dashboard/components/dashboard-title";
import MenuManagementTable from "@/features/dashboard/components/menu-management-table";
// Next
import { Metadata } from "next";
// Dal
import { getMenus } from "@/shared/dal/menu.dal";

const breadcrumbs: TBreadcrumbs[] = [
    {
        href: "/dashboard/menu-management",
        text: "مدیریت منو",
    },
];

export const metadata: Metadata = {
    title: "مدیریت منو",
};

export default async function Page() {
    const menus = await getMenus();

    return (
        <>
            <DashboardTitle breadcrumbs={breadcrumbs}>
                مدیریت منو
            </DashboardTitle>
            <MenuManagementTable menus={menus} />
        </>
    );
}
