'use client';

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useScheduleStore } from "@/store/scheduleStore"
import { format } from "date-fns"
import { ptBR } from "date-fns/locale"
import { useRouter } from "next/navigation";
import { ENDPOINTS } from "@/config/routes";
import { useState } from "react";
import { useToastStore } from "@/stores/use-toast-store";

export default function CheckoutPage() {
  const router = useRouter();
  const { professional, selectedTime, showRecurrence, recurrenceInterval } = useScheduleStore();
  const [isLoading, setIsLoading] = useState(false);
  const addToast = useToastStore((state) => state.addToast);

  if (!professional || !selectedTime) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Finalizar Agendamento</h1>
        <Card className="p-6">
          <p className="text-center text-gray-600">Nenhum agendamento encontrado. Por favor, selecione um profissional e horário.</p>
          <Button onClick={() => router.push(ENDPOINTS.HOME)}>Encontre uma diarista</Button>
        </Card>
      </div>
    );
  }

  const formatDate = (date: Date) => {
    return format(date, "d 'de' MMMM 'de' yyyy", { locale: ptBR });
  };

  const getRecurrenceText = () => {
    if (!showRecurrence) return "Sem recorrência";
    
    const interval = parseInt(recurrenceInterval);
    if (interval === 7) return "Semanal";
    if (interval === 15) return "Quinzenal";
    if (interval === 30) return "Mensal";
    return "Sem recorrência";
  };

  const getAverageRating = () => {
    if (!professional.userInfo?.ratings?.length) return 5.0;
    const sum = professional.userInfo.ratings.reduce((acc, curr) => acc + curr.rating, 0);
    return (sum / professional.userInfo.ratings.length).toFixed(1);
  };

  const handleFinishAppointment = async () => {
    try {
      setIsLoading(true);

      // TODO: Get the user's selected address
      const addressId = "default_address_id"; // This should come from user's selected address

      const response = await fetch("/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          professionalId: professional.id,
          serviceDate: selectedTime,
          totalAmount: professional.userInfo?.price || 0,
          addressId,
          description: `Agendamento ${getRecurrenceText().toLowerCase()}`
        }),
      });

      if (!response.ok) {
        throw new Error("Erro ao criar agendamento");
      }

      addToast({
        title: "Sucesso",
        description: "Agendamento criado com sucesso!",
        type: "default",
      });

      router.push(ENDPOINTS.THANK_YOU);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Erro ao criar agendamento. Por favor, tente novamente.";
      addToast({
        title: "Erro",
        description: errorMessage,
        type: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Finalizar Agendamento</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Coluna da Esquerda - Resumo do Profissional */}
        <div className="space-y-6">
          <Card className="p-6">
            <div className="flex items-center space-x-4 mb-6">
              <Avatar className="h-16 w-16">
                <AvatarImage src={professional.userInfo?.avatar || "https://github.com/shadcn.png"} />
                <AvatarFallback>{professional.nome?.substring(0, 2).toUpperCase()}</AvatarFallback>
              </Avatar>
              <div>
                <h2 className="text-xl font-semibold">{professional.nome}</h2>
                <p className="text-gray-600">{professional.role === 'PROFESSIONAL' ? 'Diarista Profissional' : 'Cliente'}</p>
                <div className="flex items-center mt-1">
                  <span className="text-yellow-400">★★★★★</span>
                  <span className="text-gray-600 ml-2">({getAverageRating()})</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="border-b pb-4">
                <h3 className="font-medium mb-2">Data do Serviço</h3>
                <p className="text-gray-600">
                  {selectedTime instanceof Date ? formatDate(selectedTime) : "Data não selecionada"}
                </p>
              </div>

              <div>
                <h3 className="font-medium mb-2">Recorrência</h3>
                <p className="text-gray-600">{getRecurrenceText()}</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Coluna da Direita - Pagamento */}
        <div className="space-y-6">
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-6">Resumo do Pagamento</h2>
            
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal do Serviço</span>
                <span className="font-medium">R$ {professional.userInfo?.price?.toFixed(2) || "0,00"}</span>
              </div>
              
              <div className="border-t pt-4">
                <div className="flex justify-between">
                  <span className="font-semibold">Total</span>
                  <span className="font-semibold text-lg">R$ {professional.userInfo?.price?.toFixed(2) || "0,00"}</span>
                </div>
              </div>
            </div>

            <div className="mt-8 space-y-4">
              <Button 
                className="w-full" 
                variant={"secondary"} 
                size="lg"
                onClick={handleFinishAppointment}
                disabled={isLoading}
              >
                {isLoading ? "Processando..." : "Finalizar Agendamento"}
              </Button>
            </div>

          </Card>
        </div>
      </div>
    </div>
  )
} 