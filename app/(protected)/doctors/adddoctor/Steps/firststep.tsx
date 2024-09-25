import React, { useState } from 'react';
import { z } from 'zod';
import { Input } from '@/components/ui/input'; // Ensure this import path is correct

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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Validate the form data
      formSchema.parse(formData);
      setErrors({}); // Clear errors if validation passes
      // Proceed with form submission or further actions
      console.log("Form submitted successfully:", formData);
    } catch (err) {
      if (err instanceof z.ZodError) {
        const validationErrors: { [key: string]: string } = {};
        err.errors.forEach(error => {
          if (error.path.length > 0) {
            validationErrors[error.path[0]] = error.message;
          }
        });
        setErrors(validationErrors); // Set errors state
      }
    }
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
          className="mb-4 h-[45px] w-full rounded-[7px] border-0 bg-white text-secondary-foreground placeholder-white placeholder:text-[12px] focus:border-primary focus:outline-none focus:ring-0"
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
          className="mb-4 h-[45px] w-full rounded-[7px] border-0 bg-white text-secondary-foreground placeholder-white placeholder:text-[12px] focus:border-primary focus:outline-none focus:ring-0"
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
          className="mb-4 h-[45px] w-full rounded-[7px] border-0 bg-white text-secondary-foreground placeholder-white placeholder:text-[12px] focus:border-primary focus:outline-none focus:ring-0"
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
          className="mb-4 h-[45px] w-full rounded-[7px] border-0 bg-white text-secondary-foreground placeholder-white placeholder:text-[12px] focus:border-primary focus:outline-none focus:ring-0"
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
          className="mb-4 mt-4 h-[45px] w-full rounded-[7px] border-0 bg-white text-gray-400 placeholder:text-[12px] focus:border-primary focus:outline-none focus:ring-0"
        />
        {errors.streetAddress && <span className="text-red-500">{errors.streetAddress}</span>}
      </div>

    </form>
  );
};

export default Step1;
