"use client";
import useGetCategoryProduct from "@/api/getCategoryProduct";
import { Separator } from "@/components/ui/separator";
import { useParams } from "next/navigation";
import FiltersControlsCategory from "./components/filters-controls-category";
import SkeletonSchema from "@/components/skeletonSchema";
import ProductCard from "./components/product-card";
import { useState } from "react";
import { ProductType } from "@/types/product";

export default function Page() {
  const params = useParams();
  const categorySlug = params?.categorySlug as string;
  const { result, loading } = useGetCategoryProduct(categorySlug);
  const [filterOrigin, setFilterOrigin] = useState("");

  const filteredProducts: ProductType[] =
    !loading && result
      ? filterOrigin === ""
        ? result
        : result.filter((product) => product.origin === filterOrigin)
      : [];

  return (
    <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24 min-h-full">
      {!loading && result && result.length > 0 && (
        <h1 className="text-3xl font-medium px-4">
          Coffee {result[0].category.categoryName}
        </h1>
      )}
      <Separator />

      <div className="sm:grid sm:grid-cols-4 sm:gap-10 mt-8">
        <div className="sm:col-span-1 px-4 sm:px-0">
          <FiltersControlsCategory setFilterOrigin={setFilterOrigin} />
        </div>

        <div className="sm:col-span-3">
          <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 md:gap-10 min-h-[310px]">
            {loading && <SkeletonSchema grid={3} />}

            {!loading &&
              filteredProducts.length > 0 &&
              filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}

            {!loading && filteredProducts.length === 0 && (
              <div className="col-span-full flex justify-center mt-10">
                <p className="text-center text-gray-500 text-sm">
                  There are no products in this category.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}