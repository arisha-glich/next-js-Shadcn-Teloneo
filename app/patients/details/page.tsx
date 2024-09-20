'use client';

import { useState } from 'react';
import Sidebar from '@/components/Reusables/SideBar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card'; // shadcn card
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'; // shadcn avatar
import Icon from '@/public/cards/clipboard-list-check-solid 1.svg'; // Adjust this if you need to use next-image loader for SVG

const AppointmentDetails = ({ params }: { params: { id: string } }) => {
 const { id } = params; // Appointment ID from URL parameters

 // Define state for the active tab
 const [activeTab, setActiveTab] = useState('parent'); // Default to 'parent'

 // Replace this with an API call to fetch appointment details based on the ID
 const appointmentDetails = {
  id: id,
  parent: {
   name: 'Marry May',
   email: 'abc.marry@example.com',
   timeSlot: '14/2/2023 | 6:00 PM EST',
  },
  patient: {
   name: 'Johnny Szar',
   age: 16,
   gender: 'Female',
   condition: 'Stress',
   document: 'document.pdf',
  },
  doctor: {
   name: 'Dr. Olivia Green',
   speciality: 'Psychiatrist',
   clinic: 'ABC Clinic',
  },
 };

 // Function to render the content based on the active tab
 const renderContent = () => {
  switch (activeTab) {
   case 'parent':
    return (
     <Card>
      <CardHeader>
       <Avatar className="mr-4">
        <AvatarImage src="/path/to/parent-image.jpg" alt="Parent" />
        <AvatarFallback>MM</AvatarFallback>
       </Avatar>
       <div>
        <h2 className="text-lg font-semibold">
         {appointmentDetails.parent.name}
        </h2>
        <span className="text-sm text-gray-500">Parent</span>
       </div>
       <div className="ml-auto rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-500">
        Completed
       </div>
      </CardHeader>
      <CardContent>
       <h2 className="text-lg font-semibold">Parent/Guardian Info</h2>
       <p>Name: {appointmentDetails.parent.name}</p>
       <p>Email: {appointmentDetails.parent.email}</p>
       <p>Time Slot: {appointmentDetails.parent.timeSlot}</p>
      </CardContent>
     </Card>
    );
   case 'patient':
    return (
     <Card>
      <CardHeader>
       <Avatar className="mr-0">
        <AvatarImage src="/path/to/parent-image.jpg" alt="Parent" />
        <AvatarFallback>MM</AvatarFallback>
       </Avatar>
       <div>
        <h2 className="text-lg font-semibold">
         {appointmentDetails.parent.name}
        </h2>
        <span className="text-sm text-gray-500">Parent</span>
       </div>
       <div className="ml-auto rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-primary">
        Completed
       </div>
      </CardHeader>
      <CardContent>
       <div className="grid grid-cols-2 gap-4">
        <div>
         <p className="font-semibold text-gray-500">Full Name</p>
         <p className="rounded bg-gray-100 p-2">
          {appointmentDetails.patient.name}
         </p>
        </div>
        <div>
         <p className="font-semibold text-gray-500">Age</p>
         <p className="rounded bg-gray-100 p-2">
          {appointmentDetails.patient.age}
         </p>
        </div>
        <div>
         <p className="font-semibold text-gray-500">Gender</p>
         <p className="rounded bg-gray-100 p-2">
          {appointmentDetails.patient.gender}
         </p>
        </div>
        <div>
         <p className="font-semibold text-gray-500">Psychological Condition</p>
         <p className="rounded bg-gray-100 p-2">
          {appointmentDetails.patient.condition}
         </p>
        </div>
        <div className="col-span-2">
         <p className="font-semibold text-gray-500">Document</p>
         <a
          href={`/path/to/${appointmentDetails.patient.document}`}
          target="_blank"
          className="text-orange-500 underline"
         >
          {appointmentDetails.patient.document}
         </a>
        </div>
       </div>
      </CardContent>
     </Card>
    );
   case 'doctor':
    return (
     <Card className="h-[0px] w-[1200px] bg-green-600 p-7">
      <CardHeader>
       <Avatar className="">
        <AvatarImage src="/path/to/doctor-image.jpg" alt="Doctor" />
        <AvatarFallback>OG</AvatarFallback>
       </Avatar>
       <div>
        <h2 className="text-lg font-semibold">Dr. Olivia Green</h2>
        <span className="text-sm text-gray-500">Doctor</span>
       </div>
       <div className="ml-auto rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-500">
        Completed
       </div>
      </CardHeader>
      <CardContent>
       <p>Specialty: {appointmentDetails.doctor.speciality}</p>
       <p>Associated Clinic: {appointmentDetails.doctor.clinic}</p>
      </CardContent>
     </Card>
    );
   default:
    return null;
  }
 };

 return (
  <div className="flex">
   {/* Sidebar */}
   <Sidebar />

   <div className="flex-grow p-12 pr-8">
    <div className="mx-auto flex h-full w-[1128px] flex-col gap-4 pl-5">
     <div className="mx-auto flex h-[100] w-[1128px] flex-col gap-4 pl-5">
      <header className="mb-4 flex items-center justify-between">
       <h1 className="text-2xl font-semibold">All Appointments</h1>
       <Button variant="default" className="flex items-center space-x-2">
        <Icon className="h-5 w-5" /> {/* Adjust size as needed */}
        <span>Waitlist</span>
       </Button>
      </header>
     </div>

     {/* Tabs for navigation */}
     <div className="mb-0 flex border-b-2 border-gray-200">
      <div
       onClick={() => setActiveTab('parent')}
       className={`mr-4 cursor-pointer pb-2 ${
        activeTab === 'parent'
         ? 'border-b-2 border-yellow-500 text-black'
         : 'text-gray-500'
       }`}
      >
       Parent/Guardian Info
      </div>
      <div
       onClick={() => setActiveTab('patient')}
       className={`mr-4 cursor-pointer pb-2 ${
        activeTab === 'patient'
         ? 'border-b-2 border-yellow-500 text-black'
         : 'text-gray-500'
       }`}
      >
       Patient Info
      </div>
      <div
       onClick={() => setActiveTab('doctor')}
       className={`cursor-pointer pb-2 ${
        activeTab === 'doctor'
         ? 'border-b-2 border-yellow-500 text-black'
         : 'text-gray-500'
       }`}
      >
       Doctor Info
      </div>
     </div>

     {/* Render the content based on the selected tab */}
    </div>
    {renderContent()}
   </div>
  </div>
 );
};

export default AppointmentDetails;
