import React from 'react';
import { Poppins } from '@next/font/google';

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-poppins',
});

export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <div
      className={`${poppins.variable} font-sans bg-[#276678] text-[#F6F5F5]`}
    >
      {children}
    </div>
  );
}
