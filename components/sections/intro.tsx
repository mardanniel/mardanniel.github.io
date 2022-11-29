import Image from 'next/image';

export default function Intro() {
  return (
    <div id='top' className='h-screen p-10 flex flex-col justify-center mt-8'>
      <h2 className='text-lg font-medium text-[#DDDDDD]'>Hi! 👋 My name is</h2>
      <h1 className='font-extrabold text-7xl my-5 text-shadow-md'>
        Mar Danniel Ginturo.
      </h1>
      <p className='text-[#DDDDDD] w-[32rem]'>
        I&apos;m software developer specializing in building web and mobile
        applications. Currently, I&apos;m focused on leveling up my skills,
        hoping to get a position in the industry.
      </p>
      <button className='w-max my-5 font-extrabold'>
        Check out my resume!
      </button>
    </div>
  );
}
