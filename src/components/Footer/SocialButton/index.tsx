import Link from 'next/link';
import { IconType } from 'react-icons/lib/cjs';

import { Button } from './styles';

interface SocialButtonProps {
  Icon: IconType;
  href?: string;
  label?: string;
}

const SocialButton: React.FC<SocialButtonProps> = ({ Icon, href, label }) => (
  <Link href={href} passHref>
    <Button aria-label={label} target="_blank" rel="noopener noreferrer">
      <Icon size={40} />
    </Button>
  </Link>
);

export default SocialButton;
