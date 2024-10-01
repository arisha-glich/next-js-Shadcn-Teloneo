import Image from 'next/image';
import { Button } from '@/components/ui/button'; // Assuming you have a custom button component
import avatarPlaceholder from '@/public/DP.png'; // Correct path for placeholder image

// Define a Review type for each review object
interface Review {
  name: string;
  date: string;
  avatar: string;
  text: string;
  rating: number;
  attendedBy: string;
  doctorAvatar: string;
}

// Individual Review Row Component
const ReviewRow = ({ review }: { review: Review }) => {
  return (
    <div className="grid grid-cols-12 gap-4 border-b p-4">
      {/* User Avatar */}
      <div className="col-span-1">
        <div className="h-12 w-12 rounded-full overflow-hidden">
          <Image
            src={review.avatar || avatarPlaceholder} // Use placeholder if avatar is not provided
            alt={`${review.name} Avatar`}
            width={48}
            height={48}
            className="object-cover"
          />
        </div>
      </div>

      {/* Review Details */}
      <div className="col-span-11">
        <div className="flex justify-between">
          {/* User Name and Date */}
          <div>
            <h3 className="font-medium">{review.name}</h3>
            <p className="text-sm text-gray-500">{review.date}</p>
          </div>

          {/* Star Ratings */}
          <div className="flex space-x-1">
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-4 w-4 ${
                    i < review.rating ? 'text-orange-500' : 'text-gray-300'
                  }`}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.27 5.82 21 7 14.14 2 9.27l6.91-1.01L12 2z"
                  />
                </svg>
              ))}
          </div>
        </div>

        {/* Review Text */}
        <p className="mt-2 text-sm text-gray-700">{review.text}</p>

        {/* Attended By Section */}
        <div className="mt-2 flex items-center space-x-2">
          <span className="text-sm text-gray-500">Attended by</span>
          <Button size="sm" variant="outline" className="rounded-full flex items-center">
            <div className="h-6 w-6 rounded-full overflow-hidden mr-2">
              <Image
                src={review.doctorAvatar || avatarPlaceholder} // Use placeholder if doctor avatar is not provided
                alt={`${review.attendedBy} Avatar`}
                width={24}
                height={24}
                className="object-cover"
              />
            </div>
            {review.attendedBy}
          </Button>
        </div>
      </div>
    </div>
  );
};

// Review Table Component
const ReviewTable = ({ reviews }: { reviews: Review[] }) => {
  return (
    <div className="rounded-md bg-white shadow-md">
      {reviews.map((review, index) => (
        <ReviewRow key={index} review={review} />
      ))}
    </div>
  );
};

// Sample reviews data
const reviews: Review[] = [
  {
    name: 'Sophia Star',
    date: '2 days ago',
    avatar: '/DP.png', // Corrected path
    text: 'I recently used this website to find a Doctor for my child, and I couldn’t be happier with the experience...',
    rating: 5,
    attendedBy: 'Dr. Olivia Green',
    doctorAvatar: '/doctor-avatar1.png', // Update this to actual image paths
  },
  {
    name: 'Sophia Star',
    date: '2 days ago',
    avatar: '/DP.png', // Corrected path
    text: 'I recently used this website to find a Doctor for my child, and I couldn’t be happier with the experience...',
    rating: 5,
    attendedBy: 'Dr. Olivia Green',
    doctorAvatar: '/doctor-avatar1.png', // Update this to actual image paths
  },{
    name: 'Sophia Star',
    date: '2 days ago',
    avatar: '/DP.png', // Corrected path
    text: 'I recently used this website to find a Doctor for my child, and I couldn’t be happier with the experience...',
    rating: 5,
    attendedBy: 'Dr. Olivia Green',
    doctorAvatar: '/doctor-avatar1.png', // Update this to actual image paths
  },{
    name: 'Sophia Star',
    date: '2 days ago',
    avatar: '/DP.png', // Corrected path
    text: 'I recently used this website to find a Doctor for my child, and I couldn’t be happier with the experience...',
    rating: 5,
    attendedBy: 'Dr. Olivia Green',
    doctorAvatar: '/doctor-avatar1.png', // Update this to actual image paths
  },{
    name: 'Sophia Star',
    date: '2 days ago',
    avatar: '/DP.png', // Corrected path
    text: 'I recently used this website to find a Doctor for my child, and I couldn’t be happier with the experience...',
    rating: 5,
    attendedBy: 'Dr. Olivia Green',
    doctorAvatar: '/doctor-avatar1.png', // Update this to actual image paths
  },{
    name: 'Sophia Star',
    date: '2 days ago',
    avatar: '/DP.png', // Corrected path
    text: 'I recently used this website to find a Doctor for my child, and I couldn’t be happier with the experience...',
    rating: 5,
    attendedBy: 'Dr. Olivia Green',
    doctorAvatar: '/doctor-avatar1.png', // Update this to actual image paths
  },{
    name: 'Sophia Star',
    date: '2 days ago',
    avatar: '/DP.png', // Corrected path
    text: 'I recently used this website to find a Doctor for my child, and I couldn’t be happier with the experience...',
    rating: 5,
    attendedBy: 'Dr. Olivia Green',
    doctorAvatar: '/doctor-avatar1.png', // Update this to actual image paths
  },{
    name: 'Sophia Star',
    date: '2 days ago',
    avatar: '/DP.png', // Corrected path
    text: 'I recently used this website to find a Doctor for my child, and I couldn’t be happier with the experience...',
    rating: 5,
    attendedBy: 'Dr. Olivia Green',
    doctorAvatar: '/doctor-avatar1.png', // Update this to actual image paths
  },{
    name: 'Sophia Star',
    date: '2 days ago',
    avatar: '/DP.png', // Corrected path
    text: 'I recently used this website to find a Doctor for my child, and I couldn’t be happier with the experience...',
    rating: 5,
    attendedBy: 'Dr. Olivia Green',
    doctorAvatar: '/doctor-avatar1.png', // Update this to actual image paths
  },{
    name: 'Sophia Star',
    date: '2 days ago',
    avatar: '/DP.png', // Corrected path
    text: 'I recently used this website to find a Doctor for my child, and I couldn’t be happier with the experience...',
    rating: 5,
    attendedBy: 'Dr. Olivia Green',
    doctorAvatar: '/doctor-avatar1.png', // Update this to actual image paths
  },
  {
    name: 'John Doe',
    date: '1 week ago',
    avatar: '/DP.png', // Corrected path
    text: 'Very helpful and user-friendly service. I was able to find the perfect doctor...',
    rating: 4,
    attendedBy: 'Dr. Mark Smith',
    doctorAvatar: '/doctor-avatar2.png', // Update this to actual image paths
  },
];

// Main Page Component
const App = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="container mx-auto">
        <h1 className="mb-6 text-2xl font-bold text-gray-800">User Reviews</h1>
        <ReviewTable reviews={reviews} />
      </div>
    </div>
  );
};

export default App;
