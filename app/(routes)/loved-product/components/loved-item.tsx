import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/use-cart";
import { useLovedProducts } from "@/hooks/use-loved-product";
import { formatPrice } from "@/lib/formatPrice";
import { ProductType } from "@/types/product";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import ProductTasteOrigin from "@/components/shared/product-taste-origin";

interface LovedItemProductsProps {
  product: ProductType;
}

const LovedItem = (props: LovedItemProductsProps) => {
  const { product } = props;
  const router = useRouter();
  const { removeLovedItem } = useLovedProducts();
  const { addItem } = useCart();
  const addToCheckOut = () => {
    addItem(product)
    removeLovedItem(product.id)
  }

  return (
    <li className="flex p-6 border-b">
      <div className="" onClick={() => router.push(`/product/${product.slug}`)}>
        <img
          src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${product.images[0]?.url}`}
          alt="Product"
          className="w-24 h-24 overflow-hidden sm:w-auto sm:h-32"
        />
      </div>
      <div className="flex justify-between flex-1 px-6">
        <div>
          <div>
            <h2 className="text-lg font-bold">{product.productName}</h2>
            <p>{formatPrice(product.price)}</p>
            <ProductTasteOrigin origin={product.origin} taste={product.origin}/>
            <Button 
            className=" cursor-pointer mt-5 bg-[#bea994] rounded-none"
            onClick={addToCheckOut}
            >
              Add to cart
            </Button>
          </div>
        </div>
          <div className="">
            <button
              className={cn(
                "rounded-full cursor-pointer flex imtes-center justify-center border bg-white shadow-mg hover:scale-110 transition"
              )}
            >
              <X size={20} onClick={() => removeLovedItem(product.id)} />
            </button>
          </div>
      </div>
    </li>
  );
};

export default LovedItem;
