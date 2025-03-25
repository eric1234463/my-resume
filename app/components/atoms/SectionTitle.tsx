interface SectionTitleProps {
  title: string;
  className?: string;
}

export const SectionTitle = ({
  title,
  className = ''
}: SectionTitleProps) => {
  return (
    <h2
      className={`
        text-2xl
        font-bold
        text-primary-300
        mb-6
        pb-2
        relative
        after:content-['']
        after:absolute
        after:bottom-0
        after:left-0
        after:w-16
        after:h-1
        after:bg-primary-700
        after:rounded
        ${className}
      `}
    >
      {title}
    </h2>
  );
};