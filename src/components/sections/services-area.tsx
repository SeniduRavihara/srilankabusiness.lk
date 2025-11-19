"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const billsAndRechargeIcons = [
  { icon: "/assets/img/category-img/recharge.png", title: "Mobile" },
  { icon: "/assets/img/category-img/Electricity.png", title: "Electricity" },
  { icon: "/assets/img/category-img/DTH.png", title: "DTH" },
  { icon: "/assets/img/category-img/water-bill.png", title: "Water" },
  { icon: "/assets/img/category-img/gas-cylinder.png", title: "Gas" },
  { icon: "/assets/img/category-img/health-insurance.png", title: "Insurance" },
];

const travelBookingsIcons = [
  { icon: "/assets/img/category-img/flight.png", title: "Flight" },
  { icon: "/assets/img/category-img/bus.png", title: "Bus" },
  { icon: "/assets/img/category-img/train-station.png", title: "Train" },
  { icon: "/assets/img/category-img/hotel.png", title: "Hotel" },
  { icon: "/assets/img/category-img/car-rent.png", title: "Car Rental" },
];

const ServicesArea = () => {
  // Simulate loading state - in real app this would come from props or context
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="">
        <center className="hidden lg:block">
          <div className="other-services">
            {/* Bills & Recharge Skeleton */}
            <div className="fstotsediv w-[80%] flex gap-3 items-center justify-between flex-col xl:flex-row p-5 border border-[#00000037] rounded-t-md rounded-b-0">
              <div className="oth-ser-div-left">
                <div className="h-6 bg-gray-300 rounded w-48 mb-2 animate-pulse"></div>
                <div className="h-4 bg-gray-300 rounded w-64 mb-1 animate-pulse"></div>
                <div className="h-4 bg-gray-300 rounded w-32 animate-pulse"></div>
              </div>
              <div className="oth-ser-div-right-section flex gap-4">
                {Array.from({ length: 6 }).map((_, index) => (
                  <div key={index} className="text-center float-left mt-12">
                    <div className="w-20 h-20 bg-gray-300 rounded-lg flex items-center justify-center animate-pulse">
                      <div className="w-10 h-10 bg-gray-400 rounded"></div>
                    </div>
                    <div className="mt-2.5 h-4 bg-gray-300 rounded w-16 mx-auto animate-pulse"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Travel Bookings Skeleton */}
            <div className="w-[80%] flex gap-3 items-center justify-between flex-col xl:flex-row p-5 border border-[#00000037] rounded-t-0 rounded-b-[7px]">
              <div className="oth-ser-div-lefta">
                <div className="h-6 bg-gray-300 rounded w-40 mb-2 animate-pulse"></div>
                <div className="h-4 bg-gray-300 rounded w-56 mb-1 animate-pulse"></div>
                <div className="h-4 bg-gray-300 rounded w-24 animate-pulse"></div>
              </div>
              <div className="oth-ser-div-right-section flex gap-5">
                {Array.from({ length: 5 }).map((_, index) => (
                  <div key={index} className="text-center float-left mt-12">
                    <div className="w-20 h-20 bg-gray-300 rounded-lg flex items-center justify-center animate-pulse">
                      <div className="w-10 h-10 bg-gray-400 rounded"></div>
                    </div>
                    <div className="mt-2.5 h-4 bg-gray-300 rounded w-20 mx-auto animate-pulse"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </center>

        {/* Mobile View Skeleton */}
        <div className="flex flex-col gap-5 lg:hidden px-10">
          {/* Bills & Recharge Mobile Skeleton */}
          <div className="flex flex-col">
            <div className="text-center mb-4">
              <div className="h-8 bg-gray-300 rounded w-48 mx-auto mb-2 animate-pulse"></div>
              <div className="h-4 bg-gray-300 rounded w-64 mx-auto mb-1 animate-pulse"></div>
              <div className="h-4 bg-gray-300 rounded w-32 mx-auto animate-pulse"></div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {Array.from({ length: 6 }).map((_, index) => (
                <div
                  key={index}
                  className="text-center flex flex-col items-center mt-12"
                >
                  <div className="w-20 h-20 bg-gray-300 rounded-lg flex items-center justify-center animate-pulse">
                    <div className="w-10 h-10 bg-gray-400 rounded"></div>
                  </div>
                  <div className="mt-2.5 h-4 bg-gray-300 rounded w-16 animate-pulse"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Travel Bookings Mobile Skeleton */}
          <div className="flex flex-col">
            <div className="text-center mb-4">
              <div className="h-8 bg-gray-300 rounded w-44 mx-auto mb-2 animate-pulse"></div>
              <div className="h-4 bg-gray-300 rounded w-56 mx-auto mb-1 animate-pulse"></div>
              <div className="h-4 bg-gray-300 rounded w-24 mx-auto animate-pulse"></div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {Array.from({ length: 5 }).map((_, index) => (
                <div
                  key={index}
                  className="text-center flex flex-col items-center mt-12"
                >
                  <div className="w-20 h-20 bg-gray-300 rounded-lg flex items-center justify-center animate-pulse">
                    <div className="w-10 h-10 bg-gray-400 rounded"></div>
                  </div>
                  <div className="mt-2.5 h-4 bg-gray-300 rounded w-20 animate-pulse"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="">
      <center className="hidden lg:block">
        <div className="other-services">
          <div className="fstotsediv w-[80%] flex gap-3 items-center justify-between flex-col xl:flex-row p-5 border border-[#00000037] rounded-t-md rounded-b-0">
            <div className="oth-ser-div-left">
              <h1 className="text-2xl font-semibold">Bills & Recharge</h1>
              <p className="text-gray-600">
                Pay your bills & recharge instantly with
              </p>
              <Link
                href="/"
                className="expr-link text-[#005eff] font-semibold hover:underline"
              >
                Srilanka Business
              </Link>
            </div>
            <div className="oth-ser-div-right-section flex gap-4">
              {billsAndRechargeIcons.map((obj) => (
                <div key={obj.title} className="text-center float-left mt-12">
                  <div className="w-20 h-20 text-center bg-white flex items-center justify-center border border-[#34343439] rounded-lg">
                    <Image
                      src={obj.icon}
                      alt={obj.title}
                      width={40}
                      height={40}
                      className="w-10 h-10"
                    />
                  </div>
                  <div className="mt-2.5 font-medium text-sm whitespace-nowrap">
                    {obj.title}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* -------------------- */}

          <div className="w-[80%] flex gap-3 items-center justify-between flex-col xl:flex-row p-5 border border-[#00000037] rounded-t-0 rounded-b-[7px]">
            <div className="oth-ser-div-lefta">
              <h1 className="text-2xl font-semibold">Travel Bookings</h1>
              <p className="text-gray-600">
                Instance bookings for your best experience
              </p>
              <Link
                href="/"
                className="expr-link text-[#005eff] font-semibold hover:underline"
              >
                Explore More
              </Link>
            </div>
            <div className="oth-ser-div-right-section flex gap-5">
              {travelBookingsIcons.map((obj) => (
                <div key={obj.title} className="text-center float-left mt-12">
                  <div className="w-20 h-20 text-center bg-white flex items-center justify-center border border-[#34343439] rounded-lg">
                    <Image
                      src={obj.icon}
                      alt={obj.title}
                      width={40}
                      height={40}
                      className="w-10 h-10"
                    />
                  </div>
                  <div className="mt-2.5 font-medium text-sm whitespace-nowrap">
                    {obj.title}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </center>

      {/* -------------------Mobile View---------------------- */}

      <div className="flex flex-col gap-5 lg:hidden px-10">
        <div className="flex flex-col">
          <div className="text-center">
            <h1 className="font-semibold text-2xl">Bills & Recharge</h1>
            <p className="text-gray-600">
              Pay your bills & recharge instantly with
            </p>
            <Link
              href="/"
              className="expr-link text-[#005eff] font-semibold hover:underline"
            >
              Srilanka Business
            </Link>
          </div>

          <div>
            <div className="grid grid-cols-3 gap-4">
              {billsAndRechargeIcons.map((obj) => (
                <div
                  key={obj.title}
                  className="text-center flex flex-col items-center mt-12"
                >
                  <div className="w-20 h-20 xsm:w-24 xsm:h-24 sm:w-28 sm:h-28 text-center flex-col bg-white flex items-center justify-center border border-[#34343439] rounded-lg">
                    <Image
                      src={obj.icon}
                      alt={obj.title}
                      width={40}
                      height={40}
                      className="w-10 h-10"
                    />
                    <div className="mt-2.5 font-medium text-xs xsm:text-sm sm:text-base whitespace-nowrap">
                      {obj.title}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* -------------------------- */}

        <div className="flex flex-col">
          <div className="text-center">
            <h1 className="font-semibold text-2xl">Travel Bookings</h1>
            <p className="text-gray-600">
              Instance bookings for your best experience
            </p>
            <Link
              href="/"
              className="expr-link text-[#005eff] font-semibold hover:underline"
            >
              Explore More
            </Link>
          </div>

          <div>
            <div className="grid grid-cols-3 gap-4">
              {travelBookingsIcons.map((obj) => (
                <div
                  key={obj.title}
                  className="text-center flex flex-col items-center mt-12"
                >
                  <div className="w-20 h-20 xsm:w-24 xsm:h-24 sm:w-28 sm:h-28 text-center flex-col bg-white flex items-center justify-center border border-[#34343439] rounded-lg">
                    <Image
                      src={obj.icon}
                      alt={obj.title}
                      width={40}
                      height={40}
                      className="w-10 h-10"
                    />
                    <div className="mt-2.5 font-medium text-xs xsm:text-sm sm:text-base whitespace-nowrap">
                      {obj.title}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesArea;
