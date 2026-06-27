import { useEffect } from "react";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Articles from "./pages/Articles";
import Problems from "./pages/Problems";
import Threats from "./pages/Threats";
import Help from "./pages/Help";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import PersonalDataPolicy from "./pages/PersonalDataPolicy";


function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/articles"} component={Articles} />
      <Route path={"/problems"} component={Problems} />
      <Route path={"/threats"} component={Threats} />
      <Route path={"/help"} component={Help} />
      <Route path={"/privacy-policy"} component={PrivacyPolicy} />
      <Route path={"/personal-data-policy"} component={PersonalDataPolicy} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// Global anchor link handler — redirects to home page if target section doesn't exist
function AnchorHandler() {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a');
      if (!link) return;

      const href = link.getAttribute('href');
      if (!href?.startsWith('#')) return;

      const hash = href.slice(1);
      const el = document.getElementById(hash);
      if (el) return; // element exists on current page — default behavior

      // Element not found — redirect to home with hash
      e.preventDefault();
      window.location.href = `/#${hash}`;
    };

    document.addEventListener('click', handleClick, { capture: true });
    return () => document.removeEventListener('click', handleClick, { capture: true });
  }, []);

  return null;
}

// NOTE: About Theme
// Toaster component uses next-themes for theme support

function App() {
  return (
    <ErrorBoundary>
      <TooltipProvider>
        <Toaster />
        <AnchorHandler />
        <Navbar />
        <Router />
      </TooltipProvider>
    </ErrorBoundary>
  );
}

export default App;
