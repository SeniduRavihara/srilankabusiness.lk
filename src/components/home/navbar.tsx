"use client";

import { logo } from "@/assets";
import { useAuth } from "@/hooks/useAuth";
import { cn } from "@/lib/utils";
import { ChevronDown, Menu, Search, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { IoIosNotificationsOutline } from "react-icons/io";

interface NavbarProps {
  isLoggedInView?: boolean;
  onSidebarToggle?: (open: boolean) => void;
  onLocationPickerToggle?: (open: boolean) => void;
}

const Navbar = ({ isLoggedInView, onSidebarToggle, onLocationPickerToggle }: NavbarProps = {}) => {
  const { currentUser } = useAuth();
  const [isMegaOpen, setIsMegaOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  // Use prop for demo, or actual auth state
  const isLoggedIn = isLoggedInView || currentUser;

  const hadleLogoClick = () => {
    router.push("/");
  };

  return (
    <nav
      className="w-full fixed bg-white pt-3 px-4 md:px-6 border-b border-gray-200 shadow-sm"
      style={{ zIndex: 48 }}
    >
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between py-2">
        {/* Logo - Left side */}
        <div className="flex items-center shrink-0">
          <Image
            src={logo}
            alt="Sri Lanka Business Logo"
            width={160}
            height={56}
            className="w-28 sm:w-32 h-auto cursor-pointer hover:opacity-80 transition-opacity"
            onClick={hadleLogoClick}
          />
        </div>

        {/* Desktop nav: compact links */}
        <ul className="hidden lg:flex items-center gap-8 font-medium flex-1 px-8">
          <li className="relative">
            <Link
              href="/jobs"
              className={cn(
                "hover:text-blue-600 transition-colors py-2 text-gray-700 flex items-center gap-1",
                pathname === "/jobs" && "text-blue-600 font-semibold"
              )}
            >
              Jobs
              {isLoggedIn && (
                <span className="inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 rounded-full">
                  1
                </span>
              )}
            </Link>
          </li>

          <li>
            <Link
              href="/companies"
              className={cn(
                "hover:text-blue-600 transition-colors py-2 text-gray-700",
                pathname === "/companies" && "text-blue-600 font-semibold"
              )}
            >
              Companies
            </Link>
          </li>

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
                className="absolute left-1/2 top-8 -translate-x-1/2 w-[820px] bg-white rounded-lg shadow-xl border border-gray-100 p-6 z-50"
                onMouseEnter={() => setIsMegaOpen(true)}
                onMouseLeave={() => setIsMegaOpen(false)}
              >
                <div className="grid grid-cols-3 gap-6">
                  <div>
                    <h4 className="text-sm font-semibold mb-3 text-gray-900">
                      Resume writing
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="hover:text-gray-900 cursor-pointer">
                        Text resume
                      </li>
                      <li className="hover:text-gray-900 cursor-pointer">
                        Visual resume
                      </li>
                      <li className="hover:text-gray-900 cursor-pointer">
                        Resume critique
                      </li>
                    </ul>

                    <h4 className="text-sm font-semibold mt-6 mb-3 text-gray-900">
                      Find Jobs
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="hover:text-gray-900 cursor-pointer">
                        Jobs4u
                      </li>
                      <li className="hover:text-gray-900 cursor-pointer">
                        Priority applicant
                      </li>
                      <li className="hover:text-gray-900 cursor-pointer">
                        Contact us
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold mb-3 text-gray-900">
                      Get recruiter&apos;s attention
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="hover:text-gray-900 cursor-pointer">
                        Resume display
                      </li>
                    </ul>

                    <h4 className="text-sm font-semibold mt-6 mb-3 text-gray-900">
                      Monthly subscriptions
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="hover:text-gray-900 cursor-pointer">
                        Basic & premium plans
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold mb-3 text-gray-900">
                      Free resume resources
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="hover:text-gray-900 cursor-pointer">
                        Resume maker
                      </li>
                      <li className="hover:text-gray-900 cursor-pointer">
                        Resume quality score
                      </li>
                      <li className="hover:text-gray-900 cursor-pointer">
                        Resume samples
                      </li>
                      <li className="hover:text-gray-900 cursor-pointer">
                        Job letter samples
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </li>
        </ul>

        {/* Right side controls */}
        {!isLoggedIn ? (
          // Logged Out State
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/login"
              className="px-5 py-2 rounded-full border-2 border-blue-600 text-sm text-blue-600 font-semibold hover:bg-blue-50 transition-colors"
            >
              Login
            </Link>

            <Link
              href="/signup"
              className="px-5 py-2 rounded-full text-sm text-white bg-red-500 font-semibold hover:bg-red-600 shadow-md transition-colors"
            >
              Register
            </Link>

            <div className="flex items-center gap-1 text-sm text-gray-600 border-l border-gray-300 pl-4">
              <span>For employers</span>
              <ChevronDown size={16} />
            </div>
          </div>
        ) : (
          // Logged In State
          <div className="hidden lg:flex items-center gap-3">

            {/* Location Picker Button */}
            <button
              onClick={() => onLocationPickerToggle?.(true)}
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-300 text-sm text-gray-700 hover:border-blue-400 transition-colors duration-300 whitespace-nowrap"
            >
              <MapPin size={18} className="text-gray-600" />
              <span>Select Location</span>
            </button>
              
            {/* Search Bar */}
            <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 w-60">
              <input
                type="text"
                placeholder="Search jobs here"
                className="bg-transparent outline-none w-full text-sm text-gray-700 placeholder-gray-500"
              />
              <Search className="text-blue-600 ml-2" size={18} />
            </div>

            

            {/* Notification Bell */}
            <div className="relative p-2 rounded-full hover:bg-gray-100 transition-colors cursor-pointer">
              <IoIosNotificationsOutline className="text-2xl text-gray-700" />
              <span className="absolute -top-1 -right-1 inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 rounded-full">
                4
              </span>
            </div>

            {/* Combined Menu + Profile Button */}
            <button
              onClick={() => onSidebarToggle?.(true)}
              className="flex items-center gap-2 px-3 py-2 rounded-full border border-gray-300 hover:bg-gray-50 transition-colors"
            >
              <Menu className="text-gray-700" size={20} />
              <HiOutlineUserCircle className="text-2xl text-gray-700" />
            </button>
          </div>
        )}

        {/* Mobile menu button - combined hamburger + profile */}
        <button
          className="lg:hidden flex items-center gap-2 px-3 py-2 rounded-full border border-gray-300 hover:bg-gray-50 transition-colors"
          onClick={() => onSidebarToggle?.(true)}
        >
          <Menu className="text-gray-700" size={20} />
          <HiOutlineUserCircle className="text-2xl text-gray-700" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
