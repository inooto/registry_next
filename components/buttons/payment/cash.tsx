import PaymentBaseButton from "@/components/buttons/payment/paymentBaseButton";
import BankNotes from "@/components/icons/bankNotes";

type CashProps = {
  onClick: () => void;
};

const Cash = (props: CashProps) => {
  const { onClick } = props;
  return (
    <PaymentBaseButton size="L" onClick={onClick}>
      <BankNotes />
      <p className="text-5xl font-bold">現金</p>
    </PaymentBaseButton>
  );
};

export default Cash;
