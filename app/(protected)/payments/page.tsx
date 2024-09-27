'use client';

import React from 'react';
import {
 Select,
 SelectTrigger,
 SelectContent,
 SelectItem,
 SelectValue,
} from '@/components/ui/select';

import PaymentTable from './payment-table';

const DashboardPage: React.FC = () => {
 return (
  <div className="flex-grow">
   <div className="mx-auto flex h-full w-full flex-col pl-5">
    {/* Header Section */}
    <header className="mb-4 flex w-full items-center justify-between">
     <h1 className="ml-16 text-2xl font-semibold p-3 ">Payment</h1>
    </header>

    <div className="mx-auto flex h-full w-[101%] flex-col border-t-2 border-gray-300 bg-ring p-5 pl-20 font-sans text-sm text-secondary-foreground">
     <header className="mb-4 flex items-center justify-between">
      {/* Filters */}
      <div className="flex items-center space-x-4">
       {/* First Select (Month selection) */}
       <Select>
        <SelectTrigger className="m-3 h-[35px] w-[198px] rounded border p-2 text-sm text-black">
         <SelectValue placeholder="Current month" />
        </SelectTrigger>
        <SelectContent>
         <SelectItem value="current-month">Current month</SelectItem>
         <SelectItem value="previous-month">Previous month</SelectItem>
         {/* Add more options if needed */}
        </SelectContent>
       </Select>

       {/* Second Select (Status selection) */}
       <Select>
        <SelectTrigger className="h-[35px] w-[198px] p-2 text-sm text-black">
         <SelectValue placeholder="All" />
        </SelectTrigger>
        <SelectContent>
         <SelectItem value="all">All</SelectItem>
         <SelectItem value="missed">Missed</SelectItem>
         <SelectItem value="completed">Completed</SelectItem>
        </SelectContent>
       </Select>

       {/* Text Input */}
       <input
        type="text"
        className="h-[35px] w-[198px] p-2 text-sm text-black"
        placeholder="Patient name"
       />
      </div>
     </header>

     <div className="text-black">
      <PaymentTable />
     </div>
    </div>
   </div>
  </div>
 );
};

export default DashboardPage;
