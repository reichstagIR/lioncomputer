// Next
import Link from "next/link";

interface IAsideLinkProperties {
    icon: React.ReactNode;
    children: React.ReactNode;
    href: string;
}

export default function AsideLink({
    icon,
    children,
    href,
}: IAsideLinkProperties) {
    return (
        <Link
            className="hover:bg-success flex gap-3 rounded-lg py-4 pr-2"
            href={href}
        >
            {icon}
            {children}
        </Link>
    );
}
