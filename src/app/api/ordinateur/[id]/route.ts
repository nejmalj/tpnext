import {NextRequest, NextResponse} from "next/server";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const GET = async (request: NextRequest,
                          { params: { id } }: { params: { id:string } } ) => {

    const ordis = await prisma.ordinateur.findUnique({
        where: {
            id: parseInt(id)
        }
    })
    return NextResponse.json(ordis);
}

export const DELETE = async (request: NextRequest,
                             { params: { id } }: { params: { id:string } } ) => {
    const ordis = await prisma.ordinateur.delete({
        where: {
            id: parseInt(id)
        }
    })
    return NextResponse.json(ordis);
                             };