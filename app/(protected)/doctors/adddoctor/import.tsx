'use client';

import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import Tickicon from '@/public/Doctors/tick.svg'
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import Uploadicon from '@/public/Doctors/Upload icon.svg';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

export default function ImportComponent() {
  const [step, setStep] = useState(1);
  const [file, setFile] = useState<File | null>(null);
  const [showModal, setShowModal] = useState(false);

  const onDrop = (acceptedFiles: File[]) => {
    setFile(acceptedFiles[0]);
    setStep(2);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const handleUpload = () => {
    setStep(3);
    setTimeout(() => {
      setShowModal(true);
    }, 1000);
  };

  return (
    <div className="flex-grow bg-[#F8F8F8] min-h-screen">
      <div className="mx-auto ml-3.5 mt-3 flex h-[99%] w-[99%] flex-col p-5">
        <div className="mx-auto w-[1020px] top-[200px] bg-white rounded-lg shadow-sm p-5">
          <div
            {...getRootProps()}
            data-active={isDragActive ? 'active' : ''}
            className={cn(
              'cursor-pointer rounded-lg border-2 border-dashed p-[7rem] text-center h-[424px]',
              'data-[active=active]:border-orange data-[active=active]:text-muted-foreground',
              !isDragActive && 'border-gray-300'
            )}
          >
            <input {...getInputProps()} />
            <Uploadicon className="mx-auto mb-4 text-primary" size={48} />
            <p className="text-sm text-gray-600">
              Drag & drop files or{' '}
              <span className="font-semibold text-accent-foreground">Browse</span>
            </p>
            <p className="mt-1 text-xs text-gray-400">
              Supported formats: Excel, XLSX, PDF
            </p>
          </div>

          {step >= 2 && file && (
            <div className="mt-4">
              <p className="text-sm text-gray-600">
                {step === 2 ? 'Uploading:' : 'Uploaded:'} {file.name}
              </p>
              {step === 2 && (
                <div className="mt-2 h-2 w-full rounded-full bg-gray-200">
                  <div className="h-2 w-1/2 rounded-full bg-primary"></div>
                </div>
              )}
            </div>
          )}

          <Button 
            className="w-full mt-4 bg-primary text-white hover:bg-[#00A86B]/90" 
            onClick={handleUpload}
            disabled={step < 1}
          >
            {step === 1 ? 'IMPORT FILES' : 'UPLOAD FILE'}
          </Button>
        </div>
      </div>

      <Dialog open={showModal} onOpenChange={setShowModal}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <div className="mx-auto mb-4 rounded-full w-[606] h-[530] p-3">
              <Tickicon className="h-46 w-46 text-white" />
            </div>
            <DialogTitle className="text-center text-xl font-semibold w-[606] h-[530] rounded-lg">
              File added successfully!
            </DialogTitle>
            <DialogDescription className="text-center">
              Your Excel file {file?.name} is added to the directory
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="sm:justify-center p-5">
            <Button 
              type="button" 
              onClick={() => setShowModal(false)}
              className="bg-primary text-white w-[231px] h-[45px] hover:bg-[#00A86B]/90"
            >
              Okay
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
