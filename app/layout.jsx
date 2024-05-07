import Navbar from '@/components/Navbar'
import '@/assets/styles/global.css';

export const metadata = {
  title: 'PropetyPulse | Find the perfect Rental',
  description: 'Find your dream rental property',
  keywords: 'rental, find rentals, find properties',
};

import React from 'react';
import Footer from '@/components/Footer';

const MainLayout = ({ children }) => {
  return (
    <html lang='en'>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  );
};

export default MainLayout;
