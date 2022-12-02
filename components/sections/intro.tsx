import OrangeButtonLink from '@components/orange-button-link';

export default function Intro() {
  return (
    <div id='top' className='h-screen p-10 flex flex-col justify-center mt-8'>
      <h2 className='text-lg font-medium text-[#DDDDDD]'>Hi! 👋 My name is</h2>
      <h1 className='font-extrabold text-7xl my-5 orange-text-shadow-md'>
        Mar Danniel Ginturo.
      </h1>
      <p className='text-gray-300 w-[32rem]'>
        I&apos;m software developer specializing in building web applications.
        Currently, I&apos;m focused on leveling up my skills, hoping to get a
        position in the industry.
      </p>
      <OrangeButtonLink href='#resume' style='my-5 font-bold'>
        Check out my resume!
      </OrangeButtonLink>
    </div>
  );
}
