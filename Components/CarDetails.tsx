"use client";
import { CarProps } from "@/types";
import { Transition, Dialog } from "@headlessui/react";
import Image from "next/image";
import { Fragment } from "react";

interface CarDetailsprops {
  car: CarProps;
  isOpen: boolean;
  closeModel: () => void;
}

const CarDetails = ({ isOpen, closeModel, car }: CarDetailsprops) => {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" onClose={closeModel} className=" z-10 relative">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom=" opacity-0 "
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-opacity-15 bg-black" />
          </Transition.Child>
          <div className=" fixed inset-0 overflow-y-auto">
            <div className=" flex min-h-full text-center p-4 items-center justify-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom=" opacity-0 "
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Dialog.Panel
                  className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto 
                  transform rounded-2xl p-6 bg-white shadow-xl text-left transition-all flex flex-col gap-5"
                >
                  <button
                    className=" absolute top-2 right-2 p-2 z-10 w-fit bg-primary-blue-100 rounded-full"
                    type="button"
                    onClick={closeModel}
                  >
                    <Image
                      src="/close.svg"
                      alt="close"
                      className=" object-contain"
                      height={20}
                      width={20}
                    />
                  </button>
                  <div className=" flex-1 flex flex-col gap-3">
                    <div className=" relative w-full h-40 bg-cover bg-center bg-pattern rounded-lg">
                      <Image
                        src="/hero.png"
                        alt="Car pic"
                        fill
                        priority
                        className=" object-contain"
                      />
                    </div>
                    <div className="flex gap-3">
                      <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
                        <Image
                          src="/hero.png"
                          alt="Car pic"
                          fill
                          priority
                          className=" object-contain"
                        />
                      </div>
                      <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
                        <Image
                          src="/hero.png"
                          alt="Car pic"
                          fill
                          priority
                          className=" object-contain"
                        />
                      </div>
                      <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
                        <Image
                          src="/hero.png"
                          alt="Car pic"
                          fill
                          priority
                          className=" object-contain"
                        />
                      </div>
                    </div>
                  </div>
                  <div className=" flex-1 flex flex-col gap-2">
                    <h2 className=" font-semibold text-xl capitalize">
                      {car?.make} {car?.model}
                    </h2>
                    <div className=" mt-3 flex flex-wrap gap-4">
                      {Object.entries(car).map(([key, value]) => (
                        <div
                          className="flex  justify-between w-full text-right gap-1"
                          key={key}
                        >
                          <h4 className=" text-grey ">
                            {key.split("_").join(" ")}
                          </h4>
                          <p className=" text-black-100 font-semibold">
                            {value}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default CarDetails;
