'use client';

import { useState } from 'react';
import { ArrowLeft, VideoIcon } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Sidebar from '@/components/Reusables/SideBar';
import Avataricon from '@/public/patient/60111 [Converted]-01 2.svg';
import Videoicon from '@/public/patient/video-light 1.svg';
import Link from 'next/link';

export default function AppointmentDetails() {
 const [activeTab, setActiveTab] = useState('parent');

 return (
  <div className="flex h-screen p-0">
   <div className="w-[88px]">
    <Sidebar />
   </div>
   <div className="overflow-hidden">
    <div className="container mx-auto p-0">
     <header className="mb-0 flex items-center justify-between p-6">
      <div className="flex items-center space-x-4">
       <Link href="/waitlist">
        <Button variant="ghost" size="icon">
         <ArrowLeft className="h-6 w-6" />
        </Button>
       </Link>
       <h1 className="text-2xl font-bold">Waitlist Details</h1>
      </div>
      <Button variant="default" className="hover:primary bg-primary text-white">
       Waitlist
      </Button>
     </header>

     <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-1">
      <TabsList className="grid w-[calc(100%-100px)] grid-cols-6 bg-transparent p-0">
       <TabsTrigger
        value="parent"
        className={`rounded-t-lg border-b-2 px-4 py-2 ${
         activeTab === 'parent'
          ? 'border-orange-500 text-accent-foreground'
          : 'border-transparent'
        }`}
       >
        Parent / Guardian
       </TabsTrigger>
       <TabsTrigger
        value="patient"
        className={`rounded-t-lg border-b-2 px-4 py-2 ${
         activeTab === 'patient'
          ? 'border-accent-foreground text-accent-foreground'
          : 'border-transparent'
        }`}
       >
        Patient Info
       </TabsTrigger>
      </TabsList>
      <Card className="mt-0 h-[calc(100vh)] w-[calc(100vw)] bg-gray-100 p-0">
       <CardContent className="p-6">
        <TabsContent value="parent">
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
            <Videoicon className="mr-2 h-7 w-10 text-gray-500" />{' '}
            {/* Added padding and margin */}
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
            htmlFor="text"
            className="w-1/2 text-[13px] font-bold text-secondary-foreground"
           >
            Time slot booked
           </Label>
           <Input
            type="email"
            id="email"
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
        <TabsContent value="patient">
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
          <div>
           <div className="flex h-[45px] w-[546px] items-center rounded-md border border-gray-200 bg-gray-100 px-4">
            <Label
             htmlFor="email"
             className="w-1/2 text-[13px] font-bold text-secondary-foreground"
            >
             Full Name
            </Label>
            <Input
             type="email"
             id="email"
             value="johny Star"
             readOnly
             className="w-400 border-none p-0 text-[13px] text-gray-900 shadow-none focus:ring-0"
            />
           </div>
          </div>
          <div className="flex h-[45px] w-[546px] items-center rounded-md border border-gray-200 bg-gray-100 px-4">
           <Label
            htmlFor="email"
            className="w-1/2 text-[13px] font-bold text-secondary-foreground"
           >
            Age
           </Label>
           <Input
            type="email"
            id="email"
            value="16"
            readOnly
            className="w-400 border-none p-0 text-[13px] text-gray-900 shadow-none focus:ring-0"
           />
          </div>
          <div className="flex h-[45px] w-[546px] items-center rounded-md border border-gray-200 bg-gray-100 px-4">
           <Label
            htmlFor="email"
            className="w-1/2 text-[13px] font-bold text-secondary-foreground"
           >
            Gender
           </Label>
           <Input
            type="email"
            id="email"
            value="Female"
            readOnly
            className="w-400 border-none p-0 text-[13px] text-gray-900 shadow-none focus:ring-0"
           />
          </div>
          <div className="flex h-[45px] w-[546px] items-center rounded-md border border-gray-200 bg-gray-100 px-4">
           <Label
            htmlFor="email"
            className="w-1/2 text-[13px] font-bold text-secondary-foreground"
           >
            Psychological condition
           </Label>
           <Input
            type="email"
            id="email"
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
 );
}
