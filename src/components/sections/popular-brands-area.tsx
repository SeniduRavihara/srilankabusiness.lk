"use client";

import ImageSlider from "@/components/image-slider/ImageSlider";
import { useData } from "@/hooks/useData";

const PopularBrandsArea = () => {
  const { popularBrands } = useData();

  const SkeletonLoader = () => {
    return (
      <div className="my-10 flex flex-col gap-3 px-3 md:px-10">
        <h1 className="text-2xl font-semibold flex items-center justify-center sm:justify-start px-3 md:px-10">
          Popular brands
        </h1>
        <div className="w-full flex items-center justify-between relative">
          <div className="w-10 h-10 flex items-center absolute z-10 bg-white left-0 cursor-pointer justify-center rounded-r-2xl shadow-lg">
            <div className="w-6 h-6 bg-gray-300 rounded animate-pulse"></div>
          </div>

          <div className="flex gap-4 px-14 flex-1 justify-center">
            {Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index}
                className="w-48 h-48 bg-gray-300 rounded-lg animate-pulse shrink-0"
              ></div>
            ))}
          </div>

          <div className="w-10 h-10 flex items-center absolute z-10 bg-white right-0 cursor-pointer justify-center rounded-l-2xl shadow-lg">
            <div className="w-6 h-6 bg-gray-300 rounded animate-pulse"></div>
          </div>
        </div>
      </div>
    );
  };

  if (!popularBrands || popularBrands.length === 0) {
    return <SkeletonLoader />;
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
