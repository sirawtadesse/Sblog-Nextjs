import Link from 'next/link';
import React from 'react';
import { FiMenu } from 'react-icons/fi';

const Navbar = ({ toggleSidebar }) => {
  return (
    <div className='bg-white fixed top-0 w-[100%] z-10'>
      <div className='container mx-auto flex justify-between items-center py-4 px-4'>
        <div className='text-[24px]'>Siraw Tadesse</div>

        <div className='hidden md:flex gap-6'>
          <Link href='/'>
            <a className='hover:text-[#ff4041]'>Home</a>
          </Link>

          <Link href='#about'>
            <a className='hover:text-[#ff4041]'>About</a>
          </Link>

          <Link href='#blog'>
            <a className='hover:text-[#ff4041]'>Blog</a>
          </Link>

          <Link href='#contact'>
            <a className='hover:text-[#ff4041]'>Contact</a>
          </Link>
        </div>

        <div className='md:hidden text-[24px]' onClick={toggleSidebar}>
          <FiMenu />
        </div>
      </div>
    </div>
  );
};

export default Navbar;