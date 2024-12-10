import { Container } from "@/components/shared/container";
import { ProductCard } from "@/components/shared/product-card";
import { ProductsContainer } from "@/components/shared/products-container";
import { TopBar } from "@/components/shared/top-bar";
import React from "react";
import { prisma } from "@/prisma/prisma-client";
import { Drawer } from "@/components/shared/drawer";

export default async function Home() {
  const products = await prisma.product.findMany({});
  return (
    <div className="bg-white">
      <Container>
        <TopBar />
        <ProductsContainer>
          {products.map((product) => (
            <ProductCard key={product.id} name={product.name} imageUrl={product.imageUrl} price={product.price} />
          ))}
        </ProductsContainer>
      </Container>
    </div>
  );
}
