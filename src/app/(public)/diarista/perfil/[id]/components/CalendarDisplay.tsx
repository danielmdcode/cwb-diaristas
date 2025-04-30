'use client';

import { User } from "@/app/types";
import DatePicker from 'react-date-picker';
import { useState } from "react";

import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';

import './CalendarDisplay.css';

type CalendarDisplayProps = {
    professionalDetail: User;
    onTimeSelect?: (time: string) => void;
}

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function CalendarDisplay({ professionalDetail, onTimeSelect }: CalendarDisplayProps) {
    const [value, onChange] = useState<Value>(new Date());

    // Função para desabilitar dias específicos
    const tileDisabled = ({ date, view }: { date: Date; view: string }) => {
        // Apenas desabilita dias na visualização mensal
        if (view === 'month') {
            // Exemplo: desabilita domingos (0) e sábados (6)
            const day = date.getDay();
            return day === 0 || day === 6;
        }
        return false;
    };

    return (
        <div className="p-4">
            <h4 className="text-md font-bold mb-4">Selecione uma data</h4>
            <DatePicker 
                onChange={onChange} 
                value={value} 
                locale="pt-BR" 
                className="w-full"
                minDate={new Date()}
                calendarProps={{
                    tileDisabled: tileDisabled
                }}
            />
        </div>
    );
} 