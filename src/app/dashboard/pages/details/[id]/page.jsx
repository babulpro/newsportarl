 
import Details from '@/app/lib/component/utilityCom/About';
import React from 'react';

const getData = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/api/getData/newsDetails?id=${id}`);
      
      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }
  
      const data = await response.json();
      return data?.data; // Safely access data
    } catch (error) {
      console.error("Failed to fetch data:", error);
      return null;
    }
  };
  
const Page = async({params}) => {
    const  id  = (await params).id
    let data = await getData(id)
    return (
        <div>
            <Details data={data[0]}/>  
          
        </div>
    );
};

export default Page;