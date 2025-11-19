"use client";

import CarouselAdds from "@/components/CarouselAdds";
import AuthModal from "@/components/home/auth-modal";
import LocationPickerModal from "@/components/home/location-picker-modal";
import Navbar from "@/components/home/navbar";
import ProfileSidebar from "@/components/home/profile-sidebar";
import TopBanner from "@/components/home/top-banner";
import CategoriesArea from "@/components/sections/categories-area";
import CatogarySlider from "@/components/sections/catogary-slider";
import PopularBrandsArea from "@/components/sections/popular-brands-area";
import SearchArea from "@/components/sections/search-area";
import ServicesArea from "@/components/sections/services-area";
import SocialMediaArea from "@/components/sections/social-media-area";
import { useState } from "react";

export default function HomePage() {
  const [isLoggedInView, setIsLoggedInView] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isLocationPickerOpen, setIsLocationPickerOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <div className="fixed top-0 left-0 right-0 z-50">
        <TopBanner />
        <div className="fixed top-7 left-0 right-0 w-full">
          <Navbar
            isLoggedInView={isLoggedInView}
            onSidebarToggle={setIsSidebarOpen}
            onLocationPickerToggle={setIsLocationPickerOpen}
            onAuthModalToggle={setIsAuthModalOpen}
          />
        </div>
      </div>

      {/* Profile Sidebar - at page level to avoid stacking context issues */}
      <ProfileSidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      {/* Location Picker Modal - at page level to render above everything */}
      <LocationPickerModal
        isOpen={isLocationPickerOpen}
        onClose={() => setIsLocationPickerOpen(false)}
      />

      {/* Auth Modal - at page level */}
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />

      {/* Main content area */}
      <div className="mt-24">
        <SearchArea />
        <CarouselAdds />
        <CategoriesArea />
        <CatogarySlider />
        <ServicesArea />
        <PopularBrandsArea />
        <SocialMediaArea />
      </div>
    </div>
  );
}
