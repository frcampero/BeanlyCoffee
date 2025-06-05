"use client";
import { useRouter } from "next/navigation";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { Card, CardContent } from "./ui/card";
import Autoplay from "embla-carousel-autoplay";

export const dataCarouselTop = [
  {
    id: 1,
    title: "Shipping in 24/48 hours",
    description:
      "As a VIP customer, we deliver within 24/48 hours. Learn more and contact us.",
    link: "#!",
  },
  {
    id: 2,
    title: "Get up to 25% off on purchases over $75,000",
    description:
      "20% off when you spend $75,000 or 25% off when you spend $90,000. Use code SPEND",
    link: "#!",
  },
  {
    id: 3,
    title: "Free returns and deliveries.",
    description: "Free shipping and returns nationwide.",
    link: "#!",
  },
  {
    id: 4,
    title: "News",
    description: "You'll find the latest flavors and the best coffee at Beanly.",
    link: "#!",
  },
];

const CarouselTextBanner = () => {
  const router = useRouter();
  return (
    <div className="bg-[#EBDACB] dark:bg-primary">
      <Carousel 
      className="w-full max-w-4xl mx-auto"
      plugins = {[
        Autoplay({
          delay:2500
        })
      ]}
      >
        <CarouselContent>
        {dataCarouselTop.map(({ id, title, link, description }) => (
          <CarouselItem
            key={id}
            onClick={() => router.push(link)}
            className="cursor-pointer"
          >
            <div>
              <Card className="shadow-none border-none bg-transparent">
                <CardContent className="flex flex-col justify-center p-2 items-center text-center">
                  <p className="sm:text-lg text-wrap dark:text-secondary">
                    {title}
                  </p>
                  <p className="text-xs sm:text-sm text-wrap dark:text-secondary">{description}</p>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default CarouselTextBanner;
