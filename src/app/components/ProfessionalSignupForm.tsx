// components/ProfessionalSignupForm.tsx
"use client";

import { useForm } from "react-hook-form";

type FormData = {
  nome: string;
  telefone: string;
  email: string;
  cidade: string;
  experiencia: string;
  disponibilidade: string[];
};

export default function ProfessionalSignupForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("Dados enviados:", data);
    // Aqui você pode enviar os dados para seu backend ou integração com API
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-xl mx-auto space-y-4 p-6 bg-white rounded-xl shadow-lg"
    >
      <h2 className="text-2xl font-bold mb-8">
        Cadastre-se como Profissional de Limpeza
      </h2>

      <div>
        <label className="block mb-1 font-medium text-left">
          Nome completo
        </label>
        <input
          {...register("nome", { required: true })}
          className="w-full border border-gray-300 rounded px-3 py-2"
        />
        {errors.nome && (
          <span className="text-red-500 text-sm">Campo obrigatório</span>
        )}
      </div>

      <div>
        <label className="block mb-1 font-medium text-left">
          Telefone (WhatsApp)
        </label>
        <input
          {...register("telefone", { required: true })}
          className="w-full border border-gray-300 rounded px-3 py-2"
        />
        {errors.telefone && (
          <span className="text-red-500 text-sm">Campo obrigatório</span>
        )}
      </div>

      <div>
        <label className="block mb-1 font-medium text-left">E-mail</label>
        <input
          type="email"
          {...register("email", { required: true })}
          className="w-full border border-gray-300 rounded px-3 py-2"
        />
        {errors.email && (
          <span className="text-red-500 text-sm">Campo obrigatório</span>
        )}
      </div>

      <div>
        <label className="block mb-1 font-medium text-left">
          Experiência em limpeza
        </label>
        <textarea
          {...register("experiencia")}
          className="w-full border border-gray-300 rounded px-3 py-2"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Disponibilidade</label>
        <div className="flex flex-wrap gap-3">
          {[
            "Segunda",
            "Terça",
            "Quarta",
            "Quinta",
            "Sexta",
            "Sábado",
            "Domingo",
          ].map((dia) => (
            <label key={dia} className="flex items-center gap-2">
              <input
                type="checkbox"
                value={dia}
                {...register("disponibilidade")}
              />
              {dia}
            </label>
          ))}
        </div>
      </div>

      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl mt-4"
      >
        Enviar
      </button>
    </form>
  );
}
