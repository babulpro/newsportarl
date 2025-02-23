"use client"
import { useParams } from 'next/navigation';
import React from 'react';

const Page = ({params}) => {
    const { id } = useParams();
    return (
        <div>
            this is the details page. id: {id}
        </div>
    );
};

export default Page;