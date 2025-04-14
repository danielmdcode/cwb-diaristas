import { NextResponse } from "next/server";
// import { getServerSession } from "next-auth";
import { prisma } from "@/lib/prisma";
// import { authOptions } from "@/lib/auth";
// import * as bcrypt from "bcryptjs";

export async function POST(req: Request) {
  try {
    // const session = await getServerSession(authOptions);

    // if (!session || session.user.role !== "ADMINISTRATOR") {
    //   return new NextResponse("Unauthorized", { status: 401 });
    // }

    const body = await req.json();
    const { nome, email, role, status } = body;

    // Generate a random password
    // const password = Math.random().toString(36).slice(-8);
    // const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        nome,
        email,
        role,
        status,
        password: "",
      },
    });

    // TODO: Send email with password to user

    return NextResponse.json(user);
  } catch (error) {
    console.error("[USERS_POST]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
} 