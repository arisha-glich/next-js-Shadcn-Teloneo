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

import Icon from '@/public/cards/clipboard-list-check-solid 1.svg';
import WaitlistTable from './waitlisttable';
import Link from 'next/link'; 

const DashboardPage: React.FC = () => {
  return (
    <div className="flex-grow">
      <div className="mx-auto ml-3.5 mt-3 flex h-[calc(100%-112px)] w-full flex-col">
        {/* Header Section */}
        <header className="mb-6 flex w-full items-center justify-between">
          <h1 className="pl-24 text-2xl font-semibold">Waitlist</h1>
          {/* Adjust padding here */}
          <div className="flex gap-2 pr-10">
            {/* Added padding-right for spacing */}
            <Button variant="default" className="flex items-center space-x-2" asChild>
              <Link href="/waitlist"> {/* Link added for navigation */}
                <div className="flex items-center">
                  <Icon className="h-5 w-5" />
                  <span>Waitlist</span>
                </div>
              </Link>
            </Button>
          </div>
        </header>

        <div className="mx-auto flex h-full w-full flex-col border-t-2 border-gray-300 bg-ring pl-20 font-sans text-sm text-secondary-foreground">
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
          <div className="mx-auto flex h-full w-full flex-col border-t-2 p-5 border-gray-300 bg-ring pl-20 font-sans text-sm text-secondary-foreground">
            <WaitlistTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
