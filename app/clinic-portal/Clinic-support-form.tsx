"use client"

import * as React from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress" // Use your customized Progress component
import  UploadIcon from "../../public/vercel.svg" // Custom SVG icons for upload and preview
import  LogoPreviewIcon  from "../../public/vercel.svg" // 
const ClinicForm: React.FC = () => {
  return (
    <div className="w-[606px] h-[530px] bg-white rounded-lg shadow-md p-6">
      {/* Title and Progress Steps */}
      <h1 className="text-xl font-semibold mb-2 text-center">Are you ready to provide support?</h1>
      <p className="text-gray-500 text-center mb-6">
        Join as a clinic who will lorem ipsum dolor sit amet consectetur.
      </p>
      
      {/* Progress Bar */}
      <div className="mb-6">
        <Progress value={25} />
        <div className="flex justify-between text-sm mt-2">
          <span className="text-primary font-bold">1 Clinic ID</span>
          <span>2 Representative</span>
          <span>3 Service type</span>
          <span>4 Uploads</span>
        </div>
      </div>

      {/* Form Section */}
      <div className="space-y-4">
        {/* File Upload with Icon */}
        <div className="flex justify-between items-center border rounded-lg p-4 bg-gray-100">
          <label className="flex items-center gap-2 text-gray-700">
            <UploadIcon className="w-5 h-5 text-gray-500" />
            Attach clinic logo
          </label>
          <Button variant="ghost" className="p-2">
            <UploadIcon className="w-5 h-5 text-primary" />
          </Button>
        </div>

        {/* Logo Preview */}
        <div className="border rounded-lg h-[100px] flex justify-center items-center bg-gray-50">
          <LogoPreviewIcon className="w-12 h-12 text-gray-400" />
          <span className="text-sm text-gray-500">Logo preview</span>
        </div>

        {/* Clinic Name Input */}
        <Input type="text" placeholder="Clinic name" className="w-full" />
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-6">
        <Button variant="outline">Prev</Button>
        <Button variant="default">Next</Button>
      </div>
    </div>
  )
}

export default ClinicForm
