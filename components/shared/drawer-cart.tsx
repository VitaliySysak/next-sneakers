'use client'

import { cn } from "@/lib/utils";
import React from "react";
import { OrderButton } from "../ui/order-button";
import { CartPrice } from "../ui/cart-price";
import Image from "next/image";
import remove from "@/public/remove.svg";
import { CartItems } from "./cart-items";

interface Props {
  onClose: () => void;
  className?: string;
}

export const DrawerCart: React.FC<Props> = ({ onClose, className }) => {
  const [totalPrice, setTotalPrice] = React.useState<number>(0)

  return (
    <div className="fixed left-0 top-0 bg-[rgba(0,0,0,0.4)] w-full h-full z-30">
      <div
        className={cn(
          "flex flex-col justify-between fixed w-[440px] right-0 h-full bg-white shadow-[-10px_4px_24px_rgba(0,0,0,0.1)] p-10",
          className
        )}
      >
        {/* cart header */}
        <div className="flex justify-between mb-4">
          <h2 className="text-2xl font-bold">Cart</h2>
          <Image onClick={onClose} className="opacity-50 hover:opacity-100 cursor-pointer" width={40} height={40} src={remove} alt="remove" />
        </div>

        {/* cart items */}
        <CartItems setTotalPrice={setTotalPrice} />
    
        {/* cart footer */}
        <div className="mt-4">
          <CartPrice totalPrice={totalPrice}/>
          <OrderButton />
        </div>
      </div>
    </div>
  );
};
