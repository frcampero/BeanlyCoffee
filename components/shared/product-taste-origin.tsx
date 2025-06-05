import React from "react";

interface ProductTasteOrigin {
  taste: string;
  origin: string;
}

const ProductTasteOrigin = (props: ProductTasteOrigin) => {
  const { origin, taste } = props;

  return (
    <div className="flex items-center justify-between gap-3">
      <p className="px-2 py-1 text-xs text-white bg-[#bea994] w-fit">
        {taste}
      </p>
      <p className="px-2 py-1 text-xs text-white bg-[#bea994] w-fit">
        {origin}
      </p>
    </div>
  );
};

export default ProductTasteOrigin;
