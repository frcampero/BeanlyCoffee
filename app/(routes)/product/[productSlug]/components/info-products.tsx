"use client";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { formatPrice } from "@/lib/formatPrice";
import { ProductType } from "@/types/product";
import { Heart } from "lucide-react";
import { useCart } from "@/hooks/use-cart";
import { useLovedProducts } from "@/hooks/use-loved-product";

export type InfoProductProps = {
  product: ProductType;
};

const InfoProduct = ({ product }: InfoProductProps) => {
  const { addItem } = useCart();
  const { addLovedItem, removeLovedItem, lovedItems } = useLovedProducts();

  const liked = lovedItems.some((item) => item.id === product.id);

  const handleToggleLike = () => {
    if (liked) {
      removeLovedItem(product.id);
    } else {
      addLovedItem(product);
    }
  };

  return (
    <div className="px-6">
      <div className="justify-between mb-3 sm:flex">
        <h1 className="text-2xl mt-1">{product.productName}</h1>
        <div className="flex items-center justify-between gap-3 mt-1">
          <p className="px-2 py-1 text-xs text-white bg-[#d7c1ad]">
            {product.taste}
          </p>
          <p className="px-2 py-1 text-xs text-white bg-[#d7c1ad]">
            {product.origin}
          </p>
        </div>
      </div>

      <Separator className="my-4" />
      <p>{product.description}</p>
      <Separator className="my-4" />
      <p className="my-4 text-2xl">{formatPrice(product.price)}</p>

      <div className="flex items-center gap-3 mt-4">
        <Button
          className="flex-1 bg-[#bea994] text-white cursor-pointer"
          onClick={() => addItem(product)}
        >
          Buy
        </Button>

        <div className="w-10 h-10 flex items-center justify-center">
          <Heart
            className={`w-6 h-6 cursor-pointer transition-transform duration-200 ${
              liked ? "text-red-500 fill-red-500" : "text-black"
            }`}
            strokeWidth={1.5}
            onClick={handleToggleLike}
          />
        </div>
      </div>
    </div>
  );
};
export default InfoProduct;