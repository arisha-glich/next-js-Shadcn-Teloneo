'use client';
import React from 'react';
import { Button } from '../ui/button'; // Adjust this import path to the actual location of your button component
import SvgLogo from '../../public/GreenTick.svg';
const SuccessMessage: React.FC = () => {
 return (
  <div className="mx-auto my-32 flex h-[530px] w-[656px] flex-col items-center justify-center rounded-lg bg-white shadow-lg">
   {/* Green Checkmark Circle */}
   <div className="mb-8 flex h-32 w-45 items-center justify-center rounded-full bg-background">
    <SvgLogo />
   </div>

   {/* Message */}
   <h2 className="mb-4 text-center text-xl font-bold">
    Good work! We appreciate you registering for a TeleNeo Clinic profile
   </h2>
   <p className="mb-6 px-6 text-center text-gray-500">
    Your request to join as a clinic has been submitted and will be reviewed by
    our team as soon as possible. We'll send you an email once it is ready.
    Don’t forget to check that sneaky spam folder too!
   </p>
   <p className="mb-10 px-6 text-center text-gray-500">
    If you have any questions, please email{' '}
    <a href="mailto:hello@therapymatch.com.au" className="text-orange-500">
     hello@therapymatch.com.au
    </a>
   </p>

   {/* Custom Button */}
   <Button variant="default" size="lg" className="h-12 w-32 text-white rounded-lg">
    Okay
   </Button>
  </div>
 );
};

export default SuccessMessage;
