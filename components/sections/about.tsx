import SectionHeader from '@components/section-header';
import Image from 'next/image';

export default function About() {
  return (
    <div
      id='about'
      className='h-screen p-10 pt-24 flex flex-col'
    >
      <SectionHeader>about</SectionHeader>
      <div className='flex justify-around items-center py-6'>
        <Image
          src={'/images/wow-fancy-pic.png'}
          alt={'My fancy picture'}
          width={250}
          height={200}
          className='rounded-full'
        />
        <div className='flex flex-col gap-5 w-[32rem]'>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            omnis autem, repellendus quaerat voluptatem maiores quasi eaque sunt
            repudiandae? Necessitatibus et corporis esse a asperiores ab
            excepturi, eligendi pariatur maiores. Maiores pariatur culpa a
            asperiores provident. Earum vitae nam quos incidunt voluptates
            similique fugiat laboriosam rem qui cumque eos, et vel iure corrupti
            quis, necessitatibus provident eligendi veniam, sunt dolore?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            officiis cupiditate praesentium provident hic possimus perferendis
            eum, enim minima error! Perferendis asperiores adipisci accusantium
            magnam? Fuga distinctio cupiditate odit? Eius.
          </p>
        </div>
      </div>
    </div>
  );
}
