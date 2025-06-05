import { useRouter } from "next/navigation";
import { formatPrice } from "@/lib/formatPrice";
import { ProductType } from "@/types/product";
import { Button } from "@/components/ui/button";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useCart } from "@/hooks/use-cart";

type ProductCardProps = {
  product: ProductType;
};

const ProductCard = ({ product }: ProductCardProps) => {
  const router = useRouter();
  const { addItem } = useCart();
  return (
    <div
      className="
        w-full 
        max-w-xs sm:max-w-sm md:max-w-md 
        mx-auto 
        border 
        bg-white 
        p-4 
        shadow-sm 
        transition 
        hover:shadow-md 
        hover:scale-[1.015] 
        hover:-translate-y-1 
        duration-300 
        ease-in-out 
        flex flex-col
        cursor-pointer
      "
      onClick={() => router.push(`/product/${product.slug}`)}
    >
      {/* Carousel */}
      <div className="relative overflow-hidden aspect-[3/4]">
        <Carousel opts={{ align: "start" }} className="w-full h-full">
          <CarouselContent>
            {Array.isArray(product.images) &&
              product.images.map((image) => (
                <CarouselItem key={image.id} className="w-full h-full">
                  <img
                    src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${image.url}`}
                    alt="Product Image"
                    className="w-full h-full object-cover"
                  />
                </CarouselItem>
              ))}
          </CarouselContent>
        </Carousel>
      </div>

      {/* labels */}
      <div className="flex justify-center gap-2 px-4 sm:px-6">
        <span className="bg-[#d7c1ad] text-white text-xs px-2 py-1">
          {product.taste}
        </span>
        <span className="bg-[#d7c1ad] text-white text-xs px-2 py-1">
          {product.origin}
        </span>
      </div>

      {/* Product name & Price */}
      <div className="text-center mt-4 px-4 sm:px-6">
        <p className="text-base sm:text-lg font-semibold hover:underline">
          {product.productName}
        </p>
        <p className="text-sm font-bold text-gray-800">
          {formatPrice(product.price)}
        </p>
      </div>

      {/* Button add cart */}
      <div className="mt-4 px-4 sm:px-6 w-full">
        <Button
          onClick={(e) => {
            e.stopPropagation();
            addItem(product);
          }}
          className="w-full cursor-pointer rounded-none bg-[#d7c1ad] text-white hover:bg-[#c3ac98] flex flex-col items-center justify-center gap-1 px-4 py-2 text-sm font-medium text-center"
        >
          Add to cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
