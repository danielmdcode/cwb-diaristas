'use client';

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"
import { useRouter } from "next/navigation";
import { ENDPOINTS } from "@/config/routes";

export default function AppointmentConfirmedPage() {
  const router = useRouter();

  return (
    <div className="container mx-auto px-4 pt-12 pb-8">
      <div className="max-w-2xl mx-auto">
        <Card className="p-8 text-center">
          <div className="flex justify-center mb-6">
            <CheckCircle2 className="h-16 w-16 text-green-500" />
          </div>
          
          <h1 className="text-3xl font-bold mb-4">Agendamento Realizado!</h1>
          
          <p className="text-gray-600 mb-6">
            Obrigado por escolher nossos serviços. Seu agendamento foi registrado com sucesso.
          </p>

          <div className="bg-blue-50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold mb-3">Próximos Passos</h2>
            <p className="text-gray-600 mb-4">
              Seu agendamento está pendente de confirmação pela diarista. Você receberá uma notificação assim que ela responder.
            </p>
          </div>

          <div className="space-y-4">
            <Button 
              className="w-full" 
              onClick={() => router.push(ENDPOINTS.HOME)}
            >
              Voltar para a Página Inicial
            </Button>
            
            <Button 
              variant="outline" 
              className="w-full"
              onClick={() => router.push(ENDPOINTS.MY_APPOINTMENTS)}
            >
              Ver Meus Agendamentos
            </Button>
          </div>
        </Card>
      </div>
    </div>
  )
} 