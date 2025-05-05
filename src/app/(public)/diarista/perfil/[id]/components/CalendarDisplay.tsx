import { User } from "@/app/types";
import DatePicker from 'react-date-picker';
import { useEffect, useState } from "react";

import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';

import './CalendarDisplay.css';

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

type CalendarDisplayProps = {
    professionalDetail: User;
    onTimeSelect: (time: Value) => void;
}

export default function CalendarDisplay({ professionalDetail, onTimeSelect }: CalendarDisplayProps) {
    const minDate = new Date();
    minDate.setDate(minDate.getDate() + 7);

    const [value, onChange] = useState<Value>(minDate);

    const availableDates = professionalDetail.userInfo.availabilitySchedule;

    const dayMapping: { [key: string]: number } = {
        'Domingo': 0,
        'Segunda': 1,
        'Terça': 2,
        'Quarta': 3,
        'Quinta': 4,
        'Sexta': 5,
        'Sábado': 6
    };

    const availableDays = availableDates.map(schedule => dayMapping[schedule.dayOfWeek]);

    const tileDisabled = ({ date, view }: { date: Date; view: string }) => {
        if (view === 'month') {
            const day = date.getDay();
            return !availableDays.includes(day);
        }
        return false;
    };

    useEffect(() => {
        if (value) {
            onTimeSelect(value);
        }
    }, [value]);

    return (
        <div className="p-4">
            <div className="flex flex-col gap-1 mb-4">
                <h4 className="text-md font-bold">Selecione uma data</h4>
                <small className="text-sm text-gray-500">
                    *Selecione uma data a partir de 7 dias a partir de hoje
                </small>
            </div>
            <DatePicker
                onChange={onChange}
                value={value}
                locale="pt-BR"
                className="w-full"
                minDate={minDate}
                format="dd/MM/yyyy"
                calendarProps={{
                    tileDisabled: tileDisabled
                }}
            />
        </div>
    );
} 