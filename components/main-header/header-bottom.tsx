// Components
import {
    HeaderDesktopLink,
    HeaderSwitcher,
    HeaderDesktopMega,
} from "./header-components";
// Icon
import { Ellipsis } from "lucide-react";

export default function HeaderBottom() {
    return (
        <div className="relative hidden items-center justify-between pt-8 lg:flex">
            <ul className="flex items-center gap-6 text-sm font-bold text-gray-500 dark:text-white">
                <li>
                    <HeaderDesktopMega text="دسته بندی" />
                </li>
                <li>
                    <HeaderDesktopLink href="#" text="راهنمای خرید" />
                </li>
                <li>
                    <HeaderDesktopLink href="#" text="درباره ما" />
                </li>
                <li>
                    <HeaderDesktopLink href="#" text="سوالات متداول" />
                </li>
                <li>
                    <HeaderDesktopLink href="#" text="شرایط گارانتی" />
                </li>
                <li>
                    <HeaderDesktopLink
                        endIcon={
                            <Ellipsis className="text-green-700" size={14} />
                        }
                        href="#"
                        text="سایر"
                    />
                </li>
            </ul>
            <HeaderSwitcher />
        </div>
    );
}
