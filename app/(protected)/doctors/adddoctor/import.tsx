'use client';

import React, { useReducer } from 'react';
import { useDropzone } from 'react-dropzone';
import Tickicon from '@/public/Doctors/tick.svg';
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

// Define the state actions
type Action =
 | { type: 'SET_STEP'; payload: number }
 | { type: 'SET_FILE'; payload: File | null }
 | { type: 'TOGGLE_MODAL'; payload: boolean };

// Define the state
type State = {
 step: number;
 file: File | null;
 modalOpen: boolean;
};

// Initialize the state
const initialState: State = {
 step: 1,
 file: null,
 modalOpen: false,
};

// Reducer function to handle state transitions
function reducer(state: State, action: Action): State {
 switch (action.type) {
  case 'SET_STEP':
   return { ...state, step: action.payload };
  case 'SET_FILE':
   return { ...state, file: action.payload };
  case 'TOGGLE_MODAL':
   return { ...state, modalOpen: action.payload };
  default:
   return state;
 }
}

export default function ImportComponent() {
 const [state, dispatch] = useReducer(reducer, initialState);

 const onDrop = (acceptedFiles: File[]) => {
  dispatch({ type: 'SET_FILE', payload: acceptedFiles[0] });
  dispatch({ type: 'SET_STEP', payload: 2 });
 };

 const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

 const handleUpload = () => {
  dispatch({ type: 'SET_STEP', payload: 3 });
  dispatch({ type: 'TOGGLE_MODAL', payload: true });
 };

 return (
  <div className="min-h-screen flex-grow bg-[#F8F8F8]">
   <div className="mx-auto ml-3.5 mt-3 flex h-[99%] w-[99%] flex-col p-5">
    <div className="top-[200px] mx-auto w-[1020px] rounded-lg bg-white p-5 shadow-sm">
     <div
      {...getRootProps()}
      data-active={isDragActive ? 'active' : ''}
      className={cn(
       'h-[424px] cursor-pointer rounded-lg border-2 border-dashed p-[7rem] text-center',
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

     {state.step >= 2 && state.file && (
      <div className="mt-4">
       <p className="text-sm text-gray-600">
        {state.step === 2 ? 'Uploading:' : 'Uploaded:'} {state.file.name}
       </p>
       {state.step === 2 && (
        <div className="mt-2 h-2 w-full rounded-full bg-gray-200">
         <div className="h-2 w-1/2 rounded-full bg-primary"></div>
        </div>
       )}
      </div>
     )}

     <Button
      className="mt-4 w-full bg-primary text-white hover:bg-[#00A86B]/90"
      onClick={handleUpload}
      disabled={state.step < 1}
     >
      {state.step === 1 ? 'IMPORT FILES' : 'UPLOAD FILE'}
     </Button>
    </div>
   </div>

   <Dialog
    open={state.modalOpen}
    onOpenChange={open => dispatch({ type: 'TOGGLE_MODAL', payload: open })}
   >
    <DialogContent className="sm:max-w-md">
     <DialogHeader>
      <div className="mx-auto mb-4 h-[530] w-[606] rounded-full p-3">
       <Tickicon className="h-46 w-46 text-white" />
      </div>
      <DialogTitle className="h-[530] w-[606] rounded-lg text-center text-xl font-semibold">
       File added successfully!
      </DialogTitle>
      <DialogDescription className="text-center">
       Your Excel file {state.file?.name} is added to the directory
      </DialogDescription>
     </DialogHeader>
     <DialogFooter className="p-5 sm:justify-center">
      <Button
       type="button"
       onClick={() => dispatch({ type: 'TOGGLE_MODAL', payload: false })}
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
