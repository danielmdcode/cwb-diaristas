import { create } from 'zustand';
import { User } from '@/app/types';

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

interface ScheduleState {
  professional: User | null;
  selectedTime: Value;
  showRecurrence: boolean;
  recurrenceInterval: string;
  setProfessional: (professional: User) => void;
  setSelectedTime: (time: Value) => void;
  setShowRecurrence: (show: boolean) => void;
  setRecurrenceInterval: (interval: string) => void;
  resetSchedule: () => void;
}

export const useScheduleStore = create<ScheduleState>((set) => ({
  professional: null,
  selectedTime: null,
  showRecurrence: false,
  recurrenceInterval: '',
  setProfessional: (professional) => set({ professional }),
  setSelectedTime: (time) => set({ selectedTime: time }),
  setShowRecurrence: (show) => set({ showRecurrence: show }),
  setRecurrenceInterval: (interval) => set({ recurrenceInterval: interval }),
  resetSchedule: () => set({
    professional: null,
    selectedTime: null,
    showRecurrence: false,
    recurrenceInterval: '',
  }),
})); 