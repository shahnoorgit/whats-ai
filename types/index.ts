import { MouseEventHandler } from "react";

export interface CustomBntProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
}

export interface ManufacturerProps {
  manufacturer: string;
  setmanufacturer: (manufacturer: string) => void;
}
