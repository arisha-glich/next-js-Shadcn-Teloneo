'use client';
import { create } from 'zustand';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import PaperclipIcon from '../../../public/paperclip-solid 1.svg';
import SuccessFormSubmit from './SuccessFormSubmit';
import {
 Dialog,
 DialogContent,
 DialogHeader,
 DialogTitle,
 DialogDescription,
} from '@/components/ui/dialog'; // Importing from shadcn/ui
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

// Define the types for the form state and actions
interface FormState {
 step: number;
 success: boolean;
 formData: FormData;
}

interface FormData {
 clinicLogo?: string;
 clinicName?: string;
 representativeName?: string;
 representativeEmail?: string;
 clinicAddress?: string;
 serviceCategory?: string;
 subCategory?: string;
}

interface FormActions {
 nextStep: () => void;
 prevStep: () => void;
 setStep: (step: number) => void;
 setSuccess: (success: boolean) => void;
 setFormData: (data: Partial<FormData>) => void;
}

// Zustand store to manage form state
const useFormStore = create<FormState & FormActions>(set => ({
 step: 1,
 success: false,
 formData: {}, // initialize empty form data
 nextStep: () =>
  set(state => ({ step: state.step < 4 ? state.step + 1 : state.step })),
 prevStep: () =>
  set(state => ({ step: state.step > 1 ? state.step - 1 : state.step })),
 setStep: (step: number) => set({ step }),
 setSuccess: (success: boolean) => set({ success }),
 setFormData: (data: Partial<FormData>) =>
  set(state => ({ formData: { ...state.formData, ...data } })), // update form data
}));

interface ClinicSupportFormProps {
 closeModal: () => void; // Function to close the modal
}

export default function ClinicSupportForm({
 closeModal,
}: ClinicSupportFormProps) {
 const {
  step,
  success,
  nextStep,
  prevStep,
  setSuccess,
  formData,
  setFormData,
 } = useFormStore();
 const [logoPreview, setLogoPreview] = useState<string | null>(null);

 // Load data from localStorage on mount
 useEffect(() => {
  const savedFormData = localStorage.getItem('clinicSupportForm');
  if (savedFormData) {
   setFormData(JSON.parse(savedFormData));
  }
 }, [setFormData]);

 const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  // Save data to localStorage
  localStorage.setItem('clinicSupportForm', JSON.stringify(formData));

  if (step === 4) {
   setSuccess(true);
   localStorage.removeItem('clinicSupportForm'); // Clear localStorage after submission
   closeModal(); // Close the modal when the form is successfully submitted
  } else {
   nextStep();
  }
 };

 // Function to handle input changes and update form data
 const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setFormData({ [e.target.name]: e.target.value } as Partial<FormData>);
 };

 if (success) {
  return (
   <div className="flex h-full w-full flex-col items-center justify-center">
    <SuccessFormSubmit />
   </div>
  );
 }

 const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const file = e.target.files?.[0]; // Get the selected file
  if (file) {
   const reader = new FileReader();
   reader.onloadend = () => {
    setLogoPreview(reader.result as string); // Set the preview to the file URL
   };
   reader.readAsDataURL(file); // Read the file as a data URL
   setFormData({ clinicLogo: file.name }); // Update form data with the file name (or relevant data)
  }
 };

 return (
  <Dialog open onOpenChange={closeModal}>
   <DialogContent className="h-[550px] max-w-[606px] p-3">
    <DialogHeader>
     <DialogTitle className="p-3 text-center text-[26px] font-semibold">
      Are you ready to provide support?
     </DialogTitle>
     <DialogDescription className="text-normal text-center text-[12px] text-secondary-foreground">
      Join as a clinic who will lorem ipsum dolor sit amet consectetur.
     </DialogDescription>
    </DialogHeader>
    <form
     onSubmit={handleSubmit}
     className="t-[65px] flex h-[530px] w-[606x] flex-col items-center gap-2 rounded-3xl p-3 text-[12px] text-accent-foreground"
    >
     {/* Stepper */}
     <div className="relative mb-3 flex w-[417px] items-center justify-center">
      <div className="absolute top-5 z-0 h-[2px] w-full bg-gray-300"></div>
      <div className="flex w-full max-w-[417px] justify-between">
       {[1, 2, 3, 4].map(s => (
        <div key={s} className="relative flex flex-col items-center">
         <div
          className={cn(
           'relative z-10 flex h-10 w-10 items-center justify-center rounded-full',
           s < step
            ? 'bg-primary text-white'
            : s === step
              ? 'bg-accent-foreground text-white'
              : 'border-2 border-gray-400 bg-white text-gray-400'
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
            <path
             strokeLinecap="round"
             strokeLinejoin="round"
             d="M4.5 12.75l6 6 9-13.5"
            />
           </svg>
          ) : (
           s
          )}
         </div>
         <p className="mt-2 text-[12px] text-black">
          {['Clinic ID', 'Representative', 'Service type', 'Uploads'][s - 1]}
         </p>
        </div>
       ))}
      </div>
     </div>

     {/* Form Body */}
     <div className="space-y-4">
      {step === 1 && (
       <div>
        <div className="relative h-[45px] w-[546px]">
         {' '}
         {/* Fixed width here */}
         <Input
          type="file"
          required
          placeholder="Attach CNIC Logo"
          name="clinicLogo"
          onChange={handleFileChange} // Update to use handleFileChange for file input
          className="h-[45px] w-full rounded-[7px] border-0 bg-ring pr-10 text-black placeholder:text-[12px]"
         />
         <div className="absolute inset-y-0 right-0 flex items-center pr-3">
          <PaperclipIcon className="text-gray-500" />{' '}
          {/* Added color for visibility */}
         </div>
        </div>

        {/* Logo Preview Section */}
        <div className="mx-auto mt-3 flex h-[100px] w-[125px] items-center justify-center rounded-md border-0 border-dashed bg-ring p-5">
         {logoPreview ? (
          <div className="h-12 w-12 relative">
           {' '}
           {/* Set dimensions for the Image container */}
           <Image
            src={logoPreview}
            alt="Logo Preview"
            layout="fill" // Use layout="fill" to fill the container
            objectFit="contain" // Use objectFit to maintain aspect ratio
            className="rounded-md" // Optional: Add any other styles you need
           />
          </div>
         ) : (
          <span className="text-[12px] italic text-gray-500">Logo preview</span>
         )}
        </div>

        <Input
         type="text"
         required
         placeholder="Clinic name"
         name="clinicName"
         value={formData.clinicName || ''}
         onChange={handleInputChange}
         className="mt-4 h-[45px] w-[546px] rounded-[7px] border-0 bg-ring text-gray-400 placeholder:text-[12px]"
        />
       </div>
      )}
      {step === 2 && (
       <div>
        <Input
         type="text"
         required
         placeholder="Representative name"
         className="mb-4 h-[45px] w-[546px] rounded-[7px] border-0 bg-ring text-gray-400 placeholder:text-[12px]"
        />
        <Input
         type="email"
         required
         placeholder="Representative's official email address"
         className="mb-4 h-[45px] w-[546px] rounded-[7px] border-0 bg-ring text-gray-400 placeholder:text-[12px]"
        />
        <Input
         type="text"
         required
         placeholder="Clinic street address"
         className="mb-4 h-[45px] w-[546px] rounded-[7px] border-0 bg-ring text-gray-400 placeholder:text-[12px]"
        />
       </div>
      )}
      {step === 3 && (
       <div>
        <label className="mb-2 block text-sm font-medium text-gray-700">
         Service Category
        </label>
        <Input
         type="text"
         required
         placeholder="Select a category"
         className="mb-4 h-[45px] w-[546px] rounded-[7px] border-0 bg-ring text-gray-400 placeholder:text-[12px]"
        />
        <label className="mb-2 block text-sm font-medium text-gray-700">
         Sub Category
        </label>
        <Input
         type="text"
         required
         placeholder="Select a sub-category"
         className="mb-4 h-[45px] w-[546px] rounded-[7px] border-0 bg-ring text-gray-400 placeholder:text-[12px]"
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
             <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
             />
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
             <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
             />
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
     <div className="absolute top-[425px] mt-6 flex w-auto justify-center gap-4">
      <Button
       type="button"
       onClick={prevStep}
       disabled={step === 1}
       className="h-[45px] flex-1 bg-white px-[4rem] text-primary opacity-100 hover:bg-gray-100"
      >
       Prev
      </Button>
      <Button type="submit" className="h-[45px] flex-1 bg-primary px-[4rem]">
       {step === 4 ? 'Submit' : 'Next'}
      </Button>
     </div>
    </form>
   </DialogContent>
  </Dialog>
 );
}
