import { Avatar } from '~/components/atoms/Avatar';
import { ContactItem } from '~/components/molecules/ContactItem';
import {
  EmailIcon,
  PhoneIcon,
  LocationIcon,
  WebsiteIcon,
  LinkedinIcon,
  GithubIcon
} from '~/components/atoms/Icon';

interface ResumeHeaderProps {
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
}

export const ResumeHeader = ({
  name,
  title,
  email,
  phone,
  location,
  website,
  linkedin,
  github,
  avatar,
}: ResumeHeaderProps) => {
  return (
    <header className="relative pt-16 pb-8 overflow-hidden bg-gradient-to-r from-primary-900 to-secondary-900">
      <div className="absolute top-0 left-0 w-full h-4 bg-primary-700"></div>

      <div className="px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-center">
          {avatar && (
            <div className="mb-6 md:mb-0 md:mr-8 flex justify-center">
              <Avatar
                src={avatar.src}
                alt={avatar.alt || `${name}'s profile picture`}
                size={avatar.size || 'xl'}
                borderColor="dark-800"
                borderWidth="medium"
                shadow="lg"
                className={avatar.className}
              />
            </div>
          )}

          <div className="md:flex-1">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
              {name}
            </h1>
            <h2 className="text-lg md:text-xl text-primary-300 mb-6">{title}</h2>

            <div className="flex flex-wrap gap-5 text-sm">
              <ContactItem
                icon={<EmailIcon />}
                href={`mailto:${email}`}
                label={email}
                theme="light"
              />

              <ContactItem
                icon={<PhoneIcon />}
                href={`tel:${phone}`}
                label={phone}
                theme="light"
              />

              <ContactItem
                icon={<LocationIcon />}
                label={location}
                theme="light"
              />

              {website && (
                <ContactItem
                  icon={<WebsiteIcon />}
                  href={website}
                  label={new URL(website).hostname}
                  isExternal
                  theme="light"
                />
              )}

              {linkedin && (
                <ContactItem
                  icon={<LinkedinIcon />}
                  href={linkedin}
                  label="LinkedIn"
                  isExternal
                  theme="light"
                />
              )}

              {github && (
                <ContactItem
                  icon={<GithubIcon />}
                  href={github}
                  label="GitHub"
                  isExternal
                  theme="light"
                />
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-4 bg-dark-950 rounded-t-3xl"></div>
    </header>
  );
};