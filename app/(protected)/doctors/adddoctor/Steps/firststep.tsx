import React, { useState } from 'react';
import { z } from 'zod';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import useFormStore from '@/stores/useFormStore'; 

// Define the validation schema using Zod
const formSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 characters"),
  streetAddress: z.string().min(1, "Street address is required"),
});

const Step1: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    streetAddress: '',
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const { nextStep } = useFormStore();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));

    // Clear any previous error for the current field
    setErrors(prevErrors => ({
      ...prevErrors,
      [name]: '', // Clear the error for the current field
    }));
  };

  const validateForm = (data: typeof formData) => {
    try {
      // Validate the entire form data
      formSchema.parse(data);
      return null; // No errors
    } catch (err) {
      if (err instanceof z.ZodError) {
        const validationErrors: { [key: string]: string } = {};
        err.errors.forEach(error => {
          if (error.path.length > 0) {
            validationErrors[error.path[0]] = error.message;
          }
        });
        return validationErrors; // Return the validation errors
      }
      return null; // Fallback
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate the entire form data
    const validationErrors = validateForm(formData);
    
    if (validationErrors) {
      setErrors(validationErrors); // Set errors state
      return; // Stop further processing if there are errors
    }

    // Proceed with form submission or further actions
    console.log("Form submitted successfully:", formData);
    nextStep(); // Call the next step function
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
          placeholder="First name"
          className={`mb-4 h-[45px] w-full rounded-[7px] border-0 bg-white placeholder:text-[12px] focus:outline-none focus:ring-0 ${errors.firstName ? 'border-b-2 border-red-500' : 'border-gray-300'}`}
        />
        {errors.firstName && <span className="text-red-500">{errors.firstName}</span>}
      </div>

      <div>
        <Input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
          placeholder="Last name"
          className={`mb-4 h-[45px] w-full rounded-[7px] border-0 bg-white placeholder:text-[12px] focus:outline-none focus:ring-0 ${errors.lastName ? 'border-b-2 border-red-500' : 'border-gray-300'}`}
        />
        {errors.lastName && <span className="text-red-500">{errors.lastName}</span>}
      </div>

      <div>
        <Input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="Email address"
          className={`mb-4 h-[45px] w-full rounded-[7px] border-0 bg-white placeholder:text-[12px] focus:outline-none focus:ring-0 ${errors.email ? 'border-b-2 border-red-500' : 'border-gray-300'}`}
        />
        {errors.email && <span className="text-red-500">{errors.email}</span>}
      </div>

      <div>
        <Input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          placeholder="Phone number"
          className={`mb-4 h-[45px] w-full rounded-[7px] border-0 bg-white placeholder:text-[12px] focus:outline-none focus:ring-0 ${errors.phone ? 'border-b-2 border-red-500' : 'border-gray-300'}`}
        />
        {errors.phone && <span className="text-red-500">{errors.phone}</span>}
      </div>

      <div>
        <Input
          type="text"
          name="streetAddress"
          value={formData.streetAddress}
          onChange={handleChange}
          required
          placeholder="Street address"
          className={`mb-4 h-[45px] w-full rounded-[7px] border-0 bg-white placeholder:text-[12px] focus:outline-none focus:ring-0 ${errors.streetAddress ? 'border-b-2 border-red-500' : 'border-gray-300'}`}
        />
        {errors.streetAddress && <span className="text-red-500">{errors.streetAddress}</span>}
      </div>
      
    </form>
  );
};

export default Step1;
