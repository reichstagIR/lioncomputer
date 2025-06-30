/* eslint-disable react/jsx-max-depth */
"use client";

// Next
import Link from "next/link";
// Theme
import { useTheme } from "next-themes";
// Icon
import { ChevronDown, Menu, Moon, Sun, X } from "lucide-react";
// React
import { useEffect, useState } from "react";
// HeroUI
import { Tabs, Tab } from "@heroui/tabs";
import { Card, CardBody } from "@heroui/card";
import { Accordion, AccordionItem } from "@heroui/accordion";

interface IHeaderDesktopLinkProperties {
    text: string;
    href: string;
    endIcon?: React.ReactNode;
}

interface IHeaderDesktopMegaProperties {
    text: string;
}

interface IHeaderMobileLinkProperties {
    text: string;
    icon: React.ReactNode;
    href: string;
}

interface IHeaderMobileMegaProperties {
    text: string;
}

const HeaderComponents = {
    HeaderDesktopLink: function ({
        text,
        endIcon,
        href = "#",
    }: IHeaderDesktopLinkProperties) {
        return (
            <div className="flex items-center gap-1 pb-3">
                <Link href={href}>{text}</Link>
                {endIcon ?? undefined}
            </div>
        );
    },

    HeaderSwitcher: function () {
        const { theme, setTheme } = useTheme();

        // Hydration fix for Next.js
        // This is to prevent the flicker of the theme on the first render
        const [mounted, setMounted] = useState(false);

        useEffect(() => {
            setMounted(true);
        }, []);

        if (!mounted) return;

        const icon =
            theme === "dark" ? (
                <Sun
                    className="text-yellow-500"
                    onClick={() => setTheme("light")}
                    size={20}
                />
            ) : (
                <Moon
                    className="text-gray-500 dark:text-white"
                    onClick={() => setTheme("dark")}
                    size={20}
                />
            );

        return <div className="pb-3">{icon}</div>;
    },

    HeaderDesktopMega: function ({ text }: IHeaderDesktopMegaProperties) {
        const [hover, setHover] = useState<boolean>(false);

        const mouseEnterHandler = () => {
            setHover(true);
        };

        const mouseLeaveHandler = () => {
            setHover(false);
        };

        return (
            <>
                <div
                    className="flex items-center gap-1 pb-3"
                    onMouseEnter={mouseEnterHandler}
                    onMouseLeave={mouseLeaveHandler}
                >
                    <span className="cursor-pointer">{text}</span>
                    <ChevronDown className="text-green-700" size={14} />
                    {hover ? (
                        <div className="absolute top-full z-30 flex">
                            <Tabs
                                classNames={{
                                    panel: "p-0 rounded-bl-lg overflow-hidden",
                                    tabList:
                                        "w-[190px] dark:bg-neutral-800 bg-cyan-50 px-5 py-5 rounded-br-lg overflow-hidden",
                                    base: "dark:bg-neutral-800 bg-cyan-50 rounded-br-lg",
                                    tabContent: "text-[13px]",
                                }}
                                isVertical
                                radius="lg"
                            >
                                <Tab key="menu-1" title="کیس و قطعات اصلی">
                                    <Card className="h-full" radius="none">
                                        <CardBody>
                                            <div className="grid auto-cols-max grid-flow-col gap-10 px-5 py-5">
                                                <div className="flex flex-col gap-4">
                                                    <span className="text-[14px] font-bold">
                                                        کیس و قطعات اصلی
                                                    </span>
                                                    <ul className="flex list-inside list-disc flex-col gap-2 text-right text-sm font-light marker:text-green-700">
                                                        <li>
                                                            <Link href="#">
                                                                کیس
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="#">
                                                                کیس
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="#">
                                                                کیس
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="#">
                                                                کیس
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="#">
                                                                کیس
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="flex flex-col gap-4">
                                                    <span className="text-[14px] font-bold">
                                                        کیس و قطعات اصلی
                                                    </span>
                                                    <ul className="flex list-inside list-disc flex-col gap-2 text-right text-sm font-light marker:text-green-700">
                                                        <li>
                                                            <Link href="#">
                                                                کیس
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="#">
                                                                کیس
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="#">
                                                                کیس
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="#">
                                                                کیس
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="#">
                                                                کیس
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="flex flex-col gap-4">
                                                    <span className="text-[14px] font-bold">
                                                        کیس و قطعات اصلی
                                                    </span>
                                                    <ul className="flex list-inside list-disc flex-col gap-2 text-right text-sm font-light marker:text-green-700">
                                                        <li>
                                                            <Link href="#">
                                                                کیس
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="#">
                                                                کیس
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="#">
                                                                کیس
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="#">
                                                                کیس
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="#">
                                                                کیس
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="flex flex-col gap-4">
                                                    <span className="text-[14px] font-bold">
                                                        کیس و قطعات اصلی
                                                    </span>
                                                    <ul className="flex list-inside list-disc flex-col gap-2 text-right text-sm font-light marker:text-green-700">
                                                        <li>
                                                            <Link href="#">
                                                                کیس
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="#">
                                                                کیس
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="#">
                                                                کیس
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="#">
                                                                کیس
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="#">
                                                                کیس
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="flex flex-col gap-4">
                                                    <span className="text-[14px] font-bold">
                                                        کیس و قطعات اصلی
                                                    </span>
                                                    <ul className="flex list-inside list-disc flex-col gap-2 text-right text-sm font-light marker:text-green-700">
                                                        <li>
                                                            <Link href="#">
                                                                کیس
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="#">
                                                                کیس
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="#">
                                                                کیس
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="#">
                                                                کیس
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="#">
                                                                کیس
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </CardBody>
                                    </Card>
                                </Tab>
                            </Tabs>
                        </div>
                    ) : undefined}
                </div>
                {hover ? (
                    <div className="fixed top-[125px] right-0 bottom-0 left-0 z-20 bg-black/40 backdrop-blur-md" />
                ) : undefined}
            </>
        );
    },

    HeaderMobileLink: function ({
        text,
        icon,
        href = "#",
    }: IHeaderMobileLinkProperties) {
        return (
            <Link
                className="flex flex-col items-center justify-center gap-2"
                href={href}
            >
                {icon}
                <span className="text-[12px]">{text}</span>
            </Link>
        );
    },

    HeaderMobileMega: function ({ text }: IHeaderMobileMegaProperties) {
        const [open, setOpen] = useState<boolean>(false);

        return (
            <>
                <div
                    className="flex flex-col items-center justify-center gap-2"
                    onClick={() => setOpen(true)}
                >
                    <Menu size={22} />
                    <span className="text-[12px]">{text}</span>
                </div>
                {open ? (
                    <div className="fixed z-50 inset-0 flex flex-col gap-4 bg-white px-4 py-6 dark:bg-neutral-800">
                        <div className="flex justify-between">
                            <span className="text-2xl font-bold text-green-700">
                                دسته بندی
                            </span>
                            <X
                                className="cursor-pointer"
                                onClick={() => setOpen(false)}
                            />
                        </div>
                        <Accordion selectionMode="multiple">
                            <AccordionItem
                                key="1"
                                title="کامپیوتر و قطعات شبکه"
                            >
                                <ul className="text-md list-inside list-disc space-y-2 px-6 py-1 marker:text-green-700">
                                    <li>
                                        <Link href="#">تجهزات شبکه</Link>
                                    </li>
                                    <li>
                                        <Link href="#">تجهزات اکتیو</Link>
                                    </li>
                                    <li>
                                        <Link href="#">قطعات کامپیوتر</Link>
                                    </li>
                                </ul>
                            </AccordionItem>
                            <AccordionItem
                                key="2"
                                title="کامپیوتر و قطعات شبکه"
                            >
                                <ul className="text-md list-inside list-disc space-y-2 px-6 py-1 marker:text-green-700">
                                    <li>
                                        <Link href="#">تجهزات شبکه</Link>
                                    </li>
                                    <li>
                                        <Link href="#">تجهزات اکتیو</Link>
                                    </li>
                                    <li>
                                        <Link href="#">قطعات کامپیوتر</Link>
                                    </li>
                                </ul>
                            </AccordionItem>
                            <AccordionItem
                                key="3"
                                title="کامپیوتر و قطعات شبکه"
                            >
                                <ul className="text-md list-inside list-disc space-y-2 px-6 py-1 marker:text-green-700">
                                    <li>
                                        <Link href="#">تجهزات شبکه</Link>
                                    </li>
                                    <li>
                                        <Link href="#">تجهزات اکتیو</Link>
                                    </li>
                                    <li>
                                        <Link href="#">قطعات کامپیوتر</Link>
                                    </li>
                                </ul>
                            </AccordionItem>
                        </Accordion>
                    </div>
                ) : undefined}
            </>
        );
    },
};

const {
    HeaderDesktopLink,
    HeaderSwitcher,
    HeaderDesktopMega,
    HeaderMobileLink,
    HeaderMobileMega,
} = HeaderComponents;

export {
    HeaderDesktopLink,
    HeaderSwitcher,
    HeaderDesktopMega,
    HeaderMobileMega,
    HeaderMobileLink,
};
