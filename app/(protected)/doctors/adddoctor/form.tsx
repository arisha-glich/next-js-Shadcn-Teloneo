'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import useFormStore from '@/stores/useFormStore';
import { useForm, FormProvider } from 'react-hook-form';
import Step1 from './Steps/firststep';
import Step2 from './Steps/secondstep';
import Step3 from './Steps/thirdstep';
import Step4 from './Steps/fourthstep';
import Step5 from './Steps/fiftstep'; // Corrected the import name

export default function ClinicSupportForm() {
 const { step, nextStep, prevStep, setSuccess } = useFormStore();
 const router = useRouter();
 const methods = useForm(); // Initializes react-hook-form

 // Render Navigation Buttons based on the step
 return (
  <FormProvider {...methods}>
   <div className="t-[70px] flex h-[530px] w-[606px] flex-col gap-6 p-3">
    {/* Stepper */}
    <div className="relative mb-3 flex items-center justify-between">
     <div className="absolute left-0 top-5 z-0 h-[2px] w-full bg-gray-300"></div>
     {[1, 2, 3, 4, 5].map(s => (
      <div key={s} className="relative flex flex-col items-center">
       <div
        className={cn(
         'relative z-10 flex h-10 w-10 items-center justify-center rounded-full text-[15px] text-white',
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
          strokeWidth={2}
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
      </div>
     ))}
    </div>

    {/* Render current step based on the value of "step" */}
    {step === 1 && <Step1 />}
    {step === 2 && <Step2 />}
    {step === 3 && <Step3 />}
    {step === 4 && <Step4 />}
    {step === 5 && <Step5 />}
   </div>
  </FormProvider>
 );
}
