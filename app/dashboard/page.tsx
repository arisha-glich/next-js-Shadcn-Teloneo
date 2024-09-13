'use client';

import Sidebar from '@/components/Reusables/SideBar';
import * as React from "react";
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import AppointmentsIcon from '../../public/user.svg'; // SVG for appointments
import UpcomingIcon from '../../public/secondcard.svg'; // SVG for upcoming
import TotalActiveIcon from '../../public/curvedline.svg'; // SVG for total active
import TotalCompletedIcon from '../../public/checkmark-done-circle-outline.svg'; // SVG for total completed
import ClockIcon from '../../public/hours.svg'; // SVG for the waiting clock
import FileReviewIcon from '../../public/page.svg'; // SVG for file review

const DashboardPage: React.FC = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <div className="flex-grow p-12 pr-10">
        <div className="mx-auto w-[1128px] h-[526px] flex flex-col gap-4 pl-5">
          {/* Header Section */}
          <header className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-semibold">Welcome, ABC Clinic</h1>
            <div className="flex gap-2">
              <Button variant="default">Waitlist</Button>
              <Button variant="destructive">Video appointment in progress</Button>
            </div>
          </header>

          {/* Statistic Cards */}
          <div className="grid grid-cols-4 gap-4">
            <Card className="w-[257px] h-[80px] border">
              <CardContent className="flex items-center gap-2">
                <AppointmentsIcon className="w-6 h-6" />
                <div className="flex flex-col justify-center">
                  <CardTitle className="p-3 text-[12px] font-[800] leading-[18.16px] text-secondary-foreground font-open-sans">-</CardTitle>
                  <CardDescription className="text-[12px] font-[400] leading-[18.16px] text-secondary-foreground font-open-sans"> Upcoming</CardDescription>
                </div>
              </CardContent>
            </Card>

            <Card className="w-[257px] h-[80px] border">
              <CardContent className="flex items-center gap-2">
                <UpcomingIcon className="w-6 h-6" />
                <div className="flex flex-col justify-center">
                  <CardTitle className="p-3 text-[12px] font-[800] leading-[18.16px] text-secondary-foreground font-open-sans">-</CardTitle>
                  <CardDescription className="text-[12px] font-[400] leading-[18.16px] text-secondary-foreground font-open-sans">Details</CardDescription>
                </div>
              </CardContent>
            </Card>

            <Card className="w-[257px] h-[80px] border">
              <CardContent className="flex items-center gap-2">
                <TotalActiveIcon className="w-6 h-6" />
                <div className="flex flex-col justify-center">
                  <CardTitle className="p-3 text-[12px] font-[800] leading-[18.16px] text-secondary-foreground font-open-sans">-</CardTitle>
                  <CardDescription className="text-[12px] font-[400] leading-[18.16px] text-secondary-foreground font-open-sans">Count</CardDescription>
                </div>
              </CardContent>
            </Card>

            <Card className="w-[257px] h-[80px] border">
              <CardContent className="flex items-center gap-2">
                <TotalCompletedIcon className="w-6 h-6" />
                <div className="flex flex-col justify-center">
                  <CardTitle className="p-3 text-[12px] font-[800] leading-[18.16px] text-secondary-foreground font-open-sans">-</CardTitle>
                  <CardDescription className="text-[12px] font-[400] leading-[18.16px]text-secondary-foreground font-open-sans">Details</CardDescription>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Status Messages */}
          <div className="bg-green-100 p-6 rounded-lg flex items-center gap-2 ">
            <ClockIcon className="w-12  text-primary" />
            <p className="text-black font-[600]">
              Waiting for your account approval. It usually takes 24-48 hrs for approval. Thank you for your patience.
            </p>
          </div>

          <div className="flex justify-center items-center mt-4">
            <div className="text-center">
              <FileReviewIcon className="mt-[100px] w-120 h-120 mx-auto mb-2 " />
              <p>
                Your account is being <span className="text-accent-foreground">reviewed</span> by our experts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
