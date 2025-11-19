"use client";

import { useData } from "@/hooks/useData";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CarouselAdds = () => {
  const { sliderAdds } = useData();
  const router = useRouter();

  const handleImageClick = (index: number) => {
    if (sliderAdds && sliderAdds[index].link) {
      const url = sliderAdds[index].link;
      if (url.startsWith("http") || url.startsWith("https")) {
        window.open(url, "_blank");
      } else {
        router.push(url);
      }
    }
  };

  const CarouselSkeleton = () => (
    <div className="w-full -mt-5 lg:mt-0">
      <div className="animate-pulse">
        <div className="bg-gray-300 rounded-lg w-full h-64"></div>
      </div>
    </div>
  );

  if (!sliderAdds) {
    return (
      <div className="w-full -mt-5 lg:mt-0">
        <div className="animate-pulse">
          <div className="bg-gray-300 rounded-lg w-full h-[400px]"></div>
        </div>
      </div>
    );
  }

  if (sliderAdds.length === 0) {
    return (
      <div className="w-full -mt-5 lg:mt-0 flex items-center justify-center py-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="w-full -mt-5 lg:mt-0">
      <Carousel
        showStatus={false}
        autoPlay
        interval={3000}
        infiniteLoop
        showArrows={false}
        stopOnHover={false}
        showIndicators={false}
        transitionTime={800}
        showThumbs={false}
        onClickItem={(index) => handleImageClick(index)}
      >
        {sliderAdds.map((sliderAdd, index) => (
          <div key={sliderAdd.id || index} className="cursor-pointer">
            <Image
              alt="Advertisement"
              src={sliderAdd.imageUrl}
              width={1200}
              height={400}
              className="w-full h-auto"
              priority={index === 0}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselAdds;
