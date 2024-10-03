'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/public/cards/clipboard-list-check-solid 1.svg';
import Link from 'next/link';
import MyaccountDetails from './details';

const DashboardPage: React.FC = () => {
 return (
  <div className="flex-grow">
   <div className="mx-auto ml-3.5 mt-3 flex h-[calc(100%)] w-full flex-col">
    {/* Header Section */}
    <header className="mb-6 flex w-full items-center justify-between">
     <h1 className="pl-24 text-2xl font-semibold">My Account</h1>
     {/* Adjust padding here */}
     <div className="flex gap-2 pr-10">
      {/* Added padding-right for spacing */}
      <Button
       variant="default"
       className="flex items-center space-x-2 bg-white text-accent-foreground hover:bg-gray-200"
       asChild
      >
       <Link href="/logout">
        {' '}
        {/* Link added for navigation */}
        <div className="flex items-center">
         <span>Logout</span>
        </div>
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
    <div className="   flex h-full w-[102%] flex-col bg-white  font-sans text-sm text-secondary-foreground">
     <MyaccountDetails />
    </div>
   </div>
  </div>
 );
};

export default DashboardPage;
