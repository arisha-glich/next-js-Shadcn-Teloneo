'use client';
import React from 'react';
import Header from '@/components/Reusables/Header';
import Footer from '@/components/Reusables/Footer';

const RegisterPage: React.FC = () => {


  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow mt-[200px] flex items-center justify-center">
      <Footer />
       
      </div>
     
    </div>
  );
};

export default RegisterPage;
