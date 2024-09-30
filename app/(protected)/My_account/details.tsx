'use client';

import { Avatar } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Sidebar from '@/components/Reusables/SideBar';
import Avataricon from '@/public/patient/60111 [Converted]-01 2.svg';
import Icon2 from '@/public/Doctors/adddoctor.svg'; // Replace with proper path
import Icon3 from '@/public/Doctors/file.svg';
import Image from 'next/image';
import Link from 'next/link';

export default function ClinicProfileSettings() {
 return (
  <div className="flex h-screen overflow-hidden bg-white">
   {/* Sidebar */}
   <div className="w-[88px]">
    <Sidebar />
   </div>

   {/* Main Content */}
   <div className="flex-grow overflow-hidden">
    <div className="container mx-auto flex h-full flex-col">
     {/* Tabs */}
     <Tabs defaultValue="clinicProfileSettings" className="space-y-4">
      <TabsList className="grid grid-cols-7 bg-transparent p-0">
       <TabsTrigger
        value="clinicProfileSettings"
        className="border-b-2 px-4 py-2 text-black data-[state=active]:border-orange-500 data-[state=active]:text-orange-500"
       >
        Clinic Profile Settings
       </TabsTrigger>
       <TabsTrigger
        value="representative"
        className="border-b-2 border-transparent px-4 py-2 text-black data-[state=active]:border-orange-500 data-[state=active]:text-orange-500"
       >
        Representative
       </TabsTrigger>
       <TabsTrigger
        value="serviceType"
        className="border-b-2 border-transparent px-4 py-2 text-black data-[state=active]:border-orange-500 data-[state=active]:text-orange-500"
       >
        Service Type
       </TabsTrigger>
       <TabsTrigger
        value="uploads"
        className="border-b-2 border-transparent px-4 py-2 text-black data-[state=active]:border-orange-500 data-[state=active]:text-orange-500"
       >
        Uploads
       </TabsTrigger>
       <TabsTrigger
        value="consultationSettings"
        className="border-b-2 border-transparent px-4 py-2 text-black data-[state=active]:border-orange-500 data-[state=active]:text-orange-500"
       >
        Consultation Settings
       </TabsTrigger>
       <TabsTrigger
        value="availability"
        className="border-b-2 border-transparent px-4 py-2 text-black data-[state=active]:border-orange-500 data-[state=active]:text-orange-500"
       >
        Availability
       </TabsTrigger>
       <TabsTrigger
        value="ratingsReviews"
        className="border-b-2 border-transparent px-4 py-2 text-black data-[state=active]:border-orange-500 data-[state=active]:text-orange-500"
       >
        Ratings & Reviews
       </TabsTrigger>
      </TabsList>

      {/* Tabs Content */}
      <Card className="h-auto w-[100%] bg-gray-100">
       <CardContent className="space-y-6">
        <TabsContent value="clinicProfileSettings" className="space-y-6">
         {/* Clinic Profile Settings Content */}
         <div className="flex items-center space-x-6">
          <Avatar className="h-28 w-28 rounded-md bg-gray-300">
           <Image src={Avataricon} alt="Clinic Logo" />
          </Avatar>
          <div>
           <h2 className="text-lg font-semibold">ABC Therapy Clinic</h2>
           <p className="text-sm text-gray-500">Therapy clinic</p>
           <Button variant="link" className="text-sm text-orange-500">
            Change logo
           </Button>
          </div>
         </div>

         <div className="flex h-[45px] w-[546px] items-center rounded-md border border-gray-200 bg-gray-100 px-4">
          <Label
           htmlFor="fullName"
           className="w-1/2 text-[13px] font-bold text-secondary-foreground"
          >
           Clinic Name
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
           Email
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
           Accountant Name
          </Label>
          <Input
           type="text"
           id="gender"
           value="Female"
           readOnly
           className="w-400 border-none p-0 text-[13px] text-gray-900 shadow-none focus:ring-0"
          />
         </div>

         <div className="flex justify-end space-x-4">
          <Button variant="ghost" className="text-red-500">
           Cancel
          </Button>
          <Button className="bg-green-500 px-6 text-white">Update</Button>
         </div>
        </TabsContent>

        {/* Representative Content */}
        <TabsContent value="representative" className="space-y-6">
         {/* Add your Representative Content here */}
        </TabsContent>

        {/* Service Type Content */}
        <TabsContent value="serviceType" className="space-y-6">
         {/* Add your Service Type Content here */}
        </TabsContent>

        {/* Uploads Content */}
        <TabsContent value="uploads" className="space-y-6">
         {/* Add your Uploads Content here */}
        </TabsContent>

        {/* Consultation Settings Content */}
        <TabsContent value="consultationSettings" className="space-y-6">
         {/* Add your Consultation Settings Content here */}
        </TabsContent>

        {/* Availability Content */}
        <TabsContent value="availability" className="space-y-6">
         {/* Add your Availability Content here */}
        </TabsContent>

        {/* Ratings & Reviews Content */}
        <TabsContent value="ratingsReviews" className="space-y-6">
         {/* Add your Ratings & Reviews Content here */}
        </TabsContent>
       </CardContent>
      </Card>
     </Tabs>
    </div>
   </div>
  </div>
 );
}
