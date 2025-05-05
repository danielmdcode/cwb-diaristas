'use client';

import { User } from "@/app/types";
import CalendarDisplay from "./CalendarDisplay";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ENDPOINTS } from "@/config/routes";
import { useScheduleStore } from "@/store/scheduleStore";
import { useRouter } from "next/navigation";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

type FormSectionProps = {
    professionalDetail: User;
}

export default function ScheduleSection({ professionalDetail }: FormSectionProps) {
    const router = useRouter();
    const { setProfessional, setSelectedTime, setShowRecurrence, setRecurrenceInterval } = useScheduleStore();
    const [isRecurrenceEnabled, setIsRecurrenceEnabled] = useState(false);
    const [selectedInterval, setSelectedInterval] = useState("");

    const handleTimeSelect = (time: Value) => {
        setSelectedTime(time);
    };

    const handlePaymentClick = () => {
        setProfessional(professionalDetail);
        setShowRecurrence(isRecurrenceEnabled);
        setRecurrenceInterval(selectedInterval);
        router.push(ENDPOINTS.CHECKOUT);
    };

    return (
        <div className="bg-white sticky top-2">
            <div className="bg-primary text-white p-4">
                <h3 className="text-xl font-bold">Agendar</h3>
            </div>
            <div className="p-4 space-y-4">
                <CalendarDisplay
                    professionalDetail={professionalDetail}
                    onTimeSelect={handleTimeSelect}
                />

                <div className="space-y-3 p-4">
                    <label className="flex items-center space-x-2 cursor-pointer">
                        <input
                            type="checkbox"
                            checked={isRecurrenceEnabled}
                            onChange={(e) => setIsRecurrenceEnabled(e.target.checked)}
                            className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                        />
                        <span className="text-gray-700">Desejo marcar recorrência para esse serviço</span>
                    </label>

                    {isRecurrenceEnabled && (
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">
                                Qual intervalo?
                            </label>
                            <select
                                value={selectedInterval}
                                onChange={(e) => setSelectedInterval(e.target.value)}
                                className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                            >
                                <option value="">Selecione um intervalo</option>
                                <option value="7">7 dias</option>
                                <option value="15">15 dias</option>
                                <option value="30">30 dias</option>
                            </select>
                            <p className="text-sm text-gray-500 mt-2">
                                A recorrência só será aplicada mediante ao aceite do profissional. A cobrança será realizada somente no dia de cada serviço.
                            </p>
                        </div>
                    )}
                </div>

                <Button 
                    size={"full"} 
                    variant={"secondary"} 
                    className="mt-12"
                    onClick={handlePaymentClick}
                >
                    <span className="text-white font-bold">IR PARA PAGAMENTO</span>
                </Button>
            </div>
        </div>
    );
} 