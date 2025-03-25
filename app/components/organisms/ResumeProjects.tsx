import { SectionTitle } from '~/components/atoms/SectionTitle';
import { TagList } from '~/components/molecules/TagList';
import { GithubIcon, LinkIcon } from '~/components/atoms/Icon';

interface ProjectItem {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  github?: string;
}

interface ResumeProjectsProps {
  projects: ProjectItem[];
}

export const ResumeProjects = ({ projects }: ResumeProjectsProps) => {
  return (
    <section>
      <SectionTitle title="Projects" />

      <div className="grid grid-cols-1 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="p-5 rounded-lg bg-dark-800 shadow hover:shadow-lg transition-all border border-dark-700"
          >
            <div className="flex justify-between items-start mb-3">
              <h3 className="font-bold text-lg text-white">
                {project.title}
              </h3>
              <div className="flex space-x-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-dark-400 hover:text-primary-400 transition-colors"
                    aria-label={`GitHub repository for ${project.title}`}
                  >
                    <GithubIcon className="w-5 h-5" />
                  </a>
                )}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-dark-400 hover:text-primary-400 transition-colors"
                    aria-label={`Live demo for ${project.title}`}
                  >
                    <LinkIcon className="w-5 h-5" />
                  </a>
                )}
              </div>
            </div>

            <p className="text-dark-400 mb-4 text-sm">
              {project.description}
            </p>

            <TagList
              tags={project.technologies}
              variant="primary"
              size="sm"
            />
          </div>
        ))}
      </div>
    </section>
  );
};