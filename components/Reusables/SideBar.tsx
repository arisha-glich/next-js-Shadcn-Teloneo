'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import SvgPath from '../../public/HalfLogo.svg';
import HomeIcon from '../../public/dashboard.svg';
import UsersIcon from '../../public/people.svg';
import CalendarIcon from '../../public/calendar.svg';
import DoctorsIcon from '../../public/doctor.svg';
import PaymentsIcon from '../../public/money.svg';
import ContactIcon from '../../public/phone-classic.svg';
import Notification from '../../public/ring.svg';
import GreenNotificationIcon from '../../public/greennotification.svg';
import BrainIcon from '../../public/brain.svg';

type SidebarLink =
 | 'dashboard'
 | 'patients'
 | 'appointments'
 | 'doctors'
 | 'payments'
 | 'contact';

export default function Sidebar() {
 const [activeLink, setActiveLink] = useState<SidebarLink | null>('dashboard');
 const [isNotificationActive, setNotificationActive] = useState<boolean>(false);
 const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
 const router = useRouter();

 useEffect(() => {
  const storedLink = localStorage.getItem('activeLink') as SidebarLink;
  if (storedLink) {
   setActiveLink(storedLink);
  }
 }, []);

 useEffect(() => {
  if (activeLink) {
   localStorage.setItem('activeLink', activeLink);
  }
 }, [activeLink]);

 const handleLinkClick = (link: SidebarLink) => {
  setNotificationActive(false);
  setActiveLink(link);
  setIsMobileMenuOpen(false);
 };

 const goToNotifications = () => {
  setNotificationActive(true);
  setActiveLink(null);
  router.push('/notifications');
  setIsMobileMenuOpen(false);
 };

 const gotoMyaccount = () => {
  setNotificationActive(true);
  setActiveLink(null);
  router.push('/My_account');
  setIsMobileMenuOpen(false);
 };

 const toggleMobileMenu = () => {
  setIsMobileMenuOpen(!isMobileMenuOpen);
 };

 return (
  <>
   {/* Mobile menu button */}
   <button
    className="fixed top-4 left-4 z-50 md:hidden"
    onClick={toggleMobileMenu}
   >
    <svg
     className="w-6 h-6"
     fill="none"
     stroke="currentColor"
     viewBox="0 0 24 24"
     xmlns="http://www.w3.org/2000/svg"
    >
     <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 6h16M4 12h16M4 18h16"
     />
    </svg>
   </button>

   {/* Sidebar */}
   <div
    className={`fixed left-0 top-0 flex  w-[102px] h-[100%] flex-col justify-between  bg-white shadow-lg transition-transform duration-300 ease-in-out ${
     isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
    } md:translate-x-0`}
   >
    <div className="t-[19px] left-[27px] items-center justify-center p-4">
     <SvgPath width={60} height={40} />
    </div>

    <div className="flex-1 flex flex-col justify-between shadow-lg">
     <nav className="flex flex-col items-center space-y-6">
      <Link
       href="/"
       className={`group flex w-[83px] flex-col items-center rounded-md hover:bg-gray-200 ${
        activeLink === 'dashboard' ? 'bg-gray-200' : ''
       }`}
       onClick={() => handleLinkClick('dashboard')}
      >
       <div className="flex h-[40px] w-[55px] items-center justify-center rounded-lg transition-all duration-200">
        <HomeIcon
         className={`h-6 w-6 ${
          activeLink === 'dashboard' ? 'text-green-600' : 'text-gray-500'
         } transition-all duration-200 group-hover:text-green-800`}
        />
       </div>
       <span className="text-sm text-gray-600 group-hover:text-green-800">
        Dashboard
       </span>
      </Link>

      <Link
       href="/patients"
       className={`group flex w-[83px] flex-col items-center rounded-md hover:bg-gray-200 ${
        activeLink === 'patients' ? 'bg-gray-200' : ''
       }`}
       onClick={() => handleLinkClick('patients')}
      >
       <div className="flex h-[42px] w-[42px] items-center justify-center rounded-lg transition-all duration-200">
        <UsersIcon
         className={`h-6 w-6 ${
          activeLink === 'patients' ? 'text-green-600' : 'text-gray-500'
         } transition-all duration-200 group-hover:text-green-800`}
        />
       </div>
       <span className="text-sm text-gray-600 group-hover:text-green-800">
        Patients
       </span>
      </Link>

      <Link
       href="/appointments"
       className={`group flex w-[93px] flex-col items-center rounded-md hover:bg-gray-200 ${
        activeLink === 'appointments' ? 'bg-gray-200' : ''
       }`}
       onClick={() => handleLinkClick('appointments')}
      >
       <div className="flex h-[42px] w-[39px] items-center justify-center rounded-lg transition-all duration-200">
        <CalendarIcon
         className={`h-6 w-6 ${
          activeLink === 'appointments' ? 'text-green-600' : 'text-gray-500'
         } transition-all duration-200 group-hover:text-green-800`}
        />
       </div>
       <span className="text-sm text-gray-600 group-hover:text-green-800">
        Appointments
       </span>
      </Link>

      <Link
       href="/doctors"
       className={`group flex w-[83px] flex-col items-center rounded-md hover:bg-gray-200 ${
        activeLink === 'doctors' ? 'bg-gray-200' : ''
       }`}
       onClick={() => handleLinkClick('doctors')}
      >
       <div className="flex h-[40px] w-[55px] items-center justify-center rounded-lg transition-all duration-200">
        <DoctorsIcon
         className={`h-6 w-6 ${
          activeLink === 'doctors' ? 'text-green-600' : 'text-gray-500'
         } transition-all duration-200 group-hover:text-green-800`}
        />
       </div>
       <span className="text-sm text-gray-600 group-hover:text-green-800">
        Doctors
       </span>
      </Link>

      <Link
       href="/payments"
       className={`group flex w-[83px] flex-col items-center rounded-md hover:bg-gray-200 ${
        activeLink === 'payments' ? 'bg-gray-200' : ''
       }`}
       onClick={() => handleLinkClick('payments')}
      >
       <div className="flex h-[40px] w-[50px] items-center justify-center rounded-lg transition-all duration-200">
        <PaymentsIcon
         className={`h-6 w-6 ${
          activeLink === 'payments' ? 'text-green-600' : 'text-gray-500'
         } transition-all duration-200 group-hover:text-green-800`}
        />
       </div>
       <span className="text-sm text-gray-600 group-hover:text-green-800">
        Payments
       </span>
      </Link>

      <Link
       href="/contact"
       className={`group flex w-[83px] flex-col items-center rounded-md hover:bg-gray-200 ${
        activeLink === 'contact' ? 'bg-gray-200' : ''
       }`}
       onClick={() => handleLinkClick('contact')}
      >
       <div className="flex h-[40px] w-[55px] items-center justify-center rounded-lg transition-all duration-200">
        <ContactIcon
         className={`h-6 w-6 ${
          activeLink === 'contact' ? 'text-green-600' : 'text-gray-500'
         } transition-all duration-200 group-hover:text-green-800`}
        />
       </div>
       <span className="text-sm text-gray-600 group-hover:text-green-800">
        Contact Us
       </span>
      </Link>
     </nav>

     <div className="flex flex-col items-center space-y-4 p-4">
      {isNotificationActive ? (
       <GreenNotificationIcon
        width={40}
        height={40}
        className="h-[39px] w-[39px] rounded-full transition-all duration-200 hover:zoom-in-95"
        onClick={goToNotifications}
       />
      ) : (
       <Notification
        width={40}
        height={40}
        className="h-[39px] w-[39px] rounded-full transition-all duration-200 hover:zoom-in-95"
        onClick={goToNotifications}
       />
      )}

      <BrainIcon
       width={40}
       height={40}
       className="h-[50px] w-[50px] rounded-full hover:bottom-3 hover:border-primary hover:bg-gray-200"
       onClick={gotoMyaccount}
      />
     </div>
    </div>
   </div>
  </>
 );
}