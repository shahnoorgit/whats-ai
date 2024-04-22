import { CustomBntProps } from "@/types";
import Image from "next/image";

const Custombtn = ({
  title,
  containerStyles,
  textStyles,
  rightIcon,
  handleClick,
  btnType,
}: CustomBntProps) => {
  return (
    <button
      disabled={false}
      type={btnType || "button"}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <div className={`${rightIcon && "flex gap-5"}`}>
        <span className={textStyles}>{title}</span>
        {rightIcon && (
          <Image
            src={rightIcon!}
            alt="icon"
            height={20}
            width={20}
            className=" object-contain"
          />
        )}
      </div>
    </button>
  );
};

export default Custombtn;
