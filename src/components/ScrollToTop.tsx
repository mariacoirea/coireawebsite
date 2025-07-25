import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    // Multiple scroll methods for better browser compatibility
    const scrollToTop = () => {
      try {
        // Method 1: Immediate scroll with multiple fallbacks
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
        
        // Method 2: Delayed scroll for stubborn cases
        setTimeout(() => {
          window.scrollTo(0, 0);
          document.documentElement.scrollTop = 0;
          document.body.scrollTop = 0;
        }, 0);
        
        // Method 3: Animation frame for smooth rendering
        requestAnimationFrame(() => {
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'instant'
          });
        });
      } catch (error) {
        console.warn('ScrollToTop failed:', error);
      }
    };

    scrollToTop();
  }, [location.pathname]);

  return null;
};

export default ScrollToTop;