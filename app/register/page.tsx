// pages/index.tsx
import { NextPage } from 'next';
import Footer from '@/components/Reusables/Footer';
import ClinicRegistrationForm from '@/components/NotResuables/Form';

const RegisterPage: NextPage = () => {
 return (
  <div>
    <ClinicRegistrationForm/>
   <Footer />
  </div>
 );
};

export default RegisterPage;
