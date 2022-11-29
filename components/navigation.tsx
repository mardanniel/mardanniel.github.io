import Link from 'next/link';
import React from 'react';

export default function Navigation() {
  return (
    <nav className='fixed top-0 left-0 w-screen h-24 border-white'>
      <Link href={'/'} className='font-black'>mardanniel.</Link>
      <ul>
        <li>About</li>
        <li>Experience</li>
        <li>Work</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}
