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
    <div
      className={cn(style.card, className)}>
      <Image width={288} height={180} src={imageUrl} alt="good" />
      <LikeButton className="cursor-pointer"/>
      <h3 className="pb-4 text-xl">{name}</h3>
      <div className="flex justify-between ">
        <div>
          <h4 className="text-[var(--grey-text)]">PRICE:</h4>
          <span className="font-bold">${price}</span>
        </div>
        <AddButton className="cursor-pointer" />
      </div>
    </div>
  );
};
