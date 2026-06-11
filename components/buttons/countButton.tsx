import { useEffect, useState } from "react";
import PlusIcon from "../icons/plusIcon";
import MinusIcon from "../icons/minusIcon";

type CountButtonProps = {
  item: "plus" | "minus";
  maxNum: number;
  count: number;
  onCount: () => void;
};

const CountButton = (props: CountButtonProps) => {
  const { item, count, maxNum, onCount } = props;
  const [canCount, setCanCount] = useState(true);

  useEffect(() => {
    // plusの時はmaxNum以上でカウントできない、minusの時は0以下でカウントできない
    if (
      (item === "plus" && count >= maxNum) ||
      (item === "minus" && count <= 0)
    ) {
      setCanCount(false);
    } else {
      setCanCount(true);
    }
  }, [count]);

  return (
    <button
      className={`border-2 rounded-full cursor-pointer ${canCount ? "bg-slate-700 text-white border-slate-700" : " bg-white text-slate-300 border-slate-400"}`}
      onClick={onCount}
    >
      {item === "plus" ? <PlusIcon /> : item === "minus" ? <MinusIcon /> : ""}
    </button>
  );
};

export default CountButton;
