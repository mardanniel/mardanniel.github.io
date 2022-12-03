import Link from 'next/link';
import { EOrangeLinkTypes } from 'types';
import Logo from './logo';
import CustomLink from './custom-link';

const links = [
  {
    name: 'about',
    href: '#about',
  },
  {
    name: 'experience',
    href: '#experience',
  },
  // {
  //   name: 'work',
  //   href: '#work',
  // },
  {
    name: 'contact',
    href: '#contact',
  },
];

export default function Navigation() {
  return (
    <nav className='fixed top-0 left-0 w-screen flex justify-between items-center pb-5 pt-6 px-8 bg-palette-color-a z-10 drop-shadow-md'>
      <Link href={'/'}>
        <Logo className='hover:fancy-drop-shadow transition-all ease-in-out duration-300' />
      </Link>
      <ul className='flex items-center gap-4 px-2 font-normal'>
        {links.map(({ name, href }, key) => (
          <li
            key={key}
            className='cursor-pointer font-base hover:fancy-text-shadow transition-[text-shadow] ease-in-out duration-300'
          >
            <a href={href}>{name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
