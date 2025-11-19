"use client";

import { useRef } from "react";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import Image from "next/image";
import "./ImageSlider.css";

const ImageSlider = ({
  images,
}: {
  images: Array<{ imageUrl: string; id: string; link: string }>;
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleImageClick = (link: string) => {
    if (link.startsWith("http") || link.startsWith("https")) {
      window.open(link, "_blank");
    }
  };

  const handleArrowClick = (direction: string) => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const firstCard = carousel.querySelector(
      ".image-slider-card"
    ) as HTMLElement;
    if (!firstCard) return;

    const firstCardWidth = firstCard.offsetWidth;
    carousel.scrollLeft +=
      direction === "left" ? -firstCardWidth : firstCardWidth;
  };

  return (
    <div
      className="image-slider-wrapper w-full flex items-center gap-10 justify-between relative"
      ref={wrapperRef}
    >
      <div
        onClick={() => handleArrowClick("left")}
        className="w-10 h-10 flex items-center absolute z-10 bg-white left-0 cursor-pointer justify-center rounded-r-2xl shadow-lg hover:bg-gray-50 transition-colors"
      >
        <MdArrowBackIos className="text-xl ml-2 text-black" />
      </div>

      <div className="image-slider-carousel" ref={carouselRef}>
        {images.map(({ imageUrl, id, link }) => (
          <div
            className="image-slider-card"
            key={id}
            onClick={() => handleImageClick(link)}
          >
            <Image
              src={imageUrl}
              alt="Popular brand"
              width={200}
              height={200}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        ))}
      </div>

      <div
        onClick={() => handleArrowClick("right")}
        className="w-10 h-10 flex items-center absolute z-10 bg-white right-0 cursor-pointer justify-center rounded-l-2xl shadow-lg hover:bg-gray-50 transition-colors"
      >
        <MdArrowForwardIos className="text-xl" />
      </div>
    </div>
  );
};

export default ImageSlider;
