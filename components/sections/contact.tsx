import CustomLink from '@components/custom-link';
import SectionHeader from '@components/section-header';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { EOrangeLinkTypes } from 'types';

export default function Contact() {
  return (
    <div id='contact' className='p-10 pt-24'>
      <SectionHeader inlineBreak>contact</SectionHeader>
      <div className='w-full flex flex-col items-center gap-10'>
        <div className='w-[40rem] flex flex-col items-center'>
          <h1 className='text-2xl font-bold '>Get in touch!</h1>
          <p className='text-palette-color-c mt-5'>
            If you have any questions, opportunities that you want to share, or
            just want to say hi, feel free to drop a message , and I&apos;ll do
            my best to get back to you!
          </p>
        </div>
      </div>
      <div className='w-full flex flex-col items-center p-5 gap-10'>
        <CustomLink
          linktype={EOrangeLinkTypes.bordered}
          href='mailto:mardannielabarondoginturo@gmail.com'
          className='px-5 py-4'
          title='Send me a message here in my email!'
        >
          Say hi!
        </CustomLink>
        <div className='flex justify-center gap-10'>
          <a
            href='https://www.linkedin.com/in/mar-danniel-ginturo/'
            title='LinkedIn'
            target='_blank'
            rel='noreferrer noopener'
          >
            <FaLinkedinIn className='h-8 w-8' />
          </a>
          <a
            href='https://github.com/mardanniel'
            title='Github'
            target='_blank'
            rel='noreferrer noopener'
          >
            <FaGithub className='h-8 w-8' />
          </a>
        </div>
      </div>
    </div>
  );
}
