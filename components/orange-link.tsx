import React from 'react';

const OrangeLink: React.FunctionComponent<
  React.AnchorHTMLAttributes<HTMLAnchorElement>
> = ({ children, ...rest }) => {
  const anchorLinkAttributes = { ...rest };
  anchorLinkAttributes.className = `${
    anchorLinkAttributes.className || ''
  } text-[#ff8c32] relative inline-block w-max before:content-[""] before:block before:absolute before:bottom-0 before:left-0 before:bg-[#ff8c32] before:w-0 before:hover:w-full before:transition-[width] before:duration-500 before:ease-in-out before:h-0.5`;
  return <a {...anchorLinkAttributes}>{children}</a>;
};

export default OrangeLink;
