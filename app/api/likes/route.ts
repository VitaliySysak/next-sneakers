import { prisma } from "@/prisma/prisma-client";
import { NextResponse } from "next/server";

export async function GET() {
    const user = await prisma.user.findFirst({
        include: {
            likes: true, 
        },
    });

    return NextResponse.json(user?.likes)
}