import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export type Language = 'en' | 'es';

export const useLanguage = () => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const currentLanguage = (i18n.language.split('-')[0] as Language) || 'en';

  useEffect(() => {
    // Extract language from URL path
    const pathParts = location.pathname.split('/').filter(Boolean);
    const urlLang = pathParts[0] === 'es' ? 'es' : 'en';
    
    if (i18n.language !== urlLang) {
      i18n.changeLanguage(urlLang);
    }
  }, [location.pathname, i18n]);

  const changeLanguage = (lang: Language) => {
    const pathParts = location.pathname.split('/').filter(Boolean);
    const currentLang = pathParts[0] === 'es' ? 'es' : 'en';
    
    let newPath: string;
    
    if (lang === 'es') {
      // Switch to Spanish
      if (currentLang === 'en') {
        newPath = '/es' + location.pathname;
      } else {
        newPath = location.pathname;
      }
    } else {
      // Switch to English
      if (currentLang === 'es') {
        newPath = location.pathname.replace(/^\/es/, '') || '/';
      } else {
        newPath = location.pathname;
      }
    }
    
    i18n.changeLanguage(lang);
    navigate(newPath);
  };

  const getLocalizedPath = (path: string): string => {
    if (currentLanguage === 'es') {
      return `/es${path}`;
    }
    return path;
  };

  return {
    currentLanguage,
    changeLanguage,
    getLocalizedPath,
    isSpanish: currentLanguage === 'es',
  };
};
