'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from '@/components/ui/select';
import DataTable from './DataTable'; // Assuming you have a DataTable component
import Icon2 from '@/public/Doctors/adddoctor.svg'; // Ensure this path is correct
import Icon3 from '@/public/Doctors/file.svg'; // Ensure this path is correct
import Link from 'next/link';
import AddPatientModal from './AddPatientModal'; // Import the AddPatientModal component
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'; // Import Dialog components

const DashboardPage: React.FC = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false); // State to control dialog visibility

  // Function to open the dialog
  const openDialog = () => {
    setIsDialogOpen(true);
  };

  // Function to close the dialog
  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <div className="m-8 flex-grow">
      <div className="mx-auto flex h-full w-full flex-col pl-5">
        {/* Header Section */}
        <header className="mb-4 flex w-full items-center justify-between">
          <h1 className="ml-16 text-2xl font-semibold">Patient</h1>
          <div className="flex gap-2">
            <Button asChild variant="default" className="flex items-center space-x-2">
              <Link href="doctors/adddoctor/import">
                <Icon3 className="h-5 w-5" />
                <span>Import Data</span>
              </Link>
            </Button>
            <Button
              variant="default"
              className="ml-4 flex items-center space-x-2 bg-primary hover:bg-primary"
              onClick={openDialog} // Open the dialog on click
            >
              <Icon2 className="h-5 w-5" />
              <span>Add Patient</span>
            </Button>
          </div>
        </header>

        {/* Main Content */}
        <div className="mx-auto flex h-full w-[103.5%] flex-col border-t-2 border-gray-300 bg-ring pl-20 font-sans text-sm text-secondary-foreground">
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

              {/* Text Input for Patient Name */}
              <input
                type="text"
                className="h-[35px] w-[198px] p-2 text-sm text-black"
                placeholder="Patient name"
              />
            </div>
          </header>

          <div className="text-black">
            <DataTable /> {/* Assuming DataTable component exists */}
          </div>
        </div>
      </div>

      {/* Add Patient Form Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>Add New Patient</DialogTitle>
          </DialogHeader>
          <AddPatientModal /> {/* Your patient form/modal content */}
          <Button
            type="button"
            onClick={closeDialog}
            className="mt-4 bg-primary text-white hover:bg-primary"
          >
            Close
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DashboardPage;
