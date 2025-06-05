"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/hooks/use-cart";
import { formatPrice } from "@/lib/formatPrice";
import CartItem from "./components/cart-item";
import { loadStripe } from "@stripe/stripe-js";
import { MakePaymentRequest } from "@/api/payment";

export default function Page() {
  const { items, removeAll } = useCart();
  const prices = items.map((product) => product.price);
  const totalPrice = prices.reduce((total, price) => total + price, 0);
  const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || ""
  );

  const buyStripe = async () => {
    try {
      const stripe = await stripePromise;

      // Solo enviar los IDs al backend
      const productIds = items.map((product) => product.documentId);

      const res = await MakePaymentRequest.post("/api/orders", {
        products: productIds,
      });

      await stripe?.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      });

      removeAll();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="max-w-6xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
      <h1 className="mb-5 text-3xl font-bold">Shopping Cart</h1>
      <div className="grid sm:grid-cols-2 sm-gap-6">
        <div className="">
          {items.length == 0 && (
            <p className="text-gray-500 text-sm pb-5">There are no products in the cart.</p>
          )}
          <ul className="">
            {items.map((item) => (
              <CartItem key={item.id} product={item} />
            ))}
          </ul>
        </div>
        <div className="max-w-xl">
          <div className="p-6 bg-slate-100">
            <p className="mb-3 text-lg font-semibold">Order Summary</p>
            <Separator />
            <div className="flex justify-between gap-5 my-4">
              <p>Total</p>
              <p>{formatPrice(totalPrice)}</p>
            </div>
            <div className="flex items-center justify-center w-full mt-3">
              <Button
                className="cursor-pointer w-full bg-[#aa947f]"
                onClick={buyStripe}
              >
                Buy
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
