import type { MetaFunction } from "@remix-run/node";
import { ResumePage } from '~/components/templates/ResumePage';

export const meta: MetaFunction = () => {
  return [
    { title: 'Eric Kwong - Senior Full Stack Engineer' },
    { name: 'description', content: 'Senior Full Stack Engineer with expertise in React, Node.js, and cloud technologies' },
  ];
};

export default function Index() {
  const resumeData = {
    personalInfo: {
      name: "Kwong Ka Kit, Eric",
      title: "Senior Full Stack Engineer",
      email: "eric1234463@gmail.com",
      phone: "92019865",
      location: "Hong Kong",
      linkedin: "https://linkedin.com/in/eric-kwong-815b30122",
      github: "https://github.com/eric1234463",
      avatar: {
        src: "/images/avatar.jpg",
        alt: "Eric Kwong",
        size: "xl" as const,
        borderColor: "primary-500",
        borderWidth: "medium" as const,
        shadow: "lg" as const,
        className: "animate-pulse-slow"
      }
    },
    experiences: [
      {
        company: 'Cronos Labs',
        position: 'Senior Software Engineer',
        location: 'Hong Kong',
        startDate: 'May 2024',
        endDate: 'Mar 2025',
        description: [
          'Led frontend development for decentralized applications (dApps) using React, Tailwind, and Chakra UI.',
          'Spearheaded the creation of Telegram mini-apps and games, boosting user engagement for token-based airdrops and rewards.',
          'Collaborated on system design to ensure scalable and responsive dApp architecture.'
        ],
        technologies: ['React', 'Chakra UI', 'Tailwind', 'EtherJS']
      },
      {
        company: 'PICKUPP',
        position: 'Engineering Lead',
        location: 'Hong Kong',
        startDate: 'Feb 2022',
        endDate: 'May 2024',
        description: [
          'Directed full-stack development of the Last Mile Platform using React, NestJS, and AWS, overseeing an international scrum team across Malaysia and Taiwan.',
          'Architected new service designs to separate point-to-point and last-mile delivery, enhancing operational efficiency.',
          'Refactored the Delivery Agent App, slashing error rates from 8% to 1% through optimized code and testing.'
        ],
        technologies: ['React', 'React Native', 'gRPC', 'NestJS', 'NATS', 'Postgres', 'AWS']
      },
      {
        company: 'Diginex',
        position: 'Tech Lead',
        location: 'Hong Kong',
        startDate: 'Sep 2021',
        endDate: 'Feb 2022',
        description: [
          'Designed and deployed a flexible ESG reporting framework architecture, enabling scalable onboarding of companies to create customized ESG reporting solutions.',
          'Led a Vietnam-based scrum team of eight engineers to develop and enhance features for the ESG platform using VueJS and NestJS.',
          'Architected real-time data processing systems with Kafka and Kubernetes, ensuring robustness and scalability for growing client demands.'
        ],
        technologies: ['VueJS', 'NestJS', 'Kafka', 'Postgres', 'Azure', 'Kubernetes']
      },
      {
        company: 'HK01',
        position: 'Senior Software Engineer',
        location: 'Hong Kong',
        startDate: 'Jan 2021',
        endDate: 'Aug 2021',
        description: [
          'Revamped the HK01 web article page with A/B testing, improving user retention.',
          'Built a custom HTML video player with VideoJS SDK for 01TV, enhancing multimedia performance.',
          'Migrated the frontend from styled-components to Tailwind, reducing render times by 30%.'
        ],
        technologies: ['React', 'NestJS', 'NextJS', 'Tailwind', 'Laravel', 'Storybook', 'AWS', 'Kubernetes']
      },
      {
        company: 'Shopline',
        position: 'Senior Software Engineer',
        location: 'Hong Kong',
        startDate: 'Jun 2018',
        endDate: 'Nov 2020',
        description: [
          'Led full stack development in React & NodeJS & Ruby on Rails, achieving 70% unit test coverage.',
          'Successfully migrated frontend framework from AngularJS to React.',
          'Developed a new solution for Facebook live streaming to enhance shopping experience.'
        ],
        technologies: ['React', 'NodeJS', 'Ruby on Rails', 'styled-components', 'Storybook', 'AWS', 'Kubernetes']
      }
    ],
    skillCategories: [
      {
        name: 'Frontend Technologies',
        skills: ['React', 'React Native', 'VueJS', 'NextJS', 'Tailwind CSS', 'Chakra UI', 'Storybook']
      },
      {
        name: 'Backend Technologies',
        skills: ['NestJS', 'NodeJS', 'Ruby on Rails', 'gRPC', 'NATS', 'Kafka', 'Laravel', 'PostgreSQL']
      },
      {
        name: 'DevOps & Cloud',
        skills: ['AWS', 'Azure', 'Kubernetes', 'Docker']
      },
      {
        name: 'Blockchain',
        skills: ['EtherJS', 'Decentralized Applications (dApps)', 'Smart Contracts']
      }
    ],
    projects: [
      {
        title: 'Here Web',
        description: 'My BU FYP Project to implement a doctor visit public health record system for claim insurance',
        technologies: ['Ionic', 'Angular', 'NodeJS'],
        link: '#',
        github: 'https://github.com/eric1234463/here_web'
      },
      {
        title: 'Path Web',
        description: 'My University Side Project to find your mentor in your university life and share the university program experience',
        technologies: ['PHP', 'AngularJS', 'MySQL'],
        link: '#',
        github: 'https://github.com/eric1234463/Path'
      },
      {
        title: 'Unify App',
        description: 'My HKUSPACE FYP - a social network app base on your university timetable to do matching to explore some new relationship',
        technologies: ['Ionic', 'AngularJS', 'MySQL'],
        link: '#',
        github: 'https://github.com/eric1234463/Unify'
      }
    ],
    education: [
      {
        institution: 'Hong Kong Baptist University',
        degree: 'Bachelor of Science (Hons) in Computing and Information System',
        location: 'Hong Kong',
        startDate: '2016',
        endDate: '2018',
        achievements: [
          'Specialized in software development and information systems',
          'Participated in programming competitions and hackathons'
        ]
      }
    ]
  };

  return (
    <ResumePage
      personalInfo={resumeData.personalInfo}
      experiences={resumeData.experiences}
      skillCategories={resumeData.skillCategories}
      projects={resumeData.projects}
      education={resumeData.education}
    />
  );
}
