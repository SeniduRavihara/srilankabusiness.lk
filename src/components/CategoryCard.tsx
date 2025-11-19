const CategoryCard = ({ label, icon }: { label: string; icon: string }) => {
  return (
    <div>
      <div className="hidden lg:flex flex-col text-center justify-center float-left mt-12">
        <div className="w-20 h-20 text-center bg-white flex items-center justify-center border-2 border-[#34343439] rounded-lg">
          <img
            src={icon}
            className="w-10 flex items-center justify-center"
            alt=""
          />
        </div>
        <div className="mt-2.5 font-medium text-xs xsm:text-sm sm:text-base">
          {label}
        </div>
      </div>

      <div className="lg:hidden text-center flex flex-col items-center mt-5">
        <div className="p-1 w-24 h-24 text-center flex-col bg-white flex items-center justify-center border-2 border-[#34343439] rounded-lg">
          <img
            src={icon}
            className="w-7 xsm:w-10 flex items-center justify-center"
            alt=""
          />
          <div className="mt-2.5 font-medium text-sm">{label}</div>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
