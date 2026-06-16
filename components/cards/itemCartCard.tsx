"use client";

import Image from "next/image";
import Counter from "../counter";
import { useEffect, useState } from "react";

type ItemCartCardProps = {
  id: number;
  src: string;
  alt: string;
  name: string;
  price: number;
  amount: number;
};

const ItemCartCard = (props: ItemCartCardProps) => {
  const { src, alt, name, price, amount } = props;
  const maxNum = 20;
  const [count, setCount] = useState<number>(amount);
  const [totalPrice, setTotalPrice] = useState<number>(price * amount);

  const onIncrement = () => {
    if (count < maxNum) setCount(count + 1);
  };

  const onDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    } else if (count === 1) {
      // TODO: モーダル表示, このアイテムをカートから削除
      const isDelete = window.confirm();
      if (isDelete) setCount(0);
    }
  };

  useEffect(() => {
    setTotalPrice(count * price);
  }, [count]);

  return (
    <div className="bg-white flex justify-between items-center border-2 border-slate-500 rounded-lg px-4 py-2">
      {/* 画像、商品名 */}
      <div className="flex items-center">
        <Image src={src} alt={alt} width={150} height={150} loading="lazy" />
        <h2 className="text-3xl font-bold">{name}</h2>
      </div>
      {/* 料金、カウンター */}
      <div className="self-stretch flex flex-col items-end justify-start gap-4 py-4">
        <div className="text-4xl font-bold">¥ {totalPrice}</div>
        <Counter
          count={count}
          maxNum={maxNum}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
        />
      </div>
    </div>
  );
};

export default ItemCartCard;
