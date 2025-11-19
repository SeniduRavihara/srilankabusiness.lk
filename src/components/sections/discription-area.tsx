import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useData } from "@/hooks/useData";
import CustomTag from "@/components/ui/custom-tag";
import { fetchCatogaryData } from "@/firebase/api";
import { popularCategories, popularCities } from "@/constants";

const SkeletonLoader = () => (
  <div className="flex flex-col gap-10 w-full py-10 items-center justify-center">
    <div className="w-[95%] md:w-[92%]">
      <div className="h-8 bg-gray-300 rounded animate-pulse mb-4 w-3/4"></div>
      <div className="h-4 bg-gray-300 rounded animate-pulse mb-2 w-full"></div>
      <div className="h-4 bg-gray-300 rounded animate-pulse mb-2 w-5/6"></div>
      <div className="h-4 bg-gray-300 rounded animate-pulse w-4/5"></div>
    </div>

    <div className="w-[95%] md:w-[92%]">
      <div className="h-8 bg-gray-300 rounded animate-pulse mb-4 w-1/2"></div>
      <div className="flex flex-wrap gap-2">
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={index}
            className="h-6 bg-gray-300 rounded animate-pulse w-20"
          ></div>
        ))}
      </div>
    </div>

    <div className="w-[95%] md:w-[92%]">
      <div className="h-8 bg-gray-300 rounded animate-pulse mb-4 w-1/2"></div>
      <div className="flex flex-wrap gap-2">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="h-6 bg-gray-300 rounded animate-pulse w-16"
          ></div>
        ))}
      </div>
    </div>
  </div>
);

const DiscriptionArea = () => {
  const [isLoading, setIsLoading] = useState(true);

  const {
    lastDocument,
    setLastDocument,
    setLoadingStoreFetching,
    setSearchResultStores,
    setIsAllFetched,
  } = useData();

  const router = useRouter();

  useEffect(() => {
    // Simulate loading time for consistency with other components
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleCategaryClick = async (label: string) => {
    await fetchCatogaryData(
      {
        lastDocument,
        setLastDocument,
        setLoadingStoreFetching,
        setSearchResultStores,
        setIsAllFetched,
      },
      label
    );
    router.push(`/public/search-results/category-${label}`);
  };

  if (isLoading) {
    return <SkeletonLoader />;
  }

  return (
    <div className="flex flex-col gap-10 w-full py-10 items-center justify-center">
      <div className="w-[95%] md:w-[92%]">
        <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold">
          One-Stop for All Local Businesses, Product and Services, Nearby Across
          Sri Lanka
        </h3>
        <br />
        <p>
          Welcome to Sri Lanka Business. Mainly in Sri Lanka, we help you to
          find many businesses and services that you need on a daily basis. In
          addition, we have listed a lot of information of local businessmen all
          over Sri Lanka.
        </p>

        <br />
        <p>
          Our service extends from providing address and contact details of
          business establishments around the country, to making orders and
          reservations for Hotels, business places leisure, medical, financial,
          travel and domestic purposes. We enlist business information across
          varied sectors like Restaurants, Auto Care, Home Decor, Personal and
          Pet Care, Fitness, Insurance, Real Estate, Sports, Schools, etc. from
          all over the country. Holding information right from major cities in
          Sri Lanka.
        </p>
      </div>

      <div className="w-[95%] md:w-[92%]">
        <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold">
          Popular Categories
        </h3>
        <br />
        <div className="my-1 gap-1 md:gap-2 flex flex-wrap">
          {popularCategories.map((category, index) => (
            <div
              key={index}
              onClick={() => handleCategaryClick(category)}
              className="flex items-center justify-center"
            >
              <CustomTag styles="text-gray-600 text-[13px] md:text-sm px-1 bg-white cursor-pointer rounded-0 border-gray-400 border">
                {category}
              </CustomTag>
              <div className="w-0.5 h-4 bg-slate-400"></div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-[95%] md:w-[92%]">
        <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold">
          Popular Cities
        </h3>
        <br />
        <div className="my-1 gap-1 md:gap-2 flex flex-wrap">
          {popularCities.map((city, index) => (
            <div key={index} className="flex items-center justify-center">
              <CustomTag styles="text-gray-600 text-sm px-1 bg-white cursor-pointer rounded-0 border-gray-400 border">
                {city}
              </CustomTag>
              <div className="w-0.5 h-4 bg-slate-400"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DiscriptionArea;
