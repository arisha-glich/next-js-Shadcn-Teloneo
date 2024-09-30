'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import {
 Select,
 SelectTrigger,
 SelectContent,
 SelectItem,
 SelectValue,
} from '@/components/ui/select';
import DoctorTable from './DataTable';
import Icon from '@/public/cards/clipboard-list-check-solid 1.svg';
import Icon2 from '@/public/Doctors/adddoctor.svg';
import Icon3 from '@/public/Doctors/file.svg';
import Link from 'next/link';

const DashboardPage: React.FC = () => {
 return (
  <div className=" flex-grow">
   <div className="mx-auto m-8 flex h-full w-full flex-col pl-5">
    {/* Header Section */}
    <header className="mb-4 flex  items-center justify-between">
     <h1 className="ml-[6.5rem] text-2xl font-semibold">Doctors</h1>
     <div className="flex gap-2">
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
       <Link href="doctors/adddoctor/import">
        <span className="flex items-center space-x-2">
         <Icon3 className="h-5 w-5" />
         <span>Import Data</span>
        </span>
       </Link>
      </Button>
      <Button variant="default" className="flex items-center space-x-2">
       <Icon className="h-5 w-5" />
       <span>Waitlist</span>
      </Button>
     </div>
    </header>
    <div className="mx-auto flex h-full w-[101%] flex-col border-t-2 border-gray-300 bg-ring pl-20 font-sans text-sm text-secondary-foreground">
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
      <DoctorTable />
     </div>
    </div>
   </div>
  </div>
 );
};

export default DashboardPage;
