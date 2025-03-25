interface TagProps {
  label: string;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md';
  rounded?: 'default' | 'full';
  className?: string;
}

export const Tag = ({
  label,
  variant = 'primary',
  size = 'sm',
  rounded = 'full',
  className = ''
}: TagProps) => {
  const variantClasses = {
    primary: 'bg-primary-900 text-primary-300 border border-primary-700',
    secondary: 'bg-dark-700 text-secondary-300 border border-dark-600'
  };

  const sizeClasses = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-3 py-1 text-sm'
  };

  const roundedClasses = {
    default: 'rounded',
    full: 'rounded-full'
  };

  return (
    <span
      className={`
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${roundedClasses[rounded]}
        inline-block
        font-medium
        ${className}
      `}
    >
      {label}
    </span>
  );
};