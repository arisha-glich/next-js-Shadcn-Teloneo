import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';

export default function Step4() {
  return (
    <div className="space-y-6">

    {/* Institute Name */}
    <div>
     <label className="mb-1 block text-sm font-medium text-gray-700">
      Institute name <span className="text-red-500">*</span>
     </label>
     <Input
      type="text"
      required
      placeholder="Name of institute you have worked in"
      className="h-[45px]  focus:border-primary w-full rounded-[7px] border border-gray-300 bg-white text-secondary-foreground placeholder:text-[12px]"
     />
    </div>

    {/* Practice Name */}
    <div>
     <label className="mb-1 block text-sm font-medium text-gray-700">
      Practice name <span className="text-red-500">*</span>
     </label>
     <Input
      type="text"
      required
      placeholder="Name of practice"
      className="h-[45px]  focus:border-primary w-full rounded-[7px] border border-gray-300 bg-white text-secondary-foreground placeholder:text-[12px]"
     />
    </div>

    {/* Working From and To Dates */}
    <div className="grid grid-cols-2 gap-4">
     <div>
      <label className="mb-1 block text-sm font-medium text-gray-700">
       Working from <span className="text-red-500">*</span>
      </label>
      <Input
       type="date"
       required
       className="h-[45px]   focus:border-primary w-full rounded-[7px] border border-gray-300 bg-white text-secondary-foreground"
      />
     </div>

     <div>
      <label className="mb-1 block text-sm font-medium text-gray-700">
       To <span className="text-gray-400">(optional)</span>
      </label>
      <Input
       type="date"
       className="h-[45px]  focus:border-primary w-full rounded-[7px] border border-gray-300 bg-white text-secondary-foreground"
      />
     </div>
    </div>

    {/* Currently Working Checkbox */}
    <div className="flex items-center space-x-2">
     <Checkbox id="currentlyWorking" />
     <label
      htmlFor="currentlyWorking"
      className="text-sm font-medium text-gray-700"
     >
      I am currently working here
     </label>
    </div>
    {/* Website */}
    <div>
     <label className="mb-1 block text-sm font-medium text-gray-700">
      Website <span className="text-gray-400">(optional)</span>
     </label>
     <Input
      type="url"
      placeholder="Website link of institute"
      className="h-[45px]  focus:border-primary w-full rounded-[7px] border border-gray-300 bg-white text-secondary-foreground placeholder:text-[12px]"
     />
    </div>

    {/* About Practice */}
    <div>
     <label className="mb-1 block text-sm font-medium text-gray-700">
      About practice
     </label>
     <textarea
      placeholder="Type here..."
      rows={4}
      className="w-full  focus:border-primary rounded-[7px] border border-gray-300 bg-white p-2 text-secondary-foreground placeholder:text-[12px]"
     />
    </div>

    {/* Social Media Links */}
    <div>
     <label className="mb-1 block text-sm font-medium text-gray-700">
      Social media link
     </label>
     <Input
      type="url"
      placeholder="Link 1"
      className="h-[45px]  focus:border-primary w-full rounded-[7px] border border-gray-300 bg-white text-secondary-foreground placeholder:text-[12px]"
     />

     <button type="button" className="mt-2 text-sm text-primary">
      + Add another link
     </button>
    </div>

    {/* Attachment Upload */}
    <div>
     <label className="mb-1 block text-sm font-medium text-gray-700">
      Attachment <span className="text-gray-400">(optional)</span>
     </label>
     <Input
      type="file"
      className="h-[45px]  focus:border-primary w-full rounded-[7px] border border-gray-300 bg-white text-secondary-foreground placeholder:text-[12px]"
     />
    </div>

    {/* Add Another Experience Button */}
    <div>
     <button
      type="button"
      className="mt-4 w-full  rounded-[7px] border border-gray-300 bg-white py-2 text-sm font-medium text-primary"
     >
      + Add another experience
     </button>
    </div>
   </div>
  )}
