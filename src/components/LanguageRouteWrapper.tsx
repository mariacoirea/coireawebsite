import { useEffect } from 'react';
import { useParams, Navigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface LanguageRouteWrapperProps {
  children: React.ReactNode;
}

const LanguageRouteWrapper = ({ children }: LanguageRouteWrapperProps) => {
  const { lang } = useParams<{ lang: string }>();
  const { i18n } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    if (lang && (lang === 'en' || lang === 'es')) {
      i18n.changeLanguage(lang);
    } else if (!lang) {
      // Default to English for routes without language prefix
      i18n.changeLanguage('en');
    }
  }, [lang, i18n]);

  // If invalid language in URL, redirect to English version
  if (lang && lang !== 'en' && lang !== 'es') {
    const newPath = location.pathname.replace(`/${lang}`, '');
    return <Navigate to={newPath || '/'} replace />;
  }

  return <>{children}</>;
};

export default LanguageRouteWrapper;