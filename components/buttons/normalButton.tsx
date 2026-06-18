type NormalButton = {
  text: string;
  color: "white" | "yellow";
  onClick: () => void;
};

const NormalButton = (props: NormalButton) => {
  const { text, color, onClick } = props;
  const Colors =
    color === "white"
      ? "bg-white border-slate-500"
      : color === "yellow"
        ? "bg-amber-400 border-amber-400"
        : "";

  return (
    <button
      onClick={onClick}
      className={`w-80 py-3 text-md font-bold border-2 rounded-md cursor-pointer ${Colors}`}
    >
      {text}
    </button>
  );
};

export default NormalButton;
