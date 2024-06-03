import Link from 'next/link';
import Hero from '@/components/Hero';
import InfoBoxes from '@/components/InfoBoxes';
import HomeProperties from '@/components/HomeProperties';
import FeatuedProperties from '@/components/FeatuedProperties';

const HomePage = () => {
  return (
    <>
      <Hero />
      <InfoBoxes />
      <FeatuedProperties />
      <HomeProperties />
    </>
  );
};

export default HomePage;
