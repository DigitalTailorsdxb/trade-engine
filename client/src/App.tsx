import { useEffect } from "react";
import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import Features from "@/pages/features";
import Pricing from "@/pages/pricing";
import FAQ from "@/pages/faq";
import Contact from "@/pages/contact";
import Privacy from "@/pages/privacy";
import Terms from "@/pages/terms";
import Blog from "@/pages/blog";
import BlogPost from "@/pages/blog-post";
import NotFound from "@/pages/not-found";
import { WhatsAppButton } from "@/components/whatsapp-button";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

function usePageTracking() {
  const [location] = useLocation();
  useEffect(() => {
    if (window.gtag) {
      window.gtag("config", "G-8MQ4P1B1MD", {
        page_path: location,
      });
    }
  }, [location]);
}

function Router() {
  usePageTracking();
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/features" component={Features} />
      <Route path="/pricing" component={Pricing} />
      <Route path="/faq" component={FAQ} />
      <Route path="/contact" component={Contact} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/terms" component={Terms} />
      <Route path="/blog" component={Blog} />
      <Route path="/blog/:slug" component={BlogPost} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Router />
          <WhatsAppButton />
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
