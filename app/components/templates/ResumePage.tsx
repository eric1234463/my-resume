import { ResumeHeader } from '~/components/organisms/ResumeHeader';
import { ResumeExperience } from '~/components/organisms/ResumeExperience';
import { ResumeSkills } from '~/components/organisms/ResumeSkills';
import { ResumeProjects } from '~/components/organisms/ResumeProjects';
import { ResumeEducation } from '~/components/organisms/ResumeEducation';

interface ResumePageProps {
  personalInfo: {
    name: string;
    title: string;
    email: string;
    phone: string;
    location: string;
    website?: string;
    linkedin?: string;
    github?: string;
    avatar?: {
      src: string;
      alt?: string;
      size?: 'sm' | 'md' | 'lg' | 'xl';
      borderColor?: string;
      borderWidth?: 'none' | 'thin' | 'medium' | 'thick';
      shadow?: 'none' | 'sm' | 'md' | 'lg';
      className?: string;
    };
  };
  experiences: Array<{
    company: string;
    position: string;
    location: string;
    startDate: string;
    endDate: string | 'Present';
    description: string[];
    technologies?: string[];
  }>;
  skillCategories: Array<{
    name: string;
    skills: string[];
  }>;
  projects: Array<{
    title: string;
    description: string;
    technologies: string[];
    link?: string;
    github?: string;
  }>;
  education: Array<{
    institution: string;
    degree: string;
    location: string;
    startDate: string;
    endDate: string;
    gpa?: string;
    achievements?: string[];
  }>;
}

export const ResumePage = ({
  personalInfo,
  experiences,
  skillCategories,
  projects,
  education
}: ResumePageProps) => {
  return (
    <div className="min-h-screen min-w-screen bg-dark-950 font-sans text-dark-200">
      <div className="max-w-[1920px] mx-auto">
        <ResumeHeader
          name={personalInfo.name}
          title={personalInfo.title}
          email={personalInfo.email}
          phone={personalInfo.phone}
          location={personalInfo.location}
          website={personalInfo.website}
          linkedin={personalInfo.linkedin}
          github={personalInfo.github}
          avatar={personalInfo.avatar}
        />

        <div className="px-6 py-8 space-y-12">
          <ResumeExperience experiences={experiences} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <ResumeSkills skillCategories={skillCategories} />
            </div>
            <div>
              <ResumeProjects projects={projects} />
            </div>
          </div>

          <ResumeEducation education={education} />
        </div>
      </div>
    </div>
  );
};