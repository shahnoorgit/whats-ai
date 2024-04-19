import { footerLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className=" flex flex-col text-black mt-5 border-t border-gray-300">
      <div className=" flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <div className="flex justify-start items-start flex-col gap-6">
          <Image
            src="/logo.svg"
            alt="logo footer"
            className=" object-contain"
            width={118}
            height={18}
          />
          <p className="text-base text-gray-700">
            CarHub 2024 <br />
            all rights reserved &copy;
          </p>
        </div>
        <div className="footer__links">
          {footerLinks.map((link) => (
            <div key={link.title} className=" footer__link">
              <h3 className="font-bold">{link.title}</h3>
              {link.links.map((item) => (
                <Link
                  className=" text-gray-500"
                  key={item.title}
                  href={item.url}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className=" justify-between flex items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10">
        <p> @2024 CarHub. All Rights Reserved </p>

        <div className=" footer__copyrights-link">
          <Link href="/" className=" text-gray-500">
            Privacy Policy
          </Link>
          <Link href="/" className=" text-gray-500">
            Terms of use
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
