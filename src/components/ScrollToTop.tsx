import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    // Only scroll if not already at top
    if (window.pageYOffset > 0 || document.documentElement.scrollTop > 0) {
      // Use requestAnimationFrame to ensure DOM is ready
      requestAnimationFrame(() => {
        // Delay slightly to ensure route transition is complete
        setTimeout(() => {
          try {
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: 'instant'
            });
          } catch (error) {
            // Fallback for older browsers
            window.scrollTo(0, 0);
            document.documentElement.scrollTop = 0;
            document.body.scrollTop = 0;
          }
        }, 50);
      });
    }
  }, [location.pathname]);

  return null;
};

export default ScrollToTop;