"use client";
import CountButton from "@/components/buttons/countButton";
import { useCount } from "@/app/hooks/useCount";

const Counter = () => {
  const maxNum = 20;
  const [count, plus, minus] = useCount(maxNum);
  return (
    <div className="w-25 flex items-center justify-between">
      <CountButton count={count} item="minus" onCount={minus} maxNum={maxNum} />
      <span className="text-2xl">{count}</span>
      <CountButton count={count} item="plus" onCount={plus} maxNum={maxNum} />
    </div>
  );
};

export default Counter;
