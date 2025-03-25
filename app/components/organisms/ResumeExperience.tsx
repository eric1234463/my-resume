import { SectionTitle } from '~/components/atoms/SectionTitle';
import { TagList } from '~/components/molecules/TagList';

interface ExperienceItem {
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string | 'Present';
  description: string[];
  technologies?: string[];
}

interface ResumeExperienceProps {
  experiences: ExperienceItem[];
}

export const ResumeExperience = ({ experiences }: ResumeExperienceProps) => {
  return (
    <section>
      <SectionTitle title="Professional Experience" />

      <div className="space-y-8">
        {experiences.map((experience, index) => (
          <div
            key={index}
            className="p-6 rounded-lg bg-dark-800 shadow-md border border-dark-700 hover:shadow-lg transition-shadow"
          >
            <div className="flex flex-col sm:flex-row sm:justify-between mb-3">
              <h3 className="font-bold text-lg text-white">
                {experience.position} <span className="text-primary-400">@ {experience.company}</span>
              </h3>
              <div className="text-dark-400 text-sm mt-1 sm:mt-0 font-medium">
                {experience.startDate} – {experience.endDate}
              </div>
            </div>

            <div className="text-dark-400 text-sm mb-4 flex items-center">
              <svg className="w-4 h-4 mr-1 text-primary-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
              </svg>
              {experience.location}
            </div>

            <ul className="mb-4 space-y-2 text-dark-300">
              {experience.description.map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span>
                  {item}
                </li>
              ))}
            </ul>

            {experience.technologies && (
              <TagList
                tags={experience.technologies}
                variant="primary"
                className="mt-3"
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};