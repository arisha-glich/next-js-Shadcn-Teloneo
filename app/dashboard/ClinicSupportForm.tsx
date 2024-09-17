'use client';
import { create } from 'zustand';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import PaperclipIcon from '../../public/paperclip-solid 1.svg';
import SuccessFormSubmit from './SuccessFormSubmit';

// Define the types for the form state and actions
interface FormState {
  step: number;
  success: boolean;
}

interface FormActions {
  nextStep: () => void;
  prevStep: () => void;
  setStep: (step: number) => void;
  setSuccess: (success: boolean) => void;
}

// Zustand store to manage form state
const useFormStore = create<FormState & FormActions>((set) => ({
  step: 1,
  success: false,
  nextStep: () => set((state) => ({ step: state.step < 4 ? state.step + 1 : state.step })),
  prevStep: () => set((state) => ({ step: state.step > 1 ? state.step - 1 : state.step })),
  setStep: (step: number) => set({ step }),
  setSuccess: (success: boolean) => set({ success }),
}));

interface ClinicSupportFormProps {
  closeModal: () => void; // Function to close the modal
}

export default function ClinicSupportForm({ closeModal }: ClinicSupportFormProps) {
  const { step, success, nextStep, prevStep, setSuccess } = useFormStore();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (step === 4) {
      setSuccess(true);
      closeModal(); // Close the modal when the form is successfully submitted
    } else {
      nextStep();
    }
  };

  if (success) {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center">
        <SuccessFormSubmit />
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="t-[70px] flex h-[530px] w-[606x] flex-col gap-6 p-3">
      {/* Step Heading */}
      <h2 className="text-center text-xl font-semibold">Are you ready to provide support?</h2>
      <p className="text-center text-gray-500">
        Join as a clinic who will lorem ipsum dolor sit amet consectetur.
      </p>

      {/* Stepper */}
      <div className="relative mb-3 flex items-center justify-between">
        <div className="absolute left-0 top-5 z-0 h-[2px] w-full bg-gray-300"></div>
        {[1, 2, 3, 4].map((s) => (
          <div key={s} className="relative flex flex-col items-center">
            <div
              className={cn(
                'relative z-10 flex h-10 w-10 items-center justify-center rounded-full',
                s < step ? 'bg-primary text-white' : s === step ? 'bg-accent-foreground text-white' : 'border-2 border-gray-400 bg-white text-gray-400'
              )}
            >
              {s < step ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              ) : (
                s
              )}
            </div>
            <p className="mt-2 text-xs text-gray-700">
              {['Clinic ID', 'Representative', 'Service type', 'Uploads'][s - 1]}
            </p>
          </div>
        ))}
      </div>

      {/* Form Body */}
      <div className="space-y-4">
        {step === 1 && (
          <div>
            <div className="relative h-[45px] w-[546]">
              <Input
                type="text"
                required
                placeholder="Attach CNIC Logo"
                className="h-[45px] w-full rounded-[7px] bg-ring pr-10 text-black placeholder:text-[12px] border-0"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <PaperclipIcon className="text-" />
              </div>
            </div>
            <div className="mx-auto mt-3 flex h-[100px] w-[125px] items-center justify-center rounded-md border-dashed bg-ring p-5 border-0">
              <span className="text-gray-500 text-[12px] italic">Logo preview</span>
            </div>
            <Input
              type="text"
              required
              placeholder="Clinic name"
              className="mt-4 h-[45px] w-full rounded-[7px] bg-ring placeholder:text-[12px] text-gray-400 border-0"
            />
          </div>
        )}
        {step === 2 && (
          <div>
            <Input
              type="text"
              required
              placeholder="Representative name"
              className="mb-4 h-[45px] w-full rounded-[7px] bg-ring placeholder:text-[12px] text-gray-400 border-0"
            />
            <Input
              type="email"
              required
              placeholder="Representative's official email address"
              className="mb-4 h-[45px] w-full rounded-[7px] bg-ring placeholder:text-[12px] text-gray-400 border-0"
            />
            <Input
              type="text"
              required
              placeholder="Clinic street address"
              className="mb-4 h-[45px] w-full rounded-[7px] bg-ring placeholder:text-[12px] text-gray-400 border-0"
            />
          </div>
        )}
        {step === 3 && (
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">Service Category</label>
            <Input
              type="text"
              required
              placeholder="Select a category"
              className="mb-4 h-[45px] w-full rounded-[7px] bg-ring placeholder:text-[12px] text-gray-400 border-0"
            />
            <label className="mb-2 block text-sm font-medium text-gray-700">Sub Category</label>
            <Input
              type="text"
              required
              placeholder="Select a sub-category"
              className="mb-4 h-[45px] w-full rounded-[7px] bg-ring placeholder:text-[12px] text-gray-400 border-0"
            />
          </div>
        )}
        {step === 4 && (
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Attach clinic license/legal documents
            </label>
            <div className="rounded-md border border-dashed border-gray-300 p-4">
              <div className="flex space-x-2">
                <div className="flex items-center justify-between rounded-md p-2">
                  <span>clinic license doc-orig</span>
                  <button className="text-red-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-4 w-4"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <div className="flex items-center justify-between rounded-md p-2">
                  <span>clinical psychology license</span>
                  <button className="text-red-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-4 w-4"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="mt-4">
                <Input type="file" required className="text-sm" />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Navigation Buttons */}
      <div className="mt-6 flex justify-center gap-4">
        <Button
          type="button"
          onClick={prevStep}
          disabled={step === 1}
          className="h-[45px] flex-1 bg-white text-primary opacity-100 hover:bg-gray-100"
        >
          Prev
        </Button>
        <Button
          type="submit"
          className="h-[45px] flex-1 bg-primary"
        >
          {step === 4 ? 'Submit' : 'Next'}
        </Button>
      </div>
    </form>
  );
}
