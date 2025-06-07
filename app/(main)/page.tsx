// Component
import Hero from "@/features/index/components/hero";
import ProductSlider from "@/components/product-slider";
import CategorySlider from "@/features/index/components/categories-slider";

export default function Page() {
    return (
        <main>
            <Hero />
            <ProductSlider title="تخفیفات" />
            <ProductSlider title="محصولات پیشنهادی" />
            <ProductSlider title="جدید ترین مادربرد ها" />
            <CategorySlider />
        </main>
    );
}
