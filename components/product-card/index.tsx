// HeroUi
import { Card, CardHeader, CardBody } from "@heroui/card";
import { Image } from "@heroui/image";
// Icon
import { ShoppingBasket } from "lucide-react";
// Next
import Link from "next/link";

interface IProductCardProperty {
    href: string;
    title: string;
    price: number;
    imageSrc: string;
    discountPer?: number;
}

export default function ProductCard({
    discountPer = 0,
    href,
    price,
    title,
    imageSrc,
}: IProductCardProperty) {
    const discountPrice = price - (price * discountPer) / 100;

    return (
        <Card as={Link} className="relative m-2 py-2" href={href}>
            {discountPer ? (
                <div className="absolute top-2 left-2 z-30 rounded-2xl bg-red-400 px-[10px] py-[2px]">
                    <span className="text-[13px] text-white">
                        {discountPer}%
                    </span>
                </div>
            ) : undefined}
            <CardHeader className="flex-col items-center px-4 pt-2 pb-0">
                <Image
                    alt="Card background"
                    className="rounded-xl object-cover"
                    src={imageSrc}
                    width={270}
                />
            </CardHeader>
            <CardBody className="gap-6 overflow-visible py-3 text-right">
                <h4 className="h-20 text-[15px] font-bold text-gray-600 dark:text-gray-200">
                    {title}
                </h4>
                <div className="flex items-center justify-between text-left">
                    <div className="bg-success/10 flex cursor-pointer items-center justify-center rounded-full p-3">
                        <ShoppingBasket className="text-green-700" size={17} />
                    </div>
                    <div className="flex flex-col text-gray-500">
                        {discountPer ? (
                            <>
                                <del className="text-sm font-bold">
                                    {price.toLocaleString()} تومان
                                </del>
                                <span className="mt-1 text-sm font-bold text-green-700">
                                    {discountPrice.toLocaleString()}
                                    تومان
                                </span>
                            </>
                        ) : (
                            <span className="text-sm font-bold text-green-700">
                                {price.toLocaleString()} تومان
                            </span>
                        )}
                    </div>
                </div>
            </CardBody>
        </Card>
    );
}
