"use client";

// HeroUi
import { Avatar } from "@heroui/avatar";
import {
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem,
} from "@heroui/dropdown";
// Icon
import { Airplay, Menu, Settings, LogOut } from "lucide-react";
// Next Auth
import { signOut, useSession } from "next-auth/react";
// Next
import { useRouter } from "next/navigation";

const items = [
    {
        key: "settings",
        icon: <Settings />,
        text: "تنظیمات",
    },
    {
        key: "main-page",
        icon: <Airplay />,
        text: "صفحه اصلی",
    },
    {
        key: "logout",
        icon: <LogOut />,
        text: "خروج",
    },
];

export default function DashboardHeader() {
    const router = useRouter();

    const session = useSession();

    const name = session.data?.user?.name.slice(0, 3);

    const onPressHandler = (key: string) => {
        switch (key) {
            case "logout": {
                signOut({
                    redirectTo: process.env.NEXTAUTH_SIGNIN,
                });
                break;
            }
            case "main-page": {
                router.replace("/");
                break;
            }
            default: {
                break;
            }
        }
    };

    return (
        <header className="border-divider border-b">
            <div className="container flex items-center justify-between px-7 py-2">
                <Dropdown>
                    <DropdownTrigger>
                        <Avatar
                            className="cursor-pointer select-none"
                            name={name}
                            size="md"
                        />
                    </DropdownTrigger>
                    <DropdownMenu color="success" items={items}>
                        {(item) => (
                            <DropdownItem
                                key={item.key}
                                onPress={() => onPressHandler(item.key)}
                            >
                                <div className="flex items-center gap-2">
                                    {item.icon}
                                    {item.text}
                                </div>
                            </DropdownItem>
                        )}
                    </DropdownMenu>
                </Dropdown>
                <Menu className="cursor-pointer" />
            </div>
        </header>
    );
}
