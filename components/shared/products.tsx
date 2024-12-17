"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { ProductCard } from "@/components/shared/product-card";
import { Skeleton } from "../ui/skeleton";
import axios from "axios";

interface Props {
  type: string;
  limit?: number;
  className?: string;
}

interface Products {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
}

interface AddedProducts {
  productId: number;
}

interface LikedProducts {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
}

export const Products: React.FC<Props> = ({ type, className, limit = 12 }) => {
  const [products, setProducts] = React.useState<Products[]>([]);
  const [addedProducts, setAddedProducts] = React.useState<AddedProducts[]>([]);
  const [likedProducts, setLikedProducts] = React.useState<LikedProducts[]>([]);

  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    const fetchProductsAndCart = async () => {
      try {
        const [productsResponse, cartResponse, likeResponse] = await Promise.all([
          axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/products`),
          axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/cart`),
          axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/likes`),
        ]);

        setProducts(productsResponse.data);
        setAddedProducts(cartResponse.data);
        setLikedProducts(likeResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductsAndCart();
  }, []);

  if (loading) {
    return (
      <div className={cn("grid grid-cols-4 gap-8 place-items-center", className)}>
        {...Array(limit)
          .fill(0)
          .map((_, index) => <Skeleton key={index} className="w-[380px] h-[470px] rounded-[50px]" />)}
      </div>
    );
  }

  return (
    products &&
    likedProducts &&
    addedProducts && (
      <div className={cn("grid gap-8 grid-cols-4 place-items-center", className)}>
        {type === "all" &&
          products.map((product) => {
            const isAdded = addedProducts.some((addedProduct) => product.id === addedProduct.productId);
            const isLiked = likedProducts.some((likedProduct) => product.id === likedProduct.id);
            return (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                imageUrl={product.imageUrl}
                price={product.price}
                isAdded={isAdded}
                isLiked={isLiked}
              />
            );
          })}
        {type === "saved" &&
          likedProducts.map((product) => {
            const isAdded = addedProducts.some((addedProduct) => product.id === addedProduct.productId);
            const isLiked = likedProducts.some((likedProduct) => product.id === likedProduct.id);
            return (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                imageUrl={product.imageUrl}
                price={product.price}
                isAdded={isAdded}
                isLiked={isLiked}
              />
            );
          })}
      </div>
    )
  );
};
