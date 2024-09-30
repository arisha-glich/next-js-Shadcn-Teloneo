import { create } from 'zustand';

// Define the structure for form data
interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  streetAddress: string;
  phoneNumber: string;
  contactNumber?: string;
  practiceType: string;
  practiceSpecialty: string;
  specialInterest?: string;
  practiceSoftware?: string;
  socialLinks: string[];
  additionalInfo?: string;
  practiceHours?: string;
  accreditation: string;
  instituteName: string;
  degreeName: string;
  completionYear: string;
  attachment: File | null;
  currentlyWorking?: boolean;
  website?: string;
  aboutPractice?: string;
  socialMediaLink1?: string;
  socialMediaLink2?: string;
  selectedBank: string;
  iban: string;
  accountNumber: string;
}

// Define constants for form steps
const STEP_ONE = 1;
const STEP_TWO = 2;
const STEP_THREE = 3;
const STEP_FOUR = 4;
const STEP_FIVE = 5;

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

// Initialize form data
const initialFormData: FormData = {
  firstName: '',
  lastName: '',
  email: '',
  streetAddress: '',
  phoneNumber: '',
  practiceType: '',
  practiceSpecialty: '',
  specialInterest: '',
  practiceSoftware: '',
  socialLinks: [],
  additionalInfo: '',
  practiceHours: '',
  accreditation: '',
  instituteName: '',
  degreeName: '',
  completionYear: '',
  attachment: null,
  currentlyWorking: false,
  website: '',
  aboutPractice: '',
  socialMediaLink1: '',
  socialMediaLink2: '',
  selectedBank: '',
  iban: '',
  accountNumber: '',
};

// Zustand store for form management
const useFormStore = create<FormState>((set, get) => {
  // Load form data from localStorage when initializing
  const loadData = () => {
    try {
      const savedData = localStorage.getItem('formData');
      console.log("hello , i am getting")
      if (savedData) {
        console.log("hello , i am getting 2")
        const parsedData: FormData = JSON.parse(savedData);
        if (parsedData && typeof parsedData === 'object') {
          console.log("hello , i am getting 3")
          set({ formData: { ...initialFormData, ...parsedData } });
        }
      }
    } catch (error) {
      console.error('Failed to load form data from localStorage', error);
    }
  };

  // Initialize the store and load data from localStorage
  loadData();

  return {
    step: STEP_ONE,
    success: false,
    formData: initialFormData,

    nextStep: () => {
      const { step } = get();
      if (step < STEP_FIVE) {
        set({ step: step + 1 });
        // Save current form data to localStorage after moving to the next step
        localStorage.setItem('formData', JSON.stringify(get().formData));
      }
    },

    prevStep: () => {
      const { step } = get();
      if (step > STEP_ONE) {
        set({ step: step - 1 });
        loadData();
        // Update the form data when navigating back
        const savedData = localStorage.getItem('formData');
        if (savedData) {
          const parsedData: FormData = JSON.parse(savedData);
          set({ formData: { ...initialFormData, ...parsedData } });
        }
      }
    },

    setStep: (step: number) => {
      if (step >= STEP_ONE && step <= STEP_FIVE) {
        set({ step });
        // Save current form data to localStorage after setting step
        localStorage.setItem('formData', JSON.stringify(get().formData));
      }
    },

    setSuccess: (success: boolean) => set({ success }),

    saveData: (data: Partial<FormData>) => {
      set(state => {
        const updatedFormData = {
          ...state.formData,
          ...data,
        };
        localStorage.setItem('formData', JSON.stringify(updatedFormData));
        return { formData: updatedFormData };
      });
    },
  };
});

export default useFormStore;
