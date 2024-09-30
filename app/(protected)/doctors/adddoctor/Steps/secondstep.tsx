'use client'; // Ensure this component behaves as a client component
import React, { useEffect, useState } from 'react';
import { z } from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import useFormStore from '@/stores/useFormStore'; // Zustand store for managing form state

// Define the schema for Step 2 validation
const step2Schema = z.object({
  practiceType: z.string().nonempty('Type of practice is required'),
  practiceSpecialty: z.string().nonempty('Practice specialty is required'),
  specialInterest: z.string().optional(),
  practiceSoftware: z.string().optional(),
  socialLinks: z.array(z.string().url('Invalid URL format')).optional().default([]), // Ensure it defaults to an empty array
});

// Infer the form data type from the schema
type Step2FormType = z.infer<typeof step2Schema>;

interface Step2Props {
  onNext: (data: Step2FormType) => void;
  onPrev: () => void;
}

export default function Step2() {
  const { saveData, nextStep, prevStep } = useFormStore(); // Get methods from Zustand store
  const { control, handleSubmit, setValue, watch, reset } = useForm<Step2FormType>({
    resolver: zodResolver(step2Schema),
    defaultValues: {
      practiceType: '',
      practiceSpecialty: '',
      specialInterest: '',
      practiceSoftware: '',
      socialLinks: [''], // Ensure there is at least one empty string
    },
  });

  const socialLinks = watch('socialLinks');

  // Handle form submission
  const onSubmit = (data: Step2FormType) => {
    console.log("Form data is valid:", data);
    saveData(data);
    nextStep(); 
  };

  // Add another social link input
  const addSocialLink = () => {
    setValue('socialLinks', [...socialLinks, '']);
  };
  useEffect(() => {
    const loadData = () => {
      try {
        const savedData = localStorage.getItem('formData');
        if (savedData) {
          const parsedData: Step2FormType = JSON.parse(savedData);
          if (parsedData && typeof parsedData === 'object') {
            reset(parsedData); // Reset form values to parsed data
          }
        }
      } catch (error) {
        console.error('Failed to load form data from localStorage', error);
      }
    };

    loadData();
  }, [reset]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Practice Type */}
      <FormField
        control={control}
        name="practiceType"
        render={({ field }) => (
          <FormItem>
            <FormControl className="bg-white border-none">
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
            </FormControl>
            <FormMessage className="text-red-500" />
          </FormItem>
        )}
      />

      {/* Practice Specialty */}
      <FormField
        control={control}
        name="practiceSpecialty"
        render={({ field }) => (
          <FormItem>
            <FormControl className="bg-white border-none">
              <select
                {...field}
                required
                className="h-[45px] w-full p-2 rounded-[7px] border border-gray-300 bg-white text-gray-700 focus:border-primary"
              >
                <option value="">Select practice specialties</option>
                <option value="Specialty1">Specialty 1</option>
                <option value="Specialty2">Specialty 2</option>
                <option value="Specialty3">Specialty 3</option>
              </select>
            </FormControl>
            <FormMessage className="text-red-500" />
          </FormItem>
        )}
      />

      {/* Special Interest Areas */}
      <FormField
        control={control}
        name="specialInterest"
        render={({ field }) => (
          <FormItem>
            <FormControl className="bg-white border-none">
              <Input
                {...field}
                placeholder="Enter special interest areas (optional)"
                className="h-[45px] p-2 focus:border-primary w-full rounded-[7px] border-0 bg-white text-secondary-foreground placeholder-white placeholder:text-[12px]"
              />
            </FormControl>
          </FormItem>
        )}
      />

      {/* Practice Software */}
      <FormField
        control={control}
        name="practiceSoftware"
        render={({ field }) => (
          <FormItem>
            <FormControl className="bg-white border-none">
              <Input
                {...field}
                placeholder="Enter practice software name (optional)"
                className="h-[45px] p-2 focus:border-primary w-full rounded-[7px] border-0 bg-white text-secondary-foreground placeholder-white placeholder:text-[12px]"
              />
            </FormControl>
          </FormItem>
        )}
      />

      {/* Social Media Links */}
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

      {/* Navigation Buttons */}
      <div className="flex justify-between">
        <Button
          type="button"
          onClick={prevStep}
          className="bg-white text-primary hover:bg-gray-100"
        >
          Prev
        </Button>
        <Button
          className="w-[231px] bg-primary text-white"
          type="submit"
        >
          Next
        </Button>
      </div>
    </form>
  );
}
