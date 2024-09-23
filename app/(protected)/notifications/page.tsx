import Sidebar from '@/components/Reusables/SideBar';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ChevronRight } from 'lucide-react';
import Icon from '@/public/cards/clipboard-list-check-solid 1.svg';

// Interface for Notification
interface Notification {
  id: number;
  date: string;
  message: string;
}

// Grouped notifications based on their dates
const notifications: Notification[] = [
  {
    id: 1,
    date: '14 June, 2023',
    message: 'You have received a new appointment request for Johnny Smith on August 15th at 3:00 PM. Please review and confirm.',
  },
  {
    id: 2,
    date: '14 June, 2023',
    message: 'Appointment for Emily Johnson on July 20th at 2:30 PM has been confirmed.',
  },
  {
    id: 3,
    date: '14 June, 2023',
    message: 'Cancellation Alert: The appointment for Tommy Anderson on August 5th at 4:00 PM has been cancelled by you.',
  },
  {
    id: 4,
    date: '14 June, 2023',
    message: 'Sarah Roberts needs a Doctor for her child.',
  },
  {
    id: 5,
    date: '10 June, 2023',
    message: 'New Feedback: Alex has left feedback on the therapy progress of his child. Please review in the feedback section.',
  },
  {
    id: 6,
    date: '10 June, 2023',
    message: 'Rejection Alert: The appointment for Tommy Anderson on August 5th at 4:00 PM has been rejected by you.',
  },
  {
    id: 7,
    date: '10 June, 2023',
    message: 'You have received a new appointment request for Johnny Smith on August 15th at 3:00 PM. Please review and confirm.',
  },
  {
    id: 8,
    date: '10 June, 2023',
    message: 'Sarah Roberts needs a Doctor for her child.',
  },
];

// Helper function to group notifications by date
const groupNotificationsByDate = (notifications: Notification[]) => {
  return notifications.reduce((acc, notification) => {
    if (!acc[notification.date]) {
      acc[notification.date] = [];
    }
    acc[notification.date].push(notification);
    return acc;
  }, {} as Record<string, Notification[]>);
};

export default function Notifications() {
  const groupedNotifications = groupNotificationsByDate(notifications);

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar /> {/* Assuming Sidebar is your actual component */}
      <div className="flex flex-1 flex-col h-screen w-[cal(100%)] p-15 ml-[80px]">
        {/* Header Section */}
        <header className="flex items-center justify-between bg-white border-b">
          <h1 className="text-2xl font-semibold p-4">All Appointments</h1>
          <Button variant="default" className="flex items-center space-x-2">
            <Icon className="h-5 w-5" />
            <span>Waitlist</span>
          </Button>
        </header>

        {/* Scrollable Notifications Section */}
        <ScrollArea className="flex-1  p-13 ml-[135px] w-[958px]"> {/* Changed overflow-y-visible to overflow-y-auto */}
          {Object.keys(groupedNotifications).map((date) => (
            <div key={date} className="pb-4">
              <div className="mb-2 text-lg font-semibold text-gray-700">{date}</div>
              <div
                className="relative mb-4 rounded-lg bg-white shadow-sm"
                style={{
                  borderRadius: '7px 0px 0px 0px',
                  border: '1px solid rgba(0, 0, 0, 0.1)',
                }}
              >
                <div className="p-4">
                  {groupedNotifications[date].map((notification) => (
                    <div key={notification.id} className="mb-4">
                      <p className="text-gray-700">{notification.message}</p>
                      <div className="flex justify-end">
                        <Button variant="ghost" size="sm" className="text-accent-foreground">
                          View <ChevronRight className="ml-1 h-4 w-4" />
                        </Button>
                      </div>
                      {groupedNotifications[date].length > 1 && (
                        <hr className="my-2 border-gray-300" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </ScrollArea>
      </div>
    </div>
  );
}
