'use client';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { fetchProperty } from '@/utils/requests';
import PropertyHeaderImage from '@/components/PropertyHeaderImage';

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
      } finally {
        setLoading(false);
      }
    };
    if (property === null) {
      fecthPropertyData();
    }
  }, [id, property]);
  if (!property && !loading) {
    return (
      <h1 className='text-center text-2xl font-bold mt-10'>
        Property Not Found
      </h1>
    );
  }

  return (
    <>
      {!loading && property && (
        <>
          <PropertyHeaderImage image={property.images[0]} />

          <section>
            <div class='container m-auto py-6 px-6'>
              <a
                href='/properties.html'
                class='text-blue-500 hover:text-blue-600 flex items-center'
              >
                <i class='fas fa-arrow-left mr-2'></i> Back to Properties
              </a>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default PropertyPage;
