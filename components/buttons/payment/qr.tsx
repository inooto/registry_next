import PaymentBaseButton from "@/components/buttons/payment/paymentBaseButton";
import QrCode from "@/components/icons/qrCode";

type QrProps = {
  onClick: () => void;
};

const Qr = (props: QrProps) => {
  const { onClick } = props;
  return (
    <PaymentBaseButton size="M" onClick={onClick}>
      <QrCode />
      <p className="text-4xl font-bold">QR決済</p>
    </PaymentBaseButton>
  );
};

export default Qr;
