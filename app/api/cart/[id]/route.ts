import { prisma } from "@/prisma/prisma-client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, { params }: { params: { id: string } }) {
  const { id } = await params;

  const cartItem = await prisma.cartItem.create({
    data: {
      cart: { connect: { id: 1 } },
      product: { connect: { id: Number(id) } },
      quantity: 1,
    },
  });

  return NextResponse.json(cartItem);
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  const { id } = await params;

  const cartItem = await prisma.cartItem.deleteMany({
    where: { cartId: 1, productId: Number(id) },
  });

  return NextResponse.json(cartItem);
}