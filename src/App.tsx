
import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Offerings from "./pages/Offerings";
import Insights from "./pages/Insights";
import BlogPost from "./pages/BlogPost";
import Tools from "./pages/Tools";
import Journey from "./pages/Journey";
import Auth from "./pages/Auth";
import Admin from "./pages/Admin";
import PostEditor from "./pages/PostEditor";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/offerings" element={<Offerings />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/insights/:slug" element={<BlogPost />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/journey" element={<Journey />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/posts/:id" element={<PostEditor />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
