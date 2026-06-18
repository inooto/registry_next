type PaymentButtonProps = {
  size: "L" | "M";
  children: React.ReactNode;
  onClick: () => void;
};

const PaymentBaseButton = (props: PaymentButtonProps) => {
  const { size, children, onClick } = props;
  const buttonSize =
    size === "L"
      ? "w-160 h-40 px-10 gap-10"
      : size === "M"
        ? "w-78 h-30 px-5 gap-4"
        : "";
  return (
    <button
      onClick={onClick}
      className={`bg-amber-400 rounded-xl flex items-center justify-start cursor-pointer ${buttonSize}`}
    >
      {children}
    </button>
  );
};

export default PaymentBaseButton;
