// app/api/professionals/route.ts
import { NextResponse } from "next/server";
import {
  createProfessional,
  getAllProfessionals,
  getProfessionalByEmail,
  searchProfessionals,
} from "@/services/professionalService";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Verificar se o email já existe
    const existingProfessional = await getProfessionalByEmail(body.email);
    if (existingProfessional) {
      return NextResponse.json(
        { error: "Um profissional com este email já está cadastrado" },
        { status: 400 }
      );
    }

    // Criar novo profissional
    const result = await createProfessional(body);

    return NextResponse.json(
      {
        message: "Profissional cadastrado com sucesso",
        id: result.insertedId,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Erro ao cadastrar profissional:", error);
    return NextResponse.json(
      { error: "Erro ao processar a solicitação" },
      { status: 500 }
    );
  }
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const neighborhood = searchParams.get('neighborhood');
    const days = searchParams.get('days')?.split(',');

    if (neighborhood && days) {
      const professionals = await searchProfessionals(neighborhood, days);
      return NextResponse.json(professionals);
    }

    const professionals = await getAllProfessionals();
    return NextResponse.json(professionals);
  } catch (error) {
    console.error("Erro ao buscar profissionais:", error);
    return NextResponse.json(
      { error: "Erro ao processar a solicitação" },
      { status: 500 }
    );
  }
}
