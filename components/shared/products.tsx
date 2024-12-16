"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { ProductCard } from "@/components/shared/product-card";
import { Skeleton } from "../ui/skeleton";
interface Props {
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

export const Products: React.FC<Props> = ({ className, limit = 12 }) => {
  const [products, setProducts] = React.useState<Products[]>([]);
  const [addedProducts, setAddedProducts] = React.useState<AddedProducts[]>([]);
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    const fetchProductsAndCart = async () => {
      try {
        const [productsResponse, cartResponse] = await Promise.all([
          fetch("http://localhost:3000/api/products"),
          fetch("http://localhost:3000/api/cart"),
        ]);

        const [products, cart] = await Promise.all([productsResponse.json(), cartResponse.json()]);

        setProducts(products);
        setAddedProducts(cart);
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
    addedProducts && (
      <div className={cn("grid gap-8 grid-cols-4 place-items-center", className)}>
        {products.map((product) => {
          const isAdded = addedProducts.some((addedProduct) => product.id === addedProduct.productId);
          return (
            <ProductCard key={product.id} id={product.id} name={product.name} imageUrl={product.imageUrl} price={product.price} isAdded={isAdded} />
          );
        })}
      </div>
    )
  );
};
