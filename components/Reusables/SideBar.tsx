"use client";
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
import GreenNotificationIcon from '../../public/greennotification.svg'; // Assuming you have a green version of the icon
import BrainIcon from '../../public/brain.svg';

type SidebarLink = 'dashboard' | 'patients' | 'appointments' | 'doctors' | 'payments' | 'contact';

export default function Sidebar() {
  const [activeLink, setActiveLink] = useState<SidebarLink | null>('dashboard'); // Allow null to represent no active link
  const [isNotificationActive, setNotificationActive] = useState<boolean>(false);
  const router = useRouter();

  // Load active link from local storage when the component mounts
  useEffect(() => {
    const storedLink = localStorage.getItem('activeLink') as SidebarLink;
    if (storedLink) {
      setActiveLink(storedLink);
    }
  }, []);

  // Save active link to local storage whenever it changes
  useEffect(() => {
    if (activeLink) {
      localStorage.setItem('activeLink', activeLink);
    }
  }, [activeLink]);

  const handleLinkClick = (link: SidebarLink) => {
    // Remove notification active state
    setNotificationActive(false);
    setActiveLink(link);
  };

  const goToNotifications = () => {
    setNotificationActive(true); // Turn the notification icon green
    setActiveLink(null); // Remove active state from any link
    router.push('/notifications'); // Navigate to the notifications page
  };
  const  gotoMyaccount = () => {
    setNotificationActive(true); // Turn the notification icon green
    setActiveLink(null); // Remove active state from any link
    router.push('/My_Account'); // Navigate to the notifications page
  };

 

  return (
    <div className="fixed left-0 top-0 flex h-screen w-[102px] flex-col justify-between border-r bg-white shadow-lg">
      <div className="p-4 t-[19px] left-[27px] items-center justify-center">
        <SvgPath width={60} height={40} />
      </div>

      {/* Add scrolling behavior here */}
      <div className="flex-1 ">
        <nav className="flex flex-col items-center space-y-6">
          <Link
            href="/"
            className={`group flex flex-col items-center w-[83px] rounded-md hover:bg-gray-200 ${activeLink === 'dashboard' ? 'bg-gray-200' : ''}`}
            onClick={() => handleLinkClick('dashboard')}
          >
            <div className="flex h-[40px] w-[55px] items-center justify-center rounded-lg transition-all duration-200">
              <HomeIcon className={`h-6 w-6 ${activeLink === 'dashboard' ? 'text-green-600' : 'text-gray-500'} transition-all duration-200 group-hover:text-green-800`} />
            </div>
            <span className="text-sm text-gray-600 group-hover:text-green-800">
              Dashboard
            </span>
          </Link>

          <Link
            href="/patients"
            className={`group flex flex-col items-center w-[83px] rounded-md hover:bg-gray-200 ${activeLink === 'patients' ? 'bg-gray-200' : ''}`}
            onClick={() => handleLinkClick('patients')}
          >
            <div className="flex h-[42px] w-[42px] items-center justify-center rounded-lg transition-all duration-200">
              <UsersIcon className={`h-6 w-6 ${activeLink === 'patients' ? 'text-green-600' : 'text-gray-500'} transition-all duration-200 group-hover:text-green-800`} />
            </div>
            <span className="text-sm text-gray-600 group-hover:text-green-800">
              Patients
            </span>
          </Link>

          <Link
            href="/appointments"
            className={`group flex flex-col items-center w-[93px] rounded-md hover:bg-gray-200 ${activeLink === 'appointments' ? 'bg-gray-200' : ''}`}
            onClick={() => handleLinkClick('appointments')}
          >
            <div className="flex h-[42px] w-[39px] items-center justify-center rounded-lg transition-all duration-200">
              <CalendarIcon className={`h-6 w-6 ${activeLink === 'appointments' ? 'text-green-600' : 'text-gray-500'} transition-all duration-200 group-hover:text-green-800`} />
            </div>
            <span className="text-sm text-gray-600 group-hover:text-green-800">
              Appointments
            </span>
          </Link>

          <Link
            href="/doctors"
            className={`group flex flex-col items-center w-[83px] rounded-md hover:bg-gray-200 ${activeLink === 'doctors' ? 'bg-gray-200' : ''}`}
            onClick={() => handleLinkClick('doctors')}
          >
            <div className="flex h-[40px] w-[55px] items-center justify-center rounded-lg transition-all duration-200">
              <DoctorsIcon className={`h-6 w-6 ${activeLink === 'doctors' ? 'text-green-600' : 'text-gray-500'} transition-all duration-200 group-hover:text-green-800`} />
            </div>
            <span className="text-sm text-gray-600 group-hover:text-green-800">
              Doctors
            </span>
          </Link>

          <Link
            href="/payments"
            className={`group flex flex-col items-center w-[83px] rounded-md hover:bg-gray-200 ${activeLink === 'payments' ? 'bg-gray-200' : ''}`}
            onClick={() => handleLinkClick('payments')}
          >
            <div className="flex h-[40px] w-[50px] items-center justify-center rounded-lg transition-all duration-200">
              <PaymentsIcon className={`h-6 w-6 ${activeLink === 'payments' ? 'text-green-600' : 'text-gray-500'} transition-all duration-200 group-hover:text-green-800`} />
            </div>
            <span className="text-sm text-gray-600 group-hover:text-green-800">
              Payments
            </span>
          </Link>

          <Link
            href="/contact"
            className={`group flex flex-col items-center w-[83px] rounded-md hover:bg-gray-200 ${activeLink === 'contact' ? 'bg-gray-200' : ''}`}
            onClick={() => handleLinkClick('contact')}
          >
            <div className="flex h-[40px] w-[55px] items-center justify-center rounded-lg transition-all duration-200">
              <ContactIcon className={`h-6 w-6 ${activeLink === 'contact' ? 'text-green-600' : 'text-gray-500'} transition-all duration-200 group-hover:text-green-800`} />
            </div>
            <span className="text-sm text-gray-600 group-hover:text-green-800">
              Contact Us
            </span>
          </Link>
        </nav>
      </div>

      <div className="flex flex-col items-center space-y-4 p-4">
        {isNotificationActive ? (
          <GreenNotificationIcon
            width={40}
            height={40}
            className="rounded-full hover:zoom-in-95 h-[39px] w-[39px] transition-all duration-200"
            onClick={goToNotifications}
          />
        ) : (
          <Notification
            width={40}
            height={40}
            className="rounded-full hover:zoom-in-95 h-[39px] w-[39px] transition-all duration-200"
            onClick={goToNotifications}
          />
        )}

        <BrainIcon
          width={40}
          height={40}
          className="rounded-full hover:bg-gray-200 h-[50px] w-[50px] hover:bottom-3 hover:border-primary" onClick={gotoMyaccount}
          
        />
      </div>
    </div>
  );
}
