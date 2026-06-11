"use client";

import Image from "next/image";
import Counter from "@/components/counter";
import ItemListCard from "@/components/cards/itemListCard";

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
  return (
    <div className="bg-red-400">
      <Counter />
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
    </div>
  );
}
