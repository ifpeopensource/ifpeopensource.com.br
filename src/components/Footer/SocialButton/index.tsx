import { IconType } from 'react-icons/lib/cjs';

import { Button } from './styles';

interface SocialButtonProps {
  Icon: IconType;
  href?: string;
  label?: string;
}

const SocialButton: React.FC<SocialButtonProps> = ({ Icon, href, label }) => (
  <Button
    href={href}
    aria-label={label}
    target="_blank"
    rel="noopener noreferrer"
  >
    <Icon size={40} />
  </Button>
);

export default SocialButton;
