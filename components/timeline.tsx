import React from 'react';
import { EOrangeLinkTypes, TExperience } from 'types';
import CustomLink from './custom-link';

export default function Timeline({
  experiences,
  style,
}: {
  experiences: TExperience[];
  style: string;
}) {
  return (
    <div className={`${style} w-[32rem] pt-10`}>
      <ol className='relative border-l border-palette-color-e'>
        {experiences.map(
          ({ position, company, link, fromDate, toDate, descriptions }, xpIndex) => (
            <li key={xpIndex} className='mb-10 ml-6'>
              <span className='flex absolute -left-3 justify-center items-center w-6 h-6 bg-palette-color-c rounded-full'>
                <svg
                  aria-hidden='true'
                  className='w-3 h-3 text-palette-color-b'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z'
                    clipRule='evenodd'
                  ></path>
                </svg>
              </span>
              <h3 className='flex items-center mb-2 font-semibold text-palette-color-c'>
                {position}{' '}
                <div className='ml-1 before:content-["@"] before:mr-1 before:text-palette-color-b'>
                  <CustomLink
                    href={link}
                    target='_blank'
                    rel='noreferrer'
                    title={company}
                    linktype={EOrangeLinkTypes.underlined}
                  >
                    {company}
                  </CustomLink>
                </div>
              </h3>
              <time className='block mb-2 text-sm font-normal leading-none text-palette-color-e'>
                {fromDate} - {toDate}
              </time>
              <ul className='mb-4 text-base font-normal text-palette-color-d'>
                {descriptions.map((descVal, descIndex) => (
                  <li
                    key={descIndex}
                    className='py-1 before:content-[">"] before:text-palette-color-b before:mr-2'
                  >
                    {descVal}
                  </li>
                ))}
              </ul>
            </li>
          )
        )}
      </ol>
    </div>
  );
}
