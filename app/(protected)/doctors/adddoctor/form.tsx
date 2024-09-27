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
  const methods = useForm();

  const handleSubmit = (data: any) => {
    if (step === 5) {
      setSuccess(true); // Set success to true
      router.push('/doctors/adddoctor/success'); // Redirect to success page
    } else {
      nextStep(); // Move to the next step
    }
  };

  // Render Navigation Buttons based on Step
  const renderNavigationButtons = () => {
    switch (step) {
      case 1:
        return (
          <>
            <Button type="button" onClick={() => console.log('Cancel')} className="bg-ring text-primary hover:bg-white">
              Cancel
            </Button>
            <Button type="submit" className="w-60 bg-primary text-white">
              Next
            </Button>
          </>
        );
      case 2:
      case 3:
        return (
          <>
            <Button type="button" onClick={prevStep} className="bg-ring text-primary hover:bg-white">
              Prev
            </Button>
            <Button type="submit" className="w-60 bg-primary text-white">
              Next
            </Button>
          </>
        );
      case 4:
        return (
          <>
            <Button type="button" onClick={prevStep} className="bg-ring text-primary hover:bg-white">
              Prev
            </Button>
            <Button type="submit" className="w-60 bg-primary text-white">
              Submit Education
            </Button>
          </>
        );
      case 5:
        return (
          <>
            <Button type="button" onClick={prevStep} className="bg-ring text-primary hover:bg-white">
              Prev
            </Button>
            <Button type="submit" className="w-60 bg-primary text-white">
              Complete
            </Button>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(handleSubmit)} className="t-[70px] flex h-[530px] w-[606px] flex-col gap-6 p-3">
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
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-6 w-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                ) : (
                  s
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Render current step */}
        {step === 1 && <Step1 />}
        {step === 2 && <Step2 />}
        {step === 3 && <Step3 />}
        {step === 4 && <Step4 />}
        {step === 5 && <Step5 />}

        {/* Navigation buttons */}
        <div className="mt-4 flex justify-between">
          {renderNavigationButtons()}
        </div>
      </form>
    </FormProvider>
  );
}
