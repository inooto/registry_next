"use client";

import Image from "next/image";

type ItemListCardProps = {
  id: number;
  src: string;
  alt: string;
  name: string;
  price: number;
  showDetail: (num: number) => void;
};

const ItemListCard = (props: ItemListCardProps) => {
  const { id, src, alt, name, price, showDetail } = props;

  return (
    <div
      className="w-50 px-4 py-2 flex flex-col items-center bg-white border-2 border-slate-500 rounded-lg"
      onClick={() => showDetail(id)}
    >
      <Image src={src} alt={alt} width={150} height={150} loading="lazy" />
      <p className="text-xl font-bold">{name}</p>
      <p className="w-full text-right">
        ¥<span className="text-3xl font-bold">{price}</span>
      </p>
    </div>
  );
};

export default ItemListCard;
