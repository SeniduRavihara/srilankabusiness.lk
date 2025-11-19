"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import megaMenu from "@/data/mega-menu";
import { logout, updateAsSeen } from "@/firebase/api";
import {
  BookOpen,
  HelpCircle,
  LogOut,
  Settings,
  Shield,
  Store,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { IoIosMenu } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";

type Props = {
  currentUser: any;
  currentUserData: any;
  userMessages?: any[] | null;
  placeholderReviewPic?: string;
};

export default function MobileHomeMenu({
  currentUser,
  currentUserData,
  userMessages,
  placeholderReviewPic,
}: Props) {
  const router = useRouter();
  const notSeenMsg = (userMessages ?? []).filter((m) => !m.seen);

  // Mock profile completion - replace with actual data
  const profileCompletion = currentUserData?.profileCompletion || 23;

  const handleSeenMessage = async () => {
    if (!currentUserData) return;
    setTimeout(async () => {
      await updateAsSeen(currentUserData.id);
    }, 1000);
  };

  // Helper to draw profile completion arc
  const getProfileArc = (percentage: number) => {
    const radius = 18;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percentage / 100) * circumference;
    return { circumference, offset };
  };

  return (
    <>
      {/* Mobile menu button (combined with user icon) */}
      {!currentUser ? (
        <Sheet>
          <SheetTrigger>
            <div className="flex items-center gap-2 px-3 py-2 rounded-full border border-gray-300 hover:bg-gray-50 transition-colors">
              <HiOutlineUserCircle className="text-2xl text-gray-700" />
              <IoIosMenu className="text-2xl text-gray-700" />
            </div>
          </SheetTrigger>
          <SheetContent side="right" className="w-80">
            <div className="flex flex-col h-full">
              <div className="flex justify-end p-4 border-b">
                <SheetClose>
                  <RxCross1 className="text-2xl cursor-pointer text-gray-500 hover:text-gray-700" />
                </SheetClose>
              </div>
              <div className="flex-1 overflow-y-auto">
                <div className="p-4 border-b space-y-3">
                  <Link href="/login" className="block">
                    <button className="w-full px-4 py-2.5 rounded-lg border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                      Login
                    </button>
                  </Link>
                  <Link href="/signup" className="block">
                    <button className="w-full px-4 py-2.5 rounded-lg text-sm font-medium text-white bg-linear-to-r from-blue-600 to-blue-700 hover:opacity-95 transition-all">
                      Register
                    </button>
                  </Link>
                </div>

                <ul className="p-4 space-y-4">
                  {megaMenu.map((section, idx) => (
                    <li key={idx}>
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">
                        {section.title}
                      </h4>
                      <ul className="space-y-2 ml-2">
                        {section.items.map((item) => (
                          <li key={item.href}>
                            <Link
                              href={item.href}
                              className="text-sm text-gray-600 hover:text-blue-600 transition-colors block py-1"
                            >
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      ) : (
        <Sheet>
          <SheetTrigger>
            <div className="flex items-center gap-2 px-2 py-1.5 rounded-full border border-gray-300 hover:bg-gray-50 transition-colors">
              <div className="relative">
                {currentUser.photoURL ? (
                  <>
                    <Image
                      src={currentUser.photoURL}
                      alt="User profile"
                      width={32}
                      height={32}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    {/* Profile completion arc for mobile */}
                    <svg
                      className="absolute -top-0.5 -left-0.5 w-9 h-9"
                      style={{ transform: "rotate(-90deg)" }}
                    >
                      <circle
                        cx="18"
                        cy="18"
                        r="16"
                        stroke="#e5e7eb"
                        strokeWidth="2"
                        fill="none"
                      />
                      <circle
                        cx="18"
                        cy="18"
                        r="16"
                        stroke="#ef4444"
                        strokeWidth="2"
                        fill="none"
                        strokeDasharray={
                          getProfileArc(profileCompletion).circumference * 0.9
                        }
                        strokeDashoffset={
                          getProfileArc(profileCompletion).offset * 0.9
                        }
                        strokeLinecap="round"
                      />
                    </svg>
                  </>
                ) : (
                  <HiOutlineUserCircle className="text-2xl text-gray-700" />
                )}
              </div>
              <IoIosMenu className="text-2xl text-gray-700" />
            </div>
          </SheetTrigger>
          <SheetContent side="right" className="w-full max-w-md p-0">
            <div className="flex flex-col h-full">
              {/* Header with profile */}
              <div className="p-4 border-b border-gray-200 bg-white">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3 flex-1">
                    <div className="relative">
                      {currentUser.photoURL ? (
                        <>
                          <Image
                            src={currentUser.photoURL}
                            alt="User profile"
                            width={56}
                            height={56}
                            className="w-14 h-14 rounded-full object-cover"
                          />
                          {/* Profile completion arc */}
                          <svg
                            className="absolute -top-1 -left-1 w-16 h-16"
                            style={{ transform: "rotate(-90deg)" }}
                          >
                            <circle
                              cx="32"
                              cy="32"
                              r="26"
                              stroke="#e5e7eb"
                              strokeWidth="3"
                              fill="none"
                            />
                            <circle
                              cx="32"
                              cy="32"
                              r="26"
                              stroke="#ef4444"
                              strokeWidth="3"
                              fill="none"
                              strokeDasharray={
                                getProfileArc(profileCompletion).circumference *
                                1.4
                              }
                              strokeDashoffset={
                                getProfileArc(profileCompletion).offset * 1.4
                              }
                              strokeLinecap="round"
                            />
                          </svg>
                          <div className="absolute -bottom-1 -right-1 bg-white rounded-full px-1.5 py-0.5 text-xs font-bold text-red-500 border border-gray-200 shadow-sm">
                            {profileCompletion}%
                          </div>
                        </>
                      ) : (
                        <HiOutlineUserCircle className="text-5xl text-gray-700" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-base font-semibold text-gray-900 truncate">
                        {currentUser.displayName || currentUser.email}
                      </p>
                      <p className="text-xs text-gray-500 truncate">
                        {currentUserData?.role || "Not Mentioned"}
                      </p>
                      <Link
                        href="/profile"
                        className="text-sm text-blue-600 hover:text-blue-700 font-medium mt-1 inline-block"
                      >
                        View & Update Profile
                      </Link>
                    </div>
                  </div>
                  <SheetClose>
                    <RxCross1 className="text-2xl cursor-pointer text-gray-500 hover:text-gray-700" />
                  </SheetClose>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto">
                {/* Profile Performance */}
                <div className="px-4 py-4 bg-gray-50 border-b border-gray-200">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-sm font-semibold text-gray-900">
                      Your profile performance
                    </h4>
                    <span className="text-xs text-gray-500">Last 90 days</span>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white rounded-lg p-3 text-center border border-gray-200">
                      <p className="text-2xl font-bold text-gray-900">0</p>
                      <p className="text-xs text-gray-600 mt-1">
                        Search Appearances
                      </p>
                      <Link
                        href="#"
                        className="text-xs text-blue-600 hover:text-blue-700 mt-1.5 inline-block"
                      >
                        View all
                      </Link>
                    </div>
                    <div className="bg-white rounded-lg p-3 text-center border border-gray-200">
                      <p className="text-2xl font-bold text-gray-900">0</p>
                      <p className="text-xs text-gray-600 mt-1">
                        Recruiter Actions
                      </p>
                      <Link
                        href="#"
                        className="text-xs text-blue-600 hover:text-blue-700 mt-1.5 inline-block"
                      >
                        View all
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Menu Items */}
                <div className="p-4 border-b space-y-1">
                  <Link href="/blog" className="block">
                    <button className="w-full flex items-center gap-3 px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                      <BookOpen className="h-4 w-4 text-blue-500" />
                      <span>Naukri Blog</span>
                    </button>
                  </Link>

                  <Link href="/settings" className="block">
                    <button className="w-full flex items-center gap-3 px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                      <Settings className="h-4 w-4 text-gray-500" />
                      <span>Settings</span>
                    </button>
                  </Link>

                  <Link href="/faqs" className="block">
                    <button className="w-full flex items-center gap-3 px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                      <HelpCircle className="h-4 w-4 text-gray-500" />
                      <span>FAQs</span>
                    </button>
                  </Link>

                  {currentUserData &&
                    currentUserData.roles.includes("superAdmin") && (
                      <Link href="/admin" className="block">
                        <button className="w-full flex items-center gap-3 px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition-colors border-t border-gray-200 pt-4">
                          <Shield className="h-4 w-4 text-red-500" />
                          <span>Admin Panel</span>
                        </button>
                      </Link>
                    )}

                  {currentUserData &&
                    currentUserData.roles.includes("admin") && (
                      <Link href="/manage-business-profiles" className="block">
                        <button className="w-full flex items-center gap-3 px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                          <Store className="h-4 w-4 text-blue-500" />
                          <span>Manage Stores</span>
                        </button>
                      </Link>
                    )}

                  {currentUserData &&
                    !currentUserData.roles.includes("admin") && (
                      <Link
                        href="/manage-business-profile/userStore"
                        className="block"
                      >
                        <button className="w-full flex items-center gap-3 px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                          <Store className="h-4 w-4 text-green-500" />
                          <span>Manage Store</span>
                        </button>
                      </Link>
                    )}
                </div>

                {/* Services Menu */}
                <ul className="p-4 space-y-4">
                  {megaMenu.map((section, idx) => (
                    <li key={idx}>
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">
                        {section.title}
                      </h4>
                      <ul className="space-y-2 ml-2">
                        {section.items.map((item) => (
                          <li key={item.href}>
                            <Link
                              href={item.href}
                              className="text-sm text-gray-600 hover:text-blue-600 transition-colors block py-1"
                            >
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Logout Button */}
              <div className="p-4 border-t bg-white">
                <button
                  onClick={() => {
                    logout();
                  }}
                  className="w-full flex items-center justify-center gap-3 px-4 py-3 text-sm text-white bg-red-600 hover:bg-red-700 rounded-lg transition-colors"
                >
                  <LogOut className="h-4 w-4" />
                  <span>Logout</span>
                </button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      )}
    </>
  );
}
