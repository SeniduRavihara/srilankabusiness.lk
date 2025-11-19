"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { appStore, fb, insta, linkedin, playStore, tiktok } from "@/assets";

const SkeletonLoader = () => (
  <div className="py-5 flex flex-col gap-5 md:flex-row items-center justify-between px-3 md:px-10">
    <div className="social-links">
      <div className="text-lg font-medium mb-3 text-center md:text-left bg-gray-300 h-6 w-32 rounded animate-pulse mx-auto md:mx-0"></div>
      <div className="flex gap-4 justify-center md:justify-start">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className="w-10 h-10 bg-gray-300 rounded animate-pulse"
          ></div>
        ))}
      </div>
    </div>
    <div className="app-store-links flex gap-4">
      <div className="w-30 h-10 bg-gray-300 rounded animate-pulse"></div>
      <div className="w-30 h-10 bg-gray-300 rounded animate-pulse"></div>
    </div>
  </div>
);

const SocialMediaArea = ({
  facebookUrl = "https://www.facebook.com/srilankabusiness.lk",
  linkedinUrl = "https://www.linkedin.com/in/srilankabusiness/",
  youtubeUrl = "test",
  twitterUrl = "test",
  instagramUrl = "https://www.instagram.com/srilankabusiness.lk/",
  tiktokUrl = "https://Www.tiktok.com/@srilankabusiness.lk",
}: {
  facebookUrl?: string;
  linkedinUrl?: string;
  youtubeUrl?: string;
  twitterUrl?: string;
  instagramUrl?: string;
  tiktokUrl?: string;
}) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for demo purposes
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <SkeletonLoader />;
  }

  return (
    <div className="py-5 flex flex-col gap-5 md:flex-row items-center justify-between px-3 md:px-10">
      <div className="social-links">
        {(facebookUrl ||
          linkedinUrl ||
          youtubeUrl ||
          twitterUrl ||
          instagramUrl) && (
          <div className="text-lg font-medium mb-3 text-center md:text-left">
            Follow us On
          </div>
        )}
        <div className="flex gap-4 justify-center md:justify-start">
          {facebookUrl && (
            <Link href={facebookUrl} target="_blank" className="social-link">
              <Image
                src={fb}
                alt="Facebook"
                width={40}
                height={40}
                className="hover:scale-110 transition-transform"
              />
            </Link>
          )}

          {instagramUrl && (
            <Link href={instagramUrl} target="_blank" className="social-link">
              <Image
                src={insta}
                alt="Instagram"
                width={40}
                height={40}
                className="hover:scale-110 transition-transform"
              />
            </Link>
          )}

          {linkedinUrl && (
            <Link href={linkedinUrl} target="_blank" className="social-link">
              <Image
                src={linkedin}
                alt="LinkedIn"
                width={40}
                height={40}
                className="hover:scale-110 transition-transform"
              />
            </Link>
          )}

          {tiktokUrl && (
            <Link href={tiktokUrl} target="_blank" className="social-link">
              <Image
                src={tiktok}
                alt="TikTok"
                width={40}
                height={40}
                className="hover:scale-110 transition-transform"
              />
            </Link>
          )}
        </div>
      </div>
      <div className="app-store-links flex gap-4">
        <Link href="#" className="hover:scale-105 transition-transform">
          <Image
            src={appStore}
            alt="Download on App Store"
            width={120}
            height={40}
          />
        </Link>
        <Link href="#" className="hover:scale-105 transition-transform">
          <Image
            src={playStore}
            alt="Get it on Google Play"
            width={120}
            height={40}
          />
        </Link>
      </div>
    </div>
  );
};

export default SocialMediaArea;
