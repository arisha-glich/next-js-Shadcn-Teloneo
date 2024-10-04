'use client';

import React from 'react';
import SvgLogo from '../../public/logo.svg';

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col sm:flex-row  h-[135px] w-full items-center justify-between bg-primary px-4 sm:px-8 py-4 sm:py-0">
      {/* Left Section: Logo */}
      <div className="flex  justify-start flex-1  mt-4 sm:mb-0">
        <SvgLogo width={160} height={40} className="ml-10 mt-4 sm:w-[180px]  sm:h-[78px]" />
      </div>

      {/* Center Section: Copyright */}
      <div className="text-center text-xs justify-center ml-20 font-normal text-secondary flex-1 mb-4 sm:mb-0">
        ©2023 Teleneo, LLC. All rights reserved.
      </div>

      {/* Right Section: Contact Us */}
      <div className="flex justify-end  mr-20  flex-1">
        <a
          href="/contact"
          className="text-[16px] font-semibold  text-secondary hover:underline"
        >
          Contact us
        </a>
      </div>
    </footer>
  );
};

export default Footer;