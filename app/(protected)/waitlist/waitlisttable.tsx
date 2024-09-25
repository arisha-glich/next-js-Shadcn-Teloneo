import { ColumnDef } from '@tanstack/react-table';
import { DataTable } from '@/components/table/react-table';
import ArrowIcon from '@/public/Doctors/Group 2249.svg';
import VideoIcon from '@/public/waitlist/video-light 1.svg';
import { useState, useEffect } from 'react';

// Define the data structure for the waitlist item
interface WaitlistItem {
 id: number;
 type: string;
 waitingFor: string;
 condition: string;
 patient: string;
 age: number;
 gender: 'Male' | 'Female'; // Strict typing for gender
}

// Sample waitlist data (this can be fetched from an API later)
const waitlistData: WaitlistItem[] = [
 {
  id: 1,
  type: 'Video appointment',
  waitingFor: '14/02/2023 6:00 PM EST',
  condition: 'Stress',
  patient: 'John Doe',
  age: 18,
  gender: 'Female',
 },
 {
  id: 2,
  type: 'Video appointment',
  waitingFor: '14/02/2023 6:00 PM EST',
  condition: 'Anxiety',
  patient: 'Jane Doe',
  age: 15,
  gender: 'Male',
 },
 {
  id: 2,
  type: 'Video appointment',
  waitingFor: '14/02/2023 6:00 PM EST',
  condition: 'Anxiety',
  patient: 'Jane Doe',
  age: 15,
  gender: 'Male',
 },
 {
  id: 2,
  type: 'Video appointment',
  waitingFor: '14/02/2023 6:00 PM EST',
  condition: 'Anxiety',
  patient: 'Jane Doe',
  age: 15,
  gender: 'Male',
 },
 {
  id: 2,
  type: 'Video appointment',
  waitingFor: '14/02/2023 6:00 PM EST',
  condition: 'Anxiety',
  patient: 'Jane Doe',
  age: 15,
  gender: 'Male',
 },
 {
  id: 2,
  type: 'Video appointment',
  waitingFor: '14/02/2023 6:00 PM EST',
  condition: 'Anxiety',
  patient: 'Jane Doe',
  age: 15,
  gender: 'Male',
 },
 {
  id: 2,
  type: 'Video appointment',
  waitingFor: '14/02/2023 6:00 PM EST',
  condition: 'Anxiety',
  patient: 'Jane Doe',
  age: 15,
  gender: 'Male',
 },
 {
  id: 2,
  type: 'Video appointment',
  waitingFor: '14/02/2023 6:00 PM EST',
  condition: 'Anxiety',
  patient: 'Jane Doe',
  age: 15,
  gender: 'Male',
 },
 {
  id: 2,
  type: 'Video appointment',
  waitingFor: '14/02/2023 6:00 PM EST',
  condition: 'Anxiety',
  patient: 'Jane Doe',
  age: 15,
  gender: 'Male',
 },
 {
  id: 2,
  type: 'Video appointment',
  waitingFor: '14/02/2023 6:00 PM EST',
  condition: 'Anxiety',
  patient: 'Jane Doe',
  age: 15,
  gender: 'Male',
 },
 {
  id: 2,
  type: 'Video appointment',
  waitingFor: '14/02/2023 6:00 PM EST',
  condition: 'Anxiety',
  patient: 'Jane Doe',
  age: 15,
  gender: 'Male',
 },
 {
  id: 2,
  type: 'Video appointment',
  waitingFor: '14/02/2023 6:00 PM EST',
  condition: 'Anxiety',
  patient: 'Jane Doe',
  age: 15,
  gender: 'Male',
 },
 {
  id: 2,
  type: 'Video appointment',
  waitingFor: '14/02/2023 6:00 PM EST',
  condition: 'Anxiety',
  patient: 'Jane Doe',
  age: 15,
  gender: 'Male',
 },
 {
  id: 2,
  type: 'Video appointment',
  waitingFor: '14/02/2023 6:00 PM EST',
  condition: 'Anxiety',
  patient: 'Jane Doe',
  age: 15,
  gender: 'Male',
 },
 {
  id: 2,
  type: 'Video appointment',
  waitingFor: '14/02/2023 6:00 PM EST',
  condition: 'Anxiety',
  patient: 'Jane Doe',
  age: 15,
  gender: 'Male',
 },
 {
  id: 2,
  type: 'Video appointment',
  waitingFor: '14/02/2023 6:00 PM EST',
  condition: 'Anxiety',
  patient: 'Jane Doe',
  age: 15,
  gender: 'Male',
 },
 {
  id: 2,
  type: 'Video appointment',
  waitingFor: '14/02/2023 6:00 PM EST',
  condition: 'Anxiety',
  patient: 'Jane Doe',
  age: 15,
  gender: 'Male',
 },
 {
  id: 2,
  type: 'Video appointment',
  waitingFor: '14/02/2023 6:00 PM EST',
  condition: 'Anxiety',
  patient: 'Jane Doe',
  age: 15,
  gender: 'Male',
 },
 {
  id: 2,
  type: 'Video appointment',
  waitingFor: '14/02/2023 6:00 PM EST',
  condition: 'Anxiety',
  patient: 'Jane Doe',
  age: 15,
  gender: 'Male',
 },
 {
  id: 2,
  type: 'Video appointment',
  waitingFor: '14/02/2023 6:00 PM EST',
  condition: 'Anxiety',
  patient: 'Jane Doe',
  age: 15,
  gender: 'Male',
 },
 {
  id: 2,
  type: 'Video appointment',
  waitingFor: '14/02/2023 6:00 PM EST',
  condition: 'Anxiety',
  patient: 'Jane Doe',
  age: 15,
  gender: 'Male',
 },
 {
  id: 2,
  type: 'Video appointment',
  waitingFor: '14/02/2023 6:00 PM EST',
  condition: 'Anxiety',
  patient: 'Jane Doe',
  age: 15,
  gender: 'Male',
 },
 {
  id: 2,
  type: 'Video appointment',
  waitingFor: '14/02/2023 6:00 PM EST',
  condition: 'Anxiety',
  patient: 'Jane Doe',
  age: 15,
  gender: 'Male',
 },
 {
  id: 2,
  type: 'Video appointment',
  waitingFor: '14/02/2023 6:00 PM EST',
  condition: 'Anxiety',
  patient: 'Jane Doe',
  age: 15,
  gender: 'Male',
 },
 {
  id: 2,
  type: 'Video appointment',
  waitingFor: '14/02/2023 6:00 PM EST',
  condition: 'Anxiety',
  patient: 'Jane Doe',
  age: 15,
  gender: 'Male',
 },
 {
  id: 2,
  type: 'Video appointment',
  waitingFor: '14/02/2023 6:00 PM EST',
  condition: 'Anxiety',
  patient: 'Jane Doe',
  age: 15,
  gender: 'Male',
 },
 // Add more items as needed...
];

// Define columns with explicit types
const columns: ColumnDef<WaitlistItem>[] = [
 {
  accessorKey: 'type',
  header: 'Type',
  cell: ({ row }) => (
   <div className="flex items-center">
    <VideoIcon className="mr-2 h-7 w-10" />{' '}
    {/* Adjust size and margin as needed */}
    {row.getValue('type')}
   </div>
  ),
 },
 {
  accessorKey: 'waitingFor',
  header: 'Waiting For',
  cell: ({ getValue }) => {
   const value = getValue() as string;
   const [date, timeWithZone] = value.split(' ');
   const [time, zone] = timeWithZone.split(' ');

   return (
    <div>
     <span className="font-bold text-accent-foreground">{date}</span> <br />
     <span className="text-black">{time}</span> <br />
     <span className="text-gray-500">{zone}</span> <br />
    </div>
   );
  },
 },
 {
  accessorKey: 'condition',
  header: 'Condition',
 },
 {
  accessorKey: 'patient',
  header: 'Patient',
 },
 {
  accessorKey: 'age',
  header: 'Age',
 },
 {
  accessorKey: 'gender',
  header: 'Gender',
 },
 {
  header: 'Action',
  cell: ({ row }) => {
   const { original } = row;

   return (
    <div className="flex items-center space-x-4">
     <ArrowIcon
      className="h-5 w-5 cursor-pointer"
      onClick={() =>
       console.log('Navigating to details for:', original.patient)
      }
     />
    </div>
   );
  },
 },
];

// WaitlistTable Component
export default function WaitlistTable() {
 const [isLoading, setIsLoading] = useState<boolean>(true);
 const [data, setData] = useState<WaitlistItem[]>([]);
 useEffect(() => {
  // Simulate data fetching
  setTimeout(() => {
   setData(waitlistData);
   setIsLoading(false);
  }, 1000);
 }, []);

 return (
  <div className='ml-4'>
   <DataTable columns={columns} data={data} isLoading={isLoading} />
  </div>
 );
}
