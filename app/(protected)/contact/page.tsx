'use client';
import { useState } from 'react';
import {
 Table,
 TableHeader,
 TableRow,
 TableHead,
 TableBody,
 TableCell,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import Arrow from '@/public/arrow-right-solid 2.svg';
import Icon from '@/public/cards/clipboard-list-check-solid 1.svg';
import Icon2 from '@/public/cards/arrow-right-solid 1.svg';

// Sample data
const contacts = [
 {
  name: 'Jacob Santner',
  email: 'abc.olivia@email.com',
  addedOn: '01/12/2023',
  query: 'I recently used this website to find a Doctor for my child...',
 },
 {
  name: 'Jacob Santner',
  email: 'abc.olivia@email.com',
  addedOn: '01/12/2023',
  query: 'I recently used this website to find a Doctor for my child...',
 },
 {
  name: 'Jacob Santner',
  email: 'abc.olivia@email.com',
  addedOn: '01/12/2023',
  query: 'I recently used this website to find a Doctor for my child...',
 },
 {
  name: 'Jacob Santner',
  email: 'abc.olivia@email.com',
  addedOn: '01/12/2023',
  query: 'I recently used this website to find a Doctor for my child...',
 },
 {
  name: 'Jacob Santner',
  email: 'abc.olivia@email.com',
  addedOn: '01/12/2023',
  query: 'I recently used this website to find a Doctor for my child...',
 },
 {
  name: 'Jacob Santner',
  email: 'abc.olivia@email.com',
  addedOn: '01/12/2023',
  query: 'I recently used this website to find a Doctor for my child...',
 },
 {
  name: 'Jacob Santner',
  email: 'abc.olivia@email.com',
  addedOn: '01/12/2023',
  query: 'I recently used this website to find a Doctor for my child...',
 },
 {
  name: 'Jacob Santner',
  email: 'abc.olivia@email.com',
  addedOn: '01/12/2023',
  query: 'I recently used this website to find a Doctor for my child...',
 },
 {
  name: 'Jacob Santner',
  email: 'abc.olivia@email.com',
  addedOn: '01/12/2023',
  query: 'I recently used this website to find a Doctor for my child...',
 },
 {
  name: 'Jacob Santner',
  email: 'abc.olivia@email.com',
  addedOn: '01/12/2023',
  query: 'I recently used this website to find a Doctor for my child...',
 },
 {
  name: 'Jacob Santner',
  email: 'abc.olivia@email.com',
  addedOn: '01/12/2023',
  query: 'I recently used this website to find a Doctor for my child...',
 },
 {
  name: 'Jacob Santner',
  email: 'abc.olivia@email.com',
  addedOn: '01/12/2023',
  query: 'I recently used this website to find a Doctor for my child...',
 },
 {
  name: 'Jacob Santner',
  email: 'abc.olivia@email.com',
  addedOn: '01/12/2023',
  query: 'I recently used this website to find a Doctor for my child...',
 },
 {
  name: 'Jacob Santner',
  email: 'abc.olivia@email.com',
  addedOn: '01/12/2023',
  query: 'I recently used this website to find a Doctor for my child...',
 },
 {
  name: 'Jacob Santner',
  email: 'abc.olivia@email.com',
  addedOn: '01/12/2023',
  query: 'I recently used this website to find a Doctor for my child...',
 },
 {
  name: 'Jacob Santner',
  email: 'abc.olivia@email.com',
  addedOn: '01/12/2023',
  query: 'I recently used this website to find a Doctor for my child...',
 },
 {
  name: 'Jacob Santner',
  email: 'abc.olivia@email.com',
  addedOn: '01/12/2023',
  query: 'I recently used this website to find a Doctor for my child...',
 },
 {
  name: 'Jacob Santner',
  email: 'abc.olivia@email.com',
  addedOn: '01/12/2023',
  query: 'I recently used this website to find a Doctor for my child...',
 },
 {
  name: 'Jacob Santner',
  email: 'abc.olivia@email.com',
  addedOn: '01/12/2023',
  query: 'I recently used this website to find a Doctor for my child...',
 },
 {
  name: 'Jacob Santner',
  email: 'abc.olivia@email.com',
  addedOn: '01/12/2023',
  query: 'I recently used this website to find a Doctor for my child...',
 },
 {
  name: 'Jacob Santner',
  email: 'abc.olivia@email.com',
  addedOn: '01/12/2023',
  query: 'I recently used this website to find a Doctor for my child...',
 },
 {
  name: 'Jacob Santner',
  email: 'abc.olivia@email.com',
  addedOn: '01/12/2023',
  query: 'I recently used this website to find a Doctor for my child...',
 },
 {
  name: 'Jacob Santner',
  email: 'abc.olivia@email.com',
  addedOn: '01/12/2023',
  query: 'I recently used this website to find a Doctor for my child...',
 },
 {
  name: 'Jacob Santner',
  email: 'abc.olivia@email.com',
  addedOn: '01/12/2023',
  query: 'I recently used this website to find a Doctor for my child...',
 },
 {
  name: 'Jacob Santner',
  email: 'abc.olivia@email.com',
  addedOn: '01/12/2023',
  query: 'I recently used this website to find a Doctor for my child...',
 },
 {
  name: 'Jacob Santner',
  email: 'abc.olivia@email.com',
  addedOn: '01/12/2023',
  query: 'I recently used this website to find a Doctor for my child...',
 },
 {
  name: 'Jacob Santner',
  email: 'abc.olivia@email.com',
  addedOn: '01/12/2023',
  query: 'I recently used this website to find a Doctor for my child...',
 },
 {
  name: 'Jacob Santner',
  email: 'abc.olivia@email.com',
  addedOn: '01/12/2023',
  query: 'I recently used this website to find a Doctor for my child...',
 },
 {
  name: 'Jacob Santner',
  email: 'abc.olivia@email.com',
  addedOn: '01/12/2023',
  query: 'I recently used this website to find a Doctor for my child...',
 },
 {
  name: 'Jacob Santner',
  email: 'abc.olivia@email.com',
  addedOn: '01/12/2023',
  query: 'I recently used this website to find a Doctor for my child...',
 },
 {
  name: 'Jacob Santner',
  email: 'abc.olivia@email.com',
  addedOn: '01/12/2023',
  query: 'I recently used this website to find a Doctor for my child...',
 },
 {
  name: 'Jacob Santner',
  email: 'abc.olivia@email.com',
  addedOn: '01/12/2023',
  query: 'I recently used this website to find a Doctor for my child...',
 },
 {
  name: 'Jacob Santner',
  email: 'abc.olivia@email.com',
  addedOn: '01/12/2023',
  query: 'I recently used this website to find a Doctor for my child...',
 },
 {
  name: 'Jacob Santner',
  email: 'abc.olivia@email.com',
  addedOn: '01/12/2023',
  query: 'I recently used this website to find a Doctor for my child...',
 },
 {
  name: 'Jacob Santner',
  email: 'abc.olivia@email.com',
  addedOn: '01/12/2023',
  query: 'I recently used this website to find a Doctor for my child...',
 },
 {
  name: 'Jacob Santner',
  email: 'abc.olivia@email.com',
  addedOn: '01/12/2023',
  query: 'I recently used this website to find a Doctor for my child...',
 },
 {
  name: 'Jacob Santner',
  email: 'abc.olivia@email.com',
  addedOn: '01/12/2023',
  query: 'I recently used this website to find a Doctor for my child...',
 },
];

const ContactTable = () => {
 // Pagination state
 const [currentPage, setCurrentPage] = useState(1);
 const contactsPerPage = 7;

 // Calculate current contacts based on pagination
 const indexOfLastContact = currentPage * contactsPerPage;
 const indexOfFirstContact = indexOfLastContact - contactsPerPage;
 const currentContacts = contacts.slice(
  indexOfFirstContact,
  indexOfLastContact
 );

 const totalPages = Math.ceil(contacts.length / contactsPerPage);

 return (
  <div className="flex">
   <div className="flex-grow p-12 pr-10">
    <div
     className="mx-auto flex h-[100] flex-col gap-4 pl-5 w-[calc(100%-120px)]"
    >
     <header className="mb-4 flex items-center justify-between">
      <h1 className="text-2xl font-semibold">Contact Us</h1>
      <Button variant="default" className="flex items-center space-x-2">
       <Icon className="h-5 w-5" /> {/* Adjust size as needed */}
       <span>Waitlist</span>
      </Button>
     </header>
    </div>
    <div
     className="mx-auto ml-10 flex  flex-col gap-4 border-t-2 border-gray-300 bg-ring pl-5 font-sans text-[12px] text-secondary-foreground w-[calc(100%)] h-[calc(100%)]"
  
    >
     <div className="overflow-x-hidden">
      <Table className="w-full border-collapse">
       <TableHeader>
        <TableRow className="border-b-0">
         <TableHead className="border-b-0">Name</TableHead>
         <TableHead className="border-b-0">Email address</TableHead>
         <TableHead className="border-b-0">Added on</TableHead>
         <TableHead className="border-b-0">Queries</TableHead>
         <TableHead className="border-b-0">Action</TableHead>
        </TableRow>
       </TableHeader>
       <TableBody>
        {currentContacts.map((contact, index) => (
         <TableRow
          className="border-b-0 font-sans text-[13px] text-black"
          key={index}
         >
          <TableCell className="border-b-0">{contact.name}</TableCell>
          <TableCell className="border-b-0">{contact.email}</TableCell>
          <TableCell className="border-b-0">{contact.addedOn}</TableCell>
          <TableCell className="border-b-0">{contact.query}</TableCell>
          <TableCell className="border-b-0">
           <Button variant="link" className="text-primary">
            View
           </Button>
          </TableCell>
         </TableRow>
        ))}
       </TableBody>
      </Table>
     </div>
     {/* Pagination */}
     <div className="mt-4 flex items-center justify-between">
      <div className="flex items-center gap-2">
       {/* Previous Page Button */}
       <Button
        variant="outline"
        className="flex h-[40px] w-[40px] items-center justify-center bg-white p-1 hover:bg-gray-100"
        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
       >
        <Icon2 width="24px" height="24px" />{' '}
        {/* Adjusted icon size for centering */}
       </Button>

       {/* Page Number Buttons */}
       {[...Array(totalPages)].map((_, i) => (
        <Button
         key={i}
         variant="outline"
         onClick={() => setCurrentPage(i + 1)}
         className={`flex h-[40px] w-[40px] items-center justify-center p-1 ${
          currentPage === i + 1 ? 'text-accent-foreground' : 'text-black'
         } hover:bg-gray-100`}
        >
         {i + 1}
        </Button>
       ))}

       {/* Next Page Button */}
       <Button
        variant="outline"
        className="flex h-[40px] w-[40px] items-center justify-center bg-primary p-1 hover:bg-gray-100"
        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
       >
        <Arrow width="24px" height="24px" />{' '}

       </Button>

       {/* Page Info */}
       <div className="flex items-center gap-2">
        <span className="text-sm text-gray-500">
         {indexOfFirstContact + 1} -{' '}
         {Math.min(indexOfLastContact, contacts.length)} of {contacts.length}
        </span>
       </div>
      </div>
     </div>
    </div>
   </div>
  </div>
 );
};

export default ContactTable;
