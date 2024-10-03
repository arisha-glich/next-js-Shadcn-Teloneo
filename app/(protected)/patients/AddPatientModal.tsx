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
import { addPatientAction } from './patient';
import { useRouter } from 'next/navigation';


const addPatientSchema = z.object({
  firstName: z.string().nonempty('First Name is required'),
  lastName: z.string().nonempty('Last Name is required'),
  email: z.string().email('Invalid email').nonempty('Email is required'),
  streetAddress: z.string().nonempty('Street Address is required'),
});

type formType = z.infer<typeof addPatientSchema>;

export default function AddPatientForm() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();
  const { toastError, toastSuccess } = useToast();

  // Initialize the form with validation schema
  const form = useForm<formType>({
    resolver: zodResolver(addPatientSchema),
  });

  // Handle form submission
  function handleSubmit(data: formType) {
    setIsLoading(true);

    addPatientAction(data).then((res) => {
      const { message, status } = res;
      if (status === 'success') {
        toastSuccess(message);
        router.push('/patients'); // Redirect to the patients list
        setIsLoading(false);
      }
      if (status === 'error') {
        toastError(message);
        setIsLoading(false);
      }
    });
  }

  return (
   
      <div className="bg-white p-6 rounded-lg  max-w-md w-full">
        <h2 className="text-2xl font-bold mb-2 text-center">
          Fill out Information to Add a Patient!
        </h2>
        <p className="text-gray-500 text-center mb-6">
          Join as a clinic who will lorem ipsum dolor sit amet consectetur.
        </p>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
            {/* First Name Field */}
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="First Name"
                      disabled={isLoading}
                      className="w-full border  text-gray-400 border-gray-300 p-3 rounded-md"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Last Name Field */}
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Last Name"
                      disabled={isLoading}
                      className="w-full border  text-gray-400 border-gray-300 p-3 rounded-md"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Email Field */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      type="email"
                      placeholder="m@example.com"
                      disabled={isLoading}
                      className="w-full border  text-gray-400 border-gray-300 p-3 rounded-md"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Street Address Field */}
            <FormField
              control={form.control}
              name="streetAddress"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Street Address"
                      disabled={isLoading}
                      className="w-full border  text-gray-400 border-gray-300 p-3 rounded-md"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Submit Button */}
            <div className="flex space-x-4 mt-6">
              <Button
                className="bg-white text-gray-700 w-full p-3 rounded-full"
                type="button"
                disabled={isLoading}
                onClick={() => router.push('/')} // Cancel action
              >
                Cancel
              </Button>

              <Button
                className="bg-primary text-white w-full p-3 rounded-full"
                type="submit"
                loading={isLoading}
              >
                Add Patient
              </Button>
            </div>
          </form>
        </Form>
      </div>

  );
}
