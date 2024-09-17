'use client';
import React from 'react';
import Link from 'next/link';
import SvgLogo from '../../public/GreenLog.svg';
import ClinicRegistrationForm from '@/app/Form'; 

const Header: React.FC = () => {
 const handleFormSubmit = (data: any) => {
  // Form submission handler
  console.log('Form data:', data);
 };

 return (
  <div>
   <header className="flex h-[537px] w-full flex-col items-center justify-center bg-[#F0F0F0]">
    {/* Logo Section */}
    <div className="absolute left-[42px] top-[42px]">
     <SvgLogo width={174} height={38} />
    </div>

    {/* Header Links */}
    <nav className="absolute left-[524px] top-[42px] flex space-x-8">
     <Link
      href="/individual-doctor"
      className="font-open-sans text-left text-[16px] font-[400] leading-[21.79px]"
     >
      Individual Doctor
     </Link>
     <Link
      href="/clinic-portal"
      className="font-open-sans text-left text-[16px] font-[400] leading-[21.79px]"
     >
      Clinic Portal
     </Link>
    </nav>

    {/* Login Button */}
    <div className="absolute right-[42px] top-[42px]">
     <Link
      href="/login"
      className="rounded-xl bg-primary px-6 py-2 text-[16px] text-white"
     >
      Login
     </Link>
    </div>
    <div className="mt-[300px] flex items-center justify-center">
     <div className="w-[606px]">
      <ClinicRegistrationForm onSubmit={handleFormSubmit} />
     </div>
    </div>
   </header>

   {/* Form Section - Positioned below the header */}
  </div>
 );
};

export default Header;
