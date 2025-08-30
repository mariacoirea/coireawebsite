import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from 'react-router-dom';

export const useLanguage = () => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const currentLanguage = i18n.language || 'en';
  
  const changeLanguage = (newLang: string) => {
    i18n.changeLanguage(newLang);
    
    // Update URL to reflect language change
    const currentPath = location.pathname;
    let newPath = currentPath;
    
    // Remove current language prefix if it exists
    if (currentPath.startsWith('/en/') || currentPath.startsWith('/es/')) {
      newPath = currentPath.substring(3);
    } else if (currentPath === '/en' || currentPath === '/es') {
      newPath = '/';
    }
    
    // Add new language prefix
    if (newLang !== 'en') {
      newPath = `/${newLang}${newPath === '/' ? '' : newPath}`;
    }
    
    navigate(newPath, { replace: true });
  };

  const getLocalizedPath = (path: string, lang?: string) => {
    const targetLang = lang || currentLanguage;
    if (targetLang === 'en') {
      return path;
    }
    return `/${targetLang}${path === '/' ? '' : path}`;
  };

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
  ];

  return {
    currentLanguage,
    changeLanguage,
    getLocalizedPath,
    languages,
  };
};