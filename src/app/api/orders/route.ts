import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user?.email) {
      return NextResponse.json(
        { error: "Usuário não autenticado" },
        { status: 401 }
      );
    }

    const body = await request.json();
    const { professionalId, serviceDate, totalAmount, addressId, description } = body;

    // Get the client user
    const client = await prisma.user.findUnique({
      where: { email: session.user.email },
    });

    if (!client) {
      return NextResponse.json(
        { error: "Cliente não encontrado" },
        { status: 404 }
      );
    }

    // Create the order
    const order = await prisma.order.create({
      data: {
        clientId: client.id,
        professionalId,
        serviceDate: new Date(serviceDate),
        totalAmount,
        addressId,
        description,
        status: "PENDING"
      },
    });

    return NextResponse.json(order);
  } catch (error) {
    console.error("Erro ao criar pedido:", error);
    return NextResponse.json(
      { error: "Erro ao processar a solicitação" },
      { status: 500 }
    );
  }
} 