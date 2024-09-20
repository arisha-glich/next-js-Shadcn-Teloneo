'use client';
import { create } from 'zustand';
import { Button } from '@/components/ui/button'; // Ensure the path is correct
import { Input } from '@/components/ui/input'; // Ensure the path is correct
import { cn } from '@/lib/utils'; // Make sure this utility function exists or use classnames/clsx
import PaperclipIcon from '../../../public/paperclip-solid 1.svg'; // Ensure this is the correct path
import SuccessFormSubmit from './SuccessFormSubmit'; // Ensure this is the correct path

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
const useFormStore = create<FormState & FormActions>(set => ({
 step: 1, // Initial step
 success: true, // Track whether the form was submitted successfully
 nextStep: () =>
  set(state => ({ step: state.step < 4 ? state.step + 1 : state.step })),
 prevStep: () =>
  set(state => ({ step: state.step > 1 ? state.step - 1 : state.step })),
 setStep: (step: number) => set({ step }),
 setSuccess: (success: boolean) => set({ success }),
}));

export default function ClinicSupportForm() {
 const { step, nextStep, prevStep, setSuccess } = useFormStore(); // Access Zustand state and actions

 const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  if (step === 4) {
   // Show the success message after the final step
   setSuccess(false);
  } else {
   nextStep();
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
  <form
   onSubmit={handleSubmit}
   className="t-[70px] flex h-[530px] w-[606px] flex-col gap-6 p-3"
  >
   {/* Step Heading */}
   <h2 className="text-center text-xl font-semibold">
    Are you ready to provide support?
   </h2>
   <p className="text-center text-gray-500">
    Join as a clinic who will lorem ipsum dolor sit amet consectetur.
   </p>

   {/* Stepper */}
   <div className="relative mb-3 flex items-center justify-between">
    {/* Horizontal Line that crosses through the step circles */}
    <div className="absolute left-0 top-5 z-0 h-[2px] w-full bg-gray-300"></div>

    {[1, 2, 3, 4].map(s => (
     <div key={s} className="relative flex flex-col items-center">
      {/* Step Number (positioned above the line) */}
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

      {/* Step Label */}
      <p className="mt-2 text-xs text-gray-700">
       {['Clinic ID', 'Representative', 'Service type', 'Uploads'][s - 1]}
      </p>
     </div>
    ))}
   </div>

   {/* Form Body */}
   <div className="space-y-4">
    {/* Render the steps content */}
    {step === 1 && (
     <div>
      <div className="relative h-[45px] w-[546px]">
       <Input
        type="text"
        required
        placeholder="Attach CNIC Logo"
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
       className="mb-4 h-[45px] w-full rounded-[7px] border-0 bg-ring text-gray-400 placeholder:text-[12px]"
      />
      <Input
       type="email"
       required
       placeholder="Representative's official email address"
       className="mb-4 h-[45px] w-full rounded-[7px] border-0 bg-ring text-gray-400 placeholder:text-[12px]"
      />
      <Input
       type="text"
       required
       placeholder="Clinic street address"
       className="mb-4 h-[45px] w-full rounded-[7px] border-0 bg-ring text-gray-400 placeholder:text-[12px]"
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
       className="mb-4 h-[45px] w-full rounded-[7px] border-0 bg-ring text-gray-400 placeholder:text-[12px]"
      />
      <label className="mb-2 block text-sm font-medium text-gray-700">
       Sub Category
      </label>
      <Input
       type="text"
       required
       placeholder="Select a sub-category"
       className="mb-4 h-[45px] w-full rounded-[7px] border-0 bg-ring text-gray-400 placeholder:text-[12px]"
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
      </div>
     </div>
    )}
   </div>

   {/* Form Actions */}
   <div className="mt-4 flex justify-between">
    {step > 1 && (
     <Button
      type="button"
      onClick={prevStep}
      className="bg-gray-500 text-white"
     >
      Back
     </Button>
    )}
    <Button
     type="button"
     className="bg-primary text-white"
     onClick={SuccessMessage}
    >
     {step === 4 ? 'Submit' : 'Next'}
    </Button>
   </div>
  </form>
 );
}
