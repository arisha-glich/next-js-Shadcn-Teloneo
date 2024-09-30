'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link'; // Import Link from next/link
import SuccessFormSubmit from './SuccessFormSubmit';
import Icon from '@/public/cards/clipboard-list-check-solid 1.svg';
import Icon3 from '@/public/Doctors/file.svg';

// Correct component naming to PascalCase
const SuccessPage: React.FC = () => {
 return (
  <>
   <div className="m-8 flex-grow">
    <div className="mx-auto flex h-full w-full flex-col gap-4 pl-5">
     {/* Header Section */}
     <header className="mb-4 flex w-full items-center justify-between">
      <div className="ml-12 flex items-center space-x-4">
       <Link href="/doctors">
        <Button variant="ghost" size="icon">
         <ArrowLeft className="h-6 w-12" />
        </Button>
       </Link>
       <h1 className="text-2xl font-bold">Appointment Details</h1>
      </div>
      <div className="flex gap-2">
      <Button variant="default" className="flex items-center space-x-2" asChild>
      <Link href="doctors/adddoctor/import">
        <span className="flex items-center space-x-2">
          <Icon3 className="h-5 w-5" />
          <span>Import Data</span>
        </span>
      </Link>
    </Button>
    <Button variant="default" className="flex items-center space-x-2" asChild>
       <Link href="/waitlist">
        {' '}
        {/* Link added for navigation */}
        <div className="flex items-center">
         <Icon className="h-5 w-5" />
         <span>Waitlist</span>
        </div>
       </Link>
      </Button>
      </div>
     </header>

     {/* Main Section */}
     <div className="mx-auto flex h-[900px] w-full flex-col border-t-2 border-gray-300 bg-ring pl-20 font-sans text-[12px] text-secondary-foreground">
      {/* Render SuccessFormSubmit without semicolon */}
      <SuccessFormSubmit />
     </div>
    </div>
   </div>
  </>
 );
};

export default SuccessPage;
