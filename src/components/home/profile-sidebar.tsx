"use client";

import { logout } from "@/firebase/api";
import { useAuth } from "@/hooks/useAuth";
import {
  BookMarked,
  BookOpen,
  Briefcase,
  Building,
  HelpCircle,
  Home,
  LogOut,
  Settings,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { HiOutlineUserCircle } from "react-icons/hi2";

interface ProfileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const ProfileSidebar = ({ isOpen, onClose }: ProfileSidebarProps) => {
  const { currentUser } = useAuth();
  const router = useRouter();

  const profileCompletion = 23;

  const handleLogout = async () => {
    await logout();
    onClose();
    router.push("/");
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed z-999 inset-0 bg-black/50 transition-opacity duration-300"
          style={{ zIndex: 9998 }}
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed right-0 top-0 h-screen w-full max-w-md bg-gray-50 shadow-2xl rounded-l-3xl transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ zIndex: 9999 }}
      >
        {/* Header with close button */}
        <div className="flex items-center  rounded-tl-3xl justify-between p-6 border-b border-gray-200 bg-white">
          <h2 className="text-xl font-semibold text-gray-900">Menu</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <X size={24} className="text-gray-700" />
          </button>
        </div>

        {/* Scrollable content */}
        <div className="overflow-y-auto h-[calc(100vh-80px)]">
          {/* Profile Section */}
          {currentUser ? (
            <>
              <div className="px-6 py-6 bg-white mb-4">
                <div className="flex items-start gap-4 mb-4">
                  <div className="relative">
                    {currentUser.photoURL ? (
                      <div className="relative w-16 h-16">
                        {/* Profile Image */}
                        <Image
                          src={currentUser.photoURL}
                          alt="User profile"
                          width={64}
                          height={64}
                          className="w-16 h-16 rounded-full object-cover"
                        />
                        {/* Completion Arc SVG Overlay */}
                        <svg
                          className="absolute top-0 left-0 w-16 h-16 -rotate-90"
                          viewBox="0 0 64 64"
                        >
                          <circle
                            cx="32"
                            cy="32"
                            r="30"
                            fill="none"
                            stroke="#E5E7EB"
                            strokeWidth="3"
                          />
                          <circle
                            cx="32"
                            cy="32"
                            r="30"
                            fill="none"
                            stroke="#EF4444"
                            strokeWidth="3"
                            strokeDasharray={`${
                              (profileCompletion / 100) * 188.4
                            } 188.4`}
                            strokeLinecap="round"
                          />
                        </svg>
                        {/* Percentage Badge */}
                        <div className="absolute -bottom-1 -right-1 bg-white rounded-full px-2 py-0.5 text-xs font-bold text-red-500 border-2 border-red-500">
                          {profileCompletion}%
                        </div>
                      </div>
                    ) : (
                      <div className="relative w-16 h-16">
                        <HiOutlineUserCircle className="text-6xl text-gray-400" />
                      </div>
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="text-base font-semibold text-gray-900">
                      {currentUser.displayName ||
                        currentUser.email?.split("@")[0]}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">Not Mentioned</p>
                    <Link
                      href="/profile"
                      className="text-sm text-blue-600 hover:text-blue-700 font-semibold mt-2 inline-block"
                      onClick={onClose}
                    >
                      View & Update Profile
                    </Link>
                  </div>
                </div>
              </div>

              {/* What are you missing Section */}
              <div className="px-6 py-6 bg-white mb-4">
                <h3 className="text-sm font-semibold text-gray-900 mb-4">
                  What are you missing?
                </h3>
                <div className="space-y-3 mb-4">
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5"></div>
                    <p className="text-sm text-gray-700">Add resume</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5"></div>
                    <p className="text-sm text-gray-700">Add key skills</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5"></div>
                    <p className="text-sm text-gray-700">Add employment</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5"></div>
                    <p className="text-sm text-gray-700">Add education</p>
                  </div>
                </div>
                <button className="w-full px-4 py-2.5 bg-red-500 text-white text-sm font-semibold rounded-full hover:bg-red-600 transition-colors">
                  Complete profile
                </button>
              </div>

              {/* Profile Performance */}
              <div className="px-6 py-6 bg-white mb-4">
                <h3 className="text-sm font-semibold text-gray-900 mb-2">
                  Your profile performance
                </h3>
                <p className="text-xs text-gray-500 mb-4">Last 90 days</p>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-gray-50 rounded-lg p-4 text-center border border-gray-200">
                    <p className="text-2xl font-bold text-gray-900">0</p>
                    <p className="text-xs text-gray-600 mt-1">
                      Search Appearances
                    </p>
                    <Link
                      href="#"
                      className="text-xs text-blue-600 hover:text-blue-700 mt-2 inline-block font-medium"
                      onClick={onClose}
                    >
                      View all
                    </Link>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 text-center border border-gray-200">
                    <p className="text-2xl font-bold text-gray-900">0</p>
                    <p className="text-xs text-gray-600 mt-1">
                      Recruiter Actions
                    </p>
                    <Link
                      href="#"
                      className="text-xs text-blue-600 hover:text-blue-700 mt-2 inline-block font-medium"
                      onClick={onClose}
                    >
                      View all
                    </Link>
                  </div>
                </div>
              </div>

              {/* Menu Items for logged in users */}
              <nav className="px-6 py-4 bg-white mb-4">
                <Link
                  href="/my-home"
                  className="flex items-center gap-3 px-3 py-2.5 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors mb-1"
                  onClick={onClose}
                >
                  <Home className="h-5 w-5 text-gray-500" />
                  <span className="text-sm font-medium">My home</span>
                </Link>

                <Link
                  href="/jobs"
                  className="flex items-center gap-3 px-3 py-2.5 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors mb-1"
                  onClick={onClose}
                >
                  <Briefcase className="h-5 w-5 text-gray-500" />
                  <span className="text-sm font-medium">Jobs</span>
                </Link>

                <Link
                  href="/companies"
                  className="flex items-center gap-3 px-3 py-2.5 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors mb-1"
                  onClick={onClose}
                >
                  <Building className="h-5 w-5 text-gray-500" />
                  <span className="text-sm font-medium">Companies</span>
                </Link>

                <Link
                  href="/blogs"
                  className="flex items-center gap-3 px-3 py-2.5 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                  onClick={onClose}
                >
                  <BookMarked className="h-5 w-5 text-gray-500" />
                  <span className="text-sm font-medium">Blogs</span>
                </Link>
              </nav>

              {/* How Naukri works Section */}
              <div className="px-6 py-3 bg-white mb-4">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
                  How Naukri works?
                </p>
                <Link
                  href="/naukri-blog"
                  className="flex items-center gap-3 px-3 py-2.5 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                  onClick={onClose}
                >
                  <BookOpen className="h-5 w-5 text-blue-500" />
                  <span className="text-sm font-medium">Naukri Blog</span>
                </Link>
              </div>

              {/* Settings and Logout */}
              <nav className="px-6 py-4 bg-white">
                <Link
                  href="/settings"
                  className="flex items-center gap-3 px-3 py-2.5 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors mb-1"
                  onClick={onClose}
                >
                  <Settings className="h-5 w-5 text-gray-500" />
                  <span className="text-sm font-medium">Settings</span>
                </Link>

                <Link
                  href="/faqs"
                  className="flex items-center gap-3 px-3 py-2.5 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors mb-3"
                  onClick={onClose}
                >
                  <HelpCircle className="h-5 w-5 text-gray-500" />
                  <span className="text-sm font-medium">FAQs</span>
                </Link>

                <div className="border-t border-gray-200 pt-3">
                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-3 px-3 py-2.5 text-red-600 hover:bg-red-50 rounded-lg transition-colors w-full"
                  >
                    <LogOut className="h-5 w-5" />
                    <span className="text-sm font-medium">Logout</span>
                  </button>
                </div>
              </nav>
            </>
          ) : (
            // Logged out state
            <div className="px-6 py-12 text-center">
              <HiOutlineUserCircle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-600 mb-6">
                Please login to access your profile
              </p>
              <Link
                href="/login"
                className="block w-full px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium mb-2"
                onClick={onClose}
              >
                Login
              </Link>
              <Link
                href="/signup"
                className="block w-full px-6 py-2 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-medium"
                onClick={onClose}
              >
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ProfileSidebar;
