"use client";

import ImageSlider from "@/components/image-slider/ImageSlider";
import { useData } from "@/hooks/useData";

const PopularBrandsArea = () => {
  const { popularBrands } = useData();

  if (!popularBrands || popularBrands.length === 0) {
    return (
      <div className="px-3 md:px-10">
        <h1 className="text-2xl">Popular brands</h1>
        <div className="flex items-center justify-center h-[200px]">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="my-10 flex flex-col gap-3 px-3 md:px-10">
      <h1 className="text-2xl font-semibold flex items-center justify-center sm:justify-start px-3 md:px-10">
        Popular brands
      </h1>

      <ImageSlider images={popularBrands} />
    </div>
  );
};

export default PopularBrandsArea;
