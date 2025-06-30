// HeroUI
import { Input } from "@heroui/input";
// Icon
import { Search, ShoppingCart, User } from "lucide-react";
// Next
import Image from "next/image";
import Link from "next/link";

export default function HeaderTop() {
    return (
        <div className="flex items-center justify-between gap-4 pb-4 lg:pb-0">
            <Image alt="logo" height={99} src="/images/logo.svg" width={180} />
            <div className="hidden max-w-2/5 flex-1 lg:block">
                <Input
                    className="w-full"
                    endContent={<Search />}
                    placeholder="جستوجو کنید..."
                    type="search"
                />
            </div>
            <div className="flex items-center gap-4">
                <div className="flex flex-col gap-1">
                    <span className="text-[12px] text-gray-500">
                        با ما تماس بگیرید
                    </span>
                    <a
                        className="text-sm text-[11px] font-bold"
                        href="tel:0912345678"
                    >
                        091-1234-5678
                    </a>
                </div>
                <div className="bg-success/10 flex items-center justify-center rounded-full p-3">
                    <ShoppingCart className="text-green-700" size={17} />
                </div>
                <Link className="bg-success/10 flex items-center justify-center rounded-full p-3" href="/auth">
                    <User className="text-green-700" size={17} />
                </Link>
            </div>
        </div>
    );
}
