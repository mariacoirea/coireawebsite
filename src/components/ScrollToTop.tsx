import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    console.log('ScrollToTop triggered for path:', location.pathname);
    console.log('Current scroll position:', window.pageYOffset, document.documentElement.scrollTop);
    
    // Multiple scroll methods for better browser compatibility
    const scrollToTop = () => {
      try {
        // Method 1: Immediate scroll with multiple fallbacks
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
        console.log('Method 1 executed');
        
        // Method 2: Delayed scroll for stubborn cases
        setTimeout(() => {
          window.scrollTo(0, 0);
          document.documentElement.scrollTop = 0;
          document.body.scrollTop = 0;
          console.log('Method 2 executed');
          console.log('Final scroll position:', window.pageYOffset, document.documentElement.scrollTop);
        }, 0);
        
        // Method 3: Animation frame for smooth rendering
        requestAnimationFrame(() => {
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'instant'
          });
          console.log('Method 3 executed');
        });
        
        // Method 4: Force scroll after DOM is ready
        setTimeout(() => {
          window.scrollTo(0, 0);
          document.documentElement.scrollTop = 0;
          document.body.scrollTop = 0;
          console.log('Method 4 executed - forced scroll');
        }, 100);
        
      } catch (error) {
        console.warn('ScrollToTop failed:', error);
      }
    };

    scrollToTop();
  }, [location.pathname]);

  return null;
};

export default ScrollToTop;