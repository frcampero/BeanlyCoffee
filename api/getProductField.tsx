import { useEffect, useState } from "react";

interface ProductField {
  origin: {
    enum: string[];
  };
}

export function useGetProductField() {
  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/content-type-builder/content-types/api::product.product`;
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [result, setResult] = useState<ProductField | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(url);
        const json = await res.json();

        // 🔍 Asegurate de acceder correctamente
        const originField = json.data.schema.attributes.origin;

        setResult({ origin: originField });
      } catch (error: any) {
        setError(error.message || "Error desconocido");
      } finally {
        setLoading(false);
      }
    })();
  }, [url]);

  return { loading, result, error };
}
