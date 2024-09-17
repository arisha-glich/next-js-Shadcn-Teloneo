// stores/formStore.ts
import { create } from 'zustand';

interface FormData {
  name: string;
  email: string;
  address: string;
  paymentDetails: string;
}

interface FormState {
  step: number;
  data: FormData;
  setStep: (step: number) => void;
  setData: (data: Partial<FormData>) => void;
}

export const useFormStore = create<FormState>((set) => ({
  step: 1,
  data: {
    name: '',
    email: '',
    address: '',
    paymentDetails: '',
  },
  setStep: (step) => set({ step }),
  setData: (data) =>
    set((state) => ({
      data: { ...state.data, ...data },
    })),
}));
