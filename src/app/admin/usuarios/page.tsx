
// import { getServerSession } from "next-auth";
// import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
// import { authOptions } from "@/lib/auth";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import Link from "next/link";
import { ENDPOINTS } from "@/config/routes";
import { DataTable } from "@/components/ui/data-table";
import { columns } from "./columns";

export default async function AdminUsersPage() {
    //   const session = await getServerSession(authOptions);

    //   if (!session || session.user.role !== "ADMINISTRATOR") {
    //     redirect("/");
    //   }

    const users = await prisma.user.findMany({
        include: {
            userInfo: true,
        },
        orderBy: {
            createdAt: "desc",
        },
    });

    return (
        <div className="container mx-auto py-10">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Usuários</h1>
                <Link href={ENDPOINTS.USERS.ADD}>
                    <Button>
                        <PlusCircle className="mr-2 h-4 w-4" />
                        Adicionar Usuário
                    </Button>
                </Link>
            </div>

            <DataTable columns={columns} data={users} />
        </div>
    );
} 