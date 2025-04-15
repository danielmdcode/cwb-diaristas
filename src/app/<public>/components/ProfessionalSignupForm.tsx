// components/ProfessionalSignupForm.tsx
"use client";

import { ServicesZone } from "@/services/zonesService";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import OutlinedInput from "@mui/material/OutlinedInput";
import Checkbox from "@mui/material/Checkbox";
import ListItemText from "@mui/material/ListItemText";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";

type FormData = {
  nome: string;
  email: string;
  cidade: string;
  experiencia: string;
  disponibilidade: string[];
  zona: string[];
};

type ProfessionalSignupFormProps = {
  initialZones: ServicesZone[];
};

const ITEM_HEIGHT = 60;
const ITEM_PADDING_TOP = 50;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
    },
  },
};

export default function ProfessionalSignupForm({
  initialZones,
}: ProfessionalSignupFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm<FormData>();

  const [submitStatus, setSubmitStatus] = useState<{
    success?: string;
    error?: string;
  }>({});
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/professionals", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Erro ao cadastrar profissional");
      }

      setSubmitStatus({ success: "Cadastro realizado com sucesso!" });
      reset(); // Limpa o formulário após o envio bem-sucedido
    } catch (error) {
      console.error("Erro:", error);
      setSubmitStatus({
        error:
          error instanceof Error
            ? error.message
            : "Ocorreu um erro ao processar seu cadastro",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-xl mx-auto space-y-4 p-6 bg-white rounded-xl shadow-lg"
    >
      <h2 className="text-2xl font-bold mb-8">
        Cadastre-se como Profissional de Limpeza
      </h2>

      {submitStatus.success && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative">
          {submitStatus.success}
        </div>
      )}

      {submitStatus.error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
          {submitStatus.error}
        </div>
      )}

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
        <FormControl sx={{ width: "100%" }}>
          <InputLabel id="demo-multiple-checkbox-label">
            Áreas de preferência
          </InputLabel>
          <Controller
            name="zona"
            control={control}
            rules={{ required: true }}
            defaultValue={[]}
            render={({ field }) => (
              <Select
                {...field}
                labelId="zona-label"
                multiple
                input={<OutlinedInput label="Áreas de preferência" />}
                renderValue={(selected) => (selected as string[]).join(", ")}
                MenuProps={MenuProps}
                style={{ width: "100%", textAlign: "left" }}
                onChange={(e) => field.onChange(e.target.value)}
              >
                {initialZones.map((zone, index) => (
                  <MenuItem key={index} value={zone.neighborhood}>
                    <Checkbox
                      checked={(field.value as string[]).includes(
                        zone.neighborhood
                      )}
                    />
                    <ListItemText primary={zone.neighborhood} />
                  </MenuItem>
                ))}
              </Select>
            )}
          />
        </FormControl>
        {errors.zona && (
          <span className="text-red-500 text-sm">Campo obrigatório</span>
        )}
      </div>

      <div>
        <FormControl sx={{ width: "100%" }}>
          <InputLabel id="demo-multiple-checkbox-label">
            Disponibilidade
          </InputLabel>
          <Controller
            name="disponibilidade"
            control={control}
            defaultValue={[]}
            rules={{ required: true }}
            render={({ field }) => (
              <Select
                {...field}
                labelId="disponibilidade-label"
                multiple
                input={<OutlinedInput label="Disponibilidade" />}
                renderValue={(selected) => (selected as string[]).join(", ")}
                MenuProps={MenuProps}
                style={{ width: "100%", textAlign: "left" }}
                onChange={(e) => field.onChange(e.target.value)}
              >
                {[
                  "Segunda",
                  "Terça",
                  "Quarta",
                  "Quinta",
                  "Sexta",
                  "Sábado",
                  "Domingo",
                ].map((day) => (
                  <MenuItem key={day} value={day}>
                    <Checkbox
                      checked={(field.value as string[]).includes(day)}
                    />
                    <ListItemText primary={day} />
                  </MenuItem>
                ))}
              </Select>
            )}
          />
        </FormControl>
        {errors.disponibilidade && (
          <span className="text-red-500 text-sm">Campo obrigatório</span>
        )}
      </div>

      <div>
        <label className="block mb-1 font-medium text-left">
          Experiência em limpeza
        </label>
        <textarea
          {...register("experiencia", { required: true })}
          className="w-full border border-gray-300 rounded px-3 py-2"
        />
        {errors.experiencia && (
          <span className="text-red-500 text-sm">Campo obrigatório</span>
        )}
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl mt-4 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
      >
        {isLoading ? (
          <>
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Enviando...
          </>
        ) : (
          'Enviar'
        )}
      </button>
    </form>
  );
}
