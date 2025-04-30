// app/api/professionals/route.ts
import { Role } from "@/app/types";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
    request: Request,
    { params }: { params: { id: string } }
) {
    try {
        const { id } = await params;

        if (!id) {
            return NextResponse.json(
                { error: "ID do profissional não fornecido" },
                { status: 400 }
            );
        }

        const professional = await prisma.user.findUnique({
            where: {
                id,
                role: Role.PROFESSIONAL,
                status: "ACTIVE"
            },
            include: {
                userInfo: {
                    include: {
                        serviceZones: {
                            include: {
                                serviceZone: true,
                            },
                        },
                        availabilitySchedule: true,
                        ratings: {
                            include: {
                                ratedBy: {
                                    select: {
                                        nome: true,
                                        userInfo: {
                                            select: {
                                                avatar: true,
                                            }
                                        }
                                    }
                                }
                            }
                        },
                    },
                },
            },
        });

        if (!professional) {
            return NextResponse.json(
                { error: "Profissional não encontrado" },
                { status: 404 }
            );
        }

        return NextResponse.json(professional);
    } catch (error) {
        console.error("Erro ao buscar profissional:", error);
        return NextResponse.json(
            { error: "Erro ao processar a solicitação" },
            { status: 500 }
        );
    }
}
