import { Tag } from '~/components/atoms/Tag';

interface TagListProps {
  tags: string[];
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md';
  rounded?: 'default' | 'full';
  className?: string;
}

export const TagList = ({
  tags,
  variant = 'primary',
  size = 'sm',
  rounded = 'full',
  className = ''
}: TagListProps) => {
  if (!tags.length) return null;

  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {tags.map((tag, index) => (
        <Tag
          key={index}
          label={tag}
          variant={variant}
          size={size}
          rounded={rounded}
        />
      ))}
    </div>
  );
};