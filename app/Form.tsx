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
      <div className="w-[606px] h-[530px] p-6 bg-background rounded-[40px] shadow-lg ">
        <h1 className="text-center text-[26px] font-semibold font-open-sans md:text-[22px] mt-4 sm:text-[20px]">
          Register Your Clinic with TeleNeo!
        </h1>
        <p className="mb-10 text-center text-[12px] text-secondary-foreground">
          Join as a clinic who will lorem ipsum dolor sit amet consectetur.
        </p>

        <div className=" relative w-[546px] h-[359px]  bg-white ">
          <form onSubmit={handleSubmit(handleSuccessfulSubmit)} className="space-y-3">
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

            <div className="flex flex-col  sm:flex-row justify-end space-y-4 sm:space-y-0 sm:space-x-6 pt-[3.5rem]">
              <Button
                variant="link"
                type="button"
                className="flex justify-center font-semibold sm:justify-start text-primary"
                onClick={handleCancel}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="rounded-3xl bg-primary font-semibold px-14 py-2 text-background"
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
