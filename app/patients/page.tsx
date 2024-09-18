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
import Header from '@/components/Reusables/Header'; // Assuming you have a header component
import VideoIcon from '../../public/patient/1.svg'; // Video icon
import AttachIcon from '../../public/patient/3.svg'; // Attach icon
import Arrow from '../../public/patient/4.svg';
import Icon3 from '../../public/patient/5.svg';
import Icon2 from '../../public/patient/2.svg';
import Icon from '../../public/cards/clipboard-list-check-solid 1.svg';

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
 const patientsPerPage = 5;

 // Calculate current patients based on pagination
 const indexOfLastPatient = currentPage * patientsPerPage;
 const indexOfFirstPatient = indexOfLastPatient - patientsPerPage;
 const currentPatients = patients.slice(
  indexOfFirstPatient,
  indexOfLastPatient
 );

 const totalPages = Math.ceil(patients.length / patientsPerPage);

 return (
  <div className="flex">
   {/* Sidebar */}
   <Sidebar />
   <div className="flex-grow p-12 pr-10">
    <div className="mx-auto flex h-[100] w-[1128px] flex-col gap-4 pl-5">
     <header className="mb-4 flex items-center justify-between">
      <h1 className="text-2xl font-semibold">All Appointments</h1>
      <Button variant="default" className="flex items-center space-x-2">
       <Icon className="h-5 w-5" /> {/* Adjust size as needed */}
       <span>Waitlist</span>
      </Button>
     </header>
    </div>

    <div className="mx-auto flex h-[100] w-[1128px] flex-col gap-4 pl-5"></div>

    {/* Patient Table */}
    <div className="mx-auto ml-10 flex h-[581px] w-[1260px] flex-col gap-4 border-t-2 border-gray-300 bg-ring pl-5 font-sans text-[12px] text-secondary-foreground">
     <div className="overflow-x-hidden">
      <header className="mb-4 flex items-center justify-between">
       {/* Filters */}
       <div className="flex items-center space-x-4">
        <select className="m-3 h-[35px] w-[198px] rounded border p-2 text-[12px] text-black">
         <option>Current month</option>
         <option>Previous month</option>
         {/* Add more options */}
        </select>
        <select className="h-[35px] w-[198px] rounded border p-2 text-[12px] text-black">
         <option>All</option>
         <option>Missed</option>
         <option>Completed</option>
        </select>
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
                 : 'font-bold text-orange-500'
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
            <div className="flex items-center space-x-2">
             <VideoIcon className="h-25 w-30 text-accent-foreground" />
             <Icon2 className="h-26 w-30 text-primary" />
            </div>
           ) : patient.status === 'Completed' ? (
            <div className="flex items-center space-x-2">
             <Icon3 className="h-26 w-30 text-accent-foreground" />
             <Icon2 className="h-26 w-30 text-primary" />
            </div>
           ) : (
            <AttachIcon  className="h-26 w-26 text-primary " />
           )}
          </TableCell>
         </TableRow>
        ))}
       </TableBody>
      </Table>
     </div>

     {/* Pagination */}
     <div className="mt-4 flex items-center justify-between">
      <div className="flex items-center gap-2">
       {/* Previous Page Button */}
       <Button
        variant="outline"
        className="h-[40px] w-[40px] bg-white p-1 hover:bg-gray-100"
        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
       >
        <Icon2 width="10px" height="10px" />
       </Button>

       {/* Page Number Buttons */}
       {[...Array(totalPages)].map((_, i) => (
        <Button
         key={i}
         variant="outline"
         onClick={() => setCurrentPage(i + 1)}
         className={`h-[40px] w-[40px] p-1 ${
          currentPage === i + 1 ? 'text-accent-foreground' : 'text-black'
         } hover:bg-gray-100`}
        >
         {i + 1}
        </Button>
       ))}

       {/* Next Page Button */}
       <Button
        variant="outline"
        className="h-[40px] w-[40px] bg-primary p-1 hover:bg-gray-100"
        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
       >
        <Arrow width="10px" height="10px" />
       </Button>

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
   </div>
  </div>
 );
};

export default PatientTable;
