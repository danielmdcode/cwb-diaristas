"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { ENDPOINTS } from "@/config/routes";
import { useToastStore } from "@/stores/use-toast-store";

const formSchema = z.object({
    nome: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
    email: z.string().email("Email inválido"),
    role: z.enum(["USER", "PROFESSIONAL", "ADMINISTRATOR"]),
    status: z.enum(["ACTIVE", "SUSPENDED", "BANNED", "INACTIVE"]),
});

export function NewUserForm() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const addToast = useToastStore((state) => state.addToast);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            nome: "",
            email: "",
            role: "USER",
            status: "ACTIVE",
        },
    });

    useEffect(() => {
        addToast({
            title: "Sucesso",
            description: "Usuário criado com sucesso!",
            type: "default",
        });
    }, []);

    async function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            setIsLoading(true);
            const response = await fetch("/api/admin/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
            });

            if (!response.ok) {
                throw new Error("Erro ao criar usuário");
            }

            addToast({
                title: "Sucesso",
                description: "Usuário criado com sucesso!",
                type: "default",
            });
            router.push(ENDPOINTS.USERS.LIST);
            router.refresh();
        } catch (error) {
            addToast({
                title: "Erro",
                description: "Erro ao criar usuário",
                type: "destructive",
            });
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                    control={form.control}
                    name="nome"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Nome</FormLabel>
                            <FormControl>
                                <Input placeholder="Nome do usuário" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input placeholder="Email do usuário" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="role"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Função</FormLabel>
                            <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                            >
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Selecione uma função" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    <SelectItem value="USER">Usuário</SelectItem>
                                    <SelectItem value="PROFESSIONAL">Profissional</SelectItem>
                                    <SelectItem value="ADMINISTRATOR">Administrador</SelectItem>
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="status"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Status</FormLabel>
                            <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                            >
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Selecione um status" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    <SelectItem value="ACTIVE">Ativo</SelectItem>
                                    <SelectItem value="SUSPENDED">Suspenso</SelectItem>
                                    <SelectItem value="BANNED">Banido</SelectItem>
                                    <SelectItem value="INACTIVE">Inativo</SelectItem>
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button type="submit" disabled={isLoading}>
                    {isLoading ? "Criando..." : "Criar Usuário"}
                </Button>
            </form>
        </Form>
    );
} 