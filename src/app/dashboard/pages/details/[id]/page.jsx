"use client";
import Details from '@/app/lib/component/utilityCom/About';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const Page = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHeroData = async () => {
      try {
        const response = await fetch(`/api/getData/newsDetails?id=${id}`, { cache: "force-cache" });
        
        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        const result = await response.json();
        setData(result.data[0]);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchHeroData();
    }
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
        <Details data={data}/>
      <h1>Details Page</h1>
      <p>ID: {id}</p>

      {data ? (
        <div>
          <h2>{data.title}</h2>
          <p>{data.short_des}</p>
          {/* Add more fields as needed */}
        </div>
      ) : (
        <p>No data found.</p>
      )}
    </div>
  );
};

export default Page;
