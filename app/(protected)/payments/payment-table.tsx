import { useState, useEffect } from 'react';
import { ColumnDef } from '@tanstack/react-table';
import { DataTable } from '@/components/table/react-table'; // Ensure you have a DataTable component
import Link from 'next/link';

// Example payment data
const initialPaymentData = [
 {
  transactionId: 'TXN001',
  payerName: 'John Doe',
  amount: '$150.00',
  date: '2024-09-15',
  time: '14:30', // Added time field for the demo
  paymentMethod: 'Credit Card',
  isActive: true,
  adminFee: '$10.00', // Added Admin Fee field
  doctorFee: '$40.00', // Added Doctor Fee field
  gender: 'Male', // Added Gender field
 },
 {
  transactionId: 'TXN002',
  payerName: 'Jane Smith',
  amount: '$250.00',
  date: '2024-09-12',
  time: '09:15',
  paymentMethod: 'Paypal',
  isActive: false,
  adminFee: '$15.00',
  doctorFee: '$50.00',
  gender: 'Female',
 },
 {
    transactionId: 'TXN002',
    payerName: 'Jane Smith',
    amount: '$250.00',
    date: '2024-09-12',
    time: '09:15',
    paymentMethod: 'Paypal',
    isActive: false,
    adminFee: '$15.00',
    doctorFee: '$50.00',
    gender: 'Female',
   },{
    transactionId: 'TXN002',
    payerName: 'Jane Smith',
    amount: '$250.00',
    date: '2024-09-12',
    time: '09:15',
    paymentMethod: 'Paypal',
    isActive: false,
    adminFee: '$15.00',
    doctorFee: '$50.00',
    gender: 'Female',
   },{
    transactionId: 'TXN002',
    payerName: 'Jane Smith',
    amount: '$250.00',
    date: '2024-09-12',
    time: '09:15',
    paymentMethod: 'Paypal',
    isActive: false,
    adminFee: '$15.00',
    doctorFee: '$50.00',
    gender: 'Female',
   },{
    transactionId: 'TXN002',
    payerName: 'Jane Smith',
    amount: '$250.00',
    date: '2024-09-12',
    time: '09:15',
    paymentMethod: 'Paypal',
    isActive: false,
    adminFee: '$15.00',
    doctorFee: '$50.00',
    gender: 'Female',
   },{
    transactionId: 'TXN002',
    payerName: 'Jane Smith',
    amount: '$250.00',
    date: '2024-09-12',
    time: '09:15',
    paymentMethod: 'Paypal',
    isActive: false,
    adminFee: '$15.00',
    doctorFee: '$50.00',
    gender: 'Female',
   },{
    transactionId: 'TXN002',
    payerName: 'Jane Smith',
    amount: '$250.00',
    date: '2024-09-12',
    time: '09:15',
    paymentMethod: 'Paypal',
    isActive: false,
    adminFee: '$15.00',
    doctorFee: '$50.00',
    gender: 'Female',
   },{
    transactionId: 'TXN002',
    payerName: 'Jane Smith',
    amount: '$250.00',
    date: '2024-09-12',
    time: '09:15',
    paymentMethod: 'Paypal',
    isActive: false,
    adminFee: '$15.00',
    doctorFee: '$50.00',
    gender: 'Female',
   },{
    transactionId: 'TXN002',
    payerName: 'Jane Smith',
    amount: '$250.00',
    date: '2024-09-12',
    time: '09:15',
    paymentMethod: 'Paypal',
    isActive: false,
    adminFee: '$15.00',
    doctorFee: '$50.00',
    gender: 'Female',
   },{
    transactionId: 'TXN002',
    payerName: 'Jane Smith',
    amount: '$250.00',
    date: '2024-09-12',
    time: '09:15',
    paymentMethod: 'Paypal',
    isActive: false,
    adminFee: '$15.00',
    doctorFee: '$50.00',
    gender: 'Female',
   },{
    transactionId: 'TXN002',
    payerName: 'Jane Smith',
    amount: '$250.00',
    date: '2024-09-12',
    time: '09:15',
    paymentMethod: 'Paypal',
    isActive: false,
    adminFee: '$15.00',
    doctorFee: '$50.00',
    gender: 'Female',
   },{
  transactionId: 'TXN002',
  payerName: 'Jane Smith',
  amount: '$250.00',
  date: '2024-09-12',
  time: '09:15',
  paymentMethod: 'Paypal',
  isActive: false,
  adminFee: '$15.00',
  doctorFee: '$50.00',
  gender: 'Female',
 },{
    transactionId: 'TXN002',
    payerName: 'Jane Smith',
    amount: '$250.00',
    date: '2024-09-12',
    time: '09:15',
    paymentMethod: 'Paypal',
    isActive: false,
    adminFee: '$15.00',
    doctorFee: '$50.00',
    gender: 'Female',
   },{
    transactionId: 'TXN002',
    payerName: 'Jane Smith',
    amount: '$250.00',
    date: '2024-09-12',
    time: '09:15',
    paymentMethod: 'Paypal',
    isActive: false,
    adminFee: '$15.00',
    doctorFee: '$50.00',
    gender: 'Female',
   },{
  transactionId: 'TXN002',
  payerName: 'Jane Smith',
  amount: '$250.00',
  date: '2024-09-12',
  time: '09:15',
  paymentMethod: 'Paypal',
  isActive: false,
  adminFee: '$15.00',
  doctorFee: '$50.00',
  gender: 'Female',
 },
 {
  transactionId: 'TXN003',
  payerName: 'Alan Walker',
  amount: '$500.00',
  date: '2024-09-10',
  time: '11:00',
  paymentMethod: 'Bank Transfer',
  isActive: true,
  adminFee: '$20.00',
  doctorFee: '$70.00',
  gender: 'Male',
 },
 {
  transactionId: 'TXN004',
  payerName: 'Lucy Liu',
  amount: '$400.00',
  date: '2024-09-09',
  time: '16:45',
  paymentMethod: 'Credit Card',
  isActive: false,
  adminFee: '$25.00',
  doctorFee: '$60.00',
  gender: 'Female',
 },
];

// Define columns for payments table
const columns: ColumnDef<(typeof initialPaymentData)[0]>[] = [
 {
  accessorKey: 'transactionId',
  header: 'Payment ID',
 },
 {
  accessorKey: 'payerName',
  header: 'Patient',
 },
 {
  accessorKey: 'amount',
  header: 'Amount',
  cell: ({ row }) => {
   const amount = row.original.amount;
   return (
    <div>
     <span className="text-primary fony-bold text-[14px]">$</span>
     <span>{amount.slice(1)}</span> {/* Only displaying the numeric part */}
    </div>
   );
  },
 },
 {
  accessorKey: 'date',
  header: 'Date & Time',
  cell: ({ row }) => {
   const { date, time } = row.original;
   return (
    <div>
     <div className="font-bold text-accent-foreground">{date}</div>
     <div>{time}</div>
    </div>
   );
  },
 },
 {
  accessorKey: 'adminFee',
  header: 'Admin Fee',
  cell: ({ row }) => {
   const adminFee = row.original.adminFee;
   return (
    <div>
     <span className="text-primary  text-[14px]">$</span>
     <span>{adminFee.slice(1)}</span> {/* Only displaying the numeric part */}
    </div>
   );
  },
 },
 {
  accessorKey: 'doctorFee',
  header: 'Doctor Fee',
  cell: ({ row }) => {
   const doctorFee = row.original.doctorFee;
   return (
    <div>
     <span className="text-primary text-[14px]">$</span>
     <span>{doctorFee.slice(1)}</span> {/* Only displaying the numeric part */}
    </div>
   );
  },
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
     {/* Button to Pay Doctor */}
     <button
      className="bg-accent-foreground rounded-full w-18 h-19 px-2 py-1 text-white"
      onClick={() => console.log('Paying doctor for:', original.payerName)}
     >
      Pay Doctor
     </button>
    </div>
   );
  },
 },
 {
    header: 'Action',
    cell: ({ row }) => {
      return (
        <div className="flex items-center space-x-4 text-primary">
          {/* View Details Button */}
          <Link href={'/payments/details'} className="text-primary hover:underline">
            View Details
          </Link>
        </div>
      );
    },
  }
  
  
];

// Main Payment Table Component
const PaymentTable = () => {
 const [paymentData, setPaymentData] =
  useState<typeof initialPaymentData>(initialPaymentData);
 const [isLoading, setIsLoading] = useState(true);

 // Simulate data fetching
 useEffect(() => {
  const fetchData = async () => {
   setIsLoading(true);
   // Simulate a network request
   setTimeout(() => {
    setPaymentData(initialPaymentData);
    setIsLoading(false);
   }, 1000); // Simulate loading time
  };

  fetchData();
 }, []);

 return (
  <div className="p-2">
   <DataTable columns={columns} data={paymentData} isLoading={isLoading} />
  </div>
 );
};

export default PaymentTable;
