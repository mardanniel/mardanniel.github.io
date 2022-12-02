import OrangeLink from '@components/orange-link';
import SectionHeader from '@components/section-header';
import Image from 'next/image';

export default function About() {
  return (
    <div id='about' className='p-10 pt-24 flex flex-col'>
      <SectionHeader inlineBreak>about me</SectionHeader>
      <div className='flex justify-around py-6'>
        <div>
          <Image
            src={'/images/wow-fancy-pic.png'}
            alt={'My fancy picture'}
            width={250}
            height={250}
            className='rounded-full'
          />
        </div>
        <div className='flex flex-col gap-5 w-[32rem] text-gray-300'>
          <p>
            Hello, My name is Mar Danniel and I&apos;ve always been fond of
            building stuff on the web. My interest in web development started
            way back in high school when I was introduced to HTML and CSS,
            playing around with the tags and styles and eventually got to the
            point of building a website for my school!
          </p>
          <p>
            As of today, I&apos;ve had the privilege of working on{' '}
            <OrangeLink
              href='https://mrgeek.online'
              target='_blank'
              rel='noreferrer'
              title='Mr. Geek'
            >
              a solutions provider
            </OrangeLink>{' '}
            and{' '}
            <OrangeLink
              href='https://www.you-source.com'
              target='_blank'
              rel='noreferrer'
              title='YouSource'
            >
              a software development agency
            </OrangeLink>
            . My main focus right now is leveling up my skills in web
            development and hoping to get a position where I can utilize my
            skills as a developer.
          </p>
        </div>
      </div>
    </div>
  );
}
