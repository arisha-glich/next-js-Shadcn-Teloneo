import { ColumnDef } from '@tanstack/react-table';
import { DataTable } from '@/components/table/react-table';
import ArrowIcon from '@/public/Doctors/Group 2249.svg'; // Your SVG icon for the action button
import { useState, useEffect } from 'react';
import Link from 'next/link';

// Sample patient data (replace with your real data)
const patientsData = [
 {
  id: 1,
  name: 'John Doe',
  scheduledFor: '14/02/2023 6:00 PM EST',
  doctor: 'Dr. Olivia Green',
  condition: 'Stress',
  age: 18,
  gender: 'Female',
 },
 {
  id: 2,
  name: 'Cathy Will',
  scheduledFor: '14/02/2023 6:00 PM EST',
  doctor: 'Dr. Olivia Green',
  condition: 'Stress',
  age: 15,
  gender: 'Male',
 },
 {
  id: 1,
  name: 'John Doe',
  scheduledFor: '14/02/2023 6:00 PM EST',
  doctor: 'Dr. Olivia Green',
  condition: 'Stress',
  age: 18,
  gender: 'Female',
 },
 {
  id: 2,
  name: 'Cathy Will',
  scheduledFor: '14/02/2023 6:00 PM EST',
  doctor: 'Dr. Olivia Green',
  condition: 'Stress',
  age: 15,
  gender: 'Male',
 },
 {
  id: 1,
  name: 'John Doe',
  scheduledFor: '14/02/2023 6:00 PM EST',
  doctor: 'Dr. Olivia Green',
  condition: 'Stress',
  age: 18,
  gender: 'Female',
 },
 {
  id: 2,
  name: 'Cathy Will',
  scheduledFor: '14/02/2023 6:00 PM EST',
  doctor: 'Dr. Olivia Green',
  condition: 'Stress',
  age: 15,
  gender: 'Male',
 },
 {
  id: 1,
  name: 'John Doe',
  scheduledFor: '14/02/2023 6:00 PM EST',
  doctor: 'Dr. Olivia Green',
  condition: 'Stress',
  age: 18,
  gender: 'Female',
 },
 {
  id: 2,
  name: 'Cathy Will',
  scheduledFor: '14/02/2023 6:00 PM EST',
  doctor: 'Dr. Olivia Green',
  condition: 'Stress',
  age: 15,
  gender: 'Male',
 },
 {
  id: 1,
  name: 'John Doe',
  scheduledFor: '14/02/2023 6:00 PM EST',
  doctor: 'Dr. Olivia Green',
  condition: 'Stress',
  age: 18,
  gender: 'Female',
 },
 {
  id: 2,
  name: 'Cathy Will',
  scheduledFor: '14/02/2023 6:00 PM EST',
  doctor: 'Dr. Olivia Green',
  condition: 'Stress',
  age: 15,
  gender: 'Male',
 },
 {
  id: 1,
  name: 'John Doe',
  scheduledFor: '14/02/2023 6:00 PM EST',
  doctor: 'Dr. Olivia Green',
  condition: 'Stress',
  age: 18,
  gender: 'Female',
 },
 {
  id: 2,
  name: 'Cathy Will',
  scheduledFor: '14/02/2023 6:00 PM EST',
  doctor: 'Dr. Olivia Green',
  condition: 'Stress',
  age: 15,
  gender: 'Male',
 },
 {
  id: 1,
  name: 'John Doe',
  scheduledFor: '14/02/2023 6:00 PM EST',
  doctor: 'Dr. Olivia Green',
  condition: 'Stress',
  age: 18,
  gender: 'Female',
 },
 {
  id: 2,
  name: 'Cathy Will',
  scheduledFor: '14/02/2023 6:00 PM EST',
  doctor: 'Dr. Olivia Green',
  condition: 'Stress',
  age: 15,
  gender: 'Male',
 },
 {
  id: 1,
  name: 'John Doe',
  scheduledFor: '14/02/2023 6:00 PM EST',
  doctor: 'Dr. Olivia Green',
  condition: 'Stress',
  age: 18,
  gender: 'Female',
 },
 {
  id: 2,
  name: 'Cathy Will',
  scheduledFor: '14/02/2023 6:00 PM EST',
  doctor: 'Dr. Olivia Green',
  condition: 'Stress',
  age: 15,
  gender: 'Male',
 },
 {
  id: 1,
  name: 'John Doe',
  scheduledFor: '14/02/2023 6:00 PM EST',
  doctor: 'Dr. Olivia Green',
  condition: 'Stress',
  age: 18,
  gender: 'Female',
 },
 {
  id: 2,
  name: 'Cathy Will',
  scheduledFor: '14/02/2023 6:00 PM EST',
  doctor: 'Dr. Olivia Green',
  condition: 'Stress',
  age: 15,
  gender: 'Male',
 },
 // More patient data...
];

// Define columns for patient table
const columns: ColumnDef<(typeof patientsData)[0]>[] = [
 {
  accessorKey: 'name',
  header: 'Patient',
 },
 {
  accessorKey: 'scheduledFor',
  header: 'Scheduled',
  cell: ({ getValue }) => {
   const value = getValue() as string;
   const [date, timeWithZone] = value.split(' ');
   const [time, zone] = timeWithZone.split(' ');

   return (
    <div>
     <span className="font-bold text-accent-foreground">{date}</span> <br />
     <span className="text-black">{time}</span> <br />
     <span className="text-gray-500">{zone}</span>
    </div>
   );
  },
 },
 {
  accessorKey: 'doctor',
  header: 'Doctors',
 },
 {
  accessorKey: 'condition',
  header: 'Condition',
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
  accessorKey: 'action',
  header: 'Action',
  cell: () => {
   return (
    <div className="flex items-center space-x-6">
     <Link href="/patients/details" passHref>
      <div className="flex h-10 w-10 cursor-pointer text-white items-center justify-center rounded-full bg-primary transition hover:bg-primary/80">
       <ArrowIcon className="h-5 w-5 text-white" />
      </div>
     </Link>
    </div>
   );
  },
 },
];

export default function PatientTable() {
 const [isLoading, setIsLoading] = useState(true);
 const [data, setData] = useState<typeof patientsData>([]);

 useEffect(() => {
  setTimeout(() => {
   setData(patientsData); // Simulate fetching data
   setIsLoading(false);
  }, 1000);
 }, []);

 return (
  <div>
   <DataTable columns={columns} data={data} isLoading={isLoading} />
  </div>
 );
}
