import { SectionTitle } from '~/components/atoms/SectionTitle';

interface EducationItem {
  institution: string;
  degree: string;
  location: string;
  startDate: string;
  endDate: string;
  gpa?: string;
  achievements?: string[];
}

interface ResumeEducationProps {
  education: EducationItem[];
}

export const ResumeEducation = ({ education }: ResumeEducationProps) => {
  return (
    <section>
      <SectionTitle title="Education" />

      <div className="space-y-6">
        {education.map((item, index) => (
          <div
            key={index}
            className="p-6 rounded-lg bg-dark-800 shadow-md border border-dark-700 hover:shadow-lg transition-shadow"
          >
            <div className="flex flex-col sm:flex-row sm:justify-between mb-3">
              <h3 className="font-bold text-lg text-white">
                {item.degree} <span className="text-primary-400">@ {item.institution}</span>
              </h3>
              <div className="text-dark-400 text-sm mt-1 sm:mt-0 font-medium">
                {item.startDate} – {item.endDate}
              </div>
            </div>

            <div className="text-dark-400 text-sm mb-4 flex items-center">
              <svg className="w-4 h-4 mr-1 text-primary-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
              </svg>
              {item.location}
              {item.gpa && <span className="ml-2 px-2 py-0.5 bg-dark-700 text-primary-300 rounded-full text-xs font-medium">GPA: {item.gpa}</span>}
            </div>

            {item.achievements && item.achievements.length > 0 && (
              <ul className="space-y-2 text-dark-300">
                {item.achievements.map((achievement, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-primary-500 mr-2">•</span>
                    {achievement}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};