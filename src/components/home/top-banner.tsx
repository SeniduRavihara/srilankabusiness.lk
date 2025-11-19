import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTikTok,
} from "react-icons/ai";

const TopBanner = () => {
  return (
    <div className="w-full pt-[7px] pb-[7px] fixed top-0 left-0 bg-linear-to-r from-[#C69F02] via-[#F17E00] to-[#E31145] shadow-lg" style={{ zIndex: 1 }}>
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        {/* Contact Info */}
        <div className="text-xs sm:text-sm text-white">
          <a
            href="tel:0113184000"
            className="hover:text-yellow-200 transition-all duration-300 hover:scale-101 inline-block"
          >
            0113 184 000
          </a>
          &nbsp; |&nbsp; &nbsp;
          <a
            href="mailto:info@srilankabusiness.lk"
            className="hover:text-yellow-200 transition-all duration-300 hover:scale-101 inline-block hover:underline decoration-2 underline-offset-2"
          >
            info@srilankabusiness.lk
          </a>
        </div>

        {/* Social Media Icons */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="https://www.facebook.com/srilankabusiness.lk"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-300 transition-all duration-300 p-1 rounded hover:scale-110  group"
          >
            <AiFillFacebook
              size={18}
              className="sm:w-5 sm:h-5 group-hover:drop-shadow-sm"
            />
          </a>

          <a
            href="https://www.tiktok.com/@srilankabusiness.lk"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-pink-300 transition-all duration-300 p-1 rounded hover:scale-110  group"
          >
            <AiFillTikTok
              size={18}
              className="sm:w-5 sm:h-5 group-hover:drop-shadow-sm"
            />
          </a>

          <a
            href="https://www.instagram.com/srilankabusiness.lk/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-pink-400 transition-all duration-300 p-1 rounded hover:scale-110  group"
          >
            <AiFillInstagram
              size={18}
              className="sm:w-5 sm:h-5 group-hover:drop-shadow-sm"
            />
          </a>

          <a
            href="https://www.linkedin.com/in/srilankabusiness/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 transition-all duration-300 p-1 rounded hover:scale-110  group"
          >
            <AiFillLinkedin
              size={18}
              className="sm:w-5 sm:h-5 group-hover:drop-shadow-sm"
            />
          </a>
        </div>
      </div>
    </div>
  );
};
export default TopBanner;
