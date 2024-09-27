import { useState } from 'react';
import { FileUploader } from '@/components/uploader'; // Adjust this path as necessary
import {
 Dialog,
 DialogContent,
 DialogFooter,
 DialogHeader,
 DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import Tickicon from '@/public/Doctors/tick.svg'; // Import the success tick icon

export default function MyComponent() {
 const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
 const [uploadProgresses, setUploadProgresses] = useState<
  Record<string, number>
 >({});
 const [isDialogOpen, setIsDialogOpen] = useState(false); // State to control the dialog visibility

 // Function to simulate file upload
 const handleUpload = async (files: File[]) => {
  // Simulate an upload with a timeout (replace with actual upload logic)
  return new Promise<void>(resolve => {
   files.forEach(file => {
    const fileName = file.name;
    setUploadProgresses(prev => ({ ...prev, [fileName]: 0 }));

    const interval = setInterval(() => {
     setUploadProgresses(prev => {
      const newProgress = (prev[fileName] || 0) + 10;
      if (newProgress >= 100) {
       clearInterval(interval);
       resolve();
       setIsDialogOpen(true); // Show the dialog when upload is complete
      }
      return { ...prev, [fileName]: newProgress };
     });
    }, 500); // Simulating progress every 500ms
   });
  });
 };

 return (
  <div className="my-component-container ml-[5rem] h-[auto] p-3 w-[985px] flex items-start justify-start bg-white rounded-lg">
   <h1 className="text-xl font-bold"></h1>
   <FileUploader
    value={uploadedFiles}
    onValueChange={setUploadedFiles}
    onUpload={handleUpload}
    progresses={uploadProgresses}
    maxFileCount={5}
    accept={{
     'image/*': [], // Accept only image files
    }}
   />

   {/* Success Dialog */}
   <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
    <DialogContent className="sm:max-w-md">
     <DialogHeader>
      <div className="mx-auto mb-4 h-[530] w-[606] rounded-full p-3">
       <Tickicon className="h-46 w-46 text-white" />
      </div>
      <DialogTitle className="text-center text-xl font-semibold">
       File uploaded successfully!
      </DialogTitle>
     </DialogHeader>
     <DialogFooter className="p-5 sm:justify-center">
      <Button
       type="button"
       onClick={() => setIsDialogOpen(false)} // Close the dialog
       className="h-[45px] w-[231px] bg-primary text-white hover:bg-[#00A86B]/90"
      >
       Okay
      </Button>
     </DialogFooter>
    </DialogContent>
   </Dialog>
  </div>
 );
}
