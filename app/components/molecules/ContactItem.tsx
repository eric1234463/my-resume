import React from 'react';

interface ContactItemProps {
  icon: React.ReactNode;
  href?: string;
  label: string;
  isExternal?: boolean;
  theme?: 'light' | 'dark';
}

export const ContactItem = ({
  icon,
  href,
  label,
  isExternal = false,
  theme = 'dark'
}: ContactItemProps) => {
  const themeStyles = {
    light: {
      icon: 'text-white',
      text: 'text-white hover:text-white/80'
    },
    dark: {
      icon: 'text-primary-400',
      text: 'text-dark-300 hover:text-primary-400'
    }
  };

  const content = (
    <div className="flex items-center">
      <div className={`w-4 h-4 mr-2 ${themeStyles[theme].icon}`}>
        {icon}
      </div>
      <span className={`${themeStyles[theme].text} transition-colors`}>
        {label}
      </span>
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        className={`${themeStyles[theme].text} transition-colors`}
      >
        {content}
      </a>
    );
  }

  return content;
};