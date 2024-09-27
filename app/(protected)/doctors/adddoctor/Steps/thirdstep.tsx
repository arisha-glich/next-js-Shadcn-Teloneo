'use client';
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
import useToast from '@/hooks/use-toast';
import {
 Select,
 SelectTrigger,
 SelectContent,
 SelectItem,
 SelectValue,
} from '@/components/ui/select';

const educationSchema = z.object({
 accreditation: z.string().min(1, 'Accreditation is required'),
 instituteName: z.string().min(1, 'Institute name is required'),
 degreeName: z.string().min(1, 'Degree name is required'),
 completionYear: z.string().min(1, 'Completion year is required'),
 attachment: z.instanceof(File).nullable(),
});

type EducationFormType = z.infer<typeof educationSchema>;

const Step3: React.FC = () => {
 const [isLoading, setIsLoading] = useState<boolean>(false);
 const { toastError, toastSuccess } = useToast();

 const formMethods = useForm<EducationFormType>({
  resolver: zodResolver(educationSchema),
 });

 const handleSubmit = async (data: EducationFormType) => {
  setIsLoading(true);
  // Handle form submission here, e.g., send data to your backend
  console.log(data);
  toastSuccess('Education data submitted successfully!');
  setIsLoading(false);
 };

 return (
  <Form {...formMethods}>
   <form
    onSubmit={formMethods.handleSubmit(handleSubmit)}
    className="space-y-6"
   >
    {/* Existing Education Entry */}
    <div className="border-gray-300 p-4">
     <h4 className="text-base font-medium text-gray-700">
      MBBS - AIOM University, UI - 2020.
     </h4>
    </div>

    {/* Accreditation Dropdown */}
    <FormField
     control={formMethods.control}
     name="accreditation"
     render={({ field }) => (
      <FormItem>
       <FormLabel className="text-black">
        Choose accreditation <span className="text-red-500">*</span>
       </FormLabel>
       <FormControl>
        <Select value={field.value} onValueChange={field.onChange}>
         <SelectTrigger>
          <SelectValue placeholder="Select an option" />
         </SelectTrigger>
         <SelectContent>
          <SelectItem value="option1">Option 1</SelectItem>
          <SelectItem value="option2">Option 2</SelectItem>
         </SelectContent>
        </Select>
       </FormControl>
       <FormMessage />
      </FormItem>
     )}
    />

    {/* Institute Name */}
    <FormField
     control={formMethods.control}
     name="instituteName"
     render={({ field }) => (
      <FormItem>
       <FormLabel className="text-black">
        Institute name <span className="text-red-500">*</span>
       </FormLabel>
       <FormControl>
        <Input
         {...field}
         type="text"
         placeholder="Enter institute name"
         disabled={isLoading}
         className={`mb-4 h-[45px] w-full rounded-[7px] border-0 bg-white placeholder:text-[12px] focus:outline-none focus:ring-0 ${
          formMethods.formState.errors.instituteName
           ? 'border-b-2 border-red-500'
           : 'border-gray-300'
         }`}
        />
       </FormControl>
       <FormMessage>
        {formMethods.formState.errors.instituteName?.message}
       </FormMessage>
      </FormItem>
     )}
    />

    {/* Degree / Certificate Name */}
    <FormField
     control={formMethods.control}
     name="degreeName"
     render={({ field }) => (
      <FormItem>
       <FormLabel className="text-black">
        Degree / certificate name <span className="text-red-500">*</span>
       </FormLabel>
       <FormControl>
        <Input
         {...field}
         type="text"
         placeholder="Enter degree/certificate name"
         disabled={isLoading}
         className={`mb-4 h-[45px] w-full rounded-[7px] border-0 bg-white placeholder:text-[12px] focus:outline-none focus:ring-0 ${
          formMethods.formState.errors.degreeName
           ? 'border-b-2 border-red-500'
           : 'border-gray-300'
         }`}
        />
       </FormControl>
       <FormMessage>
        {formMethods.formState.errors.degreeName?.message}
       </FormMessage>
      </FormItem>
     )}
    />

    {/* Completion Year */}
    <FormField
     control={formMethods.control}
     name="completionYear"
     render={({ field }) => (
      <FormItem>
       <FormLabel className="text-black">
        Completion year <span className="text-red-500">*</span>
       </FormLabel>
       <FormControl>
        <Input
         {...field}
         type="date"
         disabled={isLoading}
         className={`mb-4 h-[45px] w-full rounded-[7px] border-0 bg-white placeholder:text-[12px] focus:outline-none focus:ring-0 ${
          formMethods.formState.errors.completionYear
           ? 'border-b-2 border-red-500'
           : 'border-gray-300'
         }`}
        />
       </FormControl>
       <FormMessage>
        {formMethods.formState.errors.completionYear?.message}
       </FormMessage>
      </FormItem>
     )}
    />

    {/* Upload Degree/Certificate */}
    <FormField
     control={formMethods.control}
     name="attachment"
     render={({ field }) => (
      <FormItem>
       <FormLabel className="text-black">
        Attach educational degree/certificate{' '}
        <span className="text-gray-400">(optional)</span>
       </FormLabel>
       <FormControl>
        <Input
         type="file"
         onChange={e => {
          const file = e.target.files ? e.target.files[0] : null;
          field.onChange(file); // update the form field with the selected file
         }}
         disabled={isLoading}
         className={`mb-4 h-[45px] w-full rounded-[7px] border-0 bg-white placeholder:text-[12px] focus:outline-none focus:ring-0 ${
          formMethods.formState.errors.attachment
           ? 'border-b-2 border-red-500'
           : 'border-gray-300'
         }`}
        />
       </FormControl>
       <FormMessage>
        {formMethods.formState.errors.attachment?.message}
       </FormMessage>
      </FormItem>
     )}
    />

    {/* Add Another Education Button */}
   </form>
  </Form>
 );
};

export default Step3;
