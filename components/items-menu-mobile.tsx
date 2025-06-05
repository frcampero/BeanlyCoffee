"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ShoppingCart, Heart, Menu } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const ItemsMenuMobile = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false); 

  const handleNavigate = (path: string) => {
    router.push(path);
    setOpen(false);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger>
        <Menu size={28} className="text-black" />
      </SheetTrigger>

      <SheetContent side="right" className="w-[260px] sm:w-[300px] px-4 py-6">
        <SheetHeader>
          <SheetTitle className="text-left text-lg font-semibold">
            Menu
          </SheetTitle>
          <SheetDescription className="text-sm text-gray-500">
            Browse the categories and access your favorite products.
          </SheetDescription>
        </SheetHeader>

        <div className="mt-6 flex flex-col gap-6">
          {/* Products */}
          <div>
            <p className="text-sm font-semibold mb-2">Products</p>
            <ul className="ml-2 space-y-1 text-sm text-gray-700">
              <li
                className="cursor-pointer hover:underline"
                onClick={() => handleNavigate("/category/grano")}
              >
                Coffee beans
              </li>
              <li
                className="cursor-pointer hover:underline"
                onClick={() => handleNavigate("/category/molido")}
              >
                Ground coffee
              </li>
              <li
                className="cursor-pointer hover:underline"
                onClick={() => handleNavigate("/category/capsula")}
              >
                Coffee capsules
              </li>
            </ul>
          </div>

          {/* Cart */}
          <div
            className="flex items-center gap-2 cursor-pointer hover:underline"
            onClick={() => handleNavigate("/cart")}
          >
            <ShoppingCart size={18} />
            <span className="text-sm">Cart</span>
          </div>

          {/* Liked */}
          <div
            className="flex items-center gap-2 cursor-pointer hover:underline"
            onClick={() => handleNavigate("/loved-product")}
          >
            <Heart size={18} />
            <span className="text-sm">Favorites</span>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default ItemsMenuMobile;