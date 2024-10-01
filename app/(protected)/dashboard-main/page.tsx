'use client';

import React from 'react';
import {
 Card,
 CardContent,
 CardTitle,
 CardDescription,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
 Table,
 TableBody,
 TableCell,
 TableHead,
 TableHeader,
 TableRow,
} from '@/components/ui/table'; // Importing Shadcn table components
import AppointmentsIcon from '@/public/user.svg';
import UpcomingIcon from '@/public/secondcard.svg';
import TotalActiveIcon from '@/public/curvedline.svg';
import TotalCompletedIcon from '@/public/checkmark-done-circle-outline.svg';
import Client from '@/public/c1.svg';
import Clienttwo from '@/public/c2.svg';
import VideoIcon from '@/public/table1.svg'; // Replace with actual SVG path
import ClockIcon from '@/public/3dots.svg'; // Replace with actual SVG path
import ActionMenuIcon from '@/public/video.svg'; // Replace with actual SVG path
import Cardone from '@/public/cards/1.svg';
import Cardtwo from '@/public/cards/2.svg';
import Cardthree from '@/public/cards/3.svg';

const DashboardPage: React.FC = () => {
 return (
  <>
   <div className="m-8 flex-grow">
    <div className="ml-20 flex h-[full] w-[calc(100%-100px)] flex-col gap-4 pl-5">
     {/* Header Section */}
     <header className="mb-4 flex items-center justify-between">
      <h1 className="text-2xl font-semibold">Welcome, ABC Clinic</h1>
      <div className="flex gap-2">
       <Button variant="default">Waitlist</Button>
       <Button variant="destructive">Video appointment in progress</Button>
      </div>
     </header>

     {/* Statistic Cards */}
     <div className="grid grid-cols-4 gap-4">
      <Card className="h-[80px] w-[257px] border p-2">
       <CardContent className="flex items-center gap-2">
        <AppointmentsIcon className="h-6 w-6" />
        <div className="flex h-[43px] w-[80px] flex-col justify-center">
         <CardTitle className="p-3 text-[18px] font-bold">1,823</CardTitle>
         <CardDescription className="text-[10px]">Appointments</CardDescription>
         <AppointmentsIcon className="h-6 w-6" />
        </div>
        <Cardone className="h-17 w-15 m-2" />
       </CardContent>
      </Card>

      <Card className="h-[80px] w-[257px] border p-2">
       <CardContent className="flex items-center justify-between gap-2">
        <UpcomingIcon className="h-6 w-6" />
        <div className="flex h-[43px] w-[80px] flex-col justify-center">
         <CardTitle className="p-2 text-[18px] font-bold">1,823</CardTitle>
         <CardDescription className="text-[10px]">Upcoming</CardDescription>
        </div>
        <Cardtwo className="h-17 w-15 m-2" />
       </CardContent>
      </Card>

      <Card className="h-[80px] w-[257px] border p-2">
       <CardContent className="flex items-center gap-2">
        <TotalActiveIcon className="h-6 w-6" />
        <div className="flex h-[43px] w-[80px] flex-col justify-center">
         <CardTitle className="p-3 text-[18px] font-bold">1,823</CardTitle>
         <CardDescription className="text-[10px]">Total Active</CardDescription>
        </div>
        <Cardthree className="h-17 w-15 m-2" />
       </CardContent>
      </Card>

      <Card className="h-[80px] w-[257px] border p-2">
       <CardContent className="flex items-center gap-2">
        <TotalCompletedIcon className="h-6 w-7" />
        <div className="flex h-[43px] w-[80px] flex-col justify-center">
         <CardTitle className="p-3 text-[18px] font-bold">1,823</CardTitle>
         <CardDescription className="text-[10px]">
          Completed
         </CardDescription>
        </div>
        <Cardthree className="h-17 w-20 m-2" />
       </CardContent>
      </Card>
     </div>

     {/* Status Messages */}
     <div className="mt-6 flex h-[80px] w-[calc(100%)] items-center gap-2 rounded-lg bg-destructive p-6">
      <Client className="w-12 text-primary" />
      <div>
       <p className="text-sm font-semibold">Your account has been approved!</p>
       <p className="text-xs">
        Let your patients know they can now book you on ChanoDoc.
       </p>
      </div>
      <Button className="ml-auto h-[45px] w-[128px] text-white">
       Share profile
      </Button>
     </div>

     <div className="mt-4 flex h-[80px] w-[calc(100%)] items-center gap-2 rounded-lg bg-destructive p-6">
      <Clienttwo className="w-12 text-primary" />
      <div>
       <p className="text-sm font-semibold">Lorem ipsum dolor sit amet.</p>
       <p className="text-xs">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
       </p>
      </div>
      <Button className="ml-auto h-[45px] w-[128px] text-white">Got it</Button>
     </div>
    </div>
   </div>

   {/* Upcoming Visits Table */}
   <div className="mx-auto ml-20 mt-3 h-[full] w-[calc(100%-70px)] rounded-md border-t-2 border-gray-500 bg-ring p-12">
    {/* Dropdown + Search */}
    <div className="flex items-center justify-between">
     <div className="flex items-center gap-2">
      <select className="rounded-md border px-3 py-1">
       <option>Upcoming visits</option>
       {/* Add more options if needed */}
      </select>
      <input
       type="text"
       placeholder="Patient name"
       className="rounded-md border border-gray-300 px-3 py-1"
      />
     </div>
    </div>

    {/* Shadcn Table Component */}
    <Table className="border-collapse border-0">
     <TableHeader className="border-collapse border-0 border-gray-300 bg-ring pl-5 font-sans text-[12px] text-secondary-foreground">
      <TableRow className="border-0">
       <TableHead className="border-0">Type</TableHead>
       <TableHead className="border-0">Scheduled</TableHead>
       <TableHead className="border-0">Guardian</TableHead>
       <TableHead className="border-0">Patient</TableHead>
       <TableHead className="gap-5 border-0">Action</TableHead>
      </TableRow>
     </TableHeader>
     <TableBody className="border-collapse border-0">
      <TableRow className="border-0">
       <TableCell className="flex items-center border-0">
        <VideoIcon width={50} height={50}></VideoIcon>
        <span>Video appointment</span>
       </TableCell>
       <TableCell className="border-0">14/04/2023, 6:00 PM EST</TableCell>
       <TableCell className="border-0">Olivia Green</TableCell>
       <TableCell className="border-0">John Doe</TableCell>
       <TableCell className="flex items-center border-0">
        <ClockIcon width={30} height={30}></ClockIcon>
        <ActionMenuIcon width={50} height={50}></ActionMenuIcon>
       </TableCell>
      </TableRow>

      <TableRow className="border-0">
       <TableCell className="flex items-center border-0">
        <VideoIcon width={50} height={50}></VideoIcon>
        <span>Video appointment</span>
       </TableCell>
       <TableCell className="border-0">14/04/2023, 6:00 PM EST</TableCell>
       <TableCell className="border-0">Olivia Green</TableCell>
       <TableCell className="border-0">John Doe</TableCell>
       <TableCell className="flex flex-col gap-1 border-0">
        <div className="text-[12px] text-gray-400">Visit patient in</div>
        <div className="text-[12px] font-bold text-accent-foreground">
         00:34:29
        </div>
       </TableCell>
      </TableRow>
     </TableBody>
    </Table>
   </div>
  </>
 );
};

export default DashboardPage;
