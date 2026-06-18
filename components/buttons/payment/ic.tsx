import PaymentBaseButton from "@/components/buttons/payment/paymentBaseButton";
import CreditCard from "@/components/icons/creditCard";

type IcProps = {
  onClick: () => void;
};

const Ic = (props: IcProps) => {
  const { onClick } = props;
  return (
    <PaymentBaseButton size="M" onClick={onClick}>
      <CreditCard size={20} />
      <p className="text-4xl font-bold">交通系IC</p>
    </PaymentBaseButton>
  );
};

export default Ic;
