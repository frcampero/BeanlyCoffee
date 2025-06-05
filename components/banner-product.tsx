import Link from "next/link";
import React from "react";
import { buttonVariants } from "./ui/button";

const BannerProducts = () => {
  return (
    <>
      <div className="mt-4 text-center">
        <p>Immerse yourself in a unique experience.</p>
        <h4 className="mt-2 text-5xl font-extrabold uppercase">
          Exquisite Coffee
        </h4>
        <p className="py-2 text-lg">Awaken your senses</p>
        <Link
          href="#"
          className={buttonVariants({
            variant: "default",
            className: "!bg-[#d7c1ad] !text-gray-800 hover:!bg-[#a18f7d]",
          })}
        >
          Buy
        </Link>
      </div>
      <div className="mt-5 bg-cover h-[290] lg:h-[600] bg-[url('/beanly-banner.png')] bg-center mt-5]"></div>
    </>
  );
};

export default BannerProducts;
