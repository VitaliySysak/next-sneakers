import { Container } from "@/components/shared/container";
import { Products } from "@/components/shared/products";
import { TopBar } from "@/components/shared/top-bar";
import React from "react";

export default async function Saved() {
  return (
    <div className="bg-white">
      <Container>
        <TopBar name='My saves' />
        <Products type="saved" />
      </Container>
    </div>
  );
}
