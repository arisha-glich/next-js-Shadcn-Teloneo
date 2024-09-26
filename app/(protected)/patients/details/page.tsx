'use client';

import { Avatar } from '@/components/ui/avatar';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Sidebar from '@/components/Reusables/SideBar';
import Avataricon from '@/public/patient/60111 [Converted]-01 2.svg';
import Videoicon from '@/public/patient/video-light 1.svg';
import Link from 'next/link';
import Icon2 from '@/public/Doctors/adddoctor.svg'; // Replace with proper path
import Icon3 from '@/public/Doctors/file.svg';

export default function AppointmentDetails() {
 return (
  <div className="flex h-screen overflow-hidden">
   <div className="w-[88px]">
    <Sidebar />
   </div>
   <div className="flex-grow overflow-hidden">
    <div className="container mx-auto flex h-full flex-col p-0">
     <header className="mb-4 flex w-full items-center justify-between">
      <div className="flex items-center space-x-4">
       <Button variant="ghost" size="icon" asChild>
        <Link href="/appointments">
         <ArrowLeft className="h-6 w-6" />
        </Link>
       </Button>
       <h1 className="text-2xl font-bold">Patients Details</h1>
      </div>
      <div className="flex gap-2">
       <Button
        asChild
        variant="default"
        className="flex items-center space-x-2"
       >
        <Link href="doctors/adddoctor/import">
         <Icon3 className="h-5 w-5" />
         <span>Import Data</span>
        </Link>
       </Button>
       <Button
        asChild
        variant="default"
        className="ml-4 flex items-center space-x-2 bg-primary hover:bg-primary"
       >
        <Link href="/patients/details">
         <Icon2 className="h-5 w-5" />
         <span>Add Patient</span>
        </Link>
       </Button>
      </div>
     </header>

     {/* Main Content */}
     <div className="flex-grow overflow-hidden">
      <Tabs defaultValue="parent" className="h-full space-y-1">
       <TabsList className="grid grid-cols-6 bg-transparent p-0">
        <TabsTrigger
         value="parent"
         className="rounded-t-lg border-b-2 border-orange-500 px-4 py-2 text-accent-foreground"
        >
         Parent / Guardian
        </TabsTrigger>
        <TabsTrigger
         value="patient"
         className="rounded-t-lg border-b-2 border-transparent px-4 py-2"
        >
         Patient Info
        </TabsTrigger>
       </TabsList>

       {/* Tabs Content */}
       <Card className="h-full bg-gray-100 p-0">
        <CardContent className="h-full overflow-hidden p-6">
         <TabsContent value="parent" className="h-full">
          <div className="mb-3 flex items-center justify-between">
           <div className="flex w-[546px] items-center space-x-4">
            <Avatar className="h-100 w-45 ml-6 rounded-none">
             <Avataricon className="h-130 w-130 mr-2 border-none" />
            </Avatar>
            <div>
             <h2 className="text-xl font-semibold">Marry May</h2>
             <p className="text-sm text-gray-500">Parent</p>
            </div>
           </div>
          </div>
          <div className="space-y-4 p-3">
           <div className="flex h-[45px] w-[546px] items-center rounded-md border border-gray-200 bg-gray-100 px-4">
            <Label
             htmlFor="Video Appointment"
             className="w-1/2 text-[13px] font-bold text-secondary-foreground"
            >
             Type
            </Label>
            <div className="w-400 flex items-center">
             <Videoicon className="mr-2 h-7 w-10 text-gray-500" />
             <Input
              type="text"
              id="Video Appointment"
              value="Video Appointment"
              readOnly
              className="w-full border-none p-0 text-[13px] text-gray-900 shadow-none focus:ring-0"
             />
            </div>
           </div>

           <div className="flex h-[45px] w-[546px] items-center rounded-md border border-gray-200 bg-gray-100 px-4">
            <Label
             htmlFor="timeSlot"
             className="w-1/2 text-[13px] font-bold text-secondary-foreground"
            >
             Time slot booked
            </Label>
            <Input
             type="text"
             id="timeSlot"
             value="14/2/2023 | 6:00 PM EST"
             readOnly
             className="w-400 border-none p-0 text-[13px] text-gray-900 shadow-none focus:ring-0"
            />
           </div>

           <div className="flex h-[45px] w-[546px] items-center rounded-md border border-gray-200 bg-gray-100 px-4">
            <Label
             htmlFor="email"
             className="w-1/2 text-[13px] font-bold text-secondary-foreground"
            >
             Email address
            </Label>
            <Input
             type="email"
             id="email"
             value="arishanawaz2002@gmail.com"
             readOnly
             className="w-400 border-none p-0 text-[13px] text-gray-900 shadow-none focus:ring-0"
            />
           </div>
          </div>
         </TabsContent>

         {/* Patient Tab Content */}
         <TabsContent value="patient" className="h-full">
          <div className="mb-6 flex items-center justify-between">
           <div className="flex w-[600px] items-center space-x-4">
            <Avatar className="h-100 w-45 ml-6 rounded-none">
             <Avataricon className="h-130 w-130 mr-2 border-none" />
            </Avatar>
            <div>
             <h2 className="text-xl font-semibold">Johnny Star</h2>
             <p className="text-sm text-gray-500">Patient</p>
            </div>
           </div>
          </div>
          <div className="grid gap-6 p-3">
           <div className="flex h-[45px] w-[546px] items-center rounded-md border border-gray-200 bg-gray-100 px-4">
            <Label
             htmlFor="fullName"
             className="w-1/2 text-[13px] font-bold text-secondary-foreground"
            >
             Full Name
            </Label>
            <Input
             type="text"
             id="fullName"
             value="Johnny Star"
             readOnly
             className="w-400 border-none p-0 text-[13px] text-gray-900 shadow-none focus:ring-0"
            />
           </div>

           <div className="flex h-[45px] w-[546px] items-center rounded-md border border-gray-200 bg-gray-100 px-4">
            <Label
             htmlFor="age"
             className="w-1/2 text-[13px] font-bold text-secondary-foreground"
            >
             Age
            </Label>
            <Input
             type="text"
             id="age"
             value="16"
             readOnly
             className="w-400 border-none p-0 text-[13px] text-gray-900 shadow-none focus:ring-0"
            />
           </div>

           <div className="flex h-[45px] w-[546px] items-center rounded-md border border-gray-200 bg-gray-100 px-4">
            <Label
             htmlFor="gender"
             className="w-1/2 text-[13px] font-bold text-secondary-foreground"
            >
             Gender
            </Label>
            <Input
             type="text"
             id="gender"
             value="Female"
             readOnly
             className="w-400 border-none p-0 text-[13px] text-gray-900 shadow-none focus:ring-0"
            />
           </div>

           <div className="flex h-[45px] w-[546px] items-center rounded-md border border-gray-200 bg-gray-100 px-4">
            <Label
             htmlFor="psychCondition"
             className="w-1/2 text-[13px] font-bold text-secondary-foreground"
            >
             Psychological condition
            </Label>
            <Input
             type="text"
             id="psychCondition"
             value="Stress"
             readOnly
             className="w-400 border-none p-0 text-[13px] text-gray-900 shadow-none focus:ring-0"
            />
           </div>
          </div>
         </TabsContent>
        </CardContent>
       </Card>
      </Tabs>
     </div>
    </div>
   </div>
  </div>
 );
}
