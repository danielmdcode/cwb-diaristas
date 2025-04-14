"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Button } from "@/components/ui/button"
import { Pencil } from "lucide-react"
import Link from "next/link"
import { ENDPOINTS } from "@/config/routes"

interface UserInfo {
    id: string;
    userId: string;
    phone?: string | null;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    zipCode?: string | null;
    createdAt: Date;
    updatedAt: Date;
}

interface User {
    id: string;
    nome: string | null;
    email: string;
    role: string;
    status: string;
    createdAt: Date;
    userInfo: UserInfo | null;
}

export const columns: ColumnDef<User>[] = [
    {
        accessorKey: "nome",
        header: "Nome",
    },
    {
        accessorKey: "email",
        header: "Email",
    },
    {
        accessorKey: "role",
        header: "Função",
    },
    {
        accessorKey: "status",
        header: "Status",
    },
    {
        accessorKey: "createdAt",
        header: "Data de Criação",
        cell: ({ row }) => {
            return new Date(row.getValue("createdAt")).toLocaleDateString("pt-BR");
        },
    },
    {
        id: "actions",
        cell: ({ row }) => {
            return (
                <Link href={ENDPOINTS.USERS.EDIT(row.original.id)}>
                    <Button variant="ghost" size="sm">
                        <Pencil className="h-4 w-4" />
                    </Button>
                </Link>
            );
        },
    },
] 