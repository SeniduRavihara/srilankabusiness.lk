"use client";

import { logo, placeholderReviewPic } from "@/assets";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { handleUserMessageDelete, logout, updateAsSeen } from "@/firebase/api";
import { useAuth } from "@/hooks/useAuth";
import { useData } from "@/hooks/useData";
import { cn, getTimeDifference } from "@/lib/utils";
import {
  BarChart3,
  ChevronDown,
  Languages,
  LogOut,
  Shield,
  Store,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { IoIosMenu, IoIosNotificationsOutline } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const { currentUser } = useAuth();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMegaOpen, setIsMegaOpen] = useState(false);

  const { currentUserData, setSearchResultStores, userMessages } = useData();

  // derive unseen messages from `userMessages` to avoid unnecessary state updates
  const notSeenMsg = useMemo(
    () => userMessages?.filter((msgObj) => !msgObj.seen) ?? [],
    [userMessages]
  );
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // keep effect to satisfy possible side-effects in future; no local state set here
  }, [userMessages]);

  const handleCreateStoreClick = () => {
    router.push("/manage-business-profile/userStore");
  };

  const handleClickAdminPanel = () => {
    router.push("/admin");
  };

  const hadleLogoClick = () => {
    setSearchResultStores(null);
    router.push("/");
  };

  const handleSeenMessage = () => {
    if (!currentUserData) return;
    setTimeout(async () => {
      await updateAsSeen(currentUserData.id);
    }, 1000);
  };

  return (
    <nav className="w-full fixed bg-white/95 backdrop-blur-sm pt-3 h-[70px] px-4 md:px-5 flex items-center justify-between border-b border-gray-200 shadow-sm z-50">
      <div className="flex items-center gap-2 justify-center">
        {/* ----------------Mobile---------------------- */}
        <div className="flex lg:hidden gap-5">
          <Sheet>
            <SheetTrigger>
              <IoIosMenu className="text-3xl cursor-pointer text-gray-700 hover:text-blue-600 transition-colors" />
            </SheetTrigger>
            <SheetContent className="w-screen">
              <div className="flex flex-col h-full">
                <div className="flex justify-end p-4">
                  <SheetTrigger>
                    <RxCross1 className="text-2xl cursor-pointer text-gray-500 hover:text-gray-700" />
                  </SheetTrigger>
                </div>
                <ul className="flex flex-col gap-8 font-medium items-center justify-center flex-1">
                  <li className="flex items-center justify-center gap-2 cursor-pointer hover:text-blue-600 transition-colors">
                    <Languages size={20} />
                    <span>English</span>
                    <ChevronDown size={16} />
                  </li>
                  <li
                    className={cn(
                      "cursor-pointer hover:text-blue-600 transition-colors",
                      pathname == "/we-are-hiring" &&
                        "text-blue-600 font-semibold"
                    )}
                  >
                    <Link href="/we-are-hiring">We Are Hiring</Link>
                  </li>
                  <li
                    className={cn(
                      "cursor-pointer hover:text-blue-600 transition-colors",
                      pathname == "/investor-page" &&
                        "text-blue-600 font-semibold"
                    )}
                  >
                    <Link href="/investor-page">Investor Relation</Link>
                  </li>
                  <li className="flex items-center justify-center gap-2 cursor-pointer hover:text-blue-600 transition-colors">
                    <Link
                      href="/advertise"
                      className={cn(
                        "flex items-center gap-2",
                        pathname == "/advertise" &&
                          "text-blue-600 font-semibold"
                      )}
                    >
                      <Image
                        src="/assets/img/loaudspeacker.png"
                        alt="advertise"
                        width={20}
                        height={20}
                      />
                      <span>Advertise</span>
                    </Link>
                  </li>
                  <li className="cursor-pointer">
                    <div className="flex flex-col items-center -mt-4">
                      <div className="bg-linear-to-r from-red-500 to-red-600 text-white rounded-lg px-3 py-1 font-semibold text-sm shadow-md">
                        BUSINESS
                      </div>
                      <div className="flex items-center justify-center gap-2 mt-1 text-gray-700">
                        <BarChart3 size={18} />
                        <span>Free Listing</span>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </SheetContent>
          </Sheet>
        </div>
        {/* --------------------------------------------- */}

        <Image
          src={logo}
          alt="Sri Lanka Business Logo"
          width={160}
          height={56}
          className="w-25 h-11 sm:w-40 sm:h-14 cursor-pointer hover:opacity-80 transition-opacity"
          onClick={hadleLogoClick}
        />
      </div>

      {/* Desktop nav: compact links + services mega-menu */}
      <ul className="hidden lg:flex items-center gap-8 font-medium">
        <li
          className={cn(
            "cursor-pointer hover:text-blue-600 transition-colors py-2 px-3 rounded-md",
            pathname == "/jobs" && "text-blue-600"
          )}
        >
          <Link href="/jobs">Jobs</Link>
        </li>
        <li
          className={cn(
            "cursor-pointer hover:text-blue-600 transition-colors py-2 px-3 rounded-md",
            pathname == "/companies" && "text-blue-600"
          )}
        >
          <Link href="/companies">Companies</Link>
        </li>
        <li
          className="relative"
          onMouseEnter={() => setIsMegaOpen(true)}
          onMouseLeave={() => setIsMegaOpen(false)}
        >
          <button
            className="flex items-center gap-2 py-3 px-3 rounded-md text-gray-800 hover:text-blue-600 transition-colors"
            aria-expanded={isMegaOpen}
            aria-haspopup="menu"
          >
            Services
            <ChevronDown size={16} />
          </button>

          {/* Mega menu panel */}
          {isMegaOpen && (
            <div className="absolute left-1/2 top-7 -translate-x-1/2 mt-4 w-[820px] bg-white rounded-xl shadow-xl border border-gray-100 p-6 z-50">
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <h4 className="text-sm font-semibold mb-3 text-gray-900">
                    Resume writing
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="hover:text-gray-900">
                      <Link href="#">Text resume</Link>
                    </li>
                    <li className="hover:text-gray-900">
                      <Link href="#">Visual resume</Link>
                    </li>
                    <li className="hover:text-gray-900">
                      <Link href="#">Resume critique</Link>
                    </li>
                  </ul>

                  <h4 className="text-sm font-semibold mt-6 mb-3 text-gray-900">
                    Find Jobs
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="hover:text-gray-900">
                      <Link href="#">Jobs4u</Link>
                    </li>
                    <li className="hover:text-gray-900">
                      <Link href="#">Priority applicant</Link>
                    </li>
                    <li className="hover:text-gray-900">
                      <Link href="#">Contact us</Link>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-semibold mb-3 text-gray-900">
                    Get recruiter&apos;s attention
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="hover:text-gray-900">
                      <Link href="#">Resume display</Link>
                    </li>
                  </ul>

                  <h4 className="text-sm font-semibold mt-6 mb-3 text-gray-900">
                    Monthly subscriptions
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="hover:text-gray-900">
                      <Link href="#">Basic & premium plans</Link>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-semibold mb-3 text-gray-900">
                    Free resume resources
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="hover:text-gray-900">
                      <Link href="#">Resume maker</Link>
                    </li>
                    <li className="hover:text-gray-900">
                      <Link href="#">Resume quality score</Link>
                    </li>
                    <li className="hover:text-gray-900">
                      <Link href="#">Resume samples</Link>
                    </li>
                    <li className="hover:text-gray-900">
                      <Link href="#">Job letter samples</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </li>

        {/* small call-to-action on desktop */}
        <li>
          <Link
            href="/advertise"
            className="flex items-center gap-2 py-2 px-3 rounded-md text-gray-700 hover:text-blue-600 transition-colors"
          >
            <Image
              src="/assets/img/loaudspeacker.png"
              alt="advertise"
              width={20}
              height={20}
            />
            <span>Advertise</span>
          </Link>
        </li>
      </ul>

      <div className="flex items-center justify-between gap-3 md:gap-5">
        <div className="flex mt-1 items-center justify-center">
          {currentUser && currentUserData?.haveStore && (
            <Sheet onOpenChange={handleSeenMessage}>
              <SheetTrigger>
                <div className="relative p-2 rounded-full hover:bg-gray-100 transition-colors">
                  <IoIosNotificationsOutline
                    className="text-2xl cursor-pointer text-gray-700 hover:text-blue-600 transition-colors"
                    onClick={() => currentUser?.reload()}
                  />
                  {notSeenMsg && notSeenMsg.length > 0 && (
                    <div className="absolute -top-1 -right-1 flex items-center justify-center rounded-full w-5 h-5 bg-red-500 text-white text-xs font-bold shadow-md">
                      {notSeenMsg.length > 9 ? "9+" : notSeenMsg.length}
                    </div>
                  )}
                </div>
              </SheetTrigger>
              <SheetContent className="w-full max-w-md sm:max-w-lg">
                <div className="p-4 border-b border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Notifications
                  </h3>
                </div>
                <div className="overflow-y-auto max-h-[70vh]">
                  {userMessages && userMessages.length > 0 ? (
                    <ul className="divide-y divide-gray-200">
                      {userMessages.map((messageObj, index) => (
                        <li
                          className={cn(
                            "p-4 hover:bg-gray-50 transition-colors",
                            !messageObj.seen &&
                              "bg-blue-50/50 border-l-4 border-blue-500"
                          )}
                          key={index}
                        >
                          <div className="flex items-start space-x-3">
                            <Image
                              src={messageObj.imageUrl || placeholderReviewPic}
                              alt="profile"
                              width={48}
                              height={48}
                              className="w-12 h-12 rounded-full object-cover"
                            />
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between">
                                <p className="text-sm font-medium text-gray-900 truncate">
                                  {messageObj.fromName}
                                </p>
                                <p className="text-xs text-gray-500">
                                  {getTimeDifference(
                                    messageObj.createdAt.toDate()
                                  )}
                                </p>
                              </div>
                              <p className="text-sm text-gray-600 mt-1">
                                {messageObj.message}
                              </p>
                              <p className="text-xs text-gray-500 mt-1">
                                {messageObj.phone}
                              </p>
                            </div>
                            <button
                              onClick={() =>
                                handleUserMessageDelete(
                                  currentUser.uid,
                                  messageObj.id
                                )
                              }
                              className="text-gray-400 hover:text-red-500 transition-colors"
                            >
                              <RxCross1 size={16} />
                            </button>
                          </div>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <div className="p-8 text-center text-gray-500">
                      <IoIosNotificationsOutline className="mx-auto h-12 w-12 text-gray-400" />
                      <h3 className="mt-2 text-sm font-medium text-gray-900">
                        No notifications
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">
                        You&apos;re all caught up!
                      </p>
                    </div>
                  )}
                </div>
              </SheetContent>
            </Sheet>
          )}
        </div>
        {!currentUser ? (
          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="px-4 py-2 rounded-full border border-gray-300 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Login
            </Link>

            <Link
              href="/signup"
              className="px-4 py-2 rounded-full text-sm text-white bg-linear-to-r from-blue-600 to-blue-700 shadow-sm hover:opacity-95 transition-all"
            >
              Register
            </Link>

            <div className="hidden md:flex items-center pl-4 border-l border-gray-200 text-sm text-gray-600 gap-2">
              <span>For employers</span>
              <ChevronDown size={14} />
            </div>
          </div>
        ) : (
          <div className="mt-1 relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex ring-0 outline-none items-center justify-center p-1 rounded-full hover:bg-gray-100 transition-colors"
            >
              <div>
                {currentUser.photoURL ? (
                  <Image
                    src={currentUser.photoURL}
                    alt="User profile"
                    width={40}
                    height={40}
                    className="w-10 h-10 rounded-full object-cover ring-2 ring-gray-200 hover:ring-blue-300 transition-colors"
                  />
                ) : (
                  <HiOutlineUserCircle className="text-3xl cursor-pointer text-gray-700 hover:text-blue-600 transition-colors" />
                )}
              </div>
            </button>

            {isDropdownOpen && (
              <div className="absolute right-0 mt-3 w-56 bg-white rounded-xl shadow-xl z-50 border border-gray-200 overflow-hidden">
                <div className="px-4 py-3 border-b border-gray-200">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    {currentUser.displayName || currentUser.email}
                  </p>
                  <p className="text-xs text-gray-500 truncate">
                    {currentUser.email}
                  </p>
                </div>
                <div className="py-1">
                  {currentUserData &&
                    currentUserData.roles.includes("superAdmin") && (
                      <button
                        onClick={() => {
                          handleClickAdminPanel();
                          setIsDropdownOpen(false);
                        }}
                        className="flex items-center gap-3 w-full px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                      >
                        <Shield className="h-4 w-4 text-red-500" />
                        <span>Admin Panel</span>
                      </button>
                    )}

                  {currentUserData &&
                    currentUserData.roles.includes("admin") && (
                      <button
                        onClick={() => {
                          router.push("/manage-business-profiles");
                          setIsDropdownOpen(false);
                        }}
                        className="flex items-center gap-3 w-full px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                      >
                        <Store className="h-4 w-4 text-blue-500" />
                        <span>Manage Stores</span>
                      </button>
                    )}

                  {currentUserData &&
                    !currentUserData.roles.includes("admin") && (
                      <button
                        onClick={() => {
                          handleCreateStoreClick();
                          setIsDropdownOpen(false);
                        }}
                        className="flex items-center gap-3 w-full px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                      >
                        <Store className="h-4 w-4 text-green-500" />
                        <span>Manage Store</span>
                      </button>
                    )}

                  <div className="border-t border-gray-200 my-1"></div>

                  <button
                    onClick={() => {
                      logout();
                      setIsDropdownOpen(false);
                    }}
                    className="flex items-center gap-3 w-full px-4 py-3 text-sm text-red-600 hover:bg-red-50 transition-colors"
                  >
                    <LogOut className="h-4 w-4" />
                    <span>Log out</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
