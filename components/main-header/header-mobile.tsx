// Components
import { HeaderMobileLink, HeaderMobileMega } from "./header-components";
// Icons
import { Home, ShoppingCart, Search, User } from "lucide-react";

export default function HeaderMobile() {
    return (
        <div className="fixed right-0 bottom-0 left-0 flex z-30 justify-between gap-2 bg-white px-15 py-4 shadow shadow-gray-500 lg:hidden dark:bg-neutral-800">
            <HeaderMobileLink href="#" icon={<Home size={22} />} text="خانه" />
            <HeaderMobileMega text="دسته بندی" />
            <HeaderMobileLink
                href="#"
                icon={<ShoppingCart size={22} />}
                text="سبد خرید"
            />
            <HeaderMobileLink
                href="#"
                icon={<Search size={22} />}
                text="جستجو"
            />
            <HeaderMobileLink href="#" icon={<User size={22} />} text="ورود" />
        </div>
    );
}
