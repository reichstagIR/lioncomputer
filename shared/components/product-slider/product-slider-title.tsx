// Next
import Link from "next/link";
// Icon
import { ChevronLeft } from "lucide-react";

interface IProductSliderTitleProperties {
    title: string;
}

export default function ProductSliderTitle({
    title,
}: IProductSliderTitleProperties) {
    return (
        <div className="flex justify-between">
            <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-green-600" />
                <h3 className="text-md font-semibold text-green-700 md:text-lg lg:text-xl">
                    {title}
                </h3>
            </div>

            <Link className="flex items-center gap-2 text-green-700" href="#">
                <span className="text-sm">مشاهده همه</span>
                <ChevronLeft />
            </Link>
        </div>
    );
}
