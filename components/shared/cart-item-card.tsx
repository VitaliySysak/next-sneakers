'use client'

import Image from "next/image";
import React from "react";
import remove from "@/public/remove.svg";
import { cn } from "@/lib/utils";


interface Props {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  onDelete: (id: number)=> void
  className?: string;
}

export const CartItemCard: React.FC<Props> = ({ id, name, imageUrl, price, onDelete, className }) => {
 
  return (
    <div className={cn("flex items-center border border-[var(--object-border)] rounded-[20px] overflow-hidden p-5 mb-4 mr-2", className)}>
      <Image className="mr-5 mb-4" width={100} height={100} src={imageUrl} alt="image" />
      <div className="mr-5">
        <p className="mb-1 text-sm">{name}</p>
        <b className="mb-5 text-sm">${price}</b>
      </div>
      <Image onClick={()=> onDelete(id)} className="opacity-50 hover:opacity-100 cursor-pointer" width={48} height={48} src={remove} alt="remove" />
    </div>
  );
};
