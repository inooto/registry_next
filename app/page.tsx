"use client";

import { useState } from "react";
import Image from "next/image";
import Counter from "@/components/counter";
import ItemListCard from "@/components/cards/itemListCard";
import ItemCartCard from "@/components/cards/itemCartCard";
import NormalButton from "@/components/buttons/normalButton";

const devItem = {
  id: 1,
  src: "/dev/water.png",
  alt: "おいしい水",
  name: "おいしい水",
  price: 120,
};

const devCartItem = [{}];

const showItemDetail = (id: number) => {
  alert(id);
};

export default function Home() {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="bg-red-400 p-10">
      <Counter
        count={count}
        maxNum={20}
        onIncrement={() => count < 20 && setCount(count + 1)}
        onDecrement={() => count > 0 && setCount(count - 1)}
      />
      <ItemListCard
        id={devItem["id"]}
        src={devItem["src"]}
        alt={devItem["alt"]}
        name={devItem["name"]}
        price={devItem["price"]}
        showDetail={showItemDetail}
      />
      <ItemListCard
        id={2}
        src={devItem["src"]}
        alt={devItem["alt"]}
        name={devItem["name"]}
        price={devItem["price"]}
        showDetail={showItemDetail}
      />
      <ItemCartCard
        id={devItem["id"]}
        src={devItem["src"]}
        alt={devItem["alt"]}
        name={devItem["name"]}
        price={devItem["price"]}
        amount={2}
      />
      <NormalButton text="削除しない" color="white" />
      <NormalButton text="削除する" color="yellow" />
    </div>
  );
}
