"use client";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
// Style
import "swiper/css/navigation";
// Component
import ProductCard from "../product-card";

export default function ProductSwiperSlider() {
    return (
        <Swiper
            breakpoints={{
                422: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 3,
                },
                1024: {
                    slidesPerView: 4,
                },
                1280: {
                    slidesPerView: 5,
                },
            }}
            modules={[Navigation]}
            navigation
            slidesPerView={1}
            spaceBetween={20}
        >
            <SwiperSlide>
                <ProductCard
                    href="#"
                    imageSrc="/images/product-1.webp"
                    price={933_282}
                    title="مادربرد عباس  وبعزار"
                />
            </SwiperSlide>
            <SwiperSlide>
                <ProductCard
                    discountPer={4}
                    href="#"
                    imageSrc="/images/product-1.webp"
                    price={933_282}
                    title="مادربرد عباس  وبعزار"
                />
            </SwiperSlide>
            <SwiperSlide>
                <ProductCard
                    discountPer={4}
                    href="#"
                    imageSrc="/images/product-1.webp"
                    price={933_282}
                    title="مادربرد عباس  وبعزار"
                />
            </SwiperSlide>
            <SwiperSlide>
                <ProductCard
                    discountPer={4}
                    href="#"
                    imageSrc="/images/product-1.webp"
                    price={933_282}
                    title="مادربرد عباس  وبعزار"
                />
            </SwiperSlide>
            <SwiperSlide>
                <ProductCard
                    href="#"
                    imageSrc="/images/product-1.webp"
                    price={933_282}
                    title="مادربرد عباس  وبعزار"
                />
            </SwiperSlide>
            <SwiperSlide>
                <ProductCard
                    href="#"
                    imageSrc="/images/product-1.webp"
                    price={933_282}
                    title="مادربرد عباس  وبعزار"
                />
            </SwiperSlide>
        </Swiper>
    );
}
