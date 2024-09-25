'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/public/cards/clipboard-list-check-solid 1.svg';
import Icon3 from '@/public/Doctors/file.svg';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link'; // Import Link from next/link
import ClinicSupportForm from './form';

const DashboardPage: React.FC = () => {
 return (
  <>
   <div className="m-8 flex-grow">
    <div className="mx-auto flex w-[calc(100%-112px)] flex-col gap-4">
     {/* Header Section */}
     <header className="mb-4 flex h-[full] w-[calc(100%-120px)] items-center justify-between">
      <div className="ml-12 flex items-center space-x-4">
       <Link href="/doctors">
        <Button variant="ghost" size="icon">
         <ArrowLeft className="h-6 w-12" />
        </Button>
       </Link>
       <h1 className="text-2xl font-bold">Add Doctor</h1>
      </div>
      <div className="flex gap-2">
       <Button variant="default" className="flex items-center space-x-2">
        <Icon3 className="h-5 w-5" />
        <span>Import Data</span>
       </Button>
       <Button variant="default" className="flex items-center space-x-2">
        <Icon className="h-5 w-5" />
        <span>Waitlist</span>
       </Button>
      </div>
     </header>
     <div className="mx-auto flex h-[1040px] w-[calc(108%)] flex-col border-t-2 border-gray-300 bg-ring pl-20 font-sans text-[12px] text-secondary-foreground">
      <ClinicSupportForm />
     </div>
    </div>
   </div>
  </>
 );
};

export default DashboardPage;
