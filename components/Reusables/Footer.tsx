import React from 'react';
import SvgLogo from '../../public/logo.svg'
//import logo from '../../public/logo.svg'; // Import the logo correctly

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary w-[1349px] h-[135px] flex items-center justify-between px-8 mx-auto">
      {/* Left Section: Logo */}
      <div className="flex items-center">
      <SvgLogo width={174} height={38} />
      </div>

      {/* Center Section: Copyright */}
      <div className="text-secondary text-xs font-normal text-center">
        ©2023 Teleneo, LLC. All rights reserved.
      </div>

      {/* Right Section: Contact Us */}
      <div>
        <a
          href="/contact"
          className="text-secondary text-sm font-medium hover:underline"
        >
          Contact us
        </a>
      </div>
    </footer>
  );
};

export default Footer;
