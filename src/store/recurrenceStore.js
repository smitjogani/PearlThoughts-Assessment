import {create} from 'zustand';

export const useRecurrenceStore = create((set) => ({
  recurrenceType: 'daily',
  startDate: null,
  endDate: null,
  recurrenceOptions: { interval: 1, daysOfWeek: [] },
  setRecurrenceType: (type) => set({ recurrenceType: type }),
  setStartDate: (date) => set({ startDate: date }),
  setEndDate: (date) => set({ endDate: date }),
  setRecurrenceOptions: (options) => set({ recurrenceOptions: options }),
}));