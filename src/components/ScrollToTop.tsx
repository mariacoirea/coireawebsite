import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    // Prevent scroll restoration
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }

    // Use requestAnimationFrame for better timing
    const scrollToTop = () => {
      requestAnimationFrame(() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'instant'
        });
      });
    };

    scrollToTop();
  }, [location.pathname]);

  return null;
};

export default ScrollToTop;