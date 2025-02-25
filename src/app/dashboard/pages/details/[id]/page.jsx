"use client";
import Details from '@/app/lib/component/utilityCom/About';
import Pages from '@/app/lib/component/utilityCom/Pages';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const Page = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  let [type ,setType] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [typeData,setTypeData] = useState(null)

  useEffect(() => {
    const fetchHeroData = async () => {
      try {
        const response = await fetch(`/api/getData/newsDetails?id=${id}`, { cache: "force-cache" });
        const newsData = await fetch(`/api/getData/news`,{cache:'force-cache'})
        
        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        const result = await response.json();
        const news = await newsData.json();
        setData(result.data[0]);
        setType(result.data[0].type)
        setTypeData(news.data)
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
   
    const Data = typeData.filter((value)=>value.type === type);
  
  

  return (
    <div>
        <Details data={data}/>
        <Pages Data={Data}/>

      
    </div>
  );
};

export default Page;
