import { useState } from "react";

export const useCount = (maxNum: number): [number, () => void, () => void] => {
  const [num, setNum] = useState(0);

  const plus = () => {
    if (num < maxNum) setNum(num + 1);
  };

  const minus = () => {
    if (num > 1) {
      setNum(num - 1);
    } else if (num === 1) {
      // TODO: オリジナルモーダル表示
      const isDelete = window.confirm();
      if (isDelete) setNum(0);
    }
  };

  return [num, plus, minus];
};
