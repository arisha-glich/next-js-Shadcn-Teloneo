import { ColumnDef } from '@tanstack/react-table';
import { DataTable } from '@/components/table/react-table';
import { Switch } from '@/components/ui/switch';
import ArrowIcon from '@/public/Doctors/Group 2249.svg';
import Star from '@/public/Doctors/Star 3.svg';
import { useState, useEffect } from 'react';

const doctorsData = [
  {
    id: 1,
    name: 'Dr. Smith',
    email: 'smith@example.com',
    scheduledFor: '2023-09-23 10:00 GMT',
    education: 'MD',
    addedOn: '2023-01-01',
    patientsAttended: 50,
    ratings: 4,
    status: 'Approved',
    isActive: true,
  },
  {
    id: 2,
    name: 'Dr. Olivia Green',
    email: 'olivia.green@email.com',
    scheduledFor: '14/02/2023 6:00 PM EST',
    education: 'MBBS, 5TJ',
    addedOn: '01/12/2023',
    patientsAttended: 18,
    ratings: 5,
    status: 'Approved',
    isActive: false,
  },
  {
    id: 1,
    name: 'Dr. Smith',
    email: 'smith@example.com',
    scheduledFor: '2023-09-23 10:00 GMT',
    education: 'MD',
    addedOn: '2023-01-01',
    patientsAttended: 50,
    ratings: 4,
    status: 'Approved',
    isActive: true,
  },
  {
    id: 2,
    name: 'Dr. Olivia Green',
    email: 'olivia.green@email.com',
    scheduledFor: '14/02/2023 6:00 PM EST',
    education: 'MBBS, 5TJ',
    addedOn: '01/12/2023',
    patientsAttended: 18,
    ratings: 5,
    status: 'Approved',
    isActive: false,
  },{
    id: 1,
    name: 'Dr. Smith',
    email: 'smith@example.com',
    scheduledFor: '2023-09-23 10:00 GMT',
    education: 'MD',
    addedOn: '2023-01-01',
    patientsAttended: 50,
    ratings: 4,
    status: 'Approved',
    isActive: true,
  },
  {
    id: 2,
    name: 'Dr. Olivia Green',
    email: 'olivia.green@email.com',
    scheduledFor: '14/02/2023 6:00 PM EST',
    education: 'MBBS, 5TJ',
    addedOn: '01/12/2023',
    patientsAttended: 18,
    ratings: 5,
    status: 'Approved',
    isActive: false,
  },{
    id: 1,
    name: 'Dr. Smith',
    email: 'smith@example.com',
    scheduledFor: '2023-09-23 10:00 GMT',
    education: 'MD',
    addedOn: '2023-01-01',
    patientsAttended: 50,
    ratings: 4,
    status: 'Approved',
    isActive: true,
  },
  {
    id: 2,
    name: 'Dr. Olivia Green',
    email: 'olivia.green@email.com',
    scheduledFor: '14/02/2023 6:00 PM EST',
    education: 'MBBS, 5TJ',
    addedOn: '01/12/2023',
    patientsAttended: 18,
    ratings: 5,
    status: 'Approved',
    isActive: false,
  },{
    id: 1,
    name: 'Dr. Smith',
    email: 'smith@example.com',
    scheduledFor: '2023-09-23 10:00 GMT',
    education: 'MD',
    addedOn: '2023-01-01',
    patientsAttended: 50,
    ratings: 4,
    status: 'Approved',
    isActive: true,
  },
  {
    id: 2,
    name: 'Dr. Olivia Green',
    email: 'olivia.green@email.com',
    scheduledFor: '14/02/2023 6:00 PM EST',
    education: 'MBBS, 5TJ',
    addedOn: '01/12/2023',
    patientsAttended: 18,
    ratings: 5,
    status: 'Approved',
    isActive: false,
  },{
    id: 1,
    name: 'Dr. Smith',
    email: 'smith@example.com',
    scheduledFor: '2023-09-23 10:00 GMT',
    education: 'MD',
    addedOn: '2023-01-01',
    patientsAttended: 50,
    ratings: 4,
    status: 'Approved',
    isActive: true,
  },
  {
    id: 2,
    name: 'Dr. Olivia Green',
    email: 'olivia.green@email.com',
    scheduledFor: '14/02/2023 6:00 PM EST',
    education: 'MBBS, 5TJ',
    addedOn: '01/12/2023',
    patientsAttended: 18,
    ratings: 5,
    status: 'Approved',
    isActive: false,
  },{
    id: 1,
    name: 'Dr. Smith',
    email: 'smith@example.com',
    scheduledFor: '2023-09-23 10:00 GMT',
    education: 'MD',
    addedOn: '2023-01-01',
    patientsAttended: 50,
    ratings: 4,
    status: 'Approved',
    isActive: true,
  },
  {
    id: 2,
    name: 'Dr. Olivia Green',
    email: 'olivia.green@email.com',
    scheduledFor: '14/02/2023 6:00 PM EST',
    education: 'MBBS, 5TJ',
    addedOn: '01/12/2023',
    patientsAttended: 18,
    ratings: 5,
    status: 'Approved',
    isActive: false,
  },{
    id: 1,
    name: 'Dr. Smith',
    email: 'smith@example.com',
    scheduledFor: '2023-09-23 10:00 GMT',
    education: 'MD',
    addedOn: '2023-01-01',
    patientsAttended: 50,
    ratings: 4,
    status: 'Approved',
    isActive: true,
  },
  {
    id: 2,
    name: 'Dr. Olivia Green',
    email: 'olivia.green@email.com',
    scheduledFor: '14/02/2023 6:00 PM EST',
    education: 'MBBS, 5TJ',
    addedOn: '01/12/2023',
    patientsAttended: 18,
    ratings: 5,
    status: 'Approved',
    isActive: false,
  },{
    id: 1,
    name: 'Dr. Smith',
    email: 'smith@example.com',
    scheduledFor: '2023-09-23 10:00 GMT',
    education: 'MD',
    addedOn: '2023-01-01',
    patientsAttended: 50,
    ratings: 4,
    status: 'Approved',
    isActive: true,
  },
  {
    id: 2,
    name: 'Dr. Olivia Green',
    email: 'olivia.green@email.com',
    scheduledFor: '14/02/2023 6:00 PM EST',
    education: 'MBBS, 5TJ',
    addedOn: '01/12/2023',
    patientsAttended: 18,
    ratings: 5,
    status: 'Approved',
    isActive: false,
  },{
    id: 1,
    name: 'Dr. Smith',
    email: 'smith@example.com',
    scheduledFor: '2023-09-23 10:00 GMT',
    education: 'MD',
    addedOn: '2023-01-01',
    patientsAttended: 50,
    ratings: 4,
    status: 'Approved',
    isActive: true,
  },
  {
    id: 2,
    name: 'Dr. Olivia Green',
    email: 'olivia.green@email.com',
    scheduledFor: '14/02/2023 6:00 PM EST',
    education: 'MBBS, 5TJ',
    addedOn: '01/12/2023',
    patientsAttended: 18,
    ratings: 5,
    status: 'Approved',
    isActive: false,
  },{
    id: 1,
    name: 'Dr. Smith',
    email: 'smith@example.com',
    scheduledFor: '2023-09-23 10:00 GMT',
    education: 'MD',
    addedOn: '2023-01-01',
    patientsAttended: 50,
    ratings: 4,
    status: 'Approved',
    isActive: true,
  },
  {
    id: 2,
    name: 'Dr. Olivia Green',
    email: 'olivia.green@email.com',
    scheduledFor: '14/02/2023 6:00 PM EST',
    education: 'MBBS, 5TJ',
    addedOn: '01/12/2023',
    patientsAttended: 18,
    ratings: 5,
    status: 'Approved',
    isActive: false,
  },{
    id: 1,
    name: 'Dr. Smith',
    email: 'smith@example.com',
    scheduledFor: '2023-09-23 10:00 GMT',
    education: 'MD',
    addedOn: '2023-01-01',
    patientsAttended: 50,
    ratings: 4,
    status: 'Approved',
    isActive: true,
  },
  {
    id: 2,
    name: 'Dr. Olivia Green',
    email: 'olivia.green@email.com',
    scheduledFor: '14/02/2023 6:00 PM EST',
    education: 'MBBS, 5TJ',
    addedOn: '01/12/2023',
    patientsAttended: 18,
    ratings: 5,
    status: 'Approved',
    isActive: false,
  },{
    id: 1,
    name: 'Dr. Smith',
    email: 'smith@example.com',
    scheduledFor: '2023-09-23 10:00 GMT',
    education: 'MD',
    addedOn: '2023-01-01',
    patientsAttended: 50,
    ratings: 4,
    status: 'Approved',
    isActive: true,
  },
  {
    id: 2,
    name: 'Dr. Olivia Green',
    email: 'olivia.green@email.com',
    scheduledFor: '14/02/2023 6:00 PM EST',
    education: 'MBBS, 5TJ',
    addedOn: '01/12/2023',
    patientsAttended: 18,
    ratings: 5,
    status: 'Approved',
    isActive: false,
  },{
    id: 1,
    name: 'Dr. Smith',
    email: 'smith@example.com',
    scheduledFor: '2023-09-23 10:00 GMT',
    education: 'MD',
    addedOn: '2023-01-01',
    patientsAttended: 50,
    ratings: 4,
    status: 'Approved',
    isActive: true,
  },
  {
    id: 2,
    name: 'Dr. Olivia Green',
    email: 'olivia.green@email.com',
    scheduledFor: '14/02/2023 6:00 PM EST',
    education: 'MBBS, 5TJ',
    addedOn: '01/12/2023',
    patientsAttended: 18,
    ratings: 5,
    status: 'Approved',
    isActive: false,
  },{
    id: 1,
    name: 'Dr. Smith',
    email: 'smith@example.com',
    scheduledFor: '2023-09-23 10:00 GMT',
    education: 'MD',
    addedOn: '2023-01-01',
    patientsAttended: 50,
    ratings: 4,
    status: 'Approved',
    isActive: true,
  },
  {
    id: 2,
    name: 'Dr. Olivia Green',
    email: 'olivia.green@email.com',
    scheduledFor: '14/02/2023 6:00 PM EST',
    education: 'MBBS, 5TJ',
    addedOn: '01/12/2023',
    patientsAttended: 18,
    ratings: 5,
    status: 'Approved',
    isActive: false,
  },{
    id: 1,
    name: 'Dr. Smith',
    email: 'smith@example.com',
    scheduledFor: '2023-09-23 10:00 GMT',
    education: 'MD',
    addedOn: '2023-01-01',
    patientsAttended: 50,
    ratings: 4,
    status: 'Approved',
    isActive: true,
  },
  {
    id: 2,
    name: 'Dr. Olivia Green',
    email: 'olivia.green@email.com',
    scheduledFor: '14/02/2023 6:00 PM EST',
    education: 'MBBS, 5TJ',
    addedOn: '01/12/2023',
    patientsAttended: 18,
    ratings: 5,
    status: 'Approved',
    isActive: false,
  },{
    id: 1,
    name: 'Dr. Smith',
    email: 'smith@example.com',
    scheduledFor: '2023-09-23 10:00 GMT',
    education: 'MD',
    addedOn: '2023-01-01',
    patientsAttended: 50,
    ratings: 4,
    status: 'Approved',
    isActive: true,
  },
  {
    id: 2,
    name: 'Dr. Olivia Green',
    email: 'olivia.green@email.com',
    scheduledFor: '14/02/2023 6:00 PM EST',
    education: 'MBBS, 5TJ',
    addedOn: '01/12/2023',
    patientsAttended: 18,
    ratings: 5,
    status: 'Approved',
    isActive: false,
  },
];

// Define columns for doctors table
const columns: ColumnDef<typeof doctorsData[0]>[] = [
  {
    accessorKey: 'name',
    header: 'Name',
  },
  {
    accessorKey: 'email',
    header: 'Email',
  },
  {
    accessorKey: 'scheduledFor',
    header: 'Scheduled For',
    cell: ({ getValue }) => {
      const value = getValue() as string;
      const [date, timeWithZone] = value.split(' ');
      const [time, zone] = timeWithZone.split(' ');

      return (
        <div>
          <span className="font-bold text-accent-foreground">{date}</span> <br />
          <span className="text-black">{time}</span> <br />
          <span className="text-gray-500">{zone}</span> <br />
        </div>
      );
    },
  },
  {
    accessorKey: 'education',
    header: 'Education',
  },
  {
    accessorKey: 'addedOn',
    header: 'Added On',
  },
  {
    accessorKey: 'patientsAttended',
    header: 'Patients Attended',
  },
  {
    accessorKey: 'ratings',
    header: 'Ratings',
    cell: ({ getValue }) => {
      const value = getValue() as number;
      return (
        <div className="flex items-center">
          {Array.from({ length: value }, (_, index) => (
            <Star key={index} className="h-4 w-4" />
          ))}
        </div>
      );
    },
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ getValue }) => {
      const status = getValue() as string;
      const statusClass = status === 'Approved' ? 'text-green-500' : 'text-yellow-500';
      return <span className={statusClass}>{status}</span>;
    },
  },
  {
    header: 'Action',
    cell: ({ row }) => {
      const { original } = row;
      const [isActive, setIsActive] = useState(original.isActive);

      const handleToggle = () => {
        setIsActive((prev) => !prev);
        console.log('Toggled active state for:', original.name);
      };

      return (
        <div className="flex items-center space-x-6">
          <ArrowIcon
            className="h-5 w-5 cursor-pointer"
            onClick={() => console.log('Navigating to details for:', original.name)}
          />

          <div className="flex items-center">
            <Switch
              checked={isActive}
              onCheckedChange={handleToggle} // Use the internal toggle function
              className={`cursor-pointer ${isActive ? 'text-primary' : 'text-gray-500'}`}
            />
            <span className="ml-2">{isActive ? 'Active' : 'Inactive'}</span>
          </div>
        </div>
      );
    },
  },
];

export default function DoctorTable() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<typeof doctorsData>([]);

  useEffect(() => {
    setTimeout(() => {
      setData(doctorsData);
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <div>
      <DataTable columns={columns} data={data} isLoading={isLoading} />
    </div>
  );
}
