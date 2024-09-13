import Image from 'next/image';
import SvgPath from '../../public/HalfLogo.svg'; 
import HomeIcon from '../../public/dashboard.svg'; 
import UsersIcon from '../../public/people.svg'; 
import CalendarIcon from '../../public/calendar.svg'; 
import DoctorsIcon from '../../public/doctor.svg';
import PaymentsIcon from '../../public/money.svg'; 
import ContactIcon from '../../public/phone-classic.svg'; 
import Notification from '../../public/ring.svg';
import BrainIcon from '../../public/brain.svg';

export default function Sidebar() {
  return (
    <div className="fixed left-0 top-0 flex h-screen w-[102px] flex-col justify-between border-r shadow-lg bg-white">
      <div className="p-4">
        <SvgPath width={50} height={50} />
      </div>

      <nav className="flex flex-col items-center space-y-6">
        <a href="#" className="group flex flex-col items-center">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg transition-all duration-200 hover:bg-gray-200">
            <HomeIcon className="h-6 w-6 text-green-600 transition-all duration-200 group-hover:text-green-800" />
          </div>
          <span className="text-sm text-gray-600 group-hover:text-green-800">
            Dashboard
          </span>
        </a>

        <a href="#" className="group flex flex-col items-center">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg transition-all duration-200 hover:bg-gray-200">
            <UsersIcon className="h-6 w-6 text-green-600 transition-all duration-200 group-hover:text-green-800" />
          </div>
          <span className="text-sm text-gray-600 group-hover:text-green-800">
            Patients
          </span>
        </a>

        <a href="#" className="group flex flex-col items-center">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg transition-all duration-200 hover:bg-gray-200">
            <CalendarIcon className="h-6 w-6 text-green-600 transition-all duration-200 group-hover:text-green-800" />
          </div>
          <span className="text-sm text-gray-600 group-hover:text-green-800">
            Appointments
          </span>
        </a>

        <a href="#" className="group flex flex-col items-center">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg transition-all duration-200 hover:bg-gray-200">
            <DoctorsIcon className="h-6 w-6 text-green-600 transition-all duration-200 group-hover:text-green-800" />
          </div>
          <span className="text-sm text-gray-600 group-hover:text-green-800">
            Doctors
          </span>
        </a>

        <a href="#" className="group flex flex-col items-center">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg transition-all duration-200 hover:bg-gray-200">
            <PaymentsIcon className="h-6 w-6 text-green-600 transition-all duration-200 group-hover:text-green-800" />
          </div>
          <span className="text-sm text-gray-600 group-hover:text-green-800">
            Payments
          </span>
        </a>

        <a href="#" className="group flex flex-col items-center">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg transition-all duration-200 hover:bg-gray-200">
            <ContactIcon className="h-6 w-6 text-green-600 transition-all duration-200 group-hover:text-green-800" />
          </div>
          <span className="text-sm text-gray-600 group-hover:text-green-800">
            Contact Us
          </span>
        </a>
      </nav>

      <div className="flex flex-col items-center space-y-4 p-4">
        <Notification width={40} height={40} className="rounded-full" />
        <BrainIcon width={40} height={40} className="rounded-full" />
      </div>
    </div>
  );
}
