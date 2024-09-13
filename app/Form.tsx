'use client';
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

import { Button } from '@/components/ui/button';
import InputField from './InputField';

// Define form validation schema with Zod
const formSchema = z.object({
  username: z.string().nonempty('Username is required'),
  email: z.string().email('Invalid email address').nonempty('Email is required'),
  phone: z.string().nonempty('Phone number is required'),
  streetAddress: z.string().nonempty('Street address is required'),
});

// Infer the form values type from the Zod schema
type FormValues = z.infer<typeof formSchema>;

interface ReusableFormProps {
  onSubmit: SubmitHandler<FormValues>; // Form submission handler
}

const ReusableForm: React.FC<ReusableFormProps> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="h-[500px] w-[606px] rounded-xl bg-background p-8 shadow-md">
        <h1 className="font-open-sans text-center text-[26px] font-semibold">
          Register Your Clinic with TeleNeo!
        </h1>
        <p className="mb-6 text-center text-gray-500">
          Join as a clinic who will lorem ipsum dolor sit amet consectetur.
        </p>

        <div className="h-[350px] w-full bg-background">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Input fields */}
            <InputField
              label="Clinic Name"
              placeholder="Enter clinic name"
              type="text"
              register={register}
              name="username"
              required
              error={errors.username} // Dynamically pass errors
            />
            <InputField
              label="Email"
              placeholder="Enter your email"
              type="email"
              register={register}
              name="email"
              required
              error={errors.email} // Dynamically pass errors
            />
            <InputField
              label="Phone Number"
              placeholder="Enter your phone number"
              type="text"
              register={register}
              name="phone"
              required
              error={errors.phone} // Dynamically pass errors
            />
            <InputField
              label="Street Address"
              placeholder="Enter your street address"
              type="text"
              register={register}
              name="streetAddress"
              required
              error={errors.streetAddress} // Dynamically pass errors
            />

            {/* Buttons inside the container */}
            <div className="flex justify-end space-x-6 pt-6">
              <Button
                variant="link"
                className="flex h-[45px] justify-start text-primary"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="rounded-xl bg-primary px-14 py-2 text-background"
              >
                Register
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReusableForm;
