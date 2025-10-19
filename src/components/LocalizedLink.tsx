import { Link, LinkProps } from 'react-router-dom';
import { useLanguage } from '@/hooks/useLanguage';

interface LocalizedLinkProps extends Omit<LinkProps, 'to'> {
  to: string;
}

const LocalizedLink = ({ to, ...props }: LocalizedLinkProps) => {
  const { getLocalizedPath } = useLanguage();
  
  return <Link to={getLocalizedPath(to)} {...props} />;
};

export default LocalizedLink;
