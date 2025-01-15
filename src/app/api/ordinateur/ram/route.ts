import {NextRequest, NextResponse} from "next/server";
import {prisma} from "@/tools/prisma";

export const POST = async (request: NextRequest) => {
    const {name} = await request.json();

    const postRam = await prisma.ram.create({
        data: {
            name,
        }
    });

    return NextResponse.json(postRam);
}