import React, { useState } from 'react';
import './Navbar.css';
import { Bars3Icon,XMarkIcon } from '@heroicons/react/24/solid';

const Navbar = () => {

    const [open, setOpen] = useState(false);

    const routes = [
        {
            id: 1,
            name: 'Home',
            path: '/'
        },
        {
            id: 2,
            name: 'About',
            path: '/about'
        },
        {
            id: 3,
            name: 'Product',
            path: '/product'
        },
        {
            id: 4,
            name: 'Contact',
            path: '/contact'
        },
        {
            id: 5,
            name: 'Blog',
            path: '/blog'
        }
    ];
    return (
        <nav className='navbar flex justify-between items-center bg-slate-200 px-20 py-6'>
            <h3 className="logo text-3xl font-semibold text-purple-700">VRT</h3>
            <ul className={`md:flex absolute md:static duration-500 menu bg-slate-300 md:bg-transparent ${open? 'top-20 left-0':'-top-48 left-0'}`}>
                {
                    routes.map(route => <li className='ml-12'><a href={route.path}>{route.name}</a></li>)
                }
            </ul>
            <div className="md:hidden" onClick={()=> setOpen(!open)}>
                <span>{open == true? <XMarkIcon className="h-6 w-6 text-blue-500" />:<Bars3Icon className="h-6 w-6 text-blue-500" />}</span>
            
            </div>
        </nav>
    );
};

export default Navbar;