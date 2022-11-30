import React from 'react';

type SectionHeaderProps = {
  children: React.ReactNode;
  inlineBreak?: boolean ;
};

export default function SectionHeader({
  children,
  inlineBreak,
}: SectionHeaderProps) {
  return (
    <h1
      className={`flex justify-center items-center font-bold text-5xl my-5 orange-text-shadow-md ${
        inlineBreak &&
        'after:mx-10 after:inline-flex after:content-[""] after:h-0.5 after:rounded after:w-1/2 after:bg-[#DDDDDD]'
      }`}
    >
      {children}
    </h1>
  );
}
