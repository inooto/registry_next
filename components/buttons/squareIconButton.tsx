import ChevronLeft from "../icons/chevronLeft";
import Cart from "../icons/cart";

type SquareIconButtonProps = {
  icon: "back" | "cart";
};

const SquareIconButton = (props: SquareIconButtonProps) => {
  const { icon } = props;
  const bgColor =
    icon === "back" ? "bg-white" : icon === "cart" ? "bg-amber-400" : "";

  return (
    <div className={`w-fit p-4 rounded-2xl ${bgColor}`}>
      {icon === "back" ? <ChevronLeft /> : icon === "cart" ? <Cart /> : <></>}
    </div>
  );
};

export default SquareIconButton;
