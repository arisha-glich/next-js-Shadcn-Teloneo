"use client";
import { ReactNode } from 'react';
import Sidebar from '../../components/Reusables/SideBar'; // Adjust the path as necessary

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-grow p-4">
        {children}
      </main>
    </div>
  );
};

export default Layout;
