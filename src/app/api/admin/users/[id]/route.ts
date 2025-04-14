import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const body = await req.json();
    const { nome, email, role, status } = body;

    const user = await prisma.user.update({
      where: {
        id: params.id,
      },
      data: {
        nome,
        email,
        role,
        status,
      },
    });

    return NextResponse.json(user);
  } catch (error) {
    console.error("[USERS_PUT]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
} 