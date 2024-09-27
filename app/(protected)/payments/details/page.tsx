'use client';

import React from 'react';
import PaymentDetails from './details';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button'; // Make sure to import Button if not already

const DashboardPage: React.FC = () => {
 return (
  <div className="flex-grow">
   <div className="mx-auto flex h-full w-full flex-col pl-5">
    {/* Header Section */}
    <header className="mb-4 flex w-full items-center justify-between">
     <div className="ml-14 mt-5 flex items-center space-x-4">
      <Button variant="ghost" size="icon" asChild>
       <Link href="/payments">
        <ArrowLeft className="h-6 w-6" />
       </Link>
      </Button>
      <h1 className="text-2xl font-bold">Payment Details</h1>
     </div>
    </header>

    {/* Main Content Section */}
    <div className="mx-auto flex h-full w-[101%] flex-col border-t-2 border-gray-300 bg-ring p-5 pl-20 font-sans text-sm text-secondary-foreground">
     <div className="text-black">
      <PaymentDetails />
     </div>
    </div>
   </div>
  </div>
 );
};

export default DashboardPage;
