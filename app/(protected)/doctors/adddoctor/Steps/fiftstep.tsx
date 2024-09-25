import { Input } from '@/components/ui/input';
import { ChangeEvent, useState } from 'react';

export default function Step5() {
  // Define local state to manage bank information
  const [bankInfo, setBankInfo] = useState({
    selectedBank: '',
    iban: '',
    accountNumber: '',
  });

  // Handle input changes for select and input fields
  const handleInputChange = (event: ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = event.target;
    setBankInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="space-y-6">
      <h3 className="text-center text-xl font-semibold text-gray-800">
        Bank Information
      </h3>

      {/* Select Bank */}
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Select Bank <span className="text-red-500">*</span>
        </label>
        <select
          name="selectedBank"
          value={bankInfo.selectedBank}
          onChange={handleInputChange}
          required
          className="h-[45px]  focus:border-primary w-full rounded-[7px] border border-gray-300 bg-white text-gray-700"
        >
          <option value="">Select Your Bank</option>
          <option value="Bank1">Bank 1</option>
          <option value="Bank2">Bank 2</option>
          <option value="Bank3">Bank 3</option>
        </select>
      </div>

      {/* IBAN */}
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          IBAN <span className="text-red-500">*</span>
        </label>
        <Input
          type="text"
          name="iban"
          value={bankInfo.iban}
          onChange={handleInputChange}
          required
          placeholder="Enter Your IBAN"
          className="h-[45px] focus:border-primary  w-full rounded-[7px] border border-gray-300 bg-white text-gray-700 placeholder:text-[12px]"
        />
      </div>

      {/* Account Number */}
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Account Number <span className="text-red-500">*</span>
        </label>
        <Input
          type="text"
          name="accountNumber"
          value={bankInfo.accountNumber}
          onChange={handleInputChange}
          required
          placeholder="Enter Your Account Number"
          className="h-[45px] w-full  focus:border-primary rounded-[7px] border border-gray-300 bg-white text-gray-700 placeholder:text-[12px]"
        />
      </div>
    </div>
  );
}
