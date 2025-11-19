"use client";

import Navbar from "@/components/home/navbar";
import ProfileSidebar from "@/components/home/profile-sidebar";
import TopBanner from "@/components/home/top-banner";
import { useState } from "react";

export default function HomePage() {
  const [isLoggedInView, setIsLoggedInView] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="bg-linear-to-br from-blue-50 to-blue-100 min-h-screen">
      <div className="fixed top-0 left-0 right-0 z-50">
        <TopBanner />
        <div className="fixed top-7 left-0 right-0 w-full">
          <Navbar 
            isLoggedInView={isLoggedInView} 
            onSidebarToggle={setIsSidebarOpen}
          />
        </div>
      </div>

      {/* Profile Sidebar - at page level to avoid stacking context issues */}
      <ProfileSidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      {/* Demo Toggle Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => setIsLoggedInView(!isLoggedInView)}
          className="px-6 py-3 bg-white border-2 border-blue-600 text-blue-600 font-semibold rounded-full shadow-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105"
        >
          {isLoggedInView ? "View as Logged Out" : "View as Logged In"}
        </button>
      </div>

      {/* Main content area */}
      <div className="pt-32 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Welcome to Sri Lanka Business
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            Toggle the button in the bottom-right corner to see the navbar in
            different states
          </p>

          <div className="bg-white rounded-lg shadow-lg p-8 mt-12 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Navbar States:
            </h2>
            <ul className="text-left space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">1.</span>
                <span>
                  <strong>Logged Out:</strong> Shows Login, Register, and For
                  Employers buttons
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">2.</span>
                <span>
                  <strong>Logged In:</strong> Shows search bar, notifications,
                  naukri 360 button, and profile menu
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">3.</span>
                <span>
                  <strong>Badges:</strong> Red badges appear on Jobs and Services
                  when logged in
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
