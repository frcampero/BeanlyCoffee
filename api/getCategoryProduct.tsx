import { useEffect, useState } from "react";
import { ProductType } from "@/types/product";

export default function useGetCategoryProduct(slug: string | string[]) {
  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/products?populate=*&filters[category][slug][$eq]=${slug}`;
  const [result, setResult] = useState<ProductType[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(url);
        const json = await res.json();
        setResult(json.data);
        setLoading(false);
      } catch (error: any) {
        setError(error);
        setLoading(false);
      }
    })();
  }, [url]);
  return { loading, result, error };
}
