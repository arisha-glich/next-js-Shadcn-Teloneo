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
import useToast from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';
import useFormStore from '@/stores/useFormStore'; // Import your Zustand store

// Step 1 schema with validation for form fields
const step1Schema = z.object({
  firstName: z.string().nonempty('First name is required'),
  lastName: z.string().nonempty('Last name is required'),
  email: z.string().email('Invalid email address').nonempty('Email is required'),
  phoneNumber: z.string().nonempty('Phone number is required'),
  streetAddress: z.string().nonempty('Street address is required'),
});

type Step1FormType = z.infer<typeof step1Schema>;

export default function Step1() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();
  const {  toastSuccess } = useToast();
  const { saveData, nextStep } = useFormStore(); // Get methods from Zustand store

  const form = useForm<Step1FormType>({
    resolver: zodResolver(step1Schema),
  });

  // Handle form submission
  function handleSubmit(data: Step1FormType) {
    setIsLoading(true);

    // Simulate a submission action here (e.g., API call)
    setTimeout(() => {
      // Save the data to Zustand store
      saveData({
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phoneNumber: data.phoneNumber,
        streetAddress: data.streetAddress,
      });

      toastSuccess('Step 1 completed successfully!');
      nextStep(); // Move to the next step
      setIsLoading(false);
    }, 1000);
  }

  // Handle form cancellation
  function handleCancel() {
    router.push('/'); // Navigate to a specific route when canceling
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
        
        {/* First Name */}
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormControl className="bg-white border-none">
                <Input
                  {...field}
                  type="text"
                  placeholder="Enter first name"
                  disabled={isLoading}
                />
              </FormControl>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />

        {/* Last Name */}
        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormControl className="bg-white border-none">
                <Input
                  {...field}
                  type="text"
                  placeholder="Enter last name"
                  disabled={isLoading}
                />
              </FormControl>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />

        {/* Email */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl className="bg-white border-none">
                <Input
                  {...field}
                  type="email"
                  placeholder="Enter email address"
                  disabled={isLoading}
                />
              </FormControl>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />

        {/* Phone Number */}
        <FormField
          control={form.control}
          name="phoneNumber"
          render={({ field }) => (
            <FormItem>
              <FormControl className="bg-white border-none">
                <Input
                  {...field}
                  type="text"
                  placeholder="Enter phone number"
                  disabled={isLoading}
                />
              </FormControl>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />

        {/* Street Address */}
        <FormField
          control={form.control}
          name="streetAddress"
          render={({ field }) => (
            <FormItem>
              <FormControl className="bg-white border-none">
                <Input
                  {...field}
                  type="text"
                  placeholder="Enter street address"
                  disabled={isLoading}
                />
              </FormControl>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />


        {/* Buttons */}
        <div className="flex justify-between">
          {/* Cancel Button */}
          <Button
            type="button"
            onClick={handleCancel}
            disabled={isLoading}
            className="bg-white text-primary hover:bg-gray-100"
          >
            Cancel
          </Button>

          {/* Submit Button */}
          <Button
            className="w-[231px] bg-primary text-white"
            type="submit"
            loading={isLoading}
          >
            Next
          </Button>
        </div>
      </form>
    </Form>
  );
}
