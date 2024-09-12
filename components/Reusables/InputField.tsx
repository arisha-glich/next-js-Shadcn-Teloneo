import { String } from 'lodash';
import React from 'react';
import { UseFormRegister, FieldError } from 'react-hook-form';

interface InputFieldProps {
 label?: string;
 placeholder?: string;
 type?: string;
 value: string;
 register: UseFormRegister<string>; // Register method from react-hook-form
 name: string;
 required?: boolean;
 error?: FieldError; // FieldError type for error handling
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
     className="mb-2 block text-sm font-medium text-gray-700"
    >
     {label}
    </label>
   )}
   <input
    type={type}
    {...register(name, { required })}
    placeholder={placeholder}
    className={`w-full rounded-lg border border-border bg-card px-4 py-2 text-foreground transition-colors duration-150 ease-in-out placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary ${
     error ? 'border-red-500 focus:ring-red-500' : ''
    }`}
   />
   {error && <p className="mt-1 text-sm text-red-600">{error.message}</p>}
  </div>
 );
};

export default InputField;
