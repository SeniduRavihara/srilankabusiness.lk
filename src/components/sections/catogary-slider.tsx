"use client";

import { useData } from "@/hooks/useData";
import Image from "next/image";
import { MdArrowForwardIos } from "react-icons/md";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CatogarySlider = () => {
  const { sectionAdds, sectionStaticAdds } = useData();

  const handleSliderImageClick = (index: number) => {
    if (sectionAdds && sectionAdds[index]) {
      const url = sectionAdds[index].link;
      if (url.startsWith("http") || url.startsWith("https")) {
        window.open(url, "_blank");
      }
    }
  };

  const handleStaticImageClick = (link: string) => {
    if (link.startsWith("http") || link.startsWith("https")) {
      window.open(link, "_blank");
    }
  };

  if (!sectionAdds && !sectionStaticAdds) {
    return (
      <div className="w-full flex flex-col bg-slate-100 justify-center items-center md:flex-row gap-2 my-10 px-2 md:px-10 md:h-[400px]">
        {/* Carousel skeleton */}
        <div className="w-full lg:w-[65%] h-[250px] flex items-center justify-center">
          <div className="animate-pulse bg-gray-300 rounded-xl h-[200px] w-full"></div>
        </div>

        {/* Static images skeleton */}
        <div className="w-full md:w-[60%] flex gap-2 h-[200px]">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="w-[25%] relative flex">
              <div className="animate-pulse bg-gray-300 rounded-xl w-full h-full"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col bg-slate-100 justify-center items-center md:flex-row gap-2 my-10 px-2 md:px-10 md:h-[400px]">
      <div className="w-full lg:w-[65%] h-[250px] flex items-center justify-center">
        <Carousel
          showStatus={false}
          interval={3000}
          infiniteLoop
          stopOnHover={false}
          transitionTime={800}
          showThumbs={false}
          onClickItem={(index) => handleSliderImageClick(index)}
        >
          {sectionAdds?.map((image, index) => (
            <div key={image.id || index}>
              <Image
                src={image.imageUrl}
                alt="Advertisement"
                width={400}
                height={200}
                className="h-[200px] w-full object-cover rounded-xl"
              />
            </div>
          ))}
        </Carousel>
      </div>

      <div className="w-full md:w-[60%] flex gap-2 h-[200px]">
        {sectionStaticAdds?.slice(0, 4).map((addObj, index) => (
          <div key={addObj.id || index} className="w-[25%] relative flex">
            <div
              onClick={() => handleStaticImageClick(addObj.link)}
              className="absolute w-6 h-7 cursor-pointer backdrop-blur-xl text-white bottom-8 flex items-center justify-center rounded-r-lg"
            >
              <MdArrowForwardIos />
            </div>
            <Image
              src={addObj.imageUrl}
              alt="Advertisement"
              width={200}
              height={200}
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CatogarySlider;
