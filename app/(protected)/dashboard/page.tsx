'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
 Card,
 CardContent,
 CardTitle,
 CardDescription,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import AppointmentsIcon from '@/public/user.svg';
import UpcomingIcon from '@/public/secondcard.svg';
import TotalActiveIcon from '@/public/curvedline.svg';
import TotalCompletedIcon from '@/public/checkmark-done-circle-outline.svg';
import ClockIcon from '@/public/hours.svg';
import FileReviewIcon from '@/public/page.svg';
import ClinicSupportForm from './ClinicSupportForm';
import Modal from '@/components/ui/modal';

const DashboardPage: React.FC = () => {
 const router = useRouter();
 const [isModalOpen, setIsModalOpen] = useState(true);

 const handleCloseModal = () => setIsModalOpen(false);
 const handleButtonClick = () => {
  router.push('/dashboard-main');
 };

 return (
  <div className="flex min-h-screen">
   <div className="ml-4 w-[calc(100%-110px)] flex-grow p-8">
    <div className="mx-auto flex w-[calc(100%-150px)] flex-col gap-4">
     <header className="mb-4 flex items-center justify-between">
      <h1 className="text-2xl font-semibold">Welcome, ABC Clinic</h1>
      <div className="flex gap-2">
       <Button variant="default" onClick={handleButtonClick}>
        Main Dashboard
       </Button>
       <Button variant="default">Waitlist</Button>
       <Button variant="destructive">Video appointment in progress</Button>
      </div>
     </header>

     <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
      <Card className="h-[80px] border p-2">
       <CardContent className="flex items-center gap-2">
        <AppointmentsIcon className="h-6 w-6" />
        <div className="flex h-[43px] w-[80px] flex-col justify-center">
         <CardTitle className="font-open-sans p-3 text-[10px] font-[800] leading-[18.16px] text-secondary-foreground">
          -
         </CardTitle>
         <CardDescription className="font-open-sans text-[10px] font-[400] leading-[18.16px] text-secondary-foreground">
          Appointments
         </CardDescription>
        </div>
       </CardContent>
      </Card>
      <Card className="h-[80px] border p-2">
       <CardContent className="flex items-center gap-2">
        <TotalActiveIcon className="h-6 w-6" />
        <div className="flex h-[43px] w-[80px] flex-col justify-center">
         <CardTitle className="font-open-sans p-3 text-[10px] font-[800] leading-[18.16px] text-secondary-foreground">
          -
         </CardTitle>
         <CardDescription className="font-open-sans text-[10px] font-[400] leading-[18.16px] text-secondary-foreground">
          Active
         </CardDescription>
        </div>
       </CardContent>
      </Card>
      <Card className="h-[80px] border p-2">
       <CardContent className="flex items-center gap-2">
        <TotalCompletedIcon className="h-6 w-6" />
        <div className="flex h-[43px] w-[80px] flex-col justify-center">
         <CardTitle className="font-open-sans p-3 text-[10px] font-[800] leading-[18.16px] text-secondary-foreground">
          -
         </CardTitle>
         <CardDescription className="font-open-sans text-[10px] font-[400] leading-[18.16px] text-secondary-foreground">
          Completed
         </CardDescription>
        </div>
       </CardContent>
      </Card>

      {/* Repeat similar structure for other cards */}
      <Card className="h-[80px] border p-2">
       <CardContent className="flex items-center gap-2">
        <UpcomingIcon className="h-6 w-6" />
        <div className="flex h-[43px] w-[80px] flex-col justify-center">
         <CardTitle className="font-open-sans p-3 text-[10px] font-[800] leading-[18.16px] text-secondary-foreground">
          -
         </CardTitle>
         <CardDescription className="font-open-sans text-[10px] font-[400] leading-[18.16px] text-secondary-foreground">
          Upcomings
         </CardDescription>
        </div>
       </CardContent>
      </Card>

      {/* Add similar Card components for Total Active and Total Completed */}
     </div>

     <div className="flex items-center gap-2 rounded-lg bg-green-100 p-6">
      <ClockIcon className="w-12 text-primary" />
      <p className="font-[600] text-black">
       Waiting for your account approval. It usually takes 24-48 hrs for
       approval. Thank you for your patience.
      </p>
     </div>

     <div className="mt-4 flex items-center justify-center">
      <div className="text-center">
       <FileReviewIcon className="w-120 h-120 mx-auto mb-2 mt-[100px]" />
       <p>
        Your account is being{' '}
        <span className="text-accent-foreground">reviewed</span> by our experts.
       </p>
      </div>
     </div>
    </div>
   </div>

   <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
    <ClinicSupportForm closeModal={handleCloseModal} />
   </Modal>
  </div>
 );
};

export default DashboardPage;
