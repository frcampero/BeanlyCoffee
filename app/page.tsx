import BannerDiscount from "@/components/banner-discount";
import BannerProducts from "@/components/banner-product";
import CarouselTextBanner from "@/components/carousel-text-banner";
import ChooseCategory from "@/components/choose-category";
import FeaturedProducts from "@/components/featured-products";


export default function Home() {
  return (
    <main>
        <CarouselTextBanner/>
        <FeaturedProducts/>
        <BannerDiscount/>
        <ChooseCategory/>
        <BannerProducts/>
    </main>
  );
}
