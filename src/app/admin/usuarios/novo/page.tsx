import { NewUserForm } from "./new-user-form";

export default async function NewUserPage() {

  return (
    <div className="w-full py-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Novo Usuário</h1>
      </div>

      <div className="max-w-2xl">
        <NewUserForm />
      </div>
    </div>
  );
} 