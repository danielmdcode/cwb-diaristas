import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import * as bcrypt from "bcryptjs";

export async function POST() {
  try {
    const adminExists = await prisma.user.findFirst({
      where: {
        role: "ADMINISTRATOR",
      },
    });

    if (!adminExists) {
      const defaultPassword = process.env.DEFAULT_ADMIN_PASSWORD || "admin123";
      const hashedPassword = await bcrypt.hash(defaultPassword, 10);

      const admin = await prisma.user.create({
        data: {
          email: "admin@cwbdiaristas.com.br",
          password: hashedPassword,
          nome: "Administrador",
          role: "ADMINISTRATOR",
          status: "ACTIVE",
        },
      });

      return NextResponse.json({
        success: true,
        message: "Default administrator user created successfully",
        admin: {
          id: admin.id,
          email: admin.email,
          nome: admin.nome,
        },
      });
    }

    return NextResponse.json({
      success: true,
      message: "Administrator user already exists",
    });
  } catch (error) {
    console.error("Error initializing admin user:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to initialize admin user",
      },
      { status: 500 }
    );
  }
} 