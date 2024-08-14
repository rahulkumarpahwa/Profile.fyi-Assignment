"use client";
import Image from "next/image";

interface ItemProps {
item: {
  title: string;
  image: string;
  price: number;
}
}

const Card = ({ item }: ItemProps) => {
  return (
    <div className="w-72 h-96 myShadow text-black bg-white rounded-lg flex items-center justify-center flex-col gap-5 ">
      <div className="w-32 h-32">
        <Image
          className="w-full h-full"
          src={item.image}
          alt={item.title}
          width={100}
          height={100}
          priority
        />
      </div>
      <div className="flex items-center justify-center flex-col mx-4 space-y-3">
        <p className="line-clamp-1 hover:line-clamp-none">{item.title}</p>
        <p>${item.price}</p>
        <button className="hover:text-white hover:bg-black rounded-lg px-2 py-1 border-2">
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Card;
