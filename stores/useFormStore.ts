import { create } from 'zustand';

// Define the structure for form data
interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  key?: string; // Allow additional fields if necessary
}

// Define the structure for the form state
interface FormState {
  step: number;
  success: boolean;
  formData: FormData;
  nextStep: () => void;
  prevStep: () => void;
  setStep: (step: number) => void;
  setSuccess: (success: boolean) => void;
  saveData: (data: Partial<FormData>) => void;
}

// Zustand store for form management
const useFormStore = create<FormState>((set, get) => {
  // Load form data from localStorage when initializing
  const loadData = () => {
    try {
      const savedData = localStorage.getItem('formData');
      if (savedData) {
        set({ formData: JSON.parse(savedData) });
      }
    } catch (error) {
      console.error("Failed to load form data from localStorage", error);
    }
  };

  // Initialize the store
  loadData();

  return {
    step: 1, // Initial step is 1
    success: false, // Default success state is false
    formData: {
      firstName: '',
      lastName: '',
      email: '',
    }, // Initialize form data with empty fields

    // Go to the next step and save current data to localStorage
    nextStep: () => {
      const { step, formData } = get();
      set({ step: step + 1 });
      localStorage.setItem('formData', JSON.stringify(formData)); // Save form data to localStorage
    },

    // Go to the previous step
    prevStep: () => {
      const { step } = get();
      set({ step: Math.max(step - 1, 1) }); // Prevent step from going below 1
    },

    // Set a specific step manually (for clicking on the stepper)
    setStep: (step: number) => {
      set({ step });
    },

    // Set the success state (true/false)
    setSuccess: (success: boolean) => set({ success }),

    // Save form data to the store and localStorage
    saveData: (data: Partial<FormData>) => {
      set((state) => {
        const updatedFormData = {
          ...state.formData,
          ...data, // Merging valid formData fields
        };
        localStorage.setItem('formData', JSON.stringify(updatedFormData));
        return { formData: updatedFormData };
      });
    },
  };
});

export default useFormStore;
