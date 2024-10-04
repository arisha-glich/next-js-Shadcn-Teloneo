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
import Icon from '@/public/cards/clipboard-list-check-solid 1.svg';
import Icon2 from '@/public/waitlist/video-icon.svg';
import Link from 'next/link';

const DashboardPage: React.FC = () => {
 const router = useRouter();
 const [isModalOpen, setIsModalOpen] = useState(true);

 const handleCloseModal = () => setIsModalOpen(false);
 const handleButtonClick = () => {
  router.push('/dashboard-main');
 };

 return (
  <div className="flex h-[100%]">
   <div className="ml-10 h-[100%] w-[calc(100%-90px)] flex-grow p-8">
    <div className="ml-14 flex w-[calc(100%-70px)] flex-col gap-4">
     <header className="mb-4 flex items-center justify-between">
      <h1 className="text-[24px] font-semibold">Welcome, ABC Clinic</h1>
      <div className="flex gap-2">
       <Button variant="default" onClick={handleButtonClick}>
        Main Dashboard
       </Button>
       <Button
        variant="default"
        className="flex items-center space-x-2"
        asChild
       >
        <Link href="/waitlist">
         {' '}
         {/* Link added for navigation */}
         <div className="flex items-center">
          <Icon className="h-5 w-5" />
          <span>Waitlist</span>
         </div>
        </Link>
       </Button>
       <Button
        variant="destructive"
        className="flex items-center "
        asChild
       >
        <Link href="/">
         {' '}
         {/* Link added for navigation */}
         <div className="flex items-center justify-center p-1">
          <Icon2 className="h-5 w-7" />
          <span>Video appointment in progress</span>
         </div>
        </Link>
       </Button>
      </div>
     </header>

     <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
      <Card className="h-[80px] w-[257px] border p-2">
       <CardContent className="flex items-center gap-2">
        <AppointmentsIcon className="h-6 w-6" />
        <div className="flex h-[43px] w-[80px] flex-col justify-center">
         <div className="h-[43px] w-[80px]">
          <CardTitle className="font-open-sans p-3 text-[10px] font-[800] leading-[18.16px] text-black">
           -
          </CardTitle>
          <CardDescription className="font-open-sans ml-2 text-[10px] font-[400] leading-[18.16px] text-secondary-foreground">
           Appointments
          </CardDescription>
         </div>
        </div>
       </CardContent>
      </Card>
      <Card className="h-[80px] w-[257px] border p-2">
       <CardContent className="flex items-center gap-2">
        <TotalActiveIcon className="h-6 w-6" />
        <div className="flex h-[43px] w-[80px] flex-col justify-center">
         <div className="h-[43px] w-[80px]">
          <CardTitle className="font-open-sans p-3 text-[10px] font-[800] leading-[18.16px] text-black">
           -
          </CardTitle>
          <CardDescription className="font-open-sans ml-2 text-[10px] font-[400] leading-[18.16px] text-secondary-foreground">
           Active
          </CardDescription>
         </div>
        </div>
       </CardContent>
      </Card>
      <Card className="h-[80px] w-[257px] border p-2">
       <CardContent className="flex items-center gap-2">
        <TotalCompletedIcon className="h-6 w-6" />
        <div className="flex h-[43px] w-[80px] flex-col justify-center">
         <div className="h-[43px] w-[80px]">
          <CardTitle className="font-open-sans p-3 text-[10px] font-[800] leading-[18.16px] text-black">
           -
          </CardTitle>
          <CardDescription className="font-open-sans ml-2 mt-0 text-[10px] font-[400] leading-[18.16px] text-secondary-foreground">
           Completed
          </CardDescription>
         </div>
        </div>
       </CardContent>
      </Card>

      {/* Repeat similar structure for other cards */}
      <Card className="h-[80px] w-[257px] border p-2">
       <CardContent className="flex items-center gap-2">
        <UpcomingIcon className="h-6 w-6" />
        <div className="flex h-[43px] w-[80px] flex-col justify-center">
         <div className="h-[43px] w-[80px]">
          <CardTitle className="font-open-sans p-3 text-[10px] font-[800] leading-[18.16px] text-black">
           -
          </CardTitle>
          <CardDescription className="font-open-sans ml-2 text-[10px] font-[400] leading-[18.16px] text-secondary-foreground">
           Upcomings
          </CardDescription>
         </div>
        </div>
       </CardContent>
      </Card>

      {/* Add similar Card components for Total Active and Total Completed */}
     </div>

     <div className="flex items-center gap-2 rounded-lg bg-green-100 p-6">
      <ClockIcon className="w-12 text-primary" />
      <p className="text-[15px] font-semibold text-black">
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
