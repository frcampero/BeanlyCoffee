"use client";
import { BaggageClaim, Heart, ShoppingCart, User } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
import MenuList from "./menu-list";
import ItemsMenuMobile from "./items-menu-mobile";
import { useCart } from "@/hooks/use-cart";
import { useLovedProducts } from "@/hooks/use-loved-product";

const Navbar = () => {
  const router = useRouter();
  const cart = useCart();
  const { lovedItems } = useLovedProducts();

  return (
    <div className="w-full max-w-screen-xl mx-auto flex items-center justify-between p-4 sm:max-w-4xl md:max-w-6xl">
      {/* Logo */}
      <h1 className="text-3xl cursor-pointer" onClick={() => router.push("/")}>
        Beanly<span className="font-bold">Coffee</span>
      </h1>

      {/* Menú de escritorio */}
      <div className="items-center justify-between hidden sm:flex">
        <MenuList />
      </div>

      {/* Menú hamburguesa en mobile */}
      <div className="flex sm:hidden ml-auto">
        <ItemsMenuMobile />
      </div>

      {/* Íconos: solo visibles desde sm en adelante */}
      <div className="hidden sm:flex items-center justify-between gap-2 sm:gap-7">
        {cart.items.length === 0 ? (
          <ShoppingCart
            strokeWidth="1"
            className="cursor-pointer"
            onClick={() => router.push("/cart")}
          />
        ) : (
          <div className="flex gap-1 cursor-pointer" onClick={() => router.push("/cart")}>
            <BaggageClaim strokeWidth={1} className="cursor-pointer" />
            <span>{cart.items.length}</span>
          </div>
        )}

        <Heart
          strokeWidth="1"
          className={`cursor-pointer ${lovedItems.length > 0 ? "fill-black" : ""}`}
          onClick={() => router.push("/loved-product")}
        />
        <User strokeWidth="1" className="cursor-pointer" />
      </div>
    </div>
  );
};

export default Navbar;
