import { prisma } from "@/prisma/prisma-client";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
  const { id } = await params;
  const userId = 1;

  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        likes: {
          where: { id: Number(id) },
          select: { id: true },
        },
      },
    });

    const isLiked = user?.likes?.length ?? 0 > 0;

    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: {
        likes: isLiked
          ? { disconnect: { id: Number(id) } } 
          : { connect: { id: Number(id) } }, 
      },
    });

    return NextResponse.json(updatedUser);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to toggle like' }, { status: 500 });
  }
}
