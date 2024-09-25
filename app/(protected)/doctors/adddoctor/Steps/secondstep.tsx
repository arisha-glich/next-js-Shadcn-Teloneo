import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { z } from 'zod';

// Define the validation schema
const schema = z.object({
  practiceType: z.string().nonempty("Practice type is required"),
  practiceSpecialty: z.string().nonempty("Practice specialty is required"),
  specialInterest: z.string().optional(),
  practiceSoftware: z.string().optional(),
  socialLinks: z.array(z.string().url("Must be a valid URL")).min(1, "At least one social link is required"),
});

export default function Step2() {
  const [formData, setFormData] = useState({
    practiceType: '',
    practiceSpecialty: '',
    specialInterest: '',
    practiceSoftware: '',
    socialLinks: [''],
  });

  const [errors, setErrors] = useState<string[]>([]);

  const addSocialLink = () => {
    setFormData((prev) => ({
      ...prev,
      socialLinks: [...prev.socialLinks, ''],
    }));
  };

  const handleLinkChange = (index: number, value: string) => {
    const newLinks = [...formData.socialLinks];
    newLinks[index] = value;
    setFormData((prev) => ({ ...prev, socialLinks: newLinks }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    try {
      // Validate the form data
      schema.parse(formData);
      // Clear errors if validation is successful
      setErrors([]);
      console.log("Form data is valid:", formData);
    } catch (error) {
      if (error instanceof z.ZodError) {
        // Update the errors state if validation fails
        const formattedErrors = error.errors.map((err) => err.message);
        setErrors(formattedErrors);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h3 className="text-center text-xl font-semibold text-gray-800">Provider Profile</h3>

      <div>
        <label htmlFor="practiceType" className="mb-1 block text-sm font-medium text-gray-700">
          Type of Practice <span className="text-red-500">*</span>
        </label>
        <Input
          id="practiceType"
          required
          value={formData.practiceType}
          onChange={(e) => setFormData({ ...formData, practiceType: e.target.value })}
          placeholder="Select a type of practice"
          className="h-[45px] w-full focus:border-primary rounded-[7px] border-0 bg-white text-secondary-foreground placeholder-white placeholder:text-[12px]"
        />
      </div>

      <div>
        <label htmlFor="practiceSpecialty" className="mb-1 block text-sm font-medium text-gray-700">
          Practice Specialty <span className="text-red-500">*</span>
        </label>
        <Input
          id="practiceSpecialty"
          required
          value={formData.practiceSpecialty}
          onChange={(e) => setFormData({ ...formData, practiceSpecialty: e.target.value })}
          placeholder="Select practice specialties"
          className="h-[45px] focus:border-primary w-full rounded-[7px] border-0 bg-white text-secondary-foreground placeholder-white placeholder:text-[12px]"
        />
      </div>

      <div>
        <label htmlFor="specialInterest" className="mb-1 block text-sm font-medium text-gray-700">
          Special Interest Areas <span className="text-gray-400">(optional)</span>
        </label>
        <Input
          id="specialInterest"
          value={formData.specialInterest}
          onChange={(e) => setFormData({ ...formData, specialInterest: e.target.value })}
          placeholder="Enter special interest areas"
          className="h-[45px] focus:border-primary w-full rounded-[7px] border-0 bg-white text-secondary-foreground placeholder-white placeholder:text-[12px]"
        />
      </div>

      <div>
        <label htmlFor="practiceSoftware" className="mb-1 block text-sm font-medium text-gray-700">
          Practice Software
        </label>
        <Input
          id="practiceSoftware"
          value={formData.practiceSoftware}
          onChange={(e) => setFormData({ ...formData, practiceSoftware: e.target.value })}
          placeholder="Enter practice software name"
          className="h-[45px] focus:border-primary w-full rounded-[7px] border-0 bg-white text-secondary-foreground placeholder-white placeholder:text-[12px]"
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">Social Media Links</label>
        {formData.socialLinks.map((link, index) => (
          <Input
            key={index}
            placeholder={`Link ${index + 1}`}
            value={link}
            onChange={(e) => handleLinkChange(index, e.target.value)}
            className="h-[45px] focus:border-primary w-full rounded-[7px] border-0 bg-white text-secondary-foreground placeholder-white placeholder:text-[12px]"
          />
        ))}
        <button type="button" onClick={addSocialLink} className="mt-2 text-sm text-primary">
          + Add another link
        </button>
      </div>

      {/* Display validation errors */}
      {errors.length > 0 && (
        <div className="mt-4 text-red-500">
          {errors.map((error, index) => (
            <p key={index}>{error}</p>
          ))}
        </div>
      )}

    </form>
  );
}
