'use client';
import React from 'react';
import SvgLogo from '../../public/logo.svg';

const Footer: React.FC = () => {
  return (
    <footer className="flex h-[135px] w-full items-center justify-between bg-primary px-8">
      {/* Left Section: Logo */}
      <div className="flex justify-start flex-1">
        <SvgLogo width={174} height={38} />
      </div>

      {/* Center Section: Copyright */}
      <div className="text-center text-xs font-normal text-secondary flex-1">
        ©2023 Teleneo, LLC. All rights reserved.
      </div>

      {/* Right Section: Contact Us */}
      <div className="flex justify-end flex-1">
        <a
          href="/contact"
          className="text-sm font-medium text-secondary hover:underline"
        >
          Contact us
        </a>
      </div>
    </footer>
  );
};

export default Footer;
