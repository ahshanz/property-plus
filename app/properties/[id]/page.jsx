'use client';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { fetchProperty } from '@/utils/requests';

const PropertyPage = () => {
  const { id } = useParams();

  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fecthPropertyData = async () => {
      if (!id) return;
      try {
        const property = await fetchProperty(id);
        setProperty(property);
      } catch (error) {
        console.log('Error fetching property', error);
      }finally{
        setLoading(false);
      }
    };
    if (property === null){
      fecthPropertyData()
    }
  }, [id, property]);

  return <div>PropertyPage</div>;
};

export default PropertyPage;
