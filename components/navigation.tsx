import Link from 'next/link';
import React from 'react';

export default function Navigation() {
  return (
    <nav className='fixed top-0 left-0 w-screen flex justify-between p-8 bg-[#06113C]'>
      <Link
        href={'/'}
        className='font-black text-2xl hover:text-shadow-md transition-all ease-in-out duration-300'
      >
        mardanniel.
      </Link>
      <ul className='flex items-center gap-4 px-2 font-bold'>
        <li className='cursor-pointer hover:text-shadow-md transition-all ease-in-out duration-300'>
          <a href='#about'>about</a>
        </li>
        <li className='cursor-pointer hover:text-shadow-md transition-all ease-in-out duration-300'>
          <a href='#experience'>experience</a>
        </li>
        <li className='cursor-pointer hover:text-shadow-md transition-all ease-in-out duration-300'>
          <a href='#work'>work</a>
        </li>
        <li className='cursor-pointer hover:text-shadow-md transition-all ease-in-out duration-300'>
          <a href='#contact'>contact</a>
        </li>
        <li className='cursor-pointer hover:text-shadow-md transition-all ease-in-out duration-300'>
          resume
        </li>
      </ul>
    </nav>
  );
  // filter: drop-shadow(13px 13px 2px #000);
}
