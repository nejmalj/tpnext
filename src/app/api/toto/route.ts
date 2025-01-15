import {NextRequest, NextResponse} from "next/server";
import {prisma} from "@/tools/prisma";

export const GET = () => {
    return NextResponse.json({ message: 'Bonjour Toto!' });
}

export const POST = async (request: NextRequest) => {
    const { title, content, email } = await request.json();

    const postObj = await prisma.post.create({
        data: {
            title,
            content,
            author: {
                connect: {
                    email,
                }
            }
        }
    })

    return NextResponse.json(postObj);
}