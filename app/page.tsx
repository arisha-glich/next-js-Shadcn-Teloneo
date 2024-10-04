'use client';
import React from 'react';
import Header from '@/components/Reusables/Header';
import Footer from '@/components/Reusables/Footer';

const RegisterPage: React.FC = () => {
 return (
  <div className="flex h-[100%] flex-col">
   <Header />
   <div className="mt-[200px] flex flex-grow items-center justify-center">
    <Footer />
   </div>
  </div>
 );
};

export default RegisterPage;
