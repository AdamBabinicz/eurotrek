import React, { useRef, useEffect } from "react";
import { Switch, Route, useLocation } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useTheme } from "@/context/ThemeContext";
import DestinationPage from "@/pages/Destination";
import FeaturedDestination from "@/components/FeaturedDestination";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/destination/:id" component={DestinationPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const parisSectionRef = useRef<HTMLElement>(null); // Utwórz ref dla sekcji Paris
  const themeContext = useTheme();
  console.log("themeContext in App:", themeContext);
  const [location] = useLocation();

  const scrollToParisFromFooter = () => {
    parisSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar currentPath={location} />
      <main className="flex-grow px-0 md:px-40">
        <Router />
        <FeaturedDestination ref={parisSectionRef} />
        {/* Umieść FeaturedDestination i przekaż ref */}
      </main>
      <Footer onParisLinkClick={scrollToParisFromFooter} />
      {/* Przekaż funkcję do Footer */}
      <Toaster />
    </div>
  );
}

export default App;
