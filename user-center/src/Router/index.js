import React from 'react';

/* pages */
import Management from '../Feature/Management/Management';

export const routerConfig = [
    {
        path: '/management',
        component: Management
    },
    {
        path: '/',
        component: ()=>{
            return(
                <div>home</div>
            );
        }
    },
    {
        path: '*',
        component: () => {
            return (
                <div>404</div>
            );
        }
    },
];