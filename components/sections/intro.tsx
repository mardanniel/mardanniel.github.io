import CustomLink from '@components/custom-link';
import { EOrangeLinkTypes } from 'types';

export default function Intro() {
  return (
    <div
      id='top'
      className='h-screen py-10 px-14 flex flex-col justify-center mt-8'
    >
      <h2 className='text-lg font-medium text-palette-color-c'>
        Hi! 👋 My name is
      </h2>
      <h1 className='font-extrabold text-7xl my-5 fancy-text-shadow-md'>
        Mar Danniel Ginturo.
      </h1>
      <p className='text-palette-color-c w-[32rem]'>
        I&apos;m full stack developer specializing in building web applications.
        Currently, I&apos;m focused on leveling up my skills, hoping to get a
        position in the industry.
      </p>
      <CustomLink
        linktype={EOrangeLinkTypes.bordered}
        href='mailto:mardannielabarondoginturo@gmail.com'
        className='mt-10 p-3 font-bold'
        title='Get in touch!'
      >
        Get in touch!
      </CustomLink>
    </div>
  );
}
