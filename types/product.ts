export type ProductType = {
  id: number;
  productName: string;
  slug: string;
  description: string;
  active: boolean;
  isFeatured: boolean;
  taste: string;
  origin: string;
  price: number;
  images: {
    id: number;
    url: string;
  }[];
  category: {
    categoryName: string;
    slug: string;
  };
  documentId: string; // 👈 añadí esta línea
};
