'use client';
import React from 'react';
import { useRouter } from 'next/navigation'; // Make sure this is imported correctly
import { Button } from '@/components/ui/button'; // Adjust this import path to the actual location of your button component
import SvgLogo from '@/public/GreenTick.svg'; // Adjust path for the tick logo

const SuccessFormSubmit: React.FC = () => {
  const router = useRouter();

  // Function to handle button click and navigate to Dashboard
  const handleButtonClick = () => {
    router.push('/doctors'); // Redirect to Dashboard
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <SvgLogo className="w-45 h-56 mb-4" />
      <h2 className="text-2xl font-semibold mb-2">Doctor Added Successfully!</h2>
      <p className="text-gray-600 mb-6">
        Thank you for your submission. We will process your form shortly.
      </p>
      <Button onClick={handleButtonClick} className="bg-primary w-[165px] text-white">
        Okay
      </Button>
    </div>
  );
};

export default SuccessFormSubmit;
