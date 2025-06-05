import { useCart } from "@/hooks/use-cart";
import { formatPrice } from "@/lib/formatPrice";
import { cn } from "@/lib/utils";
import { ProductType } from "@/types/product";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";

interface CartItemProps {
  product: ProductType;
}

const CartItem = (props: CartItemProps) => {
  const { product } = props;
  const router = useRouter();
  const { removeItem } = useCart();

  return (
    <li className="flex py-6 border-b">
      <div
        onClick={() => router.push(`/product/${product.slug}`)}
        className="cursor-pointer"
      >
        <img
          src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${product.images[0].url}`}
          alt="Product"
          className="w-24 h-24 overflow-hidden sm:w-auto sm:h-32"
        />
      </div>
      <div className="flex justify-between flex-1 px-6">
        <div>
          <h2 className="text-lg font-bold">{product.productName}</h2>
          <p className="font-bold">{formatPrice(product.price)}</p>
          <div className="flex items-center justify-between gap-3">
            <p className="px-2 py-1 text-white bg-[#d7c1ad] w-fit">
              {product.taste}
            </p>
            <p className="px-2 py-1 text-white bg-[#d7c1ad] w-fit">
              {product.origin}
            </p>
          </div>
        </div>
          <div className="">
            <button
              className={cn(
                "cursor-pointer flex items-center justify-center rounded-full bg-white border shadow-md p-1 hover: scale-120 transition"
              )}
            >
              <X size={15} onClick={() => removeItem(product.id)} />
            </button>
          </div>
      </div>
    </li>
  );
};

export default CartItem;
