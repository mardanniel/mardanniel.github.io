import React from 'react';
import { TExperience } from 'types';

export default function Timeline({
  experiences,
  style,
}: {
  experiences: TExperience[];
  style: string;
}) {
  return (
    <div className={`${style} w-[32rem] py-10`}>
      <ol className='relative border-l border-gray-200 dark:border-gray-700'>
        {experiences.map(
          ({ position, company, fromDate, toDate, descriptions }, xpIndex) => (
            <li key={xpIndex} className='mb-10 ml-6'>
              <span className='flex absolute -left-3 justify-center items-center w-6 h-6 bg-[#DDDDDD] rounded-full'>
                <svg
                  aria-hidden='true'
                  className='w-3 h-3 text-[#ff8c32]'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z'
                    clip-rule='evenodd'
                  ></path>
                </svg>
              </span>
              <h3 className='flex items-center mb-1 text-lg font-semibold text-[#DDDDDD]'>
                {position} <div className='ml-1'>@ {company}</div>
              </h3>
              <time className='block mb-2 text-sm font-normal leading-none text-gray-500'>
                {fromDate} - {toDate}
              </time>
              <ul className='mb-4 text-base font-normal text-gray-300'>
                {descriptions.map((descVal, descIndex) => (
                  <li
                    key={descIndex}
                    className='py-1 before:content-[">"] before:text-[#ff8c32] before:mr-2'
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
