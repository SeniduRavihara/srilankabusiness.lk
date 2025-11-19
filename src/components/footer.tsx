import {
  americanExpress,
  fb,
  insta,
  linkedin,
  master,
  tiktok,
  visa,
  web,
} from "@/assets";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full p-10">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <ul>
          <h1 className="text-orange-500 font-semibold mb-2 text-lg">
            Customer Care
          </h1>
          <li>
            <Link href="#" className="hover:text-orange-400 transition-colors">
              About Us
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:text-orange-400 transition-colors">
              Investor Relations
            </Link>
          </li>
          <li>
            <Link
              href="/public/we-are-hiring"
              className="hover:text-orange-400 transition-colors"
            >
              We are Hiring
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:text-orange-400 transition-colors">
              Customer Care
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:text-orange-400 transition-colors">
              Free Listing
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:text-orange-400 transition-colors">
              What&apos;s New
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:text-orange-400 transition-colors">
              Report Bug
            </Link>
          </li>
        </ul>

        <ul>
          <h1 className="text-orange-500 font-semibold mb-2 text-lg">
            Sri Lanka Business
          </h1>
          <li>
            <Link href="#" className="hover:text-orange-400 transition-colors">
              About
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:text-orange-400 transition-colors">
              Careers
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:text-orange-400 transition-colors">
              Stores
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:text-orange-400 transition-colors">
              Donates
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:text-orange-400 transition-colors">
              Blog
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:text-orange-400 transition-colors">
              Terms & Conditions
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:text-orange-400 transition-colors">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:text-orange-400 transition-colors">
              Mobile App
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:text-orange-400 transition-colors">
              PayLater Edu
            </Link>
          </li>
        </ul>

        <div>
          <h1 className="text-orange-500 font-semibold mb-2 text-lg">
            Payment Methods
          </h1>
          <div className="flex gap-2 mt-2">
            <img src={visa.src} className="w-12 h-auto" alt="Visa" />
            <img src={master.src} className="w-12 h-auto" alt="MasterCard" />
            <img
              src={americanExpress.src}
              className="w-12 h-auto"
              alt="American Express"
            />
          </div>

          <h1 className="text-xl font-semibold mt-3">Help Desk</h1>

          <a
            className="hover:text-orange-400 transition-colors"
            href="tel:0113184000"
          >
            <p className="text-red-500 text-lg font-semibold">0113 184 000</p>
          </a>

          <h1 className="text-xl font-semibold mt-2">COMPLAIN</h1>
          <a
            className="hover:text-orange-400 transition-colors"
            href="tel:0775124000"
          >
            <p className="text-red-500 text-lg font-semibold">0775 124 000</p>
          </a>

          <div className="mt-4">
            <a
              href="mailto:info@srilankabusiness.lk"
              className="hover:text-orange-400 transition-colors"
            >
              info@srilankabusiness.lk
            </a>
            <br />
            <a
              href="https://srilankabusiness.lk/"
              target="_blank"
              className="hover:text-orange-400 transition-colors"
            >
              www.srilankabusiness.lk
            </a>
          </div>
        </div>

        <div>
          <h1 className="text-orange-500 font-semibold mb-2 text-lg">
            Exclusive Deals and Offers!
          </h1>
          <div className="w-[170px] h-[170px] bg-gray-700 rounded-lg flex items-center justify-center">
            <span className="text-gray-400">QR Code</span>
          </div>

          <h1 className="text-orange-500 font-semibold mt-4">Follow Us</h1>
          <ul className="flex gap-2 mt-2">
            <li className="w-8 h-8">
              <a
                href="https://www.facebook.com/srilankabusiness.lk"
                target="_blank"
                className="block hover:opacity-80 transition-opacity"
              >
                <img
                  src={fb.src}
                  alt="Facebook"
                  className="w-full h-full object-contain"
                />
              </a>
            </li>
            <li className="w-8 h-8">
              <a
                href="https://www.instagram.com/srilankabusiness.lk/"
                target="_blank"
                className="block hover:opacity-80 transition-opacity"
              >
                <img
                  src={insta.src}
                  alt="Instagram"
                  className="w-full h-full object-contain"
                />
              </a>
            </li>
            <li className="w-8 h-8">
              <a
                href="https://www.linkedin.com/in/srilankabusiness/"
                target="_blank"
                className="block hover:opacity-80 transition-opacity"
              >
                <img
                  src={linkedin.src}
                  alt="LinkedIn"
                  className="w-full h-full object-contain"
                />
              </a>
            </li>
            <li className="w-8 h-8">
              <a
                href="https://www.tiktok.com/@srilankabusiness.lk"
                target="_blank"
                className="block hover:opacity-80 transition-opacity"
              >
                <img
                  src={tiktok.src}
                  alt="TikTok"
                  className="w-full h-full object-contain"
                />
              </a>
            </li>
            <li className="w-8 h-8">
              <a
                href="https://srilankabusiness.lk/"
                className="block hover:opacity-80 transition-opacity"
              >
                <img
                  src={web.src}
                  alt="Website"
                  className="w-full h-full object-contain"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
