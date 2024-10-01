'use client';

import { Avatar } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Avataricon from '@/public/patient/60111 [Converted]-01 2.svg';
import Image from 'next/image';
import ConsultationSettings from './representative';
import ScheduleInterface from './availability';
import AppointmentCalendar from './availability';
import App from './ReviewRow';

export default function ClinicProfileSettings() {
 return (
  <div className="flex h-screen overflow-hidden bg-white">
   {/* Main Content */}
   <div className="ml-5 h-[100%] w-[calc(101%)] flex-grow overflow-hidden">
    <div className="container ml-5 flex h-[100%] w-[calc(101%)] flex-col">
     {/* Tabs */}
     <Tabs defaultValue="clinicProfileSettings" className="space-y-4">
      <TabsList className="grid grid-cols-8 bg-transparent p-0">
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

         {/* Input Fields */}
         <div className="flex h-[45px] w-[546px] items-center rounded-md border border-gray-200 bg-white px-4">
          <Input
           type="text"
           placeholder="Enter clinic name"
           className="w-400 border-none p-0 text-[13px] text-gray-900 shadow-none focus:ring-0"
          />
         </div>

         <div className="flex h-[45px] w-[546px] items-center rounded-md border border-gray-200 bg-white px-4">
          <Input
           type="email"
           placeholder="Enter clinic email"
           className="w-400 border-none p-0 text-[13px] text-gray-900 shadow-none focus:ring-0"
          />
         </div>

         <div className="flex h-[45px] w-[546px] items-center rounded-md border border-gray-200 bg-white px-4">
          <Input
           type="text"
           placeholder="Enter accountant name"
           className="w-400 border-none p-0 text-[13px] text-gray-900 shadow-none focus:ring-0"
          />
         </div>

         {/* Action Buttons */}
         <div className="flex justify-end space-x-4">
          <Button variant="ghost" className="text-red-500">
           Cancel
          </Button>
          <Button className="bg-primary px-6 text-white">Update</Button>
         </div>
        </TabsContent>

        {/* Representative Content */}
        <TabsContent value="representative" className="space-y-6">
         {/* Clinic Profile Settings Content */}
         <div className="flex items-center space-x-6">
          <Avatar className="h-28 w-28 rounded-md bg-gray-300">
           <Image src={Avataricon} alt="Clinic Logo" />
          </Avatar>
          <div>
           <h2 className="text-xl font-semibold">ABC Therapy Clinic</h2>
           <p className="text-sm text-gray-500">Therapy clinic</p>
           <Button variant="link" className="text-sm text-orange-500">
            Change logo
           </Button>
          </div>
         </div>

         {/* Input Fields */}
         <div className="flex flex-col space-y-4">
          <div className="flex h-[45px] w-full max-w-md items-center rounded-md border border-gray-200 bg-white px-4">
           <Input
            type="text"
            placeholder="Representative name"
            className="w-full border-none p-0 text-[13px] text-gray-900 shadow-none focus:ring-0"
           />
          </div>

          <div className="flex h-[45px] w-full max-w-md items-center rounded-md border border-gray-200 bg-white px-4">
           <Input
            type="email"
            placeholder="Official email address"
            className="w-full border-none p-0 text-[13px] text-gray-900 shadow-none focus:ring-0"
           />
          </div>

          <div className="flex h-[45px] w-full max-w-md items-center rounded-md border border-gray-200 bg-white px-4">
           <Input
            type="text"
            placeholder="Clinic street address"
            className="w-full border-none p-0 text-[13px] text-gray-900 shadow-none focus:ring-0"
           />
          </div>
         </div>

         {/* Action Buttons */}
         <div className="flex justify-between pt-6">
          <Button variant="ghost" className="text-red-500">
           Cancel
          </Button>
          <Button className="bg-green-500 px-6 text-white">Update</Button>
         </div>
        </TabsContent>

        {/* Service Type Content */}
        <TabsContent value="serviceType" className="space-y-6">
         <div className="flex items-center space-x-6">
          <Avatar className="h-28 w-28 rounded-md bg-gray-300">
           <Image src={Avataricon} alt="Clinic Logo" />
          </Avatar>
          <div>
           <h2 className="text-xl font-semibold">ABC Therapy Clinic</h2>
           <p className="text-sm text-gray-500">Therapy clinic</p>
           <Button variant="link" className="text-sm text-orange-500">
            Change logo
           </Button>
          </div>
         </div>

         {/* Service Category */}
         <div className="flex flex-col space-y-4">
          <div className="relative flex h-[45px] w-full max-w-md items-center rounded-md border border-gray-200 bg-white px-4">
           <select className="w-full border-none bg-transparent text-[13px] text-gray-900 focus:outline-none">
            <option value="" disabled selected>
             Select a category
            </option>
            <option value="category1">Category 1</option>
            <option value="category2">Category 2</option>
            <option value="category3">Category 3</option>
           </select>
           <span className="absolute right-4 text-gray-500">&#x25BC;</span>{' '}
           {/* Dropdown arrow */}
          </div>

          {/* Sub-category */}
          <div className="relative flex h-[45px] w-full max-w-md items-center rounded-md border border-gray-200 bg-white px-4">
           <select className="w-full border-none bg-transparent text-[13px] text-gray-900 focus:outline-none">
            <option value="" disabled selected>
             Select a sub-category
            </option>
            <option value="subcategory1">Sub-category 1</option>
            <option value="subcategory2">Sub-category 2</option>
            <option value="subcategory3">Sub-category 3</option>
           </select>
           <span className="absolute right-4 text-gray-500">&#x25BC;</span>{' '}
           {/* Dropdown arrow */}
          </div>
         </div>

         {/* Action Buttons */}
         <div className="flex justify-between pt-6">
          <Button variant="ghost" className="text-red-500">
           Cancel
          </Button>
          <Button className="bg-primary px-6 text-white">Update</Button>
         </div>
        </TabsContent>

        {/* Uploads Content */}
        <TabsContent value="uploads" className="space-y-6">
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

         {/* File Upload Section */}
         <div>
          <div className="flex h-[45px] w-[546px] items-center rounded-md border border-gray-200 bg-white px-4">
           <Input
            type="text"
            placeholder="Attach clinic license/legal documents"
            className="w-full border-none p-0 text-[13px] text-gray-900 shadow-none focus:ring-0"
           />
           <Button variant="ghost" className="p-2 text-orange-500">
            <svg
             xmlns="http://www.w3.org/2000/svg"
             className="h-5 w-5"
             fill="none"
             viewBox="0 0 24 24"
             stroke="currentColor"
            >
             <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 4v16m8-8H4"
             />
            </svg>
           </Button>
          </div>

          {/* Uploaded Files Preview */}
          <div className="mt-4 flex space-x-4">
           <div className="h-[72px] w-[96px] flex-col items-center rounded border border-gray-300">
            <div className="h-12 w-full bg-gray-200"></div>
            <p className="mt-2 text-xs text-gray-600">clinic license doc.org</p>
           </div>
           <div className="h-[72px] w-[96px] flex-col items-center rounded border border-gray-300">
            <div className="h-12 w-full bg-gray-200"></div>
            <p className="mt-2 text-xs text-gray-600">
             clinical psychology license
            </p>
           </div>
          </div>
         </div>

         {/* Action Buttons */}
         <div className="flex justify-between pt-6">
          <Button variant="ghost" className="text-red-500">
           Cancel
          </Button>
          <Button className="bg-primary px-6 text-white">Update</Button>
         </div>
        </TabsContent>

        {/* Consultation Settings Content */}
        <TabsContent value="consultationSettings" className="space-y-6">
         <ConsultationSettings />
         {/* Add your Consultation Settings Content here */}
        </TabsContent>

        {/* Availability Content */}
        <TabsContent value="availability" className="space-y-6">
         {/* Add your Availability Content here */}
        </TabsContent>

        {/* Ratings & Reviews Content */}
        <TabsContent value="ratingsReviews" className="space-y-6">
         <App />
        </TabsContent>
       </CardContent>
      </Card>
     </Tabs>
    </div>
   </div>
  </div>
 );
}
