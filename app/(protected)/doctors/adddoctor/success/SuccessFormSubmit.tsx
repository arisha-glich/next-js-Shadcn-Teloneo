'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import SvgLogo from '@/public/GreenTick.svg';

const SuccessFormSubmit: React.FC = () => {
 return (
  <div className="flex h-screen w-full flex-col items-center justify-center p-0">
   <SvgLogo className="w-45 mb-4 h-56" />
   <h2 className="mb-2 text-2xl font-semibold">Doctor Added Successfully!</h2>
   <p className="mb-6 text-gray-600">
    Thank you for your submission. We will process your form shortly.
   </p>
   <Link href="/doctors">
    <Button className="w-[165px] bg-primary text-white">Okay</Button>
   </Link>
  </div>
 );
};

export default SuccessFormSubmit;
