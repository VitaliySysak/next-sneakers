import { cn } from "@/lib/utils";
import React from "react";
import Image from "next/image";
import { LikeButton } from "../ui/like-button";
import { AddButton } from "../ui/add-button";
import style from "./product-card.module.css";

interface Props {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  isAdded: boolean;
  isLiked: boolean;
  className?: string;
}

export const ProductCard: React.FC<Props> = ({ id, name, imageUrl, price, isAdded, isLiked, className }) => {
  return (
    <div className={cn(style.card, className)}>
      <div className="relative w-full h-60">
        <Image className="object-cover" src={imageUrl} alt="product" fill priority={true} />
      </div>
      <LikeButton id={id} isLiked={isLiked} className="cursor-pointer" />
      <h3 className="pt-4 pb-4 text-2xl">{name}</h3>
      <div className="flex justify-between items-center">
        <div>
          <h4 className="text-lg text-[var(--grey-text)]">PRICE:</h4>
          <span className="text-2xl font-bold">${price}</span>
        </div>
        <AddButton id={id} isAdded={isAdded} className="cursor-pointer" />
      </div>
    </div>
  );
};
