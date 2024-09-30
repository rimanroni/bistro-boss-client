import React from 'react';
import { FaRegUserCircle } from 'react-icons/fa';
import { TiShoppingCart } from 'react-icons/ti';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const navItems = [
        {name:'Home', path:'/'},
        {name:'CONTACT US', path:'/contact'},
        {name:'DASHBOARD', path:'/dashboard'},
        {name:"Our Menu" , path:"/ourmenu"},
        {name:"Our Shop" , path:'/ourshop'}
    ]
    return (
        <div>
           <div className="grid grid-cols-2 bg-black justify-between items-center p-4 ">
            <div className='navFont  text-white'>
                <Link to={'/'}>
                 <p className='font-extrabold text-xl lg:text-2xl tracking-wide'>BISTRO BOSS</p>
                 <p className='text-xl font-semibold  md:tracking-[0.5rem]'>Restaurant</p>
                </Link>
            </div>
            <div className='flex gap-4 items-center text-white'>
                {navItems.map((item, indx)=>(
                    <Link key={indx} className='uppercase  ' >{item.name}</Link>
                ))}
                <Link><TiShoppingCart /></Link>
                <Link className='flex items-center '>SIGN OUT <FaRegUserCircle /></Link>
            </div>
           </div>
        </div>
    );
};

export default Navbar;