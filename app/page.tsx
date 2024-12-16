import { Container } from "@/components/shared/container";
import { Products } from "@/components/shared/products";
import { TopBar } from "@/components/shared/top-bar";
import React from "react";

export default async function Home() {
  return (
    <div className="bg-white">
      <Container>
        <TopBar />
        <Products />
      </Container>
    </div>
  );
}
