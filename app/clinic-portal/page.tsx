'use client';
import React from 'react';
import Footer from '@/components/Reusables/Footer';
import LoginHeader from '@/app/clinic-portal/LoginHeader';

const RegisterPage: React.FC = () => {
 return (
  <div className="flex min-h-screen flex-col">
   <LoginHeader />
   <div className="mt-[200px] flex flex-grow items-center justify-center">
    <Footer />
   </div>
  </div>
 );
};

export default RegisterPage;
