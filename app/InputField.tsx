'use client';
import React from 'react';
import { UseFormRegister, FieldError } from 'react-hook-form';

// Define a type for your form fields
interface FormValues {
  username: string;
  email: string;
  phone: string;
  streetAddress: string;
}

interface InputFieldProps {
  label?: string;
  placeholder?: string;
  type?: string;
  register: UseFormRegister<FormValues>; // Use the FormValues type here
  name: keyof FormValues; // Ensures that the name is one of the fields in FormValues
  required?: boolean;
  error?: FieldError;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  placeholder = 'Enter text',
  type = 'text',
  register,
  name,
  required = false,
  error,
}) => {
  return (
    <div className="relative mb-4 w-full">
      {label && (
        <label
          htmlFor={name}
          className="block font-open-sans text-sm font-normal leading-4 text-left"
          style={{
            width: '67px',
            height: '16px',
            position: 'absolute',
            top: '331px', // Adjusting to match provided positioning
            left: '387px',
            opacity: 0, // Making the label hidden per your specifications
            fontSize: '12px',
            lineHeight: '16.34px',
          }}
        >
          {label}
        </label>
      )}
      <input
        id={name} // Add id for label association
        type={type}
        {...register(name, { required })} // Register the input field
        placeholder={placeholder}
        className={`w-full rounded-lg border px-4 py-2 text-[12px] text-secondary-foreground placeholder-secondary-foreground bg-secondary transition-colors duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary ${
          error ? 'border-red-500 focus:ring-red-500' : 'border-secondary'
        }`}
      />
      {error && <p className="mt-1 text-sm text-red-600">{error.message}</p>}
    </div>
  );
};

export default InputField;
