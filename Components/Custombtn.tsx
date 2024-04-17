import { CustomBntProps } from "@/types";

const Custombtn = ({
  title,
  containerStyles,
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
      {title}
    </button>
  );
};

export default Custombtn;
