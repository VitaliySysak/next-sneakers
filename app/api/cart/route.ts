import { prisma } from "@/prisma/prisma-client";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const data = await prisma.user.findFirst({
    where: { id: 1 },
    include: {
      cart: {
        include: {
          items: {
            include: {
              product: true,
            },
          },
        },
      },
    },
  });

  return NextResponse.json(data?.cart?.items);
}

export async function POST(req: NextRequest) {
  const productId = await req.json();

  const cartItem = await prisma.cartItem.create({
    data: {
      cart: { connect: { id: 1 } },
      product: { connect: { id: Number(productId.id) } },
      quantity: 1,
    },
  });

  return NextResponse.json(cartItem);
}

export async function DELETE(req: NextRequest) {
  const productId = await req.json();

  const cartItem = await prisma.cartItem.deleteMany({
    where: { cartId: 1, productId: Number(productId.id) },
  });

  return NextResponse.json(cartItem);
}
