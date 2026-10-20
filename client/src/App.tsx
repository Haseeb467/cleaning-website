import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { About, Booking, Blog, BlogPost, Contact, FAQ, Gallery, Legal, Pricing, Reviews, ServiceDetail, Services } from "./pages/SitePages";
import { SiteChrome } from "./site/SiteChrome";

function Router() {
  return <SiteChrome><Switch>
    <Route path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/services" component={Services} />
    <Route path="/services/:slug" component={ServiceDetail} />
    <Route path="/pricing" component={Pricing} />
    <Route path="/booking" component={Booking} />
    <Route path="/gallery" component={Gallery} />
    <Route path="/reviews" component={Reviews} />
    <Route path="/faq" component={FAQ} />
    <Route path="/contact" component={Contact} />
    <Route path="/blog" component={Blog} />
    <Route path="/blog/:slug" component={BlogPost} />
    <Route path="/privacy"><Legal kind="privacy" /></Route>
    <Route path="/terms"><Legal kind="terms" /></Route>
    <Route path="/404" component={NotFound} />
    <Route component={NotFound} />
  </Switch></SiteChrome>;
}

export default function App() {
  return <ErrorBoundary><ThemeProvider defaultTheme="light"><TooltipProvider><Toaster /><Router /></TooltipProvider></ThemeProvider></ErrorBoundary>;
}
