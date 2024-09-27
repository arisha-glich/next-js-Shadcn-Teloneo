import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { z } from 'zod';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormField, FormItem, FormMessage } from '@/components/ui/form';

// Define the validation schema
const schema = z.object({
  practiceType: z.string().nonempty("Practice type is required"),
  practiceSpecialty: z.string().nonempty("Practice specialty is required"),
  specialInterest: z.string().optional(),
  practiceSoftware: z.string().optional(),
  socialLinks: z.array(z.string().url("Must be a valid URL")).min(1, "At least one social link is required"),
});

// Define the interface for your form data
interface FormData {
  practiceType: string;
  practiceSpecialty: string;
  specialInterest?: string;
  practiceSoftware?: string;
  socialLinks: string[];
}

export default function Step2() {
  const { control, handleSubmit, setValue, watch } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      practiceType: '',
      practiceSpecialty: '',
      specialInterest: '',
      practiceSoftware: '',
      socialLinks: [''],
    },
  });

  const onSubmit = (data: FormData) => {
    console.log("Form data is valid:", data);
  };

  const socialLinks = watch('socialLinks');

  const addSocialLink = () => {
    setValue('socialLinks', [...socialLinks, '']);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

      <FormField
        control={control}
        name="practiceType"
        render={({ field }) => (
          <FormItem>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Type of Practice <span className="text-red-500">*</span>
            </label>
            <select
              {...field}
              required
              className="h-[45px] w-full p-2 rounded-[7px] border border-gray-300 bg-white text-gray-700 focus:border-primary"
            >
              <option value="">Select a type of practice</option>
              <option value="Practice1">Practice Type 1</option>
              <option value="Practice2">Practice Type 2</option>
              <option value="Practice3">Practice Type 3</option>
            </select>
            <FormMessage className="text-red-500" />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="practiceSpecialty"
        render={({ field }) => (
          <FormItem>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Practice Specialty <span className="text-red-500">*</span>
            </label>
            <select
              {...field}
              required
              className="h-[45px] w-full =-2 rounded-[7px] border border-gray-300 bg-white text-gray-700 focus:border-primary"
            >
              <option value="">Select practice specialties</option>
              <option value="Specialty1">Specialty 1</option>
              <option value="Specialty2">Specialty 2</option>
              <option value="Specialty3">Specialty 3</option>
            </select>
            <FormMessage className="text-red-500" />
          </FormItem>
        )}
      />

      <div>
        <label htmlFor="specialInterest" className="mb-1 block text-sm font-medium text-gray-700">
          Special Interest Areas <span className="text-gray-400">(optional)</span>
        </label>
        <Controller
          control={control}
          name="specialInterest"
          render={({ field }) => (
            <Input
              id="specialInterest"
              {...field}
              placeholder="Enter special interest areas"
              className="h-[45px] p-2 focus:border-primary w-full rounded-[7px] border-0 bg-white text-secondary-foreground placeholder-white placeholder:text-[12px]"
            />
          )}
        />
      </div>

      <div>
        <label htmlFor="practiceSoftware" className="mb-1 block text-sm font-medium text-gray-700">
          Practice Software
        </label>
        <Controller
          control={control}
          name="practiceSoftware"
          render={({ field }) => (
            <Input
              id="practiceSoftware"
              {...field}
              placeholder="Enter practice software name"
              className="h-[45px] p-2 focus:border-primary w-full rounded-[7px] border-0 bg-white text-secondary-foreground placeholder-white placeholder:text-[12px]"
            />
          )}
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">Social Media Links</label>
        {socialLinks.map((link, index) => (
          <Controller
            key={index}
            control={control}
            name={`socialLinks.${index}`}
            render={({ field }) => (
              <Input
                placeholder={`Link ${index + 1}`}
                {...field}
                className="h-[45px] p-2 focus:border-primary w-full rounded-[7px] border-0 bg-white text-secondary-foreground placeholder-white placeholder:text-[12px]"
              />
            )}
          />
        ))}
        <button type="button" onClick={addSocialLink} className="mt-2 text-sm text-primary">
          + Add another link
        </button>
      </div>
    </form>
  );
}
