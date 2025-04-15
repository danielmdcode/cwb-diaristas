import { prisma } from "@/lib/prisma";
import { EditUserForm } from "./edit-user-form";

export default async function EditUserPage({
  params,
}: {
  params: { id: string };
}) {
  const user = await prisma.user.findUnique({
    where: {
      id: params.id,
    },
  });

  if (!user) {
    return <div>Usuário não encontrado</div>;
  }

  return (
    <div className="w-full py-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Editar Usuário</h1>
      </div>

      <div className="max-w-2xl">
        <EditUserForm user={user} />
      </div>
    </div>
  );
} 