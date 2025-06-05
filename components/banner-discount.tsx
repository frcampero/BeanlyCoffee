import Link from "next/link";
import React from "react";
import { buttonVariants } from "./ui/button";

const BannerDiscount = () => {
  return (
    <div className="p-5 sm:p-20 text-center">
      <h2 className="uppercase font-black text-2xl text-primary">
        Get up to 25% off
      </h2>
      <h3>
        20% off purchases over $75,000. Use code BEANLY.
      </h3>

      <div className="max-w-md mx-auto mt-5 sm:flex justify-center gap-8">
        <Link
          href="#"
          className={buttonVariants({
            variant: "default",
            className: "!bg-[#d7c1ad] !text-gray-800 hover:!bg-[#a18f7d]",
          })}
        >
          Buy
        </Link>
        <Link href="#" className={buttonVariants({ variant: "outline" })}>
          More information
        </Link>
      </div>
    </div>
  );
};

export default BannerDiscount;
