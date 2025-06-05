"use client";

import { useParams } from "next/navigation";
import { useGetProductBySlug } from "@/api/getProductBySlug";
import SkeletonProduct from "./components/skeletonProduct";
import CarouselProduct from "./components/carousel-product";
import { ProductType } from "@/types/product";
import InfoProduct from "./components/info-products";

export default function Page() {
  const params = useParams();
  const slugParam = params?.productSlug;
  const productSlug = Array.isArray(slugParam) ? slugParam[0] : slugParam;

  const { result } = useGetProductBySlug(productSlug || "") as {
    result: ProductType[] | null;
  };

  if (!result || result.length === 0) {
    return <SkeletonProduct />;
  }

  return (
    <div className="max-w-6xl py-4 mx-auto sm:py-32 sm:px-24">
      <div className="grid sm:grid-cols-2">
        <div className="w-full max-w-md mx-auto sm:px-0 px-4">
          <CarouselProduct images={result[0].images} />
        </div>

        <div className="sm:px-12">
          <InfoProduct product={result[0]} />
        </div>
      </div>
    </div>
  );
}