"use client";
import { ManufacturerProps } from "@/types";
import { Combobox, Transition } from "@headlessui/react";
import { manufacturers } from "@/constants";
import Image from "next/image";
import React, { Fragment, useState } from "react";

const SearchManufacturer = ({
  setmanufacturer,
  manufacturer,
}: ManufacturerProps) => {
  const [Queary, setQueary] = useState("");
  const FilteredManufacturer =
    Queary === ""
      ? manufacturers
      : manufacturers.filter((items) =>
          items
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(Queary.toLocaleLowerCase().replace(/\s+/g, ""))
        );
  return (
    <div className="search-manufacturer max-sm:">
      <Combobox value={manufacturer} onChange={setmanufacturer}>
        <div className=" relative w-full">
          <Combobox.Button className=" absolute top-[14px]">
            <Image
              className=" ml-4"
              src="/car-logo.svg"
              alt="car log "
              width={20}
              height={20}
            />
          </Combobox.Button>
          <Combobox.Input
            placeholder="Audi"
            className=" search-manufacturer__input"
            displayValue={(manufacturer: string) => manufacturer}
            onChange={(e) => setQueary(e.target.value)}
          />
          <Transition
            as="div"
            leave=" transition ease-in duration-100 "
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQueary("")}
          />
          <Combobox.Options>
            {FilteredManufacturer.length === 0 && Queary !== "" ? (
              <Combobox.Option
                value={Queary}
                className="search-manufacturer__option"
              >
                <span className=" text-gray-900 ">Nothing found buds</span>
              </Combobox.Option>
            ) : (
              FilteredManufacturer.map((item) => (
                <Combobox.Option
                  value={item}
                  key={item}
                  className={({ active }) =>
                    ` relative search-manufacturer__option ${
                      active ? ` bg-blue-500 text-white` : "text-gray-900"
                    }`
                  }
                >
                  {item}
                </Combobox.Option>
              ))
            )}
          </Combobox.Options>
        </div>
      </Combobox>
    </div>
  );
};

export default SearchManufacturer;
