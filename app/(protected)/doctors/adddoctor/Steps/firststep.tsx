import React, { useState } from 'react';
import { z } from 'zod';
import {
 Form,
 FormControl,
 FormField,
 FormItem,
 FormLabel,
 FormMessage,
} from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import useFormStore from '@/stores/useFormStore';

// Define the validation schema using Zod
const formSchema = z.object({
 firstName: z.string().min(1, 'First name is required'),
 lastName: z.string().min(1, 'Last name is required'),
 email: z.string().email('Invalid email address'),
 phone: z.string().min(10, 'Phone number must be at least 10 characters'),
 streetAddress: z.string().min(1, 'Street address is required'),
});

type FormData = z.infer<typeof formSchema>;

const Step1: React.FC = () => {
 const [isLoading, setIsLoading] = useState<boolean>(false);
 const { nextStep } = useFormStore();

 const formMethods = useForm<FormData>({
  resolver: zodResolver(formSchema),
 });

 const handleSubmit = async (data: FormData) => {
  setIsLoading(true);
  // Simulate an asynchronous action (like an API call)
  await new Promise(resolve => setTimeout(resolve, 1000));
  console.log('Form submitted successfully:', data);
  nextStep(); // Call the next step function
  setIsLoading(false);
 };

 return (
  <Form {...formMethods}>
   <form
    onSubmit={formMethods.handleSubmit(handleSubmit)}
    className="space-y-4"
   >
    {/* First Name Field */}
    <FormField
     control={formMethods.control}
     name="firstName"
     render={({ field }) => (
      <FormItem>
       <FormControl>
        <Input
         {...field}
         type="text"
         placeholder="First name"
         disabled={isLoading}
         className={`mb-4 h-[45px] w-full rounded-[7px] border-0 bg-white placeholder:text-[12px] focus:outline-none focus:ring-0 ${formMethods.formState.errors.firstName ? 'border-b-2 border-red-500' : 'border-gray-300'}`}
        />
       </FormControl>
       <FormMessage>
        {formMethods.formState.errors.firstName?.message}
       </FormMessage>
      </FormItem>
     )}
    />

    {/* Last Name Field */}
    <FormField
     control={formMethods.control}
     name="lastName"
     render={({ field }) => (
      <FormItem>
       <FormControl>
        <Input
         {...field}
         type="text"
         placeholder="Last name"
         disabled={isLoading}
         className={`mb-4 h-[45px] w-full rounded-[7px] border-0 bg-white placeholder:text-[12px] focus:outline-none focus:ring-0 ${formMethods.formState.errors.lastName ? 'border-b-2 border-red-500' : 'border-gray-300'}`}
        />
       </FormControl>
       <FormMessage>
        {formMethods.formState.errors.lastName?.message}
       </FormMessage>
      </FormItem>
     )}
    />

    {/* Email Field */}
    <FormField
     control={formMethods.control}
     name="email"
     render={({ field }) => (
      <FormItem>
       <FormControl>
        <Input
         {...field}
         type="email"
         placeholder="Email address"
         disabled={isLoading}
         className={`mb-4 h-[45px] w-full rounded-[7px] border-0 bg-white placeholder:text-[12px] focus:outline-none focus:ring-0 ${formMethods.formState.errors.email ? 'border-b-2 border-red-500' : 'border-gray-300'}`}
        />
       </FormControl>
       <FormMessage>{formMethods.formState.errors.email?.message}</FormMessage>
      </FormItem>
     )}
    />

    {/* Phone Number Field */}
    <FormField
     control={formMethods.control}
     name="phone"
     render={({ field }) => (
      <FormItem>
       <FormControl>
        <Input
         {...field}
         type="text"
         placeholder="Phone number"
         disabled={isLoading}
         className={`mb-4 h-[45px] w-full rounded-[7px] border-0 bg-white placeholder:text-[12px] focus:outline-none focus:ring-0 ${formMethods.formState.errors.phone ? 'border-b-2 border-red-500' : 'border-gray-300'}`}
        />
       </FormControl>
       <FormMessage>{formMethods.formState.errors.phone?.message}</FormMessage>
      </FormItem>
     )}
    />

    {/* Street Address Field */}
    <FormField
     control={formMethods.control}
     name="streetAddress"
     render={({ field }) => (
      <FormItem>
       <FormControl>
        <Input
         {...field}
         type="text"
         placeholder="Street address"
         disabled={isLoading}
         className={`mb-4 h-[45px] w-full rounded-[7px] border-0 bg-white placeholder:text-[12px] focus:outline-none focus:ring-0 ${formMethods.formState.errors.streetAddress ? 'border-b-2 border-red-500' : 'border-gray-300'}`}
        />
       </FormControl>
       <FormMessage>
        {formMethods.formState.errors.streetAddress?.message}
       </FormMessage>
      </FormItem>
     )}
    />
   </form>
  </Form>
 );
};

export default Step1;
