import {NextRequest, NextResponse} from "next/server";
import {prisma} from "@/tools/prisma";

export const POST = async (request: NextRequest) => {
    const {name, ramId, cartemereId, processeurId} = await request.json();

    const postOrdi = await prisma.ordinateur.create({
        data: {
            name,
            ram: {
                connect: {
                    id: ramId,
                }
            },
            cartemere: {
                connect: {
                    id: cartemereId,
                }
            },
            processeur: {
                connect: {
                    id: processeurId,
                }
            },
        }
    });

    return NextResponse.json(postOrdi);
}