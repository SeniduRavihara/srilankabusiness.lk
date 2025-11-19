"use client";

import { useData } from "@/hooks/useData";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import CategoryCard from "../CategoryCard";

const CategoriesArea = () => {
  const { categories } = useData();
  const [screenWidth, setScreenWidth] = useState(() => {
    if (typeof window !== "undefined") {
      return window.innerWidth;
    }
    return 1024; // default desktop width
  });

  const router = useRouter();

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const getVisibleCategories = () => {
    if (!categories) return [];
    if (screenWidth <= 500) {
      return categories.slice(0, 5);
    } else if (screenWidth <= 600) {
      return categories.slice(0, 7);
    } else if (screenWidth <= 768) {
      return categories.slice(0, 9);
    } else {
      return categories.slice(0, 17);
    }
  };

  const handleCategoryIconClick = (label: string) => {
    router.push(`/search-results/category-${label}`);
  };

  const handleAllClick = () => {
    router.push("/all-catogaries");
  };

  if (!categories) {
    return (
      <div className="flex flex-col items-center justify-center w-full">
        <ul className="">
          <div className="w-full grid gap-x-20 grid-cols-3 xsm:grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 xl:grid-cols-9 px-14 sm:px-20">
            {Array.from({ length: 9 }).map((_, index) => (
              <li key={index} className="animate-pulse">
                <div className="hidden lg:flex flex-col text-center justify-center float-left mt-12">
                  <div className="w-20 h-20 bg-gray-300 rounded-lg flex items-center justify-center">
                    <div className="w-10 h-10 bg-gray-400 rounded"></div>
                  </div>
                  <div className="mt-2.5 h-4 bg-gray-300 rounded w-16 mx-auto"></div>
                </div>
                <div className="lg:hidden text-center flex flex-col items-center mt-5">
                  <div className="p-1 w-24 h-24 bg-gray-300 rounded-lg flex items-center justify-center">
                    <div className="w-7 xsm:w-10 h-7 xsm:h-10 bg-gray-400 rounded"></div>
                  </div>
                  <div className="mt-2.5 h-4 bg-gray-300 rounded w-20"></div>
                </div>
              </li>
            ))}
          </div>
        </ul>
      </div>
    );
  }

  if (categories.length === 0) {
    return (
      <div className="w-full flex items-center justify-center py-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  const visibleCategories = getVisibleCategories();

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <ul className="">
        <div className="w-full grid gap-x-20 grid-cols-3 xsm:grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 xl:grid-cols-9 px-14 sm:px-20">
          {visibleCategories.map((categoryObj, index) => (
            <li
              key={categoryObj.id || index}
              className="cursor-pointer"
              onClick={() => handleCategoryIconClick(categoryObj.label)}
            >
              <CategoryCard label={categoryObj.label} icon={categoryObj.icon} />
            </li>
          ))}

          <div onClick={handleAllClick} className="cursor-pointer">
            <CategoryCard
              label="All Categories"
              icon="/assets/img/category-img/all-categories.png"
            />
          </div>
        </div>
      </ul>
    </div>
  );
};

export default CategoriesArea;
