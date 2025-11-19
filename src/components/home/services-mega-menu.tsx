"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Smartphone,
  Zap,
  Radio,
  Droplets,
  Flame,
  Shield,
  Plane,
  Bus,
  Train,
  Building2,
  Car,
} from "lucide-react";

interface ServicesMegaMenuProps {
  isLoggedIn: boolean;
}

// Bills & Recharge Services with proper icons
const billsAndRechargeServices = [
  { icon: Smartphone, title: "Mobile Recharge" },
  { icon: Zap, title: "Electricity Bills" },
  { icon: Radio, title: "DTH Recharge" },
  { icon: Droplets, title: "Water Bills" },
  { icon: Flame, title: "Gas Bills" },
  { icon: Shield, title: "Insurance" },
];

// Travel Bookings Services with proper icons
const travelBookingsServices = [
  { icon: Plane, title: "Flights" },
  { icon: Bus, title: "Bus Tickets" },
  { icon: Train, title: "Train Tickets" },
  { icon: Building2, title: "Hotels" },
  { icon: Car, title: "Car Rentals" },
];

const ServicesMegaMenu = ({ isLoggedIn }: ServicesMegaMenuProps) => {
  const [isMegaOpen, setIsMegaOpen] = useState(false);

  return (
    <li className="relative">
      <button
        className="flex items-center gap-1 py-2 text-gray-700 hover:text-blue-600 transition-colors"
        onMouseEnter={() => setIsMegaOpen(true)}
        onMouseLeave={() => setIsMegaOpen(false)}
      >
        Services
        {isLoggedIn && (
          <span className="inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 rounded-full">
            1
          </span>
        )}
      </button>

      {/* Mega menu panel */}
      {isMegaOpen && (
        <div
          className="absolute p-5 left-1/2 top-10 w-[700px] bg-white rounded-xl shadow-2xl border border-gray-100 z-50 overflow-hidden"
          style={{ transform: "translateX(calc(-50% + 50px))" }}
          onMouseEnter={() => setIsMegaOpen(true)}
          onMouseLeave={() => setIsMegaOpen(false)}
        >
          {/* Bills & Recharge Section */}
          <div className="px-5 py-3 border-b border-gray-100 hover:bg-gray-50/50 transition-colors">
            <div className="flex items-start justify-between gap-4">
              <div className="shrink-0 w-40">
                <h3 className="text-sm font-bold text-gray-900 mb-0.5">
                  Bills & Recharge
                </h3>
                <p className="text-xs text-gray-600 mb-1 leading-tight">
                  Pay utility bills instantly.
                </p>
                <Link
                  href="/services/bills-recharge"
                  className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 font-semibold text-xs transition-colors"
                >
                  View All →
                </Link>
              </div>
              <div className="grid grid-cols-3 gap-2 flex-1">
                {billsAndRechargeServices.map((service) => {
                  const IconComponent = service.icon;
                  return (
                    <Link
                      key={service.title}
                      href={`/services/${service.title.toLowerCase().replace(/\s+/g, "-")}`}
                      className="flex flex-col items-center gap-1 p-2 rounded-lg hover:bg-blue-50 transition-colors group cursor-pointer"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg flex items-center justify-center group-hover:from-blue-100 group-hover:to-blue-200 transition-colors">
                        <IconComponent className="w-5 h-5 text-blue-600" />
                      </div>
                      <p className="text-xs font-semibold text-gray-700 text-center line-clamp-2">
                        {service.title}
                      </p>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Travel Bookings Section */}
          <div className="px-5 py-3 hover:bg-gray-50/50 transition-colors">
            <div className="flex items-start justify-between gap-4">
              <div className="shrink-0 w-40">
                <h3 className="text-sm font-bold text-gray-900 mb-0.5">
                  Travel Bookings
                </h3>
                <p className="text-xs text-gray-600 mb-1 leading-tight">
                  Book flights & more.
                </p>
                <Link
                  href="/services/travel"
                  className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 font-semibold text-xs transition-colors"
                >
                  View All →
                </Link>
              </div>
              <div className="grid grid-cols-3 gap-2 flex-1">
                {travelBookingsServices.map((service) => {
                  const IconComponent = service.icon;
                  return (
                    <Link
                      key={service.title}
                      href={`/services/${service.title.toLowerCase().replace(/\s+/g, "-")}`}
                      className="flex flex-col items-center gap-1 p-2 rounded-lg hover:bg-blue-50 transition-colors group cursor-pointer"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg flex items-center justify-center group-hover:from-blue-100 group-hover:to-blue-200 transition-colors">
                        <IconComponent className="w-5 h-5 text-blue-600" />
                      </div>
                      <p className="text-xs font-semibold text-gray-700 text-center line-clamp-2">
                        {service.title}
                      </p>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </li>
  );
};

export default ServicesMegaMenu;
