import React from 'react';
import './Navbar.css';

const Navbar = () => {
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
        <nav className='navbar'>
            <h3 className="logo text-3xl font-semibold text-purple-700">VRT</h3>
            <ul className='menu'>
                {
                    routes.map(route => <li><a href={route.path}>{route.name}</a></li>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;