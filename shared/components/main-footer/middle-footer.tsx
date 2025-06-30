import Link from "next/link";

export default function MiddleFooter() {
    return (
        <ul className="flex flex-col justify-between gap-3 text-center sm:flex-row">
            <li className="text-[13px] font-semibold">
                <Link href="/">سوالات متداول</Link>
            </li>
            <li className="text-[13px] font-semibold">
                <Link href="/">سوالات متداول</Link>
            </li>
            <li className="text-[13px] font-semibold">
                <Link href="/">سوالات متداول</Link>
            </li>
            <li className="text-[13px] font-semibold">
                <Link href="/">راهنمای خرید و مقررات</Link>
            </li>
            <li className="text-[13px] font-semibold">
                <Link href="/">سوالات متداول</Link>
            </li>
            <li className="text-[13px] font-semibold">
                <Link href="/">سوالات متداول</Link>
            </li>
            <li className="text-[13px] font-semibold">
                <Link href="/">سوالات متداول</Link>
            </li>
            <li className="text-[13px] font-semibold">
                <Link href="/">سوالات متداول</Link>
            </li>
        </ul>
    );
}
