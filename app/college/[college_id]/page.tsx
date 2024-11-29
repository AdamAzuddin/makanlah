'use client';
import React from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { places } from "@/constants/places";
import { Restaurant, Place } from '@/constants/type';



const Page = () => {
  const searchParams = useSearchParams(); // For query parameters like 'name'
  const router = useRouter();

  // Get the 'name' query parameter (e.g., name=Kolej_Kediaman)
  const placeName = searchParams.get('name');
  
  // Create the page title
  const pageTitle = placeName ? `Restaurants in ${decodeURIComponent(placeName)}` : 'Restaurants';

  React.useEffect(() => {
    if (pageTitle) {
      document.title = pageTitle; // Update the document title
    }
  }, [pageTitle]);

  // Find the place object that matches the placeName from the search params
  const place = places.find(p => p.name === placeName);

  // If place is not found, show a message or empty state
  if (!place) {
    return (
      <div style={{ paddingLeft: '20px', paddingTop: '20px' }}>
        <h1 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '20px' }}>
          {pageTitle}
        </h1>
        <p>No restaurants found for this place.</p>
      </div>
    );
  }

  // Get the list of restaurants for the place
  const restaurants = place.restaurants;

  return (
    <div style={{ paddingLeft: '20px', paddingTop: '20px' }}>
      <h1 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '20px' }}>
        {pageTitle}
      </h1>
      <section>
        <h3 style={{ fontSize: '24px', fontWeight: 'bold', margin: '20px 0' }}>Eco Restaurants</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
          {restaurants.map((restaurant:Restaurant, index) => (
            <div key={index} style={{ border: '1px solid #ccc', borderRadius: '8px', overflow: 'hidden', textAlign: 'center' }}>
              <img src={restaurant.image} alt={restaurant.name} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
              <div style={{ padding: '10px' }}>
                <h4 style={{ fontSize: '16px', margin: '10px 0' }}>{restaurant.name}</h4>
                <p style={{ fontSize: '14px', color: '#555' }}>{restaurant.description}</p>
                <button style={{ padding: '8px 15px', background: '#FF6600', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }} onClick={()=>router.push("/menu")}>
                  Open Menu
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Page;
