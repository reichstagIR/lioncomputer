// Next
import Link from "next/link";

interface ICategoryProperties {
    title: string;
    icon: React.ReactNode;
    href: string;
}

export default function Category({ icon, title, href }: ICategoryProperties) {
    return (
        <Link
            className="flex w-full min-w-[200px] flex-col items-center justify-center gap-4 py-2 text-center"
            href={href}
        >
            {icon}
            <h3 className="text-sm">{title}</h3>
        </Link>
    );
}
