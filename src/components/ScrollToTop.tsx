import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    console.log('[ScrollToTop] Route changed to:', location.pathname);
    
    // Use requestAnimationFrame to avoid forced reflow during DOM updates
    const performScroll = () => {
      requestAnimationFrame(() => {
        try {
          // Use the most compatible and performant scroll method
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'instant' // Instant to avoid animation conflicts
          });
          
          // Fallback for older browsers - but avoid reading scroll position
          document.documentElement.scrollTop = 0;
          document.body.scrollTop = 0;
          
          console.log('[ScrollToTop] Scroll completed');
        } catch (error) {
          console.error('[ScrollToTop] Error:', error);
          // Fallback method
          try {
            window.scrollTo(0, 0);
          } catch (fallbackError) {
            console.error('[ScrollToTop] Fallback error:', fallbackError);
          }
        }
      });
    };

    // For immediate scroll on route change
    performScroll();
    
    // Additional attempt after a short delay to handle React Router transitions
    // Use requestIdleCallback if available for better performance
    if ('requestIdleCallback' in window) {
      requestIdleCallback(performScroll, { timeout: 100 });
    } else {
      setTimeout(performScroll, 50);
    }
  }, [location.pathname]);

  return null;
};

export default ScrollToTop;