import Image from "next/image";
import { CustomBntProps } from "@/types";

const Custombtn = ({ title, containerStyles, handleClick }: CustomBntProps) => {
  return (
    <button
      disabled={false}
      type={"button"}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      {title}
    </button>
  );
};

export default Custombtn;
