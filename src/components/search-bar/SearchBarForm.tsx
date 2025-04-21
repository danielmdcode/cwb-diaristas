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

export default function SearchBarForm({
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
      className="flex gap-4 bg-black/15 rounded-2xl py-6 px-8 md:w-8/12 w-full"
    >

      {submitStatus.error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
          {submitStatus.error}
        </div>
      )}

      <div className="w-6/12">
        <FormControl sx={{ width: "100%" }}>
          <InputLabel sx={{
            color: 'white',
            '&.Mui-focused': {
              color: 'white',
            },
          }}>
            Qual seu bairro?
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
                input={<OutlinedInput label="Qual seu bairro?" sx={{ color: 'white' }} />}
                renderValue={(selected) => (selected as string[]).join(", ")}
                MenuProps={MenuProps}
                style={{ width: "100%", textAlign: "left" }}
                onChange={(e) => field.onChange(e.target.value)}
                sx={{
                  color: "white",
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'white',
                  },
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'white',
                  },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'white',
                  },
                }}
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

      <div className="w-6/12">
        <FormControl sx={{ width: "100%" }}>
          <InputLabel sx={{
            color: 'white',
            '&.Mui-focused': {
              color: 'white',
            },
          }}>
            Qual dia?
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
                input={<OutlinedInput label="Qual dia?" sx={{ color: 'white' }} />}
                renderValue={(selected) => (selected as string[]).join(", ")}
                MenuProps={MenuProps}
                style={{ width: "100%", textAlign: "left" }}
                onChange={(e) => field.onChange(e.target.value)}
                sx={{
                  color: "white",
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'white',
                  },
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'white',
                  },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'white',
                  },
                }}
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

      <button
        type="submit"
        disabled={isLoading}
        className="bg-secondary text-white font-bold px-4 py-3 rounded-md hover:bg-white hover:text-primary transition cursor-pointer">
        BUSCAR
      </button>
    </form>
  );
}
