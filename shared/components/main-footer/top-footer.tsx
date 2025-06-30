// Icon
import { Utensils } from "lucide-react";

export default function TopFooter() {
    return (
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
            <div className="flex flex-col items-start gap-5">
                <div className="flex items-center justify-center gap-4">
                    <div className="bg-success/10 flex items-center justify-center rounded-full p-2">
                        <Utensils className="text-green-700" size={15} />
                    </div>
                    <span className="text-[12px]">
                        <span className="font-semibold">دفتر مرکزی</span> -
                        تهران، خیابان حافظ، بالاتر از زرتشت، کوچه جاوید، پلاک ۲۴
                    </span>
                </div>
                <div className="flex items-center justify-center gap-4">
                    <div className="bg-success/10 flex items-center justify-center rounded-full p-2">
                        <Utensils className="text-green-700" size={15} />
                    </div>
                    <span className="text-[12px]">
                        <span className="font-semibold">دفتر مرکزی</span> -
                        تهران، خیابان حافظ، بالاتر از زرتشت، کوچه جاوید، پلاک ۲۴
                    </span>
                </div>
                <div className="flex items-center justify-center gap-4">
                    <div className="bg-success/10 flex items-center justify-center rounded-full p-2">
                        <Utensils className="text-green-700" size={15} />
                    </div>
                    <span className="text-[12px]">
                        <span className="font-semibold">کدپستی</span> -
                        1594843812
                    </span>
                </div>
            </div>
            <div className="flex flex-col items-start gap-5">
                <div className="flex items-center justify-center gap-4">
                    <div className="bg-success/10 flex items-center justify-center rounded-full p-2">
                        <Utensils className="text-green-700" size={15} />
                    </div>
                    <span className="text-[12px]">
                        <span className="font-semibold">تلفن مرکزی</span> -
                        91005666-021
                    </span>
                </div>
            </div>
        </div>
    );
}
