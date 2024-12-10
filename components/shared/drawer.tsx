import { cn } from "@/lib/utils";
import React from "react";
import { CartItem } from "./cart-item";


interface Props {
  className?: string;
}

export const Drawer: React.FC<Props> = ({ className }) => {
  return (
    <div className="absolute left-0 top-0 bg-[rgba(0,0,0,0.4)] w-full h-full z-30">
      <div className={cn("absolute w-[420px] right-0 h-[100%] bg-white shadow-[-10px_4px_24px_rgba(0,0,0,0.1)] p-9", className)}>
        <h2 className="text-2xl font-bold">Cart</h2>
        <CartItem />
        <CartItem />
        <CartItem />
      </div>
    </div>
  );
};
