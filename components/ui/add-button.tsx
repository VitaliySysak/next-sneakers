"use client";

import React from "react";
import Image from "next/image";
import added from "@/public/added.svg";
import removed from "@/public/removed.svg";
import axios from "axios";
import { Loader } from "lucide-react";

interface Props {
  id: number;
  isAdded: boolean
  className?: string;
}

export const AddButton: React.FC<Props> = ({ id, isAdded, className }) => {
  const [addedToCart, setAddedToCart] = React.useState(isAdded);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setAddedToCart(isAdded);
  }, [isAdded]);
  

  const toggleCart = async () => {
    setLoading(true);
    try {
      if (addedToCart) {
        await axios.delete("http://localhost:3000/api/cart", { data: { id } });
      } else {
        await axios.post("http://localhost:3000/api/cart", { id });
      }
      setAddedToCart(!addedToCart);
    } catch (error) {
      console.error('Error while adding to cart', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={className}>
      {loading ? (
        <div className="w-[48px] flex justify-center items-center">
          <Loader />
        </div>
      ) : addedToCart ? (
        <Image onClick={toggleCart} width={48} height={48} src={added} alt="Added to cart" />
      ) : (
        <Image onClick={toggleCart} width={48} height={48} src={removed} alt="Removed from cart" />
      )}
    </div>
  );
};
