'use client';
import React from 'react';
import Link from 'next/link';
import SvgLogo from '../../public/GreenLog.svg';
import SuccessMessage from '../NotResuables/SuccessMessage';

const LoginHeader: React.FC = () => {
  const handleFormSubmit = (data: any) => {
    // Form submission handler
    console.log('Form data:', data);
  };

  return (
    <div>
      <header className="w-full h-[537px] bg-[#F0F0F0] flex flex-col items-center justify-center">
        {/* Logo Section */}
        <div className="absolute top-[42px] left-[42px]">
          <SvgLogo width={174} height={38} />
        </div>

        {/* Header Links */}
        <nav className="absolute top-[42px] left-[524px] flex space-x-8">
          <Link
            href="/"
            className="font-open-sans text-[16px] font-[400] leading-[21.79px] text-left"
          >
            Individual Doctor
          </Link>
          <Link
            href="/clinic-portal"
            className="font-open-sans text-[16px] font-[400] leading-[21.79px] text-left"
          >
            Therapy Clinic
          </Link>
        </nav>

        {/* Login Button */}
        <div className="absolute top-[42px] right-[42px]">
          <Link href="/login" className="bg-primary text-white rounded-xl px-6 py-2 text-[16px]">
            Login
          </Link>
        </div>
        <div className="mt-[300px] flex items-center justify-center">
        <div className="w-[606px]">
          <SuccessMessage/>
        </div>
      </div>
      </header>

      {/* Form Section - Positioned below the header */}
     
    </div>
  );
};

export default LoginHeader;
