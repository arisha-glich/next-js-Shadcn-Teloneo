'use client';
import React from 'react';
import Link from 'next/link';
import SvgLogo from '@/public/GreenLog.svg';
import SuccessMessage from './SuccessMessage';

const LoginHeader: React.FC = () => {
 return (
  <div>
   <header className="flex h-[537px] w-full flex-col items-center justify-center bg-[#F0F0F0]">
    {/* Logo Section */}
    <div className="absolute left-[42px] top-[42px]">
     <SvgLogo width={174} height={38} />
    </div>

    {/* Header Links */}
    <nav className="absolute left-[524px] top-[42px] flex space-x-14">
     <Link
      href="/"
      className="font-open-sans font-bold-[400px] text-left text-[16px] leading-[21.79px] hover:border-b-2 hover:border-primary hover:underline-offset-2"
     >
      Individual Doctor
     </Link>

     <Link
      href="/clinic-portal"
      className="font-open-sans font-bold-[400px] text-left text-[16px] leading-[21.79px] hover:border-b-2 hover:border-primary hover:underline-offset-2"
     >
      Clinic Portal
     </Link>
    </nav>

    {/* Login Button */}
    <div className="absolute right-[42px] top-[45px]">
     <Link
      href="/login"
      className="h-[50px] w-[153px] rounded-[34px] bg-primary px-12 py-3 text-[15px] font-semibold text-white"
     >
      Login
     </Link>
    </div>
    <div className="mt-[300px] flex items-center justify-center">
     <div className="w-[606px]">
      <SuccessMessage />
     </div>
    </div>
   </header>

   {/* Form Section - Positioned below the header */}
  </div>
 );
};

export default LoginHeader;
