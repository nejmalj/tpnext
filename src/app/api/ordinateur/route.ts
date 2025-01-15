import {NextRequest, NextResponse} from "next/server";
import {prisma} from "@/tools/prisma";

export const POST = async (request: NextRequest) => {
    const {name, ramId, cartemereId, processeurId} = await request.json();

    const postOrdi = await prisma.ordinateur.create({
        data: {
            name,
            ramId,
            cartemereId,
            processeurId
        }
    });

    return NextResponse.json(postOrdi);
}