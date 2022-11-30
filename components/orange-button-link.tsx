import React from 'react';

type OrangeButtonLinkProps = {
  href: string;
  style?: string;
  children: React.ReactNode;
};

export default function OrangeButtonLink({
  href,
  style,
  children,
}: OrangeButtonLinkProps) {
  return (
    <a
      href={href}
      className={`${style} w-max border border-[#ff8c32] px-2 py-1 rounded hover:bg-[#ff8c3233] transition-[background-color] ease-in-out duration-300`}
    >
      {children}
    </a>
  );
}
