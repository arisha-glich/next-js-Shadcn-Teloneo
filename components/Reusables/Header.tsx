import React from 'react';
import Link from 'next/link';
import SvgLogo from '../../public/GreenLog.svg';

const Header: React.FC = () => {
  return (
    <header className="relative w-[1349px] h-[537px] bg-[#F0F0F0]">
      {/* Logo Section */}
      <div className="absolute w-[174px] h-[38px] top-[42px] left-[42px]">
      <SvgLogo width={174} height={38} />
      </div>

      {/* Header Links */}
      <nav className="absolute flex space-x-8 top-[42px] left-[524px]">
        <Link href="/individual-doctor" className="font-open-sans text-[16px] font-[400] leading-[21.79px] text-left" style={{ width: '128px', height: '22px' }}>
          Individual Doctor
        </Link>
        <Link href="/clinic-portal" className="font-open-sans text-[16px] font-[400] leading-[21.79px] text-left" style={{ width: '128px', height: '22px' }}>
          Clinic Portal
        </Link>
      </nav>

      {/* Login Button */}
      <div className="absolute top-[42px] right-[42px]">
        <Link href="/login" className="bg-green-600 text-white rounded-md px-6 py-2 text-[16px]">
          Login
        </Link>
      </div>
    </header>
  );
};

export default Header;
