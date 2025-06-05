"use client"
import { useGetFeaturedProducts } from "@/api/useGetFeaturedProducts";
import { ResponseType } from "@/types/response";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import SkeletonSchema from "./skeletonSchema";
import { ProductType } from "@/types/product";
import { Card, CardContent } from "./ui/card";
import { useRouter } from "next/navigation";

const FeaturedProducts = () => {
  const { result, loading } = useGetFeaturedProducts() as ResponseType;
  const router = useRouter();

  return (
    <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
      <h3 className="px-6 text-3xl sm:pb-8">Featured Products</h3>
      <Carousel>
        <CarouselContent className="-ml-2 mdL-ml-4">
          {loading && <SkeletonSchema grid={3} />}

          {result != null &&
            result.length > 0 &&
            result.map((product: ProductType) => {
              const { id, images, slug, productName, taste, origin } = product;

              if (!images || images.length === 0 || !images[0].url) return null;

              return (
                <CarouselItem
                  key={id}
                  className="md:basis-1/2 lg:basis-1/3 group"
                >
                  <div className="p-1">
                    <div
                      onClick={() => router.push(`/product/${slug}`)}
                      className="
                        cursor-pointer 
                        transition 
                        hover:shadow-md 
                        hover:scale-[1.015] 
                        active:scale-95 
                        duration-300 
                        ease-in-out
                      "
                    >
                      <Card className="py-4 border border-gray-200 shadow-none">
                        <CardContent className="flex items-center justify-center px-6 py-2">
                          <img
                            src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${images[0].url}`}
                            alt={`Producto destacado: ${productName}`}
                          />
                        </CardContent>
                        <div className="flex justify-between gap-4 px-8 mt-2">
                          <h3 className="text-lg font-bold">{productName}</h3>
                          <div className="flex items-center gap-3">
                            <p className="px-2 py-1 text-gray-800 bg-[#EBDACB] dark:bg-white w-fit">
                              {origin}
                            </p>
                            <p>{taste}</p>
                          </div>
                        </div>
                      </Card>
                    </div>
                  </div>
                </CarouselItem>
              );
            })}
        </CarouselContent>
        <CarouselPrevious className="cursor-pointer" />
        <CarouselNext className="hidden sm:flex cursor-pointer" />
      </Carousel>
    </div>
  );
};

export default FeaturedProducts;