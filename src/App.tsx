
import React, { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import ScrollToTop from "./components/ScrollToTop";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Offerings from "./pages/Offerings";
import Platform from "./pages/Platform";
import Insights from "./pages/Insights";
import BlogPost from "./pages/BlogPost";
import Events from "./pages/Events";
import Tools from "./pages/Tools";
import Journey from "./pages/Journey";
import Auth from "./pages/Auth";
import Admin from "./pages/Admin";
import PostEditor from "./pages/PostEditor";
import RaicesLatinas from "./pages/RaicesLatinas";
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
            {/* English routes */}
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/platform" element={<Platform />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/insights/:slug" element={<BlogPost />} />
            <Route path="/events" element={<Events />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/journey" element={<Journey />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/admin/posts/:id" element={<PostEditor />} />
            
            {/* Hidden legacy route for Offerings */}
            <Route path="/90days" element={<Offerings />} />
            <Route path="/es/90days" element={<Offerings />} />
            
            {/* Spanish routes */}
            <Route path="/es" element={<HomePage />} />
            <Route path="/es/about" element={<About />} />
            <Route path="/es/platform" element={<Platform />} />
            <Route path="/es/insights" element={<Insights />} />
            <Route path="/es/insights/:slug" element={<BlogPost />} />
            <Route path="/es/events" element={<Events />} />
            <Route path="/es/tools" element={<Tools />} />
            <Route path="/es/journey" element={<Journey />} />
            
            {/* Social Impact (standalone landing page) */}
            <Route path="/social-impact" element={<RaicesLatinas />} />
            <Route path="/es/social-impact" element={<RaicesLatinas />} />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
      </BrowserRouter>
    </HelmetProvider>
  </QueryClientProvider>
  );
};

export default App;
