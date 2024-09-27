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
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

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
  const [showDialog, setShowDialog] = useState(false);
  const router = useRouter();

  // Initialize form with validation schema
  const form = useForm<formType>({
    resolver: zodResolver(paymentSchema),
  });

  // Handle form submission
  const handleSubmit = (data: formType) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setShowDialog(true); // Show success modal after submission
    }, 1000);
  };

  return (
    <div className="container mx-auto p-6">
      {/* Payment Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {/* First Card: Payment */}
        <Card className="p-4">
          <h2 className="text-lg font-bold mb-2">PAYMENT</h2>
          <p className="text-4xl font-bold text-green-600 mb-1">$120</p>
          <p className="text-sm text-gray-500">Paid Via Card</p>
        </Card>

        {/* Second Card: Payment Distribution */}
        <Card className="p-4">
          <h2 className="text-lg font-bold mb-2">PAYMENT DISTRIBUTION</h2>
          <div className="flex items-center justify-between text-xl">
            <p>Payment Total</p>
            <p className="font-bold">$120</p>
          </div>
          <div className="flex items-center justify-between text-xl">
            <p>Admin Fee</p>
            <p className="text-yellow-500 font-bold">+ $20</p>
          </div>
          <div className="flex items-center justify-between text-xl">
            <p>Doctor Fee</p>
            <p className="text-green-600 font-bold">+ $100</p>
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
                    className="w-full border border-gray-300 p-3 rounded-md"
                  />
                </FormControl>
                <FormMessage />
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
                    className="w-full border border-gray-300 p-3 rounded-md"
                  />
                </FormControl>
                <FormMessage />
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
                    className="w-full border border-gray-300 p-3 rounded-md"
                  />
                </FormControl>
                <FormMessage />
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
                    className="w-full border border-gray-300 p-3 rounded-md"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Buttons */}
          <div className="flex space-x-4 mt-6">
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
              className="bg-green-500 text-white w-full"
              disabled={isLoading}
            >
              Pay the Doctor
            </Button>
          </div>
        </form>
      </Form>

      {/* Success Modal */}
      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Payment Successful</DialogTitle>
          </DialogHeader>
          <p>The doctor has been paid successfully.</p>
        </DialogContent>
      </Dialog>
    </div>
  );
}
