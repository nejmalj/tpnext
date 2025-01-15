import {NextRequest, NextResponse} from "next/server";
import {prisma} from "@/tools/prisma";

export const POST = async (request: NextRequest) => {
    console.log('request', request);
    const { titi } = await request.json();
    const newUser = await prisma.user.create({
        data: {
            email: "test@test.fr",
            name: titi,
        }
    });
    return NextResponse.json({message: `Hello, ${newUser.id} !`});
}

export const GET = () => {
    return NextResponse.json({ message: 'Bonjouuuuur' });
}