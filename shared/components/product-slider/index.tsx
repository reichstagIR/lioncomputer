// Component
import ProductSliderTitle from "./product-slider-title";
import ProductSwiperSlider from "./product-swiper-slider";

interface IProductSliderProperties {
    title: string;
}

export default function ProductSlider({ title }: IProductSliderProperties) {
    return (
        <section className="main-container space-y-5 py-10">
            <ProductSliderTitle title={title} />
            <ProductSwiperSlider />
        </section>
    );
}
