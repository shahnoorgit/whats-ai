"use client";
import Custombtn from "./Custombtn";

const Hero = () => {
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
        <Custombtn />
      </div>
    </div>
  );
};

export default Hero;
