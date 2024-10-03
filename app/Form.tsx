'use client';

import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import InputField from './InputField';

const formSchema = z.object({
  username: z.string().nonempty('Username is required'),
  email: z.string().email('Invalid email address').nonempty('Email is required'),
  phone: z.string().nonempty('Phone number is required'),
  streetAddress: z.string().nonempty('Street address is required'),
});

type FormValues = z.infer<typeof formSchema>;

interface ReusableFormProps {
  onSubmit: SubmitHandler<FormValues>;
}

const ReusableForm: React.FC<ReusableFormProps> = ({ onSubmit }) => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const handleSuccessfulSubmit: SubmitHandler<FormValues> = (data) => {
    onSubmit(data);
    router.push('/clinic-portal');
  };

  const handleCancel = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    reset();
    console.log('Form canceled and reset');
  };

  return (
    <div className="flex min-h-screen items-center justify-center px-4 py-8 sm:px-6 md:px-8">
      <div className="w-full max-w-[545px] p-6 bg-background rounded-xl shadow-md md:max-w-[545] sm:max-w-[345]">
        <h1 className="text-center text-[24px] font-semibold font-open-sans md:text-[22px] sm:text-[20px]">
          Register Your Clinic with TeleNeo!
        </h1>
        <p className="mb-6 text-center text-sm text-gray-500 sm:text-xs">
          Join as a clinic who will lorem ipsum dolor sit amet consectetur.
        </p>

        <div className="w-full bg-background p-4">
          <form onSubmit={handleSubmit(handleSuccessfulSubmit)} className="space-y-4">
            <InputField
              label="Clinic Name"
              placeholder="Enter clinic name"
              type="text"
              register={register}
              name="username"
              required
              error={errors.username}
            />
            <InputField
              label="Email"
              placeholder="Enter your email"
              type="email"
              register={register}
              name="email"
              required
              error={errors.email}
            />
            <InputField
              label="Phone Number"
              placeholder="Enter your phone number"
              type="text"
              register={register}
              name="phone"
              required
              error={errors.phone}
            />
            <InputField
              label="Street Address"
              placeholder="Enter your street address"
              type="text"
              register={register}
              name="streetAddress"
              required
              error={errors.streetAddress}
            />

            <div className="flex flex-col sm:flex-row justify-end space-y-4 sm:space-y-0 sm:space-x-6 pt-9">
              <Button
                variant="link"
                type="button"
                className="flex justify-center sm:justify-start text-primary"
                onClick={handleCancel}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="rounded-3xl bg-primary px-14 py-2 text-background"
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
