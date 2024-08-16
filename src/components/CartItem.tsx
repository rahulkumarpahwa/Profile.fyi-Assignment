"use client";
import Image from "next/image";
import { ImCross } from "react-icons/im";

interface ItemProp {
  item: {
    title: string;
    image: string;
    price: number;
  };
}

const CartItem = ({ item }: ItemProp) => {
  return (
    <div className="flex items-center justify-center gap-5 p-8 bg-white text-black">
      <div className="w-[4rem] h-[4rem]">
        <Image
          className="w-full h-full"
          src={item.image}
          alt={item.title}
          width={100}
          height={100}
          priority
        />
      </div>
      <div>
        <p>{item.title}</p>
        <p>${item.price}</p>
      </div>
      <div>
        <button>
          <ImCross />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
