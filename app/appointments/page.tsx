'use client';
import { useState } from 'react';
import {
 Table,
 TableHeader,
 TableRow,
 TableHead,
 TableBody,
 TableCell,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import Sidebar from '@/components/Reusables/SideBar'; // Assuming you have this sidebar component
import VideoIcon from '@/public/patient/1.svg'; // Video icon
import AttachIcon from '@/public/patient/3.svg'; // Attach icon
import Arrow from '@/public/patient/4.svg';
import Icon3 from '@/public/patient/5.svg';
import Icon2 from '@/public/patient/2.svg';
import Icon from '@/public/cards/clipboard-list-check-solid 1.svg';
import Arrow2 from '@/public/arrow-right-solid 1.svg';
import { useRouter } from 'next/navigation';
import {
 Select,
 SelectTrigger,
 SelectContent,
 SelectItem,
 SelectValue,
} from '@/components/ui/select';
import Link from 'next/link'

// Sample data for the patient table
const patients = [
 {
  doctor: 'Dr. John Smith',
  schedule: '14:02:2024 - 12:00 PM',
  condition: 'Diabetes',
  patient: 'Emily Johnson',
  age: 45,
  gender: 'Female',
  status: 'Upcoming',
 },
 {
  doctor: 'Dr. Sarah Lee',
  schedule: '14:02:2024 - 4:00 PM',
  condition: 'Hypertension',
  patient: 'Michael Carter',
  age: 52,
  gender: 'Male',
  status: 'Missed',
 },
 {
  doctor: 'Dr. Sarah Lee',
  schedule: '14:02:2024 - 4:00 PM',
  condition: 'Hypertension',
  patient: 'Michael Carter',
  age: 52,
  gender: 'Male',
  status: 'Missed',
 },
 {
  doctor: 'Dr. Sarah Lee',
  schedule: '14:02:2024 - 4:00 PM',
  condition: 'Hypertension',
  patient: 'Michael Carter',
  age: 52,
  gender: 'Male',
  status: 'Missed',
 },
 {
  doctor: 'Dr. Sarah Lee',
  schedule: '14:02:2024 - 4:00 PM',
  condition: 'Hypertension',
  patient: 'Michael Carter',
  age: 52,
  gender: 'Male',
  status: 'Completed',
 },
 {
  doctor: 'Dr. Sarah Lee',
  schedule: '14:02:2024 - 4:00 PM',
  condition: 'Hypertension',
  patient: 'Michael Carter',
  age: 52,
  gender: 'Male',
  status: 'Completed',
 },
 {
  doctor: 'Dr. Sarah Lee',
  schedule: '14:02:2024 - 4:00 PM',
  condition: 'Hypertension',
  patient: 'Michael Carter',
  age: 52,
  gender: 'Male',
  status: 'Completed',
 },
 {
  doctor: 'Dr. Sarah Lee',
  schedule: '14:02:2024 - 4:00 PM',
  condition: 'Hypertension',
  patient: 'Michael Carter',
  age: 52,
  gender: 'Male',
  status: 'Completed',
 },
 {
  doctor: 'Dr. Sarah Lee',
  schedule: '14:02:2024 - 4:00 PM',
  condition: 'Hypertension',
  patient: 'Michael Carter',
  age: 52,
  gender: 'Male',
  status: 'Missed',
 },
 {
  doctor: 'Dr. John Smith',
  schedule: '14:02:2024 - 12:00 PM',
  condition: 'Diabetes',
  patient: 'Emily Johnson',
  age: 45,
  gender: 'Female',
  status: 'Upcoming',
 },
 {
  doctor: 'Dr. John Smith',
  schedule: '14:02:2024 - 12:00 PM',
  condition: 'Diabetes',
  patient: 'Emily Johnson',
  age: 45,
  gender: 'Female',
  status: 'Upcoming',
 },
 {
  doctor: 'Dr. Sarah Lee',
  schedule: '14:02:2024 - 4:00 PM',
  condition: 'Hypertension',
  patient: 'Michael Carter',
  age: 52,
  gender: 'Male',
  status: 'Completed',
 },
 {
  doctor: 'Dr. Sarah Lee',
  schedule: '14:02:2024 - 4:00 PM',
  condition: 'Hypertension',
  patient: 'Michael Carter',
  age: 52,
  gender: 'Male',
  status: 'Completed',
 },
 {
  doctor: 'Dr. Sarah Lee',
  schedule: '14:02:2024 - 4:00 PM',
  condition: 'Hypertension',
  patient: 'Michael Carter',
  age: 52,
  gender: 'Male',
  status: 'Completed',
 },
 {
  doctor: 'Dr. John Smith',
  schedule: '14:02:2024 - 12:00 PM',
  condition: 'Diabetes',
  patient: 'Emily Johnson',
  age: 45,
  gender: 'Female',
  status: 'Upcoming',
 },
 {
  doctor: 'Dr. Sarah Lee',
  schedule: '14:02:2024 - 4:00 PM',
  condition: 'Hypertension',
  patient: 'Michael Carter',
  age: 52,
  gender: 'Male',
  status: 'Missed',
 },
 {
  doctor: 'Dr. Sarah Lee',
  schedule: '14:02:2024 - 4:00 PM',
  condition: 'Hypertension',
  patient: 'Michael Carter',
  age: 52,
  gender: 'Male',
  status: 'Pending',
 },
 {
  doctor: 'Dr. Sarah Lee',
  schedule: '14:02:2024 - 4:00 PM',
  condition: 'Hypertension',
  patient: 'Michael Carter',
  age: 52,
  gender: 'Male',
  status: 'Completed',
 },
 // Add more patients here
];

const PatientTable = () => {
 // Pagination state
 const [currentPage, setCurrentPage] = useState(1);
 const patientsPerPage = 7;

 // Calculate current patients based on pagination
 const indexOfLastPatient = currentPage * patientsPerPage;
 const indexOfFirstPatient = indexOfLastPatient - patientsPerPage;
 const currentPatients = patients.slice(
  indexOfFirstPatient,
  indexOfLastPatient
 );

 const totalPages = Math.ceil(patients.length / patientsPerPage);
 const router = useRouter();
 const goToPatientDetails = () => {
  router.push('/appointments/details'); // Navigate to /patient/details
 };

 return (
  <div className="flex">
   {/* Sidebar */}
   <Sidebar />
   <div className="flex-grow p-12 pr-10">
    <div className="mx-auto flex h-[100] w-[calc(100%-112px)] flex-col pl-5">
     <header className="mb-4 flex items-center justify-between">
      <h1 className="ml-4 text-2xl font-semibold">All Appointmnents</h1>
      <Button variant="default" className="flex items-center space-x-2" asChild>
      <Link href="/waitlist">
       {' '}
       {/* Link added for navigation */}
       <div className="flex items-center">
        <Icon className="h-5 w-5" />
        <span>Waitlist</span>
       </div>
      </Link>
     </Button>
     </header>
    </div>

    <div className="mx-auto flex h-[100] w-[calc(100%-102px)] flex-col gap-4 pl-5"></div>

    {/* Patient Table */}
    <div className="mx-auto ml-10 flex h-[calc(100%)] w-[calc(100%)] flex-col gap-4 border-t-2 border-gray-300 bg-ring pl-20 font-sans text-[12px] text-secondary-foreground">
     <div className=" ">
      <header className="mb-4 flex items-center justify-between">
       {/* Filters */}
       <div className="flex items-center space-x-4">
        {/* First Select */}
        <Select>
         <SelectTrigger className="m-3 h-[35px] w-[198px] rounded border p-2 text-[12px] text-black">
          <SelectValue placeholder="Current month" />
         </SelectTrigger>
         <SelectContent>
          <SelectItem value="current-month">Current month</SelectItem>
          <SelectItem value="previous-month">Previous month</SelectItem>
          {/* Add more options */}
         </SelectContent>
        </Select>

        {/* Second Select */}
        <Select>
         <SelectTrigger className="h-[35px] w-[198px] rounded border p-2 text-[12px] text-black">
          <SelectValue placeholder="All" />
         </SelectTrigger>
         <SelectContent>
          <SelectItem value="all">All</SelectItem>
          <SelectItem value="missed">Missed</SelectItem>
          <SelectItem value="completed">Completed</SelectItem>
         </SelectContent>
        </Select>

        {/* Input Field */}
        <input
         type="text"
         className="h-[35px] w-[198px] rounded border p-2 text-[12px] text-black"
         placeholder="Patient name"
        />
       </div>
      </header>
      <Table className="w-full border-collapse">
       <TableHeader>
        <TableRow className="border-b-0">
         <TableHead className="border-b-0">Doctor</TableHead>
         <TableHead className="border-b-0">Schedule</TableHead>
         <TableHead className="border-b-0">Condition</TableHead>
         <TableHead className="border-b-0">Patient</TableHead>
         <TableHead className="border-b-0">Age</TableHead>
         <TableHead className="border-b-0">Gender</TableHead>
         <TableHead className="border-b-0">Status</TableHead>
         <TableHead className="border-b-0">Action</TableHead>
        </TableRow>
       </TableHeader>
       <TableBody>
        {currentPatients.map((patient, index) => (
         <TableRow
          className="border-b-0 font-sans text-[13px] text-black"
          key={index}
         >
          <TableCell className="border-b-0">{patient.doctor}</TableCell>
          <TableCell className="border-b-0">
           <div className="flex flex-col">
            <span className="font-bold text-accent-foreground">
             {patient.schedule.split(' - ')[0]}
            </span>
            <span className="text-black">
             {patient.schedule.split(' - ')[1]}
            </span>
           </div>
          </TableCell>

          <TableCell className="border-b-0">{patient.condition}</TableCell>
          <TableCell className="border-b-0">{patient.patient}</TableCell>
          <TableCell className="border-b-0">{patient.age}</TableCell>
          <TableCell className="border-b-0">{patient.gender}</TableCell>
          <TableCell
           className={`border-b-0 ${
            patient.status === 'Completed'
             ? 'font-bold text-primary'
             : patient.status === 'Pending'
               ? 'font-bold text-accent-foreground'
               : patient.status === 'Missed'
                 ? 'font-bold text-red-500'
                 : 'font-bold text-accent-foreground'
           }`}
          >
           {patient.status}
          </TableCell>
          <TableCell className="border-b-0">
           {patient.status === 'Pending' ? (
            <div className="flex flex-col items-start space-y-1">
             <span className="text-sm text-gray-500">Visit patient in</span>
             <span className="text-sm font-bold text-accent-foreground">
              0D - 3H - 29M {/* Dynamically update */}
             </span>
            </div>
           ) : patient.status === 'Upcoming' ? (
            <div className="group relative flex items-center space-x-2">
             <VideoIcon className="h-25 w-30 text-accent-foreground" />
             <Icon2 className="h-26 w-30 text-primary" />

             {/* Options dropdown on hover over Icon2 */}
             <div className="absolute top-full mt-1 hidden flex-col rounded bg-white p-2 shadow-md group-hover:flex">
              <button className="px-2 py-1 text-sm hover:bg-gray-100">
               Option 1
              </button>
              <button className="px-2 py-1 text-sm hover:bg-gray-100">
               Option 2
              </button>
              <button className="px-2 py-1 text-sm hover:bg-gray-100">
               Option 3
              </button>
             </div>
            </div>
           ) : patient.status === 'Completed' ? (
            <div className="group relative flex items-center space-x-2">
             <Icon3 className="h-26 w-30 text-accent-foreground" />
             <Icon2 className="h-26 w-30 text-primary" />

             {/* Options dropdown on hover over Icon2 */}
             <div className="absolute top-full mt-1 hidden flex-col rounded bg-white p-2 shadow-md group-hover:flex">
              <button className="px-2 py-1 text-sm hover:bg-gray-100">
               Option 1
              </button>
              <button className="px-2 py-1 text-sm hover:bg-gray-100">
               Option 2
              </button>
              <button className="px-2 py-1 text-sm hover:bg-gray-100">
               Option 3
              </button>
             </div>
            </div>
           ) : (
            <button
             className="transform transition-transform duration-200 hover:scale-110"
             onClick={goToPatientDetails}
            >
             <AttachIcon className="h-26 w-26 text-primary" />
            </button>
           )}
          </TableCell>
         </TableRow>
        ))}
       </TableBody>
      </Table>
     </div>

     {/* Pagination */}
     {/* Previous Page Button */}
     <div className="mt-4 flex items-center justify-between">
      <div className="flex items-center gap-2">
       {/* Previous Page Button */}
       <Button
        variant="outline"
        className="bg-gray flex h-[40px] w-[40px] items-center justify-center p-1 hover:bg-gray-100"
        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
       >
        <Arrow2 width="24px" height="24px" />
       </Button>

       {/* Page Number Buttons */}
       {[...Array(totalPages)].map((_, i) => (
        <Button
         key={i}
         variant="outline"
         onClick={() => setCurrentPage(i + 1)}
         className={`flex h-[40px] w-[40px] items-center justify-center p-1 ${
          currentPage === i + 1 ? 'text-accent-foreground' : 'text-black'
         } hover:bg-gray-100`}
        >
         {i + 1}
        </Button>
       ))}

       {/* Next Page Button */}
       <Button
        variant="outline"
        className="flex h-[40px] w-[40px] items-center justify-center bg-primary p-1 hover:bg-gray-100"
        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
       >
        <Arrow width="24px" height="24px" />
       </Button>
      </div>
     </div>

     {/* Page Info */}
     <div className="flex items-center gap-2">
      <span className="text-sm text-gray-500">
       {indexOfFirstPatient + 1} -{' '}
       {Math.min(indexOfLastPatient, patients.length)} of {patients.length}
      </span>
     </div>
    </div>
   </div>
  </div>
 );
};

export default PatientTable;
