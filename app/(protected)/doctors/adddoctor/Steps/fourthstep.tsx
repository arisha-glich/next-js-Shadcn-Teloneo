import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { useFormContext, Controller } from 'react-hook-form';
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/components/ui/form';

export default function Step4() {
  const formMethods = useFormContext(); // Access form methods

  const inputClassName = (error: boolean) =>
    `h-[45px] w-full rounded-[7px] border-0 bg-white placeholder:text-[12px] p-4 focus:outline-none focus:ring-0 ${
      error ? 'border-b-2 border-red-500' : 'border-gray-300'
    }`;

  const renderFormField = (name: string, type: string, placeholder: string, rows?: number) => (
    <FormField
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className='text-black'>{placeholder}</FormLabel>
          <FormControl className='p-3'>
            {type === 'textarea' ? (
              <Controller
                name={name}
                control={formMethods.control}
                render={({ field }) => (
                  <textarea
                    {...field}
                    placeholder={placeholder}
                    rows={rows}
                    className={inputClassName(!!formMethods.formState.errors[name])}
                  />
                )}
              />
            ) : (
              <Controller
                name={name}
                control={formMethods.control}
                render={({ field }) => (
                  <Input
                    {...field}
                    type={type}
                    placeholder={placeholder}
                    className={inputClassName(!!formMethods.formState.errors[name])}
                  />
                )}
              />
            )}
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );

  return (
    <div className="space-y-6">
      {/* Form Fields */}
      {renderFormField('instituteName', 'text', 'Name of institute you have worked in')}
      {renderFormField('practiceName', 'text', 'Name of practice')}
      <div className="grid grid-cols-2 gap-4">
        {renderFormField('workingFrom', 'date', 'Working From')}
        {renderFormField('workingTo', 'date', 'To')}
      </div>
      <FormField
        name="currentlyWorking"
        render={({ field }) => (
          <FormItem>
            <div className="flex items-center space-x-2">
              <Controller
                name="currentlyWorking"
                control={formMethods.control}
                render={({ field }) => (
                  <Checkbox {...field} id="currentlyWorking" />
                )}
              />
              <FormLabel htmlFor="currentlyWorking">I am currently working here</FormLabel>
            </div>
          </FormItem>
        )}
      />
      {renderFormField('website', 'url', 'Website link of institute')}
      {renderFormField('aboutPractice', 'textarea', 'Type here...', 4)}
      {renderFormField('socialMediaLink1', 'url', 'Social Media Link 1')}
      {renderFormField('socialMediaLink2', 'url', 'Social Media Link 2')}
      <button type="button" className="mt-2 text-sm text-primary">+ Add another link</button>
      {renderFormField('attachment', 'file', 'Upload your file')}
      <button
        type="button"
        className="mt-4 w-full rounded-[7px] border border-gray-300 bg-white py-2 text-sm font-medium text-primary"
        onClick={() => {
          console.log('Add another experience triggered');
        }}
      >
        + Add another experience
      </button>
    </div>
  );
}
