import { CarProps } from "@/types";

interface CarDetailsprops {
  car: CarProps;
  isOpen: boolean;
  closeModel: () => void;
}

const CarDetails = ({ isOpen, closeModel, car }: CarDetailsprops) => {
  return <div>CarDetails</div>;
};

export default CarDetails;
