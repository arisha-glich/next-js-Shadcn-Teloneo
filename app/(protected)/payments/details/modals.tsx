'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
 Dialog,
 DialogContent,
 DialogHeader,
 DialogTitle,
} from '@/components/ui/dialog';

export default function PaymentModals() {
 const [showFirstModal, setShowFirstModal] = useState(false);
 const [showSuccessModal, setShowSuccessModal] = useState(false);

 // Function to handle payment
 const handlePayDoctor = () => {
  setShowFirstModal(false); // Close the first modal
  setShowSuccessModal(true); // Open the success modal
 };

 return (
  <div className="container mx-auto p-6">
   <Button onClick={() => setShowFirstModal(true)}>Open Payment Modal</Button>

   {/* First Modal: Payment Information */}
   <Dialog open={showFirstModal} onOpenChange={setShowFirstModal}>
    <DialogContent className="max-w-md text-center">
     {/* Icon */}
     <div className="mb-4 flex justify-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-yellow-300">
       <span className="text-5xl text-green-600">$</span>
      </div>
     </div>
     <DialogHeader>
      <DialogTitle>
       Pay <span className="text-green-600">$100</span> to Dr. Olivia Tree
      </DialogTitle>
     </DialogHeader>
     <p className="mb-4 text-gray-500">
      Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
     </p>

     {/* Buttons */}
     <div className="flex justify-between space-x-4">
      <Button
       variant="outline"
       onClick={() => setShowFirstModal(false)}
       className="w-1/2 border-green-600 text-green-600"
      >
       Cancel
      </Button>
      <Button
       className="w-1/2 bg-green-500 text-white"
       onClick={handlePayDoctor}
      >
       Pay Doctor
      </Button>
     </div>
    </DialogContent>
   </Dialog>

   {/* Second Modal: Payment Successful */}
   <Dialog open={showSuccessModal} onOpenChange={setShowSuccessModal}>
    <DialogContent className="max-w-md text-center">
     <DialogHeader>
      <DialogTitle>Payment Successful</DialogTitle>
     </DialogHeader>
     <p className="mb-4 text-gray-500">
      The doctor has been paid successfully.
     </p>
    </DialogContent>
   </Dialog>
  </div>
 );
}
