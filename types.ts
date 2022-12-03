/**
 * Types
 */

export type TExperience = {
  position: string;
  company: string;
  link: string;
  fromDate: string;
  toDate: string | "Present";
  descriptions: string[]
};

/**
 * Interfaces
 */

export interface IOrangeLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children?: React.ReactNode;
  linktype: EOrangeLinkTypes;
}

export interface weqweq {
  ewq: string
}

/**
 * Enums
 */

export enum EOrangeLinkTypes {
  underlined,
  bordered,
}