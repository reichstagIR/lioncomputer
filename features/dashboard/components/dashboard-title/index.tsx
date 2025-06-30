"use client";

// NextUI
import { Breadcrumbs, BreadcrumbItem } from "@heroui/breadcrumbs";

export type TBreadcrumbs = {
    text: string;
    href: string;
};

interface IDashboardTitleProperties {
    children: React.ReactNode;
    breadcrumbs: TBreadcrumbs[];
}

export default function DashboardTitle({
    children,
    breadcrumbs,
}: IDashboardTitleProperties) {
    return (
        <div className="flex flex-col gap-3">
            <Breadcrumbs>
                <BreadcrumbItem href="/dashboard">خانه</BreadcrumbItem>
                {breadcrumbs.map((breadcrumb) => (
                    <BreadcrumbItem
                        href={breadcrumb.href}
                        key={breadcrumb.href}
                    >
                        {breadcrumb.text}
                    </BreadcrumbItem>
                ))}
            </Breadcrumbs>
            <p className="text-3xl font-bold">{children}</p>
        </div>
    );
}
