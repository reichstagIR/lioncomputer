"use client";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
// Style
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// Next
import Image from "next/image";

export default function HeroSlider() {
    return (
        <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination
            slidesPerView={1}
            spaceBetween={0}
        >
            <SwiperSlide>
                <Image
                    alt="slider-1"
                    className="h-full w-full object-cover"
                    height={0}
                    sizes="100vw"
                    src="/images/slider-1.webp"
                    width={0}
                />
            </SwiperSlide>
            <SwiperSlide>
                <Image
                    alt="slider-1"
                    className="h-full w-full object-cover"
                    height={0}
                    sizes="100vw"
                    src="/images/slider-1.webp"
                    width={0}
                />
            </SwiperSlide>
            <SwiperSlide>
                <Image
                    alt="slider-1"
                    className="h-full w-full object-cover"
                    height={0}
                    sizes="100vw"
                    src="/images/slider-1.webp"
                    width={0}
                />
            </SwiperSlide>
        </Swiper>
    );
}
