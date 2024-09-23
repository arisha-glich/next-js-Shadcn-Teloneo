'use client';
import { create } from 'zustand';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import PaperclipIcon from '../../../../public/paperclip-solid 1.svg';
import SuccessFormSubmit from './success/SuccessFormSubmit';
import { z } from 'zod';

// Define the Zod schemas for validation
const step1Schema = z.object({
  logo: z.string().min(1, 'Logo is required'),
  clinicName: z.string().min(1, 'Clinic name is required'),
});

const step2Schema = z.object({
  representativeName: z.string().min(1, 'Representative name is required'),
  email: z.string().email('Invalid email'),
  address: z.string().min(1, 'Clinic address is required'),
});

const step3Schema = z.object({
  category: z.string().min(1, 'Category is required'),
  subCategory: z.string().min(1, 'Sub-category is required'),
});

const step4Schema = z.object({
  documents: z.array(z.string()).min(1, 'At least one document is required'),
});

// Define the types for the form state and actions
interface FormState {
  step: number;
  success: boolean;
  formData: {
    logo?: string;
    clinicName?: string;
    representativeName?: string;
    email?: string;
    address?: string;
    category?: string;
    subCategory?: string;
    documents?: string[];
  };
}

interface FormActions {
  nextStep: () => void;
  prevStep: () => void;
  setStep: (step: number) => void;
  setSuccess: (success: boolean) => void;
  setFormData: (data: Partial<FormState['formData']>) => void;
}

// Zustand store to manage form state
const useFormStore = create<FormState & FormActions>(set => ({
  step: 1,
  success: true,
  formData: {},
  nextStep: () => set(state => ({ step: Math.min(state.step + 1, 4) })),
  prevStep: () => set(state => ({ step: Math.max(state.step - 1, 1) })),
  setStep: (step: number) => set({ step }),
  setSuccess: (success: boolean) => set({ success }),
  setFormData: (data: Partial<FormState['formData']>) => set(state => ({
    formData: { ...state.formData, ...data },
  })),
}));

export default function ClinicSupportForm() {
  const { step, nextStep, prevStep, setSuccess, setFormData, formData } = useFormStore();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let isValid = true;

    // Validate based on current step
    switch (step) {
      case 1:
        const step1Result = step1Schema.safeParse({
          logo: formData.logo,
          clinicName: formData.clinicName,
        });
        if (!step1Result.success) {
          isValid = false;
          alert(step1Result.error.errors.map(err => err.message).join(', '));
        } else {
          setFormData({ logo: formData.logo, clinicName: formData.clinicName });
          nextStep();
        }
        break;

      case 2:
        const step2Result = step2Schema.safeParse({
          representativeName: formData.representativeName,
          email: formData.email,
          address: formData.address,
        });
        if (!step2Result.success) {
          isValid = false;
          alert(step2Result.error.errors.map(err => err.message).join(', '));
        } else {
          setFormData({
            representativeName: formData.representativeName,
            email: formData.email,
            address: formData.address,
          });
          nextStep();
        }
        break;

      case 3:
        const step3Result = step3Schema.safeParse({
          category: formData.category,
          subCategory: formData.subCategory,
        });
        if (!step3Result.success) {
          isValid = false;
          alert(step3Result.error.errors.map(err => err.message).join(', '));
        } else {
          setFormData({
            category: formData.category,
            subCategory: formData.subCategory,
          });
          nextStep();
        }
        break;

      case 4:
        const step4Result = step4Schema.safeParse({
          documents: formData.documents || [],
        });
        if (!step4Result.success) {
          isValid = false;
          alert(step4Result.error.errors.map(err => err.message).join(', '));
        } else {
          setSuccess(false);
        }
        break;

      default:
        break;
    }
  };

  function SuccessMessage() {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center">
        <SuccessFormSubmit />
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="t-[70px] flex h-[530px] w-[606px] flex-col gap-6 p-3">
      {/* Step Heading */}
      <h2 className="text-center text-xl font-semibold">Are you ready to provide support?</h2>
      <p className="text-center text-gray-500">Join as a clinic who will lorem ipsum dolor sit amet consectetur.</p>

      {/* Stepper */}
      <div className="relative mb-3 flex items-center justify-between">
        {/* Horizontal Line that crosses through the step circles */}
        <div className="absolute left-0 top-5 z-0 h-[2px] w-full bg-gray-300"></div>

        {[1, 2, 3, 4].map(s => (
          <div key={s} className="relative flex flex-col items-center">
            {/* Step Number */}
            <div
              className={cn(
                'relative z-10 flex h-10 w-10 items-center justify-center rounded-full',
                s < step
                  ? 'bg-primary text-white' // Completed steps are green
                  : s === step
                    ? 'bg-accent-foreground text-white' // Current step is orange
                    : 'border-2 border-gray-400 bg-white text-gray-400' // Future steps are white
              )}
            >
              {s < step ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              ) : (
                s
              )}
            </div>

            {/* Step Label */}
            <p className="mt-2 text-xs text-gray-700">{['Clinic ID', 'Representative', 'Service type', 'Uploads'][s - 1]}</p>
          </div>
        ))}
      </div>

      {/* Form Body */}
      <div className="space-y-4">
        {step === 1 && (
          <div>
            <div className="relative h-[45px] w-[546px]">
              <Input
                type="text"
                required
                placeholder="Attach CNIC Logo"
                onChange={(e) => setFormData({ logo: e.target.value })}
                className="h-[45px] w-full rounded-[7px] border-0 bg-ring pr-10 text-black placeholder:text-[12px]"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <PaperclipIcon className="text-gray-500" />
              </div>
            </div>
            <div className="mx-auto mt-3 flex h-[100px] w-[125px] items-center justify-center rounded-md border-0 border-dashed bg-ring p-5">
              <span className="text-[12px] italic text-gray-500">Logo preview</span>
            </div>
            <Input
              type="text"
              required
              placeholder="Clinic name"
              onChange={(e) => setFormData({ clinicName: e.target.value })}
              className="mt-4 h-[45px] w-full rounded-[7px] border-0 bg-ring text-gray-400 placeholder:text-[12px]"
            />
          </div>
        )}
        {step === 2 && (
          <div>
            <Input
              type="text"
              required
              placeholder="Representative name"
              onChange={(e) => setFormData({ representativeName: e.target.value })}
              className="mb-4 h-[45px] w-full rounded-[7px] border-0 bg-ring text-gray-400 placeholder:text-[12px]"
            />
            <Input
              type="email"
              required
              placeholder="Representative's official email address"
              onChange={(e) => setFormData({ email: e.target.value })}
              className="mb-4 h-[45px] w-full rounded-[7px] border-0 bg-ring text-gray-400 placeholder:text-[12px]"
            />
            <Input
              type="text"
              required
              placeholder="Clinic street address"
              onChange={(e) => setFormData({ address: e.target.value })}
              className="mb-4 h-[45px] w-full rounded-[7px] border-0 bg-ring text-gray-400 placeholder:text-[12px]"
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
              onChange={(e) => setFormData({ category: e.target.value })}
              className="mb-4 h-[45px] w-full rounded-[7px] border-0 bg-ring text-gray-400 placeholder:text-[12px]"
            />
            <label className="mb-2 block text-sm font-medium text-gray-700">Sub Category</label>
            <Input
              type="text"
              required
              placeholder="Select a sub-category"
              onChange={(e) => setFormData({ subCategory: e.target.value })}
              className="mb-4 h-[45px] w-full rounded-[7px] border-0 bg-ring text-gray-400 placeholder:text-[12px]"
            />
          </div>
        )}
        {step === 4 && (
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">Attach clinic license/legal documents</label>
            <div className="rounded-md border border-dashed border-gray-300 p-4">
              <div className="flex space-x-2">
                {formData.documents && formData.documents.map((doc, index) => (
                  <div key={index} className="flex items-center justify-between rounded-md p-2">
                    <span>{doc}</span>
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
                ))}
                <button
                  type="button"
                  onClick={() => setFormData({ documents: [...(formData.documents || []), 'New Document'] })}
                  className="text-blue-500"
                >
                  Add Document
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Form Actions */}
      <div className="mt-4 flex justify-between">
        {step > 1 && (
          <Button type="button" onClick={prevStep} className="bg-gray-500 text-white">
            Back
          </Button>
        )}
        <Button type="submit" className="bg-primary text-white">
          {step === 4 ? 'Submit' : 'Next'}
        </Button>
      </div>
    </form>
  );
}
