import ChevronLeft from "../icons/chevronLeft";
import Cart from "../icons/cart";

type SquareIconButtonProps = {
  icon: "back" | "cart";
  onClick: () => void;
};

const SquareIconButton = (props: SquareIconButtonProps) => {
  const { icon, onClick } = props;
  const bgColor =
    icon === "back" ? "bg-white" : icon === "cart" ? "bg-amber-400" : "";

  return (
    <button
      onClick={onClick}
      className={`w-fit p-4 rounded-2xl cursor-pointer ${bgColor}`}
    >
      {icon === "back" ? <ChevronLeft /> : icon === "cart" ? <Cart /> : <></>}
    </button>
  );
};

export default SquareIconButton;
