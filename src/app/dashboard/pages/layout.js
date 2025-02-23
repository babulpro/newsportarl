import MainNavbar from '@/app/lib/component/utilityCom/MainNavbar';
import React from 'react';

const layout = ({children}) => {
    return (
        <div>
             <MainNavbar/>
            {children}
        </div>
    );
};

export default layout;