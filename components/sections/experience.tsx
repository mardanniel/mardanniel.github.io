import SectionHeader from '@components/section-header';
import Timeline from '@components/timeline';
import { TExperience } from 'types';

const experiences: TExperience[] = [
  {
    position: 'Software Engineer Intern',
    company: 'YouSource',
    fromDate: 'September 2022',
    toDate: 'December 2022',
    descriptions: [
      'Worked with a variety of different languages, frameworks and applications such as JavaScript, TypeScript, Angular, C#, ASP.NET, and SQL Server.',
      'Responsible for software maintenance across codebase.',
      'Managed to raise code coverage by more than 80% through Unit Testing.',
    ]
  },
  {
    position: 'Backend Developer Intern',
    company: 'Mr. Geek',
    fromDate: 'April 2022',
    toDate: 'July 2022',
    descriptions: [
      'Developed and maintained code of an existing web and mobile project using HTML, CSS, PHP, CodeIgniter 3, JavaScript, jQuery and React Native.',
      'Assigned as a team leader for interns to manage tasks and objectives.',
    ],
  },
];

export default function Experience() {
  return (
    <div id='experience' className='p-10 pt-24 flex flex-col'>
      <SectionHeader inlineBreak>experience</SectionHeader>
      <Timeline experiences={experiences} style='self-center'/>
    </div>
  );
}
