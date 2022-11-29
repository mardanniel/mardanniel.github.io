import React from 'react';
import { Poppins } from '@next/font/google';

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-default',
});

export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <div className={`${poppins.variable} font-sans text-[#EEEEEE] px-40`}>
      {children}
    </div>
  );
}
