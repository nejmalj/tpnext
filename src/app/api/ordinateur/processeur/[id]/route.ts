import {NextRequest, NextResponse} from "next/server";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const GET = async (request: NextRequest,
                          { params: { id } }: { params: { id:string } } ) => {

    const process = await prisma.processeur.findUnique({
        where: {
            id: parseInt(id)
        }
    })
    return NextResponse.json(process);
}