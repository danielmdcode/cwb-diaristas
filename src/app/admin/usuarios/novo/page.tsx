// import { getServerSession } from "next-auth";
// import { redirect } from "next/navigation";
// import { authOptions } from "@/lib/auth";
import { NewUserForm } from "./new-user-form";

export default async function NewUserPage() {
//   const session = await getServerSession(authOptions);

//   if (!session || session.user.role !== "ADMINISTRATOR") {
//     redirect("/");
//   }

  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Novo Usuário</h1>
      </div>

      <div className="max-w-2xl">
        <NewUserForm />
      </div>
    </div>
  );
} 