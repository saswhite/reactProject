import React from 'react';
import Login from '../Feature/Login/Login';
import Vcode from '../Feature/Vcode/Vcode';
import Test from '../Feature//Test/Test'

export const routerConfig = [
    {
        path:'/login',
        component: Login
    },
    {
        path:'/vcode',
        component: Vcode
    },
    {
        path:'/test',
        component: Test
    },
    {
        path:'/',
        component: ()=>{
            return (
                <div>home</div>
            )
        }
    },
    {
        path:'*',
        component:()=>{
            return (
                <div>404</div>
            );
        }
    },
];