import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    console.log('[ScrollToTop] Route changed to:', location.pathname);
    
    const attemptScroll = (attempt: number = 1, maxAttempts: number = 3): Promise<boolean> => {
      return new Promise((resolve) => {
        const scrollY = window.pageYOffset || document.documentElement.scrollTop;
        console.log('[ScrollToTop] Attempt', attempt, '- Current scroll position:', scrollY);
        
        try {
          // Use the most compatible scroll method
          window.scrollTo(0, 0);
          document.documentElement.scrollTop = 0;
          document.body.scrollTop = 0;
          
          // Verify scroll worked after a brief delay
          setTimeout(() => {
            const newScrollY = window.pageYOffset || document.documentElement.scrollTop;
            console.log('[ScrollToTop] After scroll attempt', attempt, '- New position:', newScrollY);
            
            if (newScrollY === 0) {
              console.log('[ScrollToTop] Success on attempt', attempt);
              resolve(true);
            } else if (attempt < maxAttempts) {
              console.log('[ScrollToTop] Retrying... attempt', attempt + 1);
              // Exponential backoff: 150ms, 300ms, 600ms
              const delay = 150 * Math.pow(2, attempt - 1);
              setTimeout(() => {
                attemptScroll(attempt + 1, maxAttempts).then(resolve);
              }, delay);
            } else {
              console.warn('[ScrollToTop] Failed after', maxAttempts, 'attempts');
              resolve(false);
            }
          }, 50);
        } catch (error) {
          console.error('[ScrollToTop] Error on attempt', attempt, ':', error);
          if (attempt < maxAttempts) {
            const delay = 150 * Math.pow(2, attempt - 1);
            setTimeout(() => {
              attemptScroll(attempt + 1, maxAttempts).then(resolve);
            }, delay);
          } else {
            resolve(false);
          }
        }
      });
    };

    // Wait for DOM to be ready, then attempt scroll
    const startScrollAttempt = () => {
      if (document.readyState === 'complete') {
        console.log('[ScrollToTop] DOM ready, starting scroll attempt');
        attemptScroll();
      } else {
        console.log('[ScrollToTop] Waiting for DOM to be ready...');
        window.addEventListener('load', () => {
          console.log('[ScrollToTop] Window loaded, starting scroll attempt');
          attemptScroll();
        }, { once: true });
      }
    };

    // Start immediately
    startScrollAttempt();
    
    // Also try after requestAnimationFrame for React Router transitions
    requestAnimationFrame(() => {
      console.log('[ScrollToTop] requestAnimationFrame callback, attempting scroll');
      attemptScroll();
    });
  }, [location.pathname]);

  return null;
};

export default ScrollToTop;