// Component
import HeroSlider from "./hero-slider";
// Next
import Image from "next/image";

export default function Hero() {
    return (
        <div className="main-container">
            <div className="grid h-auto grid-cols-1 gap-4 py-4 lg:grid-cols-4">
                <div className="h-full overflow-hidden rounded-lg shadow lg:col-span-3">
                    <HeroSlider />
                </div>

                <div className="flex h-full flex-row gap-4 lg:flex-col">
                    <div className="h-full w-full rounded-lg shadow lg:h-1/2">
                        <Image
                            alt="banner-1"
                            className="h-full w-full rounded-lg object-cover"
                            height={0}
                            sizes="100vw"
                            src="/images/slider-2.webp"
                            width={0}
                        />
                    </div>
                    <div className="h-full w-full rounded-lg shadow lg:h-1/2">
                        <Image
                            alt="banner-2"
                            className="h-full w-full rounded-lg object-cover"
                            height={0}
                            sizes="100vw"
                            src="/images/slider-2.webp"
                            width={0}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
