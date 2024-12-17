"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { CartItemCard } from "./cart-item-card";
import { Skeleton } from "../ui/skeleton";
import axios from "axios";

interface Props {
  setTotalPrice: (value: number) => void;
  limit?: number;
  className?: string;
}

interface Product {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  createdAt: string;
  updatedAt: string;
}

interface CartItem {
  id: number;
  quantity: number;
  cartId: number;
  productId: number;
  product: Product;
}

export const CartItems: React.FC<Props> = ({ setTotalPrice, limit = 4, className }) => {
  const [cartItems, setCartItems] = React.useState<CartItem[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const cart = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/cart`);
        setCartItems(cart.data);
      } catch (error) {
        console.error("Error fetching cart items:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCartItems();
  }, []);

  React.useEffect(() => {
    const updatePrice = () => {
      const totalPrice = cartItems.reduce((accumulator, item) => accumulator + item.product.price, 0);
      setTotalPrice(totalPrice);
    };
    updatePrice();
  }, [cartItems, setTotalPrice]);

  const removeFromCart = async (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== id));
    axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/api/cart/${id}`);
  };

  if (loading) {
    return (
      <div className={cn("h-full overflow-y-auto", className)}>
        {...Array(limit)
          .fill(0)
          .map((_, index) => <Skeleton key={index} className="w-[320px] h-[150px] mb-4 rounded-[20px] mr-2" />)}
      </div>
    );
  }

  return (
    cartItems && (
      <div className={cn("h-full overflow-y-auto", className)}>
        {cartItems.map(({ product }) => (
          <CartItemCard
            key={product.id}
            id={product.id}
            name={product.name}
            imageUrl={product.imageUrl}
            price={product.price}
            onDelete={removeFromCart}
          />
        ))}
      </div>
    )
  );
};
