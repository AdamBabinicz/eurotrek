import React, { useRef, useEffect } from "react";
import { Switch, Route, useLocation, Link } from "wouter"; // Dodaj Link do strony 404
import { Toaster } from "@/components/ui/toaster";
// Importuj komponenty stron (alias @/pages/...)
import NotFound from "@/pages/not-found"; // Użyjemy go explicite w Route
import Home from "@/pages/Home";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import DestinationPage from "@/pages/Destination";
// Importuj komponenty layoutu (alias @/components/...)
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
// Importuj kontekst i hooki
import { useTheme } from "@/context/ThemeContext"; // Zakładam, że istnieje i działa
import { HelmetProvider } from "react-helmet-async";
// Importuj NOWE strony informacyjne (ścieżka względna lub alias)
import PrivacyPolicyPage from "./pages/info/PrivacyPolicyPage"; // Dostosuj ścieżkę jeśli używasz aliasów
import TermsOfUsePage from "./pages/info/TermsOfUsePage";
import AccessibilityPage from "./pages/info/AccessibilityPage";
import CookiePolicyPage from "./pages/info/CookiePolicyPage";
import FaqPage from "./pages/info/FaqPage";
import SitemapPage from "./pages/info/SitemapPage";
import SupportPage from "./pages/info/SupportPage";

// Nie potrzebujemy już osobnego komponentu Router

function App() {
  // Ref dla sekcji "Paris" - przekazywany tylko do komponentu Home
  const parisSectionRef = useRef<HTMLElement>(null);
  // Kontekst motywu (jeśli używasz)
  const themeContext = useTheme(); // Upewnij się, że działa poprawnie
  // Lokalizacja dla Navbar i scroll-to-top
  const [location, setLocation] = useLocation(); // setLocation może być potrzebne

  // Funkcja przewijania do sekcji Paris (przekazywana do Footer)
  const scrollToParisFromFooter = () => {
    // Jeśli jesteśmy na stronie głównej, przewiń
    if (location === "/") {
      parisSectionRef.current?.scrollIntoView({ behavior: "smooth" });
    } else {
      // Jeśli jesteśmy na innej stronie, przejdź do strony głównej z hashem
      setLocation("/#paris"); // Wouter powinien obsłużyć hash po nawigacji
    }
  };

  // Przewijanie do góry przy zmianie ścieżki
  useEffect(() => {
    // Sprawdź, czy zmiana nie jest tylko hashem na tej samej stronie
    if (!window.location.hash || window.location.pathname !== location) {
      window.scrollTo(0, 0);
    }
    // Dodatkowa logika dla hasha #paris po nawigacji
    if (window.location.hash === "#paris") {
      // Daj przeglądarce chwilę na renderowanie po zmianie ścieżki
      setTimeout(() => {
        parisSectionRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 100); // Krótkie opóźnienie może pomóc
    }
  }, [location]); // Uruchom przy zmianie `location`

  return (
    // 1. HelmetProvider obejmuje całą aplikację
    <HelmetProvider>
      <div className="min-h-screen flex flex-col bg-background text-foreground">
        {" "}
        {/* Użyj zmiennych CSS dla tła/tekstu */}
        <Navbar currentPath={location} />
        {/* 2. <main> zawiera tylko Switch routingu */}
        <main className="flex-grow px-4 sm:px-8 md:px-16 lg:px-40">
          {" "}
          {/* Dostosuj padding responsywnie */}
          <Switch>
            {/* 3. Przekaż ref tylko do komponentu Home */}
            <Route path="/">
              <Home ref={parisSectionRef} />
            </Route>
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/destination/:id" component={DestinationPage} />

            {/* --- NOWE TRASY DLA STRON INFORMACYJNYCH --- */}
            <Route path="/privacy-policy" component={PrivacyPolicyPage} />
            <Route path="/terms-of-use" component={TermsOfUsePage} />
            <Route path="/accessibility" component={AccessibilityPage} />
            <Route path="/cookie-policy" component={CookiePolicyPage} />
            <Route path="/faq" component={FaqPage} />
            <Route path="/sitemap" component={SitemapPage} />
            <Route path="/support" component={SupportPage} />

            {/* --- Trasa 404 (jawnie) --- */}
            {/* Użyj komponentu NotFound, jeśli go masz */}
            {/* <Route component={NotFound} /> */}
            {/* Lub zdefiniuj prosty 404 inline */}
            <Route>
              <div className="container mx-auto px-4 py-16 text-center min-h-[60vh] flex flex-col justify-center items-center">
                <h2 className="text-6xl font-bold text-primary mb-4">404</h2>
                <p className="text-2xl mb-8">
                  Oops! Strona nie została znaleziona.
                </p>
                <Link
                  href="/"
                  className="px-6 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90 transition-colors"
                >
                  Wróć na stronę główną
                </Link>
              </div>
            </Route>
          </Switch>
        </main>
        {/* 4. FeaturedDestination zostało usunięte stąd - powinno być w Home.tsx */}
        <Footer onParisLinkClick={scrollToParisFromFooter} />
        <Toaster />
      </div>
    </HelmetProvider>
  );
}

export default App;
