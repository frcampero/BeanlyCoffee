import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { ProductType } from "@/types/product";
import { toast } from "sonner";

interface UseLovedProductsType {
  lovedItems: ProductType[];
  addLovedItem: (data: ProductType) => void;
  removeLovedItem: (id: number) => void;
  isLoved: (id: number) => boolean;
}

export const useLovedProducts = create(
  persist<UseLovedProductsType>(
    (set, get) => ({
      lovedItems: [],
      addLovedItem: (data: ProductType) => {
        const currentLovedItems = get().lovedItems;
        const existingItem = currentLovedItems.find(
          (item) => item.id === data.id
        );

        if (existingItem) {
          return toast.error("The product already exists in the list");
        }

        set({
          lovedItems: [...get().lovedItems, data],
        });

        toast.success("Product added to the list");
      },
      removeLovedItem: (id: number) => {
        set({
          lovedItems: get().lovedItems.filter((item) => item.id !== id),
        });
        toast("Product removed from the list.");
      },
      isLoved: (id: number) => {
        return get().lovedItems.some((item) => item.id === id);
      },
    }),
    {
      name: "loved-product-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
