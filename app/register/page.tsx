// pages/index.tsx
import { NextPage } from 'next';
import Footer from '@/components/Reusables/Footer';
import ClinicRegistrationForm from '@/components/NotResuables/Form';
import Header from '@/components/Reusables/Header';

const RegisterPage: NextPage = () => {
 return (
  <div>
    <Header/>
    <ClinicRegistrationForm/>

   <Footer />
  </div>
 );
};

export default RegisterPage;
