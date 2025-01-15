import {NextRequest, NextResponse} from "next/server";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const GET = async (request: NextRequest,
                          { params: { id } }: { params: { id:string } } ) => {

    const cms = await prisma.carteMere.findUnique({
        where: {
            id: parseInt(id)
        }
    })
    return NextResponse.json(cms);
}

export const PUT = async (request: NextRequest,
                             { params: { id } }: { params: { id:string } } ) => {

    const cms = await prisma.carteMere.update({
        where: {
            id: parseInt(id)
        },
        data: {
            name: `Test`
        }
    })
    return NextResponse.json(cms);
                             }

export const DELETE = async (request: NextRequest,
                             { params: { id } }: { params: { id:string } } ) => {
    const cms = await prisma.carteMere.delete({
        where: {
            id: parseInt(id)
        }
    })
    return NextResponse.json(cms);
};