
import React, { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import ScrollToTop from "./components/ScrollToTop";
import LanguageRouteWrapper from "./components/LanguageRouteWrapper";
import Index from "./pages/Index";
import About from "./pages/About";
import Offerings from "./pages/Offerings";
import Insights from "./pages/Insights";
import BlogPost from "./pages/BlogPost";
import Events from "./pages/Events";
import Tools from "./pages/Tools";
import Journey from "./pages/Journey";
import Auth from "./pages/Auth";
import Admin from "./pages/Admin";
import PostEditor from "./pages/PostEditor";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  // Enhanced scroll restoration management for production
  useEffect(() => {
    console.log('[App] Setting up scroll restoration');
    
    // Set scroll restoration to manual with multiple checks
    const setScrollRestoration = () => {
      try {
        if ('scrollRestoration' in history) {
          history.scrollRestoration = 'manual';
          console.log('[App] Scroll restoration set to manual');
        }
        
        // Also try on window.history as fallback
        if (window.history && 'scrollRestoration' in window.history) {
          window.history.scrollRestoration = 'manual';
          console.log('[App] Window history scroll restoration set to manual');
        }
      } catch (error) {
        console.error('[App] Error setting scroll restoration:', error);
      }
    };
    
    setScrollRestoration();
    
    // Re-apply after a short delay for production environments
    setTimeout(setScrollRestoration, 100);
    
    // Also apply when the page is fully loaded
    if (document.readyState !== 'complete') {
      window.addEventListener('load', setScrollRestoration, { once: true });
    }
  }, []);

  return (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          {/* English routes (default, no prefix) */}
          <Route path="/" element={<LanguageRouteWrapper><Index /></LanguageRouteWrapper>} />
          <Route path="/about" element={<LanguageRouteWrapper><About /></LanguageRouteWrapper>} />
          <Route path="/offerings" element={<LanguageRouteWrapper><Offerings /></LanguageRouteWrapper>} />
          <Route path="/insights" element={<LanguageRouteWrapper><Insights /></LanguageRouteWrapper>} />
          <Route path="/insights/:slug" element={<LanguageRouteWrapper><BlogPost /></LanguageRouteWrapper>} />
          <Route path="/events" element={<LanguageRouteWrapper><Events /></LanguageRouteWrapper>} />
          <Route path="/tools" element={<LanguageRouteWrapper><Tools /></LanguageRouteWrapper>} />
          <Route path="/journey" element={<LanguageRouteWrapper><Journey /></LanguageRouteWrapper>} />
          <Route path="/auth" element={<LanguageRouteWrapper><Auth /></LanguageRouteWrapper>} />
          <Route path="/admin" element={<LanguageRouteWrapper><Admin /></LanguageRouteWrapper>} />
          <Route path="/admin/posts/:id" element={<LanguageRouteWrapper><PostEditor /></LanguageRouteWrapper>} />
          
          {/* Spanish routes with /es prefix */}
          <Route path="/es" element={<LanguageRouteWrapper><Index /></LanguageRouteWrapper>} />
          <Route path="/es/acerca" element={<LanguageRouteWrapper><About /></LanguageRouteWrapper>} />
          <Route path="/es/ofertas" element={<LanguageRouteWrapper><Offerings /></LanguageRouteWrapper>} />
          <Route path="/es/perspectivas" element={<LanguageRouteWrapper><Insights /></LanguageRouteWrapper>} />
          <Route path="/es/perspectivas/:slug" element={<LanguageRouteWrapper><BlogPost /></LanguageRouteWrapper>} />
          <Route path="/es/eventos" element={<LanguageRouteWrapper><Events /></LanguageRouteWrapper>} />
          <Route path="/es/herramientas" element={<LanguageRouteWrapper><Tools /></LanguageRouteWrapper>} />
          <Route path="/es/travesia" element={<LanguageRouteWrapper><Journey /></LanguageRouteWrapper>} />
          <Route path="/es/auth" element={<LanguageRouteWrapper><Auth /></LanguageRouteWrapper>} />
          <Route path="/es/admin" element={<LanguageRouteWrapper><Admin /></LanguageRouteWrapper>} />
          <Route path="/es/admin/posts/:id" element={<LanguageRouteWrapper><PostEditor /></LanguageRouteWrapper>} />
          
          {/* Language-specific routes */}
          <Route path="/:lang" element={<LanguageRouteWrapper><Index /></LanguageRouteWrapper>} />
          <Route path="/:lang/about" element={<LanguageRouteWrapper><About /></LanguageRouteWrapper>} />
          <Route path="/:lang/offerings" element={<LanguageRouteWrapper><Offerings /></LanguageRouteWrapper>} />
          <Route path="/:lang/insights" element={<LanguageRouteWrapper><Insights /></LanguageRouteWrapper>} />
          <Route path="/:lang/insights/:slug" element={<LanguageRouteWrapper><BlogPost /></LanguageRouteWrapper>} />
          <Route path="/:lang/events" element={<LanguageRouteWrapper><Events /></LanguageRouteWrapper>} />
          <Route path="/:lang/tools" element={<LanguageRouteWrapper><Tools /></LanguageRouteWrapper>} />
          <Route path="/:lang/journey" element={<LanguageRouteWrapper><Journey /></LanguageRouteWrapper>} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<LanguageRouteWrapper><NotFound /></LanguageRouteWrapper>} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  </QueryClientProvider>
  );
};

export default App;
