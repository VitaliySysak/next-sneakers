import { prisma } from "@/prisma/prisma-client";
import { NextResponse } from "next/server";

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




