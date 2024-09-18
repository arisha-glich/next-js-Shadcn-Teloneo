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
import Sidebar from '@/components/Reusables/SideBar';
import Arrow from '../../public/arrow-right-solid 2.svg';
import Icon from '../../public/cards/clipboard-list-check-solid 1.svg';

// Sample data
const contacts = [
    {
        name: 'Jacob Santner',
        email: 'abc.olivia@email.com',
        addedOn: '01/12/2023',
        query: 'I recently used this website to find a Doctor for my child...',
       },{
        name: 'Jacob Santner',
        email: 'abc.olivia@email.com',
        addedOn: '01/12/2023',
        query: 'I recently used this website to find a Doctor for my child...',
       },{
        name: 'Jacob Santner',
        email: 'abc.olivia@email.com',
        addedOn: '01/12/2023',
        query: 'I recently used this website to find a Doctor for my child...',
       },{
        name: 'Jacob Santner',
        email: 'abc.olivia@email.com',
        addedOn: '01/12/2023',
        query: 'I recently used this website to find a Doctor for my child...',
       },{
        name: 'Jacob Santner',
        email: 'abc.olivia@email.com',
        addedOn: '01/12/2023',
        query: 'I recently used this website to find a Doctor for my child...',
       },{
        name: 'Jacob Santner',
        email: 'abc.olivia@email.com',
        addedOn: '01/12/2023',
        query: 'I recently used this website to find a Doctor for my child...',
       },{
        name: 'Jacob Santner',
        email: 'abc.olivia@email.com',
        addedOn: '01/12/2023',
        query: 'I recently used this website to find a Doctor for my child...',
       },{
        name: 'Jacob Santner',
        email: 'abc.olivia@email.com',
        addedOn: '01/12/2023',
        query: 'I recently used this website to find a Doctor for my child...',
       },{
        name: 'Jacob Santner',
        email: 'abc.olivia@email.com',
        addedOn: '01/12/2023',
        query: 'I recently used this website to find a Doctor for my child...',
       },{
        name: 'Jacob Santner',
        email: 'abc.olivia@email.com',
        addedOn: '01/12/2023',
        query: 'I recently used this website to find a Doctor for my child...',
       },{
        name: 'Jacob Santner',
        email: 'abc.olivia@email.com',
        addedOn: '01/12/2023',
        query: 'I recently used this website to find a Doctor for my child...',
       },{
  name: 'Jacob Santner',
  email: 'abc.olivia@email.com',
  addedOn: '01/12/2023',
  query: 'I recently used this website to find a Doctor for my child...',
 },{
  name: 'Jacob Santner',
  email: 'abc.olivia@email.com',
  addedOn: '01/12/2023',
  query: 'I recently used this website to find a Doctor for my child...',
 },{
    name: 'Jacob Santner',
    email: 'abc.olivia@email.com',
    addedOn: '01/12/2023',
    query: 'I recently used this website to find a Doctor for my child...',
   },{
    name: 'Jacob Santner',
    email: 'abc.olivia@email.com',
    addedOn: '01/12/2023',
    query: 'I recently used this website to find a Doctor for my child...',
   },{
    name: 'Jacob Santner',
    email: 'abc.olivia@email.com',
    addedOn: '01/12/2023',
    query: 'I recently used this website to find a Doctor for my child...',
   },{
    name: 'Jacob Santner',
    email: 'abc.olivia@email.com',
    addedOn: '01/12/2023',
    query: 'I recently used this website to find a Doctor for my child...',
   },{
    name: 'Jacob Santner',
    email: 'abc.olivia@email.com',
    addedOn: '01/12/2023',
    query: 'I recently used this website to find a Doctor for my child...',
   },{
    name: 'Jacob Santner',
    email: 'abc.olivia@email.com',
    addedOn: '01/12/2023',
    query: 'I recently used this website to find a Doctor for my child...',
   },{
    name: 'Jacob Santner',
    email: 'abc.olivia@email.com',
    addedOn: '01/12/2023',
    query: 'I recently used this website to find a Doctor for my child...',
   },{
    name: 'Jacob Santner',
    email: 'abc.olivia@email.com',
    addedOn: '01/12/2023',
    query: 'I recently used this website to find a Doctor for my child...',
   },{
    name: 'Jacob Santner',
    email: 'abc.olivia@email.com',
    addedOn: '01/12/2023',
    query: 'I recently used this website to find a Doctor for my child...',
   },{
    name: 'Jacob Santner',
    email: 'abc.olivia@email.com',
    addedOn: '01/12/2023',
    query: 'I recently used this website to find a Doctor for my child...',
   },{
    name: 'Jacob Santner',
    email: 'abc.olivia@email.com',
    addedOn: '01/12/2023',
    query: 'I recently used this website to find a Doctor for my child...',
   },{
    name: 'Jacob Santner',
    email: 'abc.olivia@email.com',
    addedOn: '01/12/2023',
    query: 'I recently used this website to find a Doctor for my child...',
   },{
    name: 'Jacob Santner',
    email: 'abc.olivia@email.com',
    addedOn: '01/12/2023',
    query: 'I recently used this website to find a Doctor for my child...',
   },{
    name: 'Jacob Santner',
    email: 'abc.olivia@email.com',
    addedOn: '01/12/2023',
    query: 'I recently used this website to find a Doctor for my child...',
   },{
    name: 'Jacob Santner',
    email: 'abc.olivia@email.com',
    addedOn: '01/12/2023',
    query: 'I recently used this website to find a Doctor for my child...',
   },{
    name: 'Jacob Santner',
    email: 'abc.olivia@email.com',
    addedOn: '01/12/2023',
    query: 'I recently used this website to find a Doctor for my child...',
   },{
    name: 'Jacob Santner',
    email: 'abc.olivia@email.com',
    addedOn: '01/12/2023',
    query: 'I recently used this website to find a Doctor for my child...',
   },{
    name: 'Jacob Santner',
    email: 'abc.olivia@email.com',
    addedOn: '01/12/2023',
    query: 'I recently used this website to find a Doctor for my child...',
   },{
    name: 'Jacob Santner',
    email: 'abc.olivia@email.com',
    addedOn: '01/12/2023',
    query: 'I recently used this website to find a Doctor for my child...',
   },{
    name: 'Jacob Santner',
    email: 'abc.olivia@email.com',
    addedOn: '01/12/2023',
    query: 'I recently used this website to find a Doctor for my child...',
   },{
    name: 'Jacob Santner',
    email: 'abc.olivia@email.com',
    addedOn: '01/12/2023',
    query: 'I recently used this website to find a Doctor for my child...',
   },{
    name: 'Jacob Santner',
    email: 'abc.olivia@email.com',
    addedOn: '01/12/2023',
    query: 'I recently used this website to find a Doctor for my child...',
   },{
    name: 'Jacob Santner',
    email: 'abc.olivia@email.com',
    addedOn: '01/12/2023',
    query: 'I recently used this website to find a Doctor for my child...',
   },{
    name: 'Jacob Santner',
    email: 'abc.olivia@email.com',
    addedOn: '01/12/2023',
    query: 'I recently used this website to find a Doctor for my child...',
   },
 
];

const ContactTable = () => {
 // Pagination state
 const [currentPage, setCurrentPage] = useState(1);
 const contactsPerPage = 5;

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
   <Sidebar />
   <div className="flex-grow p-12 pr-10">
    <div className="mx-auto flex h-[100] w-[1128px] flex-col gap-4 pl-5">
     <header className="mb-4 flex items-center justify-between">
      <h1 className="text-2xl font-semibold">Contact Us</h1>
      <Button variant="default" className="flex items-center space-x-2">
       <Icon className="h-5 w-5" /> {/* Adjust size as needed */}
       <span>Waitlist</span>
      </Button>
     </header>
    </div>
    <div className="mx-auto border-gray-300 border-t-2 ml-10 flex h-[581px] w-[1260px] font-sans text-[12px] text-secondary-foreground flex-col gap-4 bg-ring pl-5">
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
         <TableRow className='text-[13px] font-sans text-black border-b-0' key={index}>
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
      <div className="flex gap-2">
       {[...Array(totalPages)].map((_, i) => (
        <Button
         key={i}
         variant="outline"
         onClick={() => setCurrentPage(i + 1)}
         className={currentPage === i + 1 ? '' : ''}
        >
         {i + 1}
        </Button>
       ))}{' '}
       <Button
        variant="outline"
        className="h-[40px] w-[40px] bg-primary p-1 hover:bg-primary"
        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
       >
        <Arrow width="10px" height="10px "></Arrow>
       </Button>
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
