import React from 'react';

export default function SectionHeader({ children }: React.PropsWithChildren) {
  return (
    <h1
      className='flex items-center relative font-bold text-5xl my-5 text-shadow-md 
                after:mx-6 after:inline-flex after:content-[""] after:h-0.5 after:rounded 
                after:w-full after:bg-[#DDDDDD]'
    >
      {children}
    </h1>
  );
}
