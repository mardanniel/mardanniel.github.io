import React from 'react';
import { EOrangeLinkTypes, IOrangeLinkProps } from 'types';

const CustomLink: React.FunctionComponent<IOrangeLinkProps> = ({
  children,
  ...rest
}) => {
  const anchorLinkAttributes = { ...rest };
  anchorLinkAttributes.className = `${anchorLinkAttributes.className || ''} ${
    anchorLinkAttributes.linktype === EOrangeLinkTypes.underlined
      ? 'text-palette-color-b relative inline-block w-max before:content-[""] before:block before:absolute before:bottom-0 before:left-0 before:bg-palette-color-b before:w-0 before:hover:w-full before:transition-[width] before:duration-500 before:ease-in-out before:h-[1px]'
      : 'w-max border border-palette-color-b rounded hover:bg-palette-color-b/[0.2] transition-[background-color] ease-in-out duration-300'
  }`;
  return <a {...anchorLinkAttributes}>{children}</a>;
};

export default CustomLink;
