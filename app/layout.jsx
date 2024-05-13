import Navbar from '@/components/Navbar';
import '@/assets/styles/global.css';

export const metadata = {
  title: 'PropetyPulse | Find the perfect Rental',
  description: 'Find your dream rental property',
  keywords: 'rental, find rentals, find properties',
};

import React from 'react';
import Footer from '@/components/Footer';
import AuthProvider from '@/components/AuthProvider';

const MainLayout = ({ children }) => {
  return (
    <AuthProvider>
      <html lang='en'>
        <body>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </body>
      </html>
    </AuthProvider>
  );
};

export default MainLayout;
