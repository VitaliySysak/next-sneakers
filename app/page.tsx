import { Container } from "@/components/shared/container";
import { ProductCard } from "@/components/shared/product-card";
import { ProductsContainer } from "@/components/shared/products-container";
import { TopBar } from "@/components/shared/top-bar";
import React from "react";

export default function Home() {
  return (
    <div className="bg-white">
      <Container>
        <TopBar />
        <ProductsContainer className="flex">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </ProductsContainer>
      </Container>
    </div>
  );
}
