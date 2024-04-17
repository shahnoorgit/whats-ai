"use client";
import Image from "next/image";
import { Custombtn } from "@/Components";

const Hero = () => {
  const handleScroll = () => {};
  return (
    <div className=" hero">
      <div className=" flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Find , Book or Rent a Car — Quickly and Easily Now
        </h1>
        <p className=" hero__subtitle">
          {" "}
          Streamline Your Car Rental Experience With our Effortless Booking
          Website{" "}
        </p>
        <Custombtn
          title="Explore Cars"
          containerStyles="bg-primary-blue mt-10 text-white rounded-full"
          handleClick={handleScroll}
        />
      </div>
      <div className=" hero__image-container">
        <div className="hero__image">
          <Image
            src="/hero.png"
            alt="hero image"
            fill
            className=" object-contain"
          />
          <div className=" hero__image-overlay" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
