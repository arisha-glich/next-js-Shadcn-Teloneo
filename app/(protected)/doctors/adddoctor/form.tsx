'use client';
import { create } from 'zustand';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import { Checkbox } from "@/components/ui/checkbox";

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

const useFormStore = create<FormState & FormActions>(set => ({
 step: 1,
 success: true,
 nextStep: () =>
  set(state => ({ step: state.step < 5 ? state.step + 1 : state.step })),
 prevStep: () =>
  set(state => ({ step: state.step > 1 ? state.step - 1 : state.step })),
 setStep: (step: number) => set({ step }),
 setSuccess: (success: boolean) => set({ success }),
}));

export default function ClinicSupportForm() {
 const { step, nextStep, prevStep, setSuccess } = useFormStore();

 const router = useRouter(); // Add useRouter inside ClinicSupportForm component

 const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  if (step === 5) {
   setSuccess(false); // Update the success state
   router.push('/doctors/adddoctor/success'); // Redirect to success page after completing step 5
  } else {
   nextStep(); // Proceed to the next step
  }
 };

 return (
  <form
   onSubmit={handleSubmit}
   className="t-[70px] flex h-[530px] w-[606px] flex-col gap-6 p-3"
  >
   {/* Stepper */}
   <div className="relative mb-3 flex items-center justify-between">
    <div className="absolute left-0 top-5 z-0 h-[2px] w-full bg-gray-300"></div>

    {[1, 2, 3, 4, 5].map(s => (
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
      <p className="mt-2 text-xs text-gray-700">
       {
        [
         'Personal Info',
         'Provider Profile',
         'Education',
         'Experience',
         'Bank Information',
        ][s - 1]
       }
      </p>
     </div>
    ))}
   </div>

   {/* Form Body */}
   <div className="space-y-4">
    {/* Step 1: Personal Info */}
    {step === 1 && (
     <div>
      <Input
       type="text"
       required
       placeholder="First name"
       className="mb-4 h-[45px] w-full rounded-[7px] border-0 bg-white text-gray-400 placeholder:text-[12px]"
      />
      <Input
       type="text"
       required
       placeholder="Last name"
       className="mb-4 h-[45px] w-full rounded-[7px] border-0 bg-white text-secondary-foreground placeholder-white placeholder:text-[12px]"
      />
      <Input
       type="email"
       required
       placeholder="Email address"
       className="bg-whitetext-secondary-foreground mb-4 h-[45px] w-full rounded-[7px] border-0 placeholder-white placeholder:text-[12px]"
      />
      <Input
       type="text"
       required
       placeholder="Phone number"
       className="mb-4 h-[45px] w-full rounded-[7px] border-0 bg-white text-secondary-foreground placeholder-white placeholder:text-[12px]"
      />
      <Input
       type="text"
       required
       placeholder="Street address"
       className="mb-4 mt-4 h-[45px] w-full rounded-[7px] border-0 bg-white text-gray-400 placeholder:text-[12px]"
      />
     </div>
    )}
    {step === 2 && (
     <div className="space-y-6">
      <h3 className="text-center text-xl font-semibold text-gray-800">
       Provider Profile
      </h3>

      {/* Type of Practice */}
      <div>
       <label className="mb-1 block text-sm font-medium text-gray-700">
        Type of Practice <span className="text-red-500">*</span>
       </label>
       <Input
        type="text"
        required
        placeholder="Select a type of practice"
        className="h-[45px] w-full rounded-[7px] border-0 bg-white text-secondary-foreground placeholder-white placeholder:text-[12px]"
       />
      </div>

      {/* Practice Specialty */}
      <div>
       <label className="mb-1 block text-sm font-medium text-gray-700">
        Practice Specialty (if you offer multiple specialties, please list the
        majority) <span className="text-red-500">*</span>
       </label>
       <Input
        type="text"
        required
        placeholder="Select practice specialties"
        className="h-[45px] w-full rounded-[7px] border-0 bg-white text-secondary-foreground placeholder-white placeholder:text-[12px]"
       />
      </div>

      {/* Special Interest Areas */}
      <div>
       <label className="mb-1 block text-sm font-medium text-gray-700">
        Please list your special interest areas{' '}
        <span className="text-gray-400">(optional)</span>
       </label>
       <Input
        type="text"
        placeholder="Enter special interest areas"
        className="h-[45px] w-full rounded-[7px] border-0 bg-white text-secondary-foreground placeholder-white placeholder:text-[12px]"
       />
      </div>

      {/* Practice Software */}
      <div>
       <label className="mb-1 block text-sm font-medium text-gray-700">
        Do you use a practice software? If so, which one?
       </label>
       <Input
        type="text"
        placeholder="Enter practice software name"
        className="h-[45px] w-full rounded-[7px] border-0 bg-white text-secondary-foreground placeholder-white placeholder:text-[12px]"
       />
      </div>

      {/* Social Media Links */}
      <div>
       <label className="mb-1 block text-sm font-medium text-gray-700">
        Social Media Links
       </label>
       <Input
        type="url"
        placeholder="Link 1"
        className="text- h-[45px] w-full rounded-[7px] border-0 bg-white placeholder-white placeholder:text-[12px]"
       />

       {/* Add another link button */}
       <button type="button" className="mt-2 text-sm text-primary">
        + Add another link
       </button>
      </div>
     </div>
    )}
    {step === 3 && (
     <div className="space-y-6">
      {/* Existing Education Entry */}
      <div className="border-gray-300 p-4">
       <h4 className="text-base font-medium text-gray-700">
        MBBS - AIOM University, UI - 2020.
       </h4>
      </div>

      {/* Accreditation Dropdown */}
      <div>
       <label className="mb-1 block text-sm font-medium text-gray-700">
        Choose accreditation <span className="text-red-500">*</span>
       </label>
       <select
        required
        className="h-[45px] w-full rounded-[7px] border border-gray-300 bg-white text-secondary-foreground placeholder:text-[12px]"
       >
        <option value="" disabled selected>
         Choose accreditation
        </option>
        <option value="" selected>
         Choose accreditation two
        </option>
       </select>
      </div>

      {/* Institute Name */}
      <div>
       <label className="mb-1 block text-sm font-medium text-gray-700">
        Institute name <span className="text-red-500">*</span>
       </label>
       <Input
        type="text"
        required
        placeholder="Enter institute name"
        className="h-[45px] w-full rounded-[7px] border border-gray-300 bg-white text-secondary-foreground placeholder:text-[12px]"
       />
      </div>

      {/* Degree / Certificate Name */}
      <div>
       <label className="mb-1 block text-sm font-medium text-gray-700">
        Degree / certificate name <span className="text-red-500">*</span>
       </label>
       <Input
        type="text"
        required
        placeholder="Enter degree/certificate name"
        className="h-[45px] w-full rounded-[7px] border border-gray-300 bg-white text-secondary-foreground placeholder:text-[12px]"
       />
      </div>

      {/* Completion Year */}
      <div>
       <label className="mb-1 block text-sm font-medium text-gray-700">
        Completion year <span className="text-red-500">*</span>
       </label>
       <Input
        type="date"
        required
        className="h-[45px] w-full rounded-[7px] border border-gray-300 bg-white text-secondary-foreground"
       />
      </div>

      {/* Upload Degree/Certificate */}
      <div>
       <label className="mb-1 block text-sm font-medium text-gray-700">
        Attach educational degree/certificate{' '}
        <span className="text-gray-400">(optional)</span>
       </label>
       <Input
        type="file"
        className="h-[45px] w-full rounded-[7px] border border-gray-300 bg-white text-secondary-foreground placeholder:text-[12px]"
       />
      </div>

      {/* Add Another Education Button */}
      <div>
       <button type="button" className="mt-2 text-sm text-primary">
        + Add another education
       </button>
      </div>
     </div>
    )}

    {step === 4 && (
     <div className="space-y-6">
      <h3 className="text-center text-xl font-semibold text-gray-800">
       Experience
      </h3>

      {/* Institute Name */}
      <div>
       <label className="mb-1 block text-sm font-medium text-gray-700">
        Institute name <span className="text-red-500">*</span>
       </label>
       <Input
        type="text"
        required
        placeholder="Name of institute you have worked in"
        className="h-[45px] w-full rounded-[7px] border border-gray-300 bg-white text-secondary-foreground placeholder:text-[12px]"
       />
      </div>

      {/* Practice Name */}
      <div>
       <label className="mb-1 block text-sm font-medium text-gray-700">
        Practice name <span className="text-red-500">*</span>
       </label>
       <Input
        type="text"
        required
        placeholder="Name of practice"
        className="h-[45px] w-full rounded-[7px] border border-gray-300 bg-white text-secondary-foreground placeholder:text-[12px]"
       />
      </div>

      {/* Working From and To Dates */}
      <div className="grid grid-cols-2 gap-4">
       <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
         Working from <span className="text-red-500">*</span>
        </label>
        <Input
         type="date"
         required
         className="h-[45px] w-full rounded-[7px] border border-gray-300 bg-white text-secondary-foreground"
        />
       </div>

       <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
         To <span className="text-gray-400">(optional)</span>
        </label>
        <Input
         type="date"
         className="h-[45px] w-full rounded-[7px] border border-gray-300 bg-white text-secondary-foreground"
        />
       </div>
      </div>

      {/* Currently Working Checkbox */}
      <div className="flex items-center space-x-2">
       <Checkbox id="currentlyWorking" />
       <label
        htmlFor="currentlyWorking"
        className="text-sm font-medium text-gray-700"
       >
        I am currently working here
       </label>
      </div>
      {/* Website */}
      <div>
       <label className="mb-1 block text-sm font-medium text-gray-700">
        Website <span className="text-gray-400">(optional)</span>
       </label>
       <Input
        type="url"
        placeholder="Website link of institute"
        className="h-[45px] w-full rounded-[7px] border border-gray-300 bg-white text-secondary-foreground placeholder:text-[12px]"
       />
      </div>

      {/* About Practice */}
      <div>
       <label className="mb-1 block text-sm font-medium text-gray-700">
        About practice
       </label>
       <textarea
        placeholder="Type here..."
        rows={4}
        className="w-full rounded-[7px] border border-gray-300 bg-white p-2 text-secondary-foreground placeholder:text-[12px]"
       />
      </div>

      {/* Social Media Links */}
      <div>
       <label className="mb-1 block text-sm font-medium text-gray-700">
        Social media link
       </label>
       <Input
        type="url"
        placeholder="Link 1"
        className="h-[45px] w-full rounded-[7px] border border-gray-300 bg-white text-secondary-foreground placeholder:text-[12px]"
       />

       <button type="button" className="mt-2 text-sm text-primary">
        + Add another link
       </button>
      </div>

      {/* Attachment Upload */}
      <div>
       <label className="mb-1 block text-sm font-medium text-gray-700">
        Attachment <span className="text-gray-400">(optional)</span>
       </label>
       <Input
        type="file"
        className="h-[45px] w-full rounded-[7px] border border-gray-300 bg-white text-secondary-foreground placeholder:text-[12px]"
       />
      </div>

      {/* Add Another Experience Button */}
      <div>
       <button
        type="button"
        className="mt-4 w-full rounded-[7px] border border-gray-300 bg-white py-2 text-sm font-medium text-primary"
       >
        + Add another experience
       </button>
      </div>
     </div>
    )}

    {step === 5 && (
     <div className="space-y-6">
      <h3 className="text-center text-xl font-semibold text-gray-800">
       Bank Information
      </h3>

      {/* Select Bank */}
      <div>
       <label className="mb-1 block text-sm font-medium text-gray-700">
        Select Bank <span className="text-red-500">*</span>
       </label>
       <select
        required
        className="h-[45px] w-full rounded-[7px] border border-gray-300 bg-white text-gray-700"
       >
        <option value="">Select Your Bank</option>
        <option value="Bank1">Bank 1</option>
        <option value="Bank2">Bank 2</option>
        <option value="Bank3">Bank 3</option>
       </select>
      </div>

      {/* IBAN */}
      <div>
       <label className="mb-1 block text-sm font-medium text-gray-700">
        IBAN <span className="text-red-500">*</span>
       </label>
       <Input
        type="text"
        required
        placeholder="Enter Your IBAN"
        className="h-[45px] w-full rounded-[7px] border border-gray-300 bg-white text-secondary-foreground placeholder:text-[12px]"
       />
      </div>

      {/* Account Number */}
      <div>
       <label className="mb-1 block text-sm font-medium text-gray-700">
        Account Number <span className="text-red-500">*</span>
       </label>
       <Input
        type="text"
        required
        placeholder="Enter Your Account Number"
        className="h-[45px] w-full rounded-[7px] border border-gray-300 bg-white text-secondary-foreground placeholder:text-[12px]"
       />
      </div>
     </div>
    )}
   </div>
   <div className="mt-4 flex justify-between">
    {step === 1 && (
     <>
      <Button
       type="button"
       onClick={() => console.log('Cancel')}
       className="bg-ring text-primary hover:bg-white"
      >
       Cancel
      </Button>
      <Button type="submit" className="w-60 bg-primary text-white">
       Next
      </Button>
     </>
    )}

    {/* Steps 2 & 3: Prev and Next */}
    {(step === 2 || step === 3) && (
     <>
      <Button
       type="button"
       onClick={prevStep}
       className="bg-ring text-primary hover:bg-white"
      >
       Prev
      </Button>
      <Button type="submit" className="w-60 bg-primary text-white">
       Next
      </Button>
     </>
    )}

    {/* Step 4: Prev and Submit Education */}
    {step === 4 && (
     <>
      <Button
       type="button"
       onClick={prevStep}
       className="bg-ring text-primary hover:bg-white"
      >
       Prev
      </Button>
      <Button type="submit" className="w-60 bg-primary text-white">
       Submit Education
      </Button>
     </>
    )}

    {/* Step 5: Prev and Submit */}
    {step === 5 && (
     <>
      <Button
       type="button"
       onClick={prevStep}
       className="bg-ring text-primary hover:bg-white"
      >
       Prev
      </Button>
      <Button type="submit" className="w-60 bg-primary text-white">
       Complete
      </Button>
     </>
    )}
   </div>
  </form>
 );
}
