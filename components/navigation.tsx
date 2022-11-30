import Link from 'next/link';
import React from 'react';
import Logo from './logo';
import OrangeButtonLink from './orange-button-link';

const links = [
  {
    name: 'about',
    href: '#about',
  },
  {
    name: 'experience',
    href: '#experience',
  },
  {
    name: 'work',
    href: '#work',
  },
  {
    name: 'contact',
    href: '#contact',
  },
];

export default function Navigation() {
  return (
    <nav className='fixed top-0 left-0 w-screen flex justify-between items-center p-8 bg-[#06113C] z-10'>
      <Link href={'/'}>
        <Logo className='hover:orange-drop-shadow transition-all ease-in-out duration-300 h-8' />
      </Link>
      <ul className='flex items-center gap-4 px-2 font-normal'>
        {links.map(({ name, href }, key) => (
          <li
            key={key}
            className='cursor-pointer font-bold hover:orange-text-shadow-sm transition-[text-shadow] ease-in-out duration-300'
          >
            <a href={href}>{name}</a>
          </li>
        ))}
        <OrangeButtonLink href='#resume' style='font-bold'>
          resume
        </OrangeButtonLink>
      </ul>
    </nav>
  );
}
