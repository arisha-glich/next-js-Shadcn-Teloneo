'use client';
import React from 'react';
import Header from '@/components/Reusables/Header';
import Footer from '@/components/Reusables/Footer';
import ClinicRegistrationForm from '@/components/NotResuables/Form'; // Assuming the form is here

const RegisterPage: React.FC = () => {
  const handleFormSubmit = (data: any) => {
    // Form submission handler
    console.log('Form data:', data);
  };

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
