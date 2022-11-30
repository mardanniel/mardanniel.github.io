import SectionHeader from '@components/section-header';
import Timeline from '@components/timeline';
import { TExperience } from 'types';

const experiences: TExperience[] = [
  {
    position: 'Software Engineer Intern',
    company: 'YouSource',
    fromDate: 'September 2022',
    toDate: 'Present',
    descriptions: [
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat magnam, deleniti quibusdam corporis non vero illum amet porro similique quas tempora architecto saepe praesentium eaque iusto repellat sequi, commodi reprehenderit!',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat magnam, deleniti quibusdam corporis non vero illum amet porro similique quas tempora architecto saepe praesentium eaque iusto repellat sequi, commodi reprehenderit!',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat magnam, deleniti quibusdam corporis non vero illum amet porro similique quas tempora architecto saepe praesentium eaque iusto repellat sequi, commodi reprehenderit!',
    ],
  },
  {
    position: 'Backend Developer Intern',
    company: 'Mr. Geek',
    fromDate: 'April 2022',
    toDate: 'July 2022',
    descriptions: [
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat magnam, deleniti quibusdam corporis non vero illum amet porro similique quas tempora architecto saepe praesentium eaque iusto repellat sequi, commodi reprehenderit!',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat magnam, deleniti quibusdam corporis non vero illum amet porro similique quas tempora architecto saepe praesentium eaque iusto repellat sequi, commodi reprehenderit!',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat magnam, deleniti quibusdam corporis non vero illum amet porro similique quas tempora architecto saepe praesentium eaque iusto repellat sequi, commodi reprehenderit!',
    ],
  },
];

export default function Experience() {
  return (
    <div id='experience' className='h-auto p-10 pt-24 flex flex-col'>
      <SectionHeader inlineBreak>experience</SectionHeader>
      <Timeline experiences={experiences} style='self-center'/>
    </div>
  );
}
