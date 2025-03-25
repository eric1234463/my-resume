import { SectionTitle } from '~/components/atoms/SectionTitle';
import { TagList } from '~/components/molecules/TagList';

interface SkillCategory {
  name: string;
  skills: string[];
}

interface ResumeSkillsProps {
  skillCategories: SkillCategory[];
}

export const ResumeSkills = ({ skillCategories }: ResumeSkillsProps) => {
  return (
    <section>
      <SectionTitle title="Skills" />

      <div className="space-y-6">
        {skillCategories.map((category, index) => (
          <div key={index} className="p-5 rounded-lg bg-dark-800 shadow border border-dark-700">
            <h3 className="font-bold text-white mb-3 flex items-center">
              <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
              {category.name}
            </h3>
            <TagList
              tags={category.skills}
              variant="primary"
              size="sm"
            />
          </div>
        ))}
      </div>
    </section>
  );
};