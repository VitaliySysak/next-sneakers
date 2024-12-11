import { cn } from "@/lib/utils";
import React from "react";
import Image from "next/image";
import { LikeButton } from "../ui/like-button";
import { AddButton } from "../ui/add-button";
import style from './product-card.module.css'

interface Props {
  name: string;
  imageUrl: string;
  price: number;
  className?: string;
}

export const ProductCard: React.FC<Props> = ({ name, imageUrl, price, className }) => {
  return (
    <div className={cn(style.card, className)}>
      <Image width={290} height={240} src={imageUrl} alt="good" />
      <LikeButton className="cursor-pointer"/>
      <h3 className="pt-4 pb-4 text-2xl">{name}</h3>
      <div className="flex justify-between items-center">
        <div>
          <h4 className="text-lg text-[var(--grey-text)]">PRICE:</h4>
          <span className="text-2xl font-bold">${price}</span>
        </div>
        <AddButton className="cursor-pointer" />
      </div>
    </div>
  );
};
