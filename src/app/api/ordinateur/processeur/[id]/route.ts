import {NextRequest, NextResponse} from "next/server";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
type Params = {
    params: Promise<{
        id: string
    }>
}
export const GET = async (request: NextRequest,
                          { params }: Params) => {

    const { id } = await params;
    const process = await prisma.processeur.findUnique({
        where: {
            id: parseInt(id)
        }
    })
    return NextResponse.json(process);
}