import Image from "next/image";
import Link from "next/link";
import Custombtn from "./Custombtn";

const Navbar = () => {
  return (
    <header className=" w-full z-10 absolute">
      <nav className=" max-w-[1440px] mx-auto flex justify-between px-6 sm:px-16 items-center py-4">
        <Link href="/" className="flex justify-center items-center">
          <Image
            className="object-contain"
            src="/logo.svg"
            height={18}
            width={118}
            alt="Car hub logo"
          />
        </Link>
        <Custombtn
          title="Sign In"
          btnType="submit"
          containerStyles=" text-primary-blue rounded-full bg-white min-w-[130px] border"
        />
      </nav>
    </header>
  );
};

export default Navbar;
