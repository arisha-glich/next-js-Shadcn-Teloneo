'use client';

import React, { useState } from 'react';
import { z } from 'zod';
import {
 Form,
 FormControl,
 FormField,
 FormItem,
 FormMessage,
} from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useRouter } from 'next/navigation';
import {
 Dialog,
 DialogContent,
 DialogHeader,
 DialogTitle,
} from '@/components/ui/dialog';
import Dollarsign from '@/public/payments/dollar.svg';
import Ticksign from '@/public/payments/tick.svg';


// Define validation schema
const paymentSchema = z.object({
 meetingDuration: z.string().nonempty('Meeting Duration is required'),
 timeSlot: z.string().nonempty('Time slot is required'),
 doctorName: z.string().nonempty('Doctor Name is required'),
 patientName: z.string().nonempty('Patient Name is required'),
});

type formType = z.infer<typeof paymentSchema>;

export default function PaymentForm() {
 const [isLoading, setIsLoading] = useState<boolean>(false);
 const [showFirstModal, setShowFirstModal] = useState(false);
 const [showSuccessModal, setShowSuccessModal] = useState(false);
 const router = useRouter();

 // Initialize form with validation schema
 const form = useForm<formType>({
  resolver: zodResolver(paymentSchema),
 });

 // Handle form submission
 const handleSubmit = (data: formType) => {
  setIsLoading(true);
  // Simulating an API call
  setTimeout(() => {
   setIsLoading(false);
   setShowFirstModal(true); // Show payment confirmation modal
  }, 1000);
 };

 // Function to handle confirming the payment
 const confirmPayment = () => {
  setShowFirstModal(false); // Close the first modal
  setShowSuccessModal(true); // Show success modal
 };

 return (
  <div className="container mx-auto p-6">
   {/* Payment Cards */}
   <div className="mb-6 flex space-x-4">
    {/* First Card: Payment */}
    <Card className="h-auto w-[135px] p-4">
     <h2 className="mb-2 text-lg font-bold">Payment Details</h2>
     <p className="mb-1 text-4xl font-bold text-primary">$120</p>
     <p className="text-sm text-gray-500">Paid Via Card</p>
    </Card>

    {/* Second Card: Payment Distribution */}
    <Card className="h-auto w-[403px] p-4">
     <h2 className="mb-2 text-lg font-bold">PAYMENT DISTRIBUTION</h2>
     <div className="flex items-center justify-between text-xl">
      <p>Payment Total</p>
      <p className="font-bold">$120</p>
     </div>
     <div className="flex items-center justify-between text-xl">
      <p>Admin Fee</p>
      <p className="font-bold text-accent-foreground">+ $20</p>
     </div>
     <div className="flex items-center justify-between text-xl">
      <p>Doctor Fee</p>
      <p className="font-bold text-primary">+ $100</p>
     </div>
    </Card>
   </div>

   {/* Form Section */}
   <Form {...form}>
    <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
     {/* Meeting Duration */}
     <FormField
      control={form.control}
      name="meetingDuration"
      render={({ field }) => (
       <FormItem>
        <FormControl>
         <Input
          {...field}
          placeholder="Meeting Duration"
          disabled={isLoading}
          className="w-[546px] rounded-md border border-gray-300 p-3"
         />
        </FormControl>
        <FormMessage className="text-red-500" />
       </FormItem>
      )}
     />

     {/* Time Slot Booked */}
     <FormField
      control={form.control}
      name="timeSlot"
      render={({ field }) => (
       <FormItem>
        <FormControl>
         <Input
          {...field}
          placeholder="Time Slot Booked"
          disabled={isLoading}
          className="w-[546px] rounded-md border border-gray-300 p-3"
         />
        </FormControl>
        <FormMessage className="text-red-500" />
       </FormItem>
      )}
     />

     {/* Doctor Name */}
     <FormField
      control={form.control}
      name="doctorName"
      render={({ field }) => (
       <FormItem>
        <FormControl>
         <Input
          {...field}
          placeholder="Doctor Name"
          disabled={isLoading}
          className="w-[546px] rounded-md border border-gray-300 p-3"
         />
        </FormControl>
        <FormMessage className="text-red-500" />
       </FormItem>
      )}
     />

     {/* Patient Name */}
     <FormField
      control={form.control}
      name="patientName"
      render={({ field }) => (
       <FormItem>
        <FormControl>
         <Input
          {...field}
          placeholder="Patient Name"
          disabled={isLoading}
          className="w-[546px] rounded-md border border-gray-300 p-3"
         />
        </FormControl>
        <FormMessage className="text-red-500" />
       </FormItem>
      )}
     />

     {/* Buttons */}
     <div className="mt-6 flex w-[546px] space-x-4">
      <Button
       type="button"
       variant="outline"
       onClick={() => router.push('/')}
       className="w-full"
       disabled={isLoading}
      >
       Cancel
      </Button>

      <Button
       type="submit"
       className="w-[546px] bg-primary text-white"
       disabled={isLoading}
      >
       Pay the Doctor
      </Button>
     </div>
    </form>
   </Form>

   {/* First Modal: Payment Confirmation */}
   <Dialog open={showFirstModal} onOpenChange={setShowFirstModal}>
    <DialogContent className="h-[476px] w-[371px]">
     <DialogHeader className="flex items-center justify-center p-3 font-bold">
      <DialogTitle className="flex items-center">
       <Dollarsign className="mr-2" />
      </DialogTitle>
      Confirm Payment
     </DialogHeader>
     <p>
      Are you sure you want to pay <strong>$120</strong> to{' '}
      <strong>Dr. {form.getValues('doctorName')}</strong>?
     </p>
     <div className="mt-4 flex justify-between space-x-4">
      <Button
       variant="outline"
       className="border-none"
       onClick={() => setShowFirstModal(false)}
      >
       Cancel
      </Button>
      <Button onClick={confirmPayment}>Confirm Payment</Button>
     </div>
    </DialogContent>
   </Dialog>

   {/* Second Modal: Payment Successful */}
   <Dialog open={showSuccessModal} onOpenChange={setShowSuccessModal}>
    <DialogContent className='h-[476px] w-[371px]'>
     <DialogHeader className="flex items-center justify-center">
      <Ticksign className="mr-2" /> {/* Add margin to space from title */}
      <DialogTitle className="text-center">Payment Successful</DialogTitle>
     </DialogHeader>
     <p className="text-center">The doctor has been paid successfully.</p>{' '}
     {/* Center the paragraph */}
    </DialogContent>
   </Dialog>
  </div>
 );
}
