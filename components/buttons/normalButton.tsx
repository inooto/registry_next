type NormalButton = {
  text: string;
  color: "white" | "yellow";
};

const NormalButton = (props: NormalButton) => {
  const { text, color } = props;
  const Colors =
    color === "white"
      ? "bg-white border-slate-500"
      : color === "yellow"
        ? "bg-amber-400 border-amber-400"
        : "";

  return (
    <button
      className={`w-80 py-3 text-md font-bold border-2 rounded-md ${Colors}`}
    >
      {text}
    </button>
  );
};

export default NormalButton;
