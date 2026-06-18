import PaymentBaseButton from "@/components/buttons/payment/paymentBaseButton";
import CreditCard from "@/components/icons/creditCard";

type CreditProps = {
  onClick: () => void;
};

const Credit = (props: CreditProps) => {
  const { onClick } = props;
  return (
    <PaymentBaseButton size="L" onClick={onClick}>
      <CreditCard size={30} />
      <p className="text-5xl font-bold">クレジットカード</p>
    </PaymentBaseButton>
  );
};

export default Credit;
