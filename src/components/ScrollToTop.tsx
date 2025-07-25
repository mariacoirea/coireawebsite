import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    // Always scroll on route change for production reliability
    const scrollToTop = () => {
      // Method 1: Immediate scroll
      try {
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
      } catch (error) {
        // Silent fallback
      }
      
      // Method 2: Delayed scroll for DOM completion
      setTimeout(() => {
        try {
          window.scrollTo(0, 0);
          document.documentElement.scrollTop = 0;
          document.body.scrollTop = 0;
        } catch (error) {
          // Silent fallback
        }
      }, 100);
      
      // Method 3: Secondary fallback for stubborn cases
      setTimeout(() => {
        try {
          window.scrollTo(0, 0);
          document.documentElement.scrollTop = 0;
          document.body.scrollTop = 0;
        } catch (error) {
          // Silent fallback
        }
      }, 200);
    };

    // Execute immediately
    scrollToTop();
    
    // Also execute after DOM is ready
    requestAnimationFrame(() => {
      scrollToTop();
    });
  }, [location.pathname]);

  return null;
};

export default ScrollToTop;