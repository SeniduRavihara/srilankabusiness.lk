import { TypeAnimation } from "react-type-animation";

const SearchArea = () => {
  return (
    <div className="flex w-full flex-col items-center gap-4 justify-center lg:mb-5 mb-[30px] pt-8">
      <h2 className="font-bold text-2xl lg:text-3xl text-center">
        Search across &apos; thousands &apos;
        <span className="font-extrabold">+</span>
        <span className="text-blue-600 ml-1">
          <TypeAnimation
            sequence={["Businesses", 3000, " Product and Services", 3000]}
            wrapper="span"
            speed={1}
            cursor={false}
            deletionSpeed={40}
            repeat={Infinity}
          />
        </span>
      </h2>
    </div>
  );
};

export default SearchArea;
