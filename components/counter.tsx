import CountButton from "@/components/buttons/countButton";

type CounterProps = {
  count: number;
  maxNum: number;
  onIncrement: () => void;
  onDecrement: () => void;
};

const Counter = (props: CounterProps) => {
  const { count, maxNum, onIncrement, onDecrement } = props;

  return (
    <div className="w-25 flex items-center justify-between">
      <CountButton
        count={count}
        item="minus"
        onCount={onDecrement}
        maxNum={maxNum}
      />
      <span className="text-2xl">{count}</span>
      <CountButton
        count={count}
        item="plus"
        onCount={onIncrement}
        maxNum={maxNum}
      />
    </div>
  );
};

export default Counter;
