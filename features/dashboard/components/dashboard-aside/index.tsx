"use client";

// HeroUI
import { Accordion, AccordionItem } from "@heroui/accordion";
// Icon
import { SatelliteDishIcon } from "lucide-react";
// Components
import AsideLink from "./aside-link";
import Image from "next/image";

export default function DashboardAside() {
    return (
        <aside className="border-divider w-[350px] border-l">
            <div className="py-6 pb-10">
                <Image
                    alt="logo"
                    className="mx-auto"
                    height={50}
                    src="/images/logo.svg"
                    width={200}
                />
            </div>

            <div className="space-y-3 px-2">
                <AsideLink href="/" icon={<SatelliteDishIcon />}>
                    مدیریت منو
                </AsideLink>
                <Accordion
                    className="px-0"
                    hideIndicator
                    selectionMode="multiple"
                    showDivider={false}
                >
                    <AccordionItem
                        classNames={{
                            base: "bg-primary rounded-lg",
                            heading: "rounded-lg pr-2 rounded-lg",
                            content: "py-0",
                        }}
                        key="2"
                        startContent={<SatelliteDishIcon />}
                        title="مدیریت محصولات"
                    >
                        <AsideLink href="/" icon={<SatelliteDishIcon />}>
                            مدیریت منو
                        </AsideLink>
                        <AsideLink href="/" icon={<SatelliteDishIcon />}>
                            مدیریت منو
                        </AsideLink>
                        <AsideLink href="/" icon={<SatelliteDishIcon />}>
                            مدیریت منو
                        </AsideLink>
                        <AsideLink href="/" icon={<SatelliteDishIcon />}>
                            مدیریت منو
                        </AsideLink>
                        <AsideLink href="/" icon={<SatelliteDishIcon />}>
                            مدیریت منو
                        </AsideLink>
                    </AccordionItem>
                </Accordion>
            </div>
        </aside>
    );
}
