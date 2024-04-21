"use client";
import { CarProps } from "@/types";
import { calculateCarRent } from "@/utils";
import Image from "next/image";
import Custombtn from "./Custombtn";
import { useState } from "react";
import CarDetails from "./CarDetails";

interface CarCardProps {
  car: CarProps;
}

const CarCard = ({ car }: CarCardProps) => {
  const { year, city_mpg, make, model, transmission, drive } = car;
  const carRent = calculateCarRent(city_mpg, year);
  const [isOpen, setisOpen] = useState(false);
  return (
    <div className="car-card group:">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>
      </div>
      <p className=" flex mt-6 text-[32px] font-extrabold">
        <span className=" self-start font-semibold text-[14px]">$</span>
        {carRent}
        <span className="self-end font-medium text-[14px]">/day</span>
      </p>
      <div className=" w-full my-3 h-40 relative object-contain">
        <Image
          src="/hero.png"
          alt="Car pic"
          fill
          priority
          className=" object-contain"
        />
      </div>
      <div className="relative group flex w-full mt-2">
        <div className=" flex group-hover:invisible w-full justify-between text-gray">
          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              src="/steering-wheel.svg"
              alt="transmission"
              width={20}
              height={20}
            />
            <p className=" text-[14px]">
              {transmission === "a" ? "Automatic" : "Manual"}
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/tire.svg" alt="transmission" width={20} height={20} />
            <p className=" text-[14px]">{drive.toUpperCase()}</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/gas.svg" alt="transmission" width={20} height={20} />
            <p className=" text-[14px]">{city_mpg} MPG</p>
          </div>
        </div>
        <div className="car-card__btn-container">
          <Custombtn
            title="View More"
            containerStyles=" w-full bg-primary-blue py-[16px] rounded-full "
            textStyles="text-white leading-[17px] font-bold text-[14px]"
            rightIcon="/right-arrow.svg"
            handleClick={() => setisOpen(true)}
          />
        </div>
      </div>
      <CarDetails
        isOpen={isOpen}
        closeModel={() => setisOpen(false)}
        car={car}
      />
    </div>
  );
};

export default CarCard;
