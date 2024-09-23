import * as z from 'zod';

// Step 1: Personal Info Schema
export const personalInfoSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Invalid phone number"),
  streetAddress: z.string().min(1, "Street address is required"),
});

// Step 2: Provider Profile Schema
export const providerProfileSchema = z.object({
  practiceType: z.string().min(1, "Practice type is required"),
  practiceSpecialty: z.string().min(1, "Specialty is required"),
  interestAreas: z.string().optional(),
  practiceSoftware: z.string().optional(),
  socialMediaLinks: z.array(z.string().url()).optional(),
});

// Step 3: Education Schema
export const educationSchema = z.object({
  accreditation: z.string().min(1, "Accreditation is required"),
  instituteName: z.string().min(1, "Institute name is required"),
  degreeName: z.string().min(1, "Degree/Certificate is required"),
  completionYear: z.string().min(4, "Completion year is required"),
});

// Step 4: Experience Schema
export const experienceSchema = z.object({
  instituteName: z.string().min(1, "Institute name is required"),
  practiceName: z.string().min(1, "Practice name is required"),
  workingFrom: z.string().min(1, "Working from date is required"),
  workingTo: z.string().optional(),
  isCurrent: z.boolean().optional(),
  website: z.string().url().optional(),
  aboutPractice: z.string().optional(),
  socialMediaLinks: z.array(z.string().url()).optional(),
  attachments: z.any().optional(),
});

// Step 5: Bank Info Schema
export const bankInfoSchema = z.object({
  bankAccountNumber: z.string().min(1, "Bank account number is required"),
  bankName: z.string().min(1, "Bank name is required"),
  branchCode: z.string().optional(),
  
});
