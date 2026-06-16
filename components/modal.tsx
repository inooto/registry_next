type ModalProps = {
  children: React.ReactNode;
};

const Modal = (props: ModalProps) => {
  return (
    <div className="flex flex-col justify-center items-center bg-white w-fit p-5 text-lg font-bold rounded-lg gap-5">
      {props.children}
    </div>
  );
};

export default Modal;
