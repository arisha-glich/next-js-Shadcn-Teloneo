'use client';

import React from 'react';
import SvgLogo from '../../public/logo.svg';

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col sm:flex-row h-auto sm:h-[135px] w-full items-center justify-between bg-primary px-4 sm:px-8 py-4 sm:py-0">
      {/* Left Section: Logo */}
      <div className="flex justify-center sm:justify-start flex-1 mb-4 sm:mb-0">
        <SvgLogo width={150} height={40} className="sm:w-[180px] sm:h-[78px]" />
      </div>

      {/* Center Section: Copyright */}
      <div className="text-center text-xs font-normal text-secondary flex-1 mb-4 sm:mb-0">
        ©2023 Teleneo, LLC. All rights reserved.
      </div>

      {/* Right Section: Contact Us */}
      <div className="flex justify-center sm:justify-end flex-1">
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