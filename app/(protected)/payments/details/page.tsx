'use client';

import React from 'react';
import PaymentDetails from './details';


const DashboardPage: React.FC = () => {
 return (
  <div className="flex-grow">
   <div className="mx-auto flex h-full w-full flex-col pl-5">
    {/* Header Section */}
    <header className="mb-4 flex w-full items-center justify-between">
     <h1 className="ml-16 text-2xl font-semibold p-3 ">Payment</h1>
    </header>

    <div className="mx-auto flex h-full w-[101%] flex-col border-t-2 border-gray-300 bg-ring p-5 pl-20 font-sans text-sm text-secondary-foreground">

     <div className="text-black">
        <PaymentDetails/>
    
     </div>
    </div>
   </div>
  </div>
 );
};

export default DashboardPage;
