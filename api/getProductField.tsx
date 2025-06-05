import { useEffect, useState } from "react";

export function useGetProductField() {
  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/products?pagination[pageSize]=100`;
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [result, setResult] = useState<{ origin: string[] } | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(url);
        const json = await res.json();
        console.log("📦 Productos recibidos:", json.data);

        const origins = new Set<string>();

        json.data.forEach((item: any) => {
          const origin = item.origin;
          if (origin) origins.add(origin);
        });

        setResult({ origin: Array.from(origins) });
      } catch (error: any) {
        setError(error.message || "Unknown error");
      } finally {
        setLoading(false);
      }
    })();
  }, [url]);

  return { loading, result, error };
}
