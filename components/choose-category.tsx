"use client";

import { useGetCategory } from "@/api/getProducts";
import { CategoryType } from "@/types/category";
import { ResponseType } from "@/types/response";
import Link from "next/link";
import Image from "next/image";

const ChooseCategory = () => {
  const { result, loading } = useGetCategory() as ResponseType;

  return (
    <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
      <h3 className="px-6 pb-4 text-3xl sm:pb-8">
        Choose your favorite category
      </h3>
      <div className="grid gap-5 sm:grid-cols-3">
        {!loading &&
          Array.isArray(result) &&
          result.map((category: CategoryType) => {
            const imageUrl =
              category.mainImage?.data?.attributes?.url &&
              `${process.env.NEXT_PUBLIC_BACKEND_URL}${category.mainImage.data.attributes.url}`;

            if (!category.slug || !imageUrl) {
              console.warn("Categoría con datos incompletos:", category);
              return null;
            }

            return (
              <Link
                key={category.id}
                href={`/category/${category.slug}`}
                className="relative max-w-xs mx-auto overflow-hidden bg-no-repeat bg-cover"
              >
                <Image
                  src={imageUrl}
                  alt={category.categoryName}
                  width={270}
                  height={270}
                  className="transition duration-300 ease-in-out hover:scale-110 object-cover"
                />
                <p className="absolute w-full py-2 text-lg font-bold text-center text-white bottom-6 backdrop-blur-lg">
                  {category.categoryName}
                </p>
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default ChooseCategory;