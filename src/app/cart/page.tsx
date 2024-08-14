"use client";

import CartItem from "@/components/CartItem";
import CartSummary from "@/components/CartSummary";

const Cart = () => {
return (
  <div className="flex min-h-screen items-center justify-between py-24 px-8">
    <CartItem item={{
    title: "White Gold Plated Princess",
    price: 9.99,
    image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
  }}/>
  <CartSummary/>

  </div>
);

};

export default Cart;
