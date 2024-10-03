'use client';

import React, { useState } from 'react';
import { z } from 'zod';
import { Form, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/ui/input';
import useFormStore from '@/stores/useFormStore';
import { useRouter } from 'next/navigation';


// Define validation schema
const bankInfoSchema = z.object({
 selectedBank: z.string().nonempty('Bank selection is required'),
 iban: z.string().nonempty('IBAN is required'),
 accountNumber: z.string().nonempty('Account Number is required'),
});

type BankInfoType = z.infer<typeof bankInfoSchema>;

export default function Step5() {
 const [isLoading, setIsLoading] = useState<boolean>(false);
 const { saveData, formData, prevStep } = useFormStore();
 const router = useRouter(); // Use the router here

 // Initialize form with validation schema
 const form = useForm<BankInfoType>({
  resolver: zodResolver(bankInfoSchema),
  defaultValues: {
   selectedBank: formData.selectedBank,
   iban: formData.iban,
   accountNumber: formData.accountNumber,
  },
 });

 // Handle form submission
 const handleSubmit = async (data: BankInfoType) => {
  setIsLoading(true);

  // Save data to Zustand store
  saveData(data);

  // Simulating an API call
  setTimeout(() => {
   console.log('Bank Info Submitted:', data);
   setIsLoading(false);

   // Redirect to success page
   router.push('/doctors/adddoctors/success');
  }, 1000);
 };

 return (
  <div className="space-y-6">
   <h3 className="text-center text-xl font-semibold text-gray-800">
    Bank Information
   </h3>

   <Form {...form}>
    <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
     {/* Select Bank */}
     <FormField
      control={form.control}
      name="selectedBank"
      render={({ field }) => (
       <FormItem>
        <label className="mb-1 block text-sm font-medium text-gray-700">
         Select Bank <span className="text-red-500">*</span>
        </label>
        <select
         {...field}
         required
         className="h-[45px] w-full rounded-[7px] border border-gray-300 bg-white p-2 text-gray-700 focus:border-primary"
        >
         <option value="">Select Your Bank</option>
         <option value="Bank1">Bank 1</option>
         <option value="Bank2">Bank 2</option>
         <option value="Bank3">Bank 3</option>
        </select>
        <FormMessage className="text-red-500" />
       </FormItem>
      )}
     />

     {/* IBAN */}
     <FormField
      control={form.control}
      name="iban"
      render={({ field }) => (
       <FormItem>
        <label className="mb-1 block text-sm font-medium text-gray-700">
         IBAN <span className="text-red-500">*</span>
        </label>
        <Input
         {...field}
         type="text"
         required
         placeholder="Enter Your IBAN"
         className="h-[45px] w-full rounded-[7px] border border-gray-300 bg-white p-2 text-gray-700 placeholder:text-[12px] focus:border-primary"
        />
        <FormMessage className="text-red-500" />
       </FormItem>
      )}
     />

     {/* Account Number */}
     <FormField
      control={form.control}
      name="accountNumber"
      render={({ field }) => (
       <FormItem>
        <label className="mb-1 block text-sm font-medium text-gray-700">
         Account Number <span className="text-red-500">*</span>
        </label>
        <Input
         {...field}
         type="text"
         required
         placeholder="Enter Your Account Number"
         className="h-[45px] w-full rounded-[7px] border border-gray-300 bg-white p-2 text-gray-700 placeholder:text-[12px] focus:border-primary"
        />
        <FormMessage className="text-red-500" />
       </FormItem>
      )}
     />

     <div className="mt-6 flex justify-between">
      {/* Prev Button */}
      <button
       type="button"
       onClick={prevStep}
       className="bg-white text-primary hover:bg-gray-100"
      >
       Prev
      </button>

      {/* Submit Button */}
      <button
       type="submit"
       disabled={isLoading}
       className="w-[231px] bg-primary text-white"
      >
       {isLoading ? 'Submitting...' : 'Submit'}
      </button>
     </div>
    </form>
   </Form>
  </div>
 );
}
