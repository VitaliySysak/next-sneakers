import { prisma } from "@/prisma/prisma-client";
import { NextResponse } from "next/server";

export async function GET() {
    const users = await prisma.user.findMany({
        include: {
            likes: true, 
        },
    });

    return NextResponse.json(users)
}
