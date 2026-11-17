import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import Snowfall from "@/components/Snowfall";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider, useLanguage } from "@/contexts/LanguageContext";
import { getPathLanguage } from "@/lib/languageRoutes";
import Home from "@/pages/Home";
import ServicesPage from "@/pages/ServicesPage";
import PackagesPage from "@/pages/PackagesPage";
import AboutPage from "@/pages/AboutPage";
import ContactPage from "@/pages/ContactPage";
import WebDesignPage from "@/pages/WebDesignPage";
import SocialMediaPage from "@/pages/SocialMediaPage";
import GraphicDesignPage from "@/pages/GraphicDesignPage";
import ContentCreationPage from "@/pages/ContentCreationPage";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

function LanguageRouteSync() {
  const [location] = useLocation();
  const { setLanguage } = useLanguage();

  useEffect(() => {
    setLanguage(getPathLanguage(location));
  }, [location]);

  return null;
}

function Router() {
  return (
    <>
      <LanguageRouteSync />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/en" component={Home} />

        <Route path="/ypiresies" component={ServicesPage} />
        <Route path="/en/services" component={ServicesPage} />

        <Route path="/ypiresies/kataskevi-istoselidas" component={WebDesignPage} />
        <Route path="/en/services/website-development" component={WebDesignPage} />

        <Route path="/ypiresies/social-media" component={SocialMediaPage} />
        <Route path="/en/services/social-media" component={SocialMediaPage} />

        <Route path="/ypiresies/grafistika" component={GraphicDesignPage} />
        <Route path="/en/services/graphic-design" component={GraphicDesignPage} />

        <Route path="/ypiresies/dimioyrgia-periekhomenou" component={ContentCreationPage} />
        <Route path="/en/services/content-creation" component={ContentCreationPage} />

        <Route path="/paketa" component={PackagesPage} />
        <Route path="/en/packages" component={PackagesPage} />

        <Route path="/giati-emas" component={AboutPage} />
        <Route path="/en/about" component={AboutPage} />

        <Route path="/epikoinonia" component={ContactPage} />
        <Route path="/en/contact" component={ContactPage} />

        <Route component={NotFound} />
      </Switch>
    </>
  );
}

function App() {
  return (
    <LanguageProvider>
      <Snowfall />
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
            <Router />
          </WouterRouter>
          <Toaster />
        </TooltipProvider>
      </QueryClientProvider>
    </LanguageProvider>
  );
}

export default App;
