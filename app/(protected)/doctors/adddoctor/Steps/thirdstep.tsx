import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';

import * as z from 'zod';

const Step3 = () => {
  const [educationData, setEducationData] = useState<{
    accreditation: string;
    instituteName: string;
    degreeName: string;
    completionYear: string;
    attachment: File | null; // Allow File or null for attachment
  }>({
    accreditation: '',
    instituteName: '',
    degreeName: '',
    completionYear: '',
    attachment: null,
  });

  // Zod schema for validation
  const schema = z.object({
    accreditation: z.string().min(1, 'Accreditation is required'),
    instituteName: z.string().min(1, 'Institute name is required'),
    degreeName: z.string().min(1, 'Degree name is required'),
    completionYear: z.string().min(1, 'Completion year is required'),
    attachment: z.instanceof(File).nullable(), // Accepting File or null
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setEducationData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null; // Get the file or null
    setEducationData(prev => ({
      ...prev,
      attachment: file,
    }));
  };

  return (
    <div className="space-y-6">
      {/* Existing Education Entry */}
      <div className="border-gray-300 p-4">
        <h4 className="text-base font-medium text-gray-700">
          MBBS - AIOM University, UI - 2020.
        </h4>
      </div>

      {/* Accreditation Dropdown with Shadcn Select */}
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Choose accreditation <span className="text-red-500">*</span>
        </label>
        <Select
          value={educationData.accreditation}
          onValueChange={value =>
            setEducationData(prev => ({
              ...prev,
              accreditation: value,
            }))
          }
        >
          <SelectTrigger>
            <SelectValue placeholder="Select an option" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="option1">Option 1</SelectItem>
            <SelectItem value="option2">Option 2</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Institute Name */}
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Institute name <span className="text-red-500">*</span>
        </label>
        <Input
          type="text"
          name="instituteName"
          required
          value={educationData.instituteName}
          onChange={handleInputChange}
          placeholder="Enter institute name"
          className="h-[45px] w-full rounded-[7px] border border-gray-300 bg-white text-secondary-foreground placeholder:text-[12px] focus:border-primary"
        />
      </div>

      {/* Degree / Certificate Name */}
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Degree / certificate name <span className="text-red-500">*</span>
        </label>
        <Input
          type="text"
          name="degreeName"
          required
          value={educationData.degreeName}
          onChange={handleInputChange}
          placeholder="Enter degree/certificate name"
          className="h-[45px] w-full rounded-[7px] border border-gray-300 bg-white text-secondary-foreground placeholder:text-[12px] focus:border-primary"
        />
      </div>

      {/* Completion Year */}
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Completion year <span className="text-red-500">*</span>
        </label>
        <Input
          type="date"
          name="completionYear"
          required
          value={educationData.completionYear}
          onChange={handleInputChange}
          className="h-[45px] w-full rounded-[7px] border border-gray-300 bg-white text-secondary-foreground focus:border-primary"
        />
      </div>

      {/* Upload Degree/Certificate */}
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Attach educational degree/certificate{' '}
          <span className="text-gray-400">(optional)</span>
        </label>
        <Input
          type="file"
          onChange={handleFileChange}
          className="h-[45px] w-full rounded-[7px] border border-gray-300 bg-white text-secondary-foreground placeholder:text-[12px] focus:border-primary"
        />
      </div>

      {/* Add Another Education Button */}
      <div>
        <button type="button" className="mt-2 text-sm text-primary">
          + Add another education
        </button>
      </div>
    </div>
  );
};

export default Step3;
