interface AvatarProps {
  src: string;
  alt: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  borderColor?: string;
  borderWidth?: 'none' | 'thin' | 'medium' | 'thick';
  shadow?: 'none' | 'sm' | 'md' | 'lg';
  className?: string;
}

export const Avatar = ({
  src,
  alt,
  size = 'lg',
  borderColor = 'white',
  borderWidth = 'medium',
  shadow = 'lg',
  className = ''
}: AvatarProps) => {
  const sizeClasses = {
    sm: 'w-20 h-20',
    md: 'w-28 h-28',
    lg: 'w-36 h-36',
    xl: 'w-44 h-44'
  };

  const borderWidthClasses = {
    none: 'border-0',
    thin: 'border-2',
    medium: 'border-4',
    thick: 'border-8'
  };

  const shadowClasses = {
    none: '',
    sm: 'shadow',
    md: 'shadow-md',
    lg: 'shadow-xl'
  };

  return (
    <div
      className={`
        ${sizeClasses[size]}
        rounded-full
        overflow-hidden
        ${borderWidthClasses[borderWidth]}
        ${borderColor ? `border-${borderColor}` : ''}
        ${shadowClasses[shadow]}
        ${className}
      `}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
      />
    </div>
  );
};