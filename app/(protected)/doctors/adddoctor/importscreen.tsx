'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import Icon2 from '@/public/Doctors/adddoctor.svg';
import Icon from '@/public/cards/clipboard-list-check-solid 1.svg';
import Link from 'next/link';
import FileUpload from './import';

const ImportComponent: React.FC = () => {
 return (
  <div className="flex-grow">
   <div className="mx-auto ml-3.5 mt-3 flex h-[calc(100%-112px)] w-full flex-col">
    {/* Header Section */}
    <header className="mb-6 flex w-full items-center justify-between">
     <h1 className="pl-24 text-2xl font-semibold">Import Data</h1>
     {/* Adjust padding here */}
     <div className="flex gap-2 pr-10">
      {/* Added padding-right for spacing */}
      <Link href="/doctors/adddoctor">
       <Button
        variant="default"
        className="ml-4 flex items-center space-x-2 bg-accent-foreground hover:bg-accent-foreground"
       >
        <Icon2 className="h-5 w-5" />
        <span>Add new Doctor</span>
       </Button>
      </Link>
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

    <div className=" text-black ">
     <FileUpload />
    </div>
   </div>
  </div>
 );
};

export default ImportComponent;
