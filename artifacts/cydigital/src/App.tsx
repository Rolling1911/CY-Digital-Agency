import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Home from "@/pages/Home";
import ServicesPage from "@/pages/ServicesPage";
import PackagesPage from "@/pages/PackagesPage";
import PortfolioPage from "@/pages/PortfolioPage";
import AboutPage from "@/pages/AboutPage";
import ContactPage from "@/pages/ContactPage";
import WebDesignPage from "@/pages/WebDesignPage";
import SocialMediaPage from "@/pages/SocialMediaPage";
import GraphicDesignPage from "@/pages/GraphicDesignPage";
import ContentCreationPage from "@/pages/ContentCreationPage";
import ConceptsPage from "@/pages/ConceptsPage";
import ConceptsBarbersPage from "@/pages/ConceptsBarbersPage";
import ConceptsGymsPage from "@/pages/ConceptsGymsPage";
import ConceptsRestaurantsPage from "@/pages/ConceptsRestaurantsPage";
import ConceptViewerPage from "@/pages/ConceptViewerPage";
import InvestorsDianiPage from "@/pages/InvestorsDianiPage";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/ypiresies" component={ServicesPage} />
      <Route path="/ypiresies/kataskevi-istoselidaas" component={WebDesignPage} />
      <Route path="/ypiresies/social-media" component={SocialMediaPage} />
      <Route path="/ypiresies/grafistika" component={GraphicDesignPage} />
      <Route path="/ypiresies/dimioyrgia-periekhomenou" component={ContentCreationPage} />
      <Route path="/paketa" component={PackagesPage} />
      <Route path="/portfolio" component={PortfolioPage} />
      <Route path="/giati-emas" component={AboutPage} />
      <Route path="/epikoinonia" component={ContactPage} />
      <Route path="/concepts" component={ConceptsPage} />
      <Route path="/concepts/barbers" component={ConceptsBarbersPage} />
      <Route path="/concepts/royal-blade">{() => <ConceptViewerPage conceptId="royal-blade" />}</Route>
      <Route path="/concepts/the-cut-studio">{() => <ConceptViewerPage conceptId="the-cut-studio" />}</Route>
      <Route path="/concepts/heritage-barber">{() => <ConceptViewerPage conceptId="heritage-barber" />}</Route>
      <Route path="/concepts/gyms" component={ConceptsGymsPage} />
      <Route path="/concepts/restaurants" component={ConceptsRestaurantsPage} />
      <Route path="/live-previews/restaurants/mare-vista">{() => <ConceptViewerPage conceptId="mare-vista" />}</Route>
      <Route path="/live-previews/restaurants/smash-district">{() => <ConceptViewerPage conceptId="smash-district" />}</Route>
      <Route path="/live-previews/restaurants/evora-mediterranean">{() => <ConceptViewerPage conceptId="evora-mediterranean" />}</Route>
      <Route path="/live-previews/gyms/titan-house">{() => <ConceptViewerPage conceptId="titan-house" />}</Route>
      <Route path="/live-previews/gyms/aura-wellness">{() => <ConceptViewerPage conceptId="aura-wellness" />}</Route>
      <Route path="/live-previews/gyms/velocity-lab">{() => <ConceptViewerPage conceptId="velocity-lab" />}</Route>
      <Route path="/investors/diani" component={InvestorsDianiPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <LanguageProvider>
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
