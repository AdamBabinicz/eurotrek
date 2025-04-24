import React, { useRef, useEffect } from "react";
// Zmienione importy dla wouter i dodane dla i18next
import {
  Switch,
  Route,
  useLocation,
  Redirect,
  Router,
  useParams,
  Link,
} from "wouter";
import { useTranslation } from "react-i18next"; // Import dla tłumaczeń

import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found"; // Możemy użyć komponentu Route zamiast osobnej strony
import Home from "@/pages/Home";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import DestinationPage from "@/pages/Destination";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useTheme } from "@/context/ThemeContext";
import { HelmetProvider } from "react-helmet-async";
import PrivacyPolicyPage from "./pages/info/PrivacyPolicyPage";
import TermsOfUsePage from "./pages/info/TermsOfUsePage";
import AccessibilityPage from "./pages/info/AccessibilityPage";
import CookiePolicyPage from "./pages/info/CookiePolicyPage";
import FaqPage from "./pages/info/FaqPage";
import SitemapPage from "./pages/info/SitemapPage";
import SupportPage from "./pages/info/SupportPage";

// --- NOWY KOMPONENT: Ustawia język na podstawie parametru :lang ---
// Musi być renderowany wewnątrz kontekstu, który ma dostęp do parametrów URL
function LanguageSetter() {
  const params = useParams(); // Hook wouter do pobierania parametrów
  const { i18n } = useTranslation();
  const lang = params.lang; // Pobierz parametr :lang

  useEffect(() => {
    // Ustaw język tylko jeśli parametr istnieje, jest obsługiwany i różni się od obecnego
    if (
      lang &&
      i18n.options.supportedLngs && // Sprawdź czy supportedLngs jest zdefiniowane
      (i18n.options.supportedLngs as string[]).includes(lang) && // Sprawdź typowanie
      i18n.language !== lang
    ) {
      i18n.changeLanguage(lang);
    }
    // Można dodać logikę dla braku 'lang', jeśli 'pl' nie jest domyślnym w i18next
    // else if (!lang && i18n.language !== 'pl') {
    //   i18n.changeLanguage('pl'); // Ustaw domyślny, jeśli URL go nie ma
    // }
  }, [lang, i18n]);

  return null; // Ten komponent nic nie renderuje
}

function App() {
  const parisSectionRef = useRef<HTMLElement>(null);
  const themeContext = useTheme();
  const [location, setLocation] = useLocation(); // Hook wouter
  const { t, i18n } = useTranslation(); // Hook i18next

  // --- NOWA FUNKCJA POMOCNICZA: Generuje slug trasy ---
  // Używa klucza z pliku tłumaczeń (np. 'routes.about')
  const localizedSlug = (routeKey: string): string => {
    // Pobiera tłumaczenie z sekcji 'routes'
    // Upewnij się, że 'translation' to twój domyślny namespace w i18next
    return t(routeKey, { ns: "translation", keyPrefix: "routes" }) || routeKey; // Zwraca klucz jeśli tłumaczenia brak
  };

  // --- ZAKTUALIZOWANA FUNKCJA SCROLLOWANIA ---
  const scrollToParisFromFooter = () => {
    const defaultLang = "pl"; // Ustaw swój domyślny język
    const currentLang = i18n.language || defaultLang;
    const homePath = currentLang === defaultLang ? "/" : `/${currentLang}`;

    if (location === homePath) {
      parisSectionRef.current?.scrollIntoView({ behavior: "smooth" });
    } else {
      // Przekieruj na stronę główną w aktualnym języku z hashem
      setLocation(`${homePath}#paris`);
    }
  };

  // --- ZAKTUALIZOWANY useEffect DLA SCROLLOWANIA ---
  useEffect(() => {
    // Proste scrollowanie do góry przy zmianie lokalizacji, chyba że jest hash
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }

    // Obsługa scrollowania do #paris po zmianie lokalizacji (np. z footera)
    if (window.location.hash === "#paris") {
      // Dajemy chwilę na ewentualne renderowanie i zmianę języka
      const timer = setTimeout(() => {
        parisSectionRef.current?.scrollIntoView({ behavior: "smooth" });
        // Opcjonalnie: usuń hash z URL po przewinięciu, aby uniknąć problemów przy odświeżaniu
        // history.replaceState(null, '', window.location.pathname);
      }, 150); // Zwiększony lekko timeout
      return () => clearTimeout(timer); // Czyszczenie timera
    }
  }, [location]); // Zależność tylko od lokalizacji

  // --- DEFINICJE ŚCIEŻEK DLA ROUTERA ---
  // Używamy funkcji localizedSlug do tworzenia części URL
  const defaultLang = "pl"; // Definiujemy domyślny język
  const currentLang = i18n.language || defaultLang;

  // Generujemy pełne ścieżki dla aktualnego języka (używane w Navbar/Footer)
  // Możesz stworzyć osobną funkcję `createLocalizedPath` jak w poprzednich przykładach,
  // aby uniknąć powtarzania logiki prefiksu.

  return (
    <HelmetProvider>
      <div className="min-h-screen flex flex-col bg-background text-foreground">
        {/* Navbar teraz może potrzebować dostępu do i18n lub gotowych ścieżek */}
        <Navbar currentPath={location} />

        <main className="flex-grow px-4 sm:px-8 md:px-16 lg:px-40">
          {/* Wouter: LanguageSetter musi być wewnątrz kontekstu z parametrami */}
          {/* Definiujemy trasy, które mogą mieć parametr :lang */}
          <Route path="/:lang/:rest*">
            <LanguageSetter />
          </Route>
          {/* Osobny Route dla strony głównej bez języka też może potrzebować LanguageSetter,
              jeśli chcemy, by ustawiał domyślny język */}
          <Route path="/">
            {/* Można by tu dodać logikę ustawiania domyślnego języka,
                  ale i18next zazwyczaj robi to przy inicjalizacji */}
          </Route>

          <Switch>
            {/* --- TRASY DLA DOMYŚLNEGO JĘZYKA (bez prefiksu) --- */}
            <Route path="/">
              <Home ref={parisSectionRef} />
            </Route>
            {/* Używamy :lang? jako opcjonalnego parametru */}
            {/* Ale dla `wouter` lepiej zdefiniować osobne trasy */}
            <Route path={`/${localizedSlug("about")}`}>
              <About />
            </Route>
            <Route path={`/${localizedSlug("contact")}`}>
              <Contact />
            </Route>
            {/* Trasa dla listy podróży w domyślnym języku */}
            <Route path={`/${localizedSlug("destinations")}`}>
              {/* Komponent listy np. DestinationsListPage */}
              <div>Lista Podróży (PL) - (dodaj komponent)</div>
            </Route>
            <Route path={`/${localizedSlug("destinationDetail")}/:id`}>
              <DestinationPage />
            </Route>
            <Route path={`/${localizedSlug("privacy")}`}>
              <PrivacyPolicyPage />
            </Route>
            <Route path={`/${localizedSlug("terms")}`}>
              <TermsOfUsePage />
            </Route>
            <Route path={`/${localizedSlug("accessibility")}`}>
              <AccessibilityPage />
            </Route>
            <Route path={`/${localizedSlug("cookiePolicy")}`}>
              <CookiePolicyPage />
            </Route>
            <Route path={`/${localizedSlug("faq")}`}>
              <FaqPage />
            </Route>
            <Route path={`/${localizedSlug("sitemap")}`}>
              <SitemapPage />
            </Route>
            <Route path={`/${localizedSlug("support")}`}>
              <SupportPage />
            </Route>

            {/* --- TRASY Z PREFIKSEM JĘZYKA (:lang) --- */}
            <Route path="/:lang/">
              <Home ref={parisSectionRef} />
            </Route>
            <Route path={`/:lang/${localizedSlug("about")}`}>
              <About />
            </Route>
            <Route path={`/:lang/${localizedSlug("contact")}`}>
              <Contact />
            </Route>
            {/* Trasa dla listy podróży w danym języku */}
            <Route path={`/:lang/${localizedSlug("destinations")}`}>
              {/* Komponent listy np. DestinationsListPage */}
              <div>Lista Podróży (:lang) - (dodaj komponent)</div>
            </Route>
            <Route path={`/:lang/${localizedSlug("destinationDetail")}/:id`}>
              <DestinationPage />
            </Route>
            <Route path={`/:lang/${localizedSlug("privacy")}`}>
              <PrivacyPolicyPage />
            </Route>
            <Route path={`/:lang/${localizedSlug("terms")}`}>
              <TermsOfUsePage />
            </Route>
            <Route path={`/:lang/${localizedSlug("accessibility")}`}>
              <AccessibilityPage />
            </Route>
            <Route path={`/:lang/${localizedSlug("cookiePolicy")}`}>
              <CookiePolicyPage />
            </Route>
            <Route path={`/:lang/${localizedSlug("faq")}`}>
              <FaqPage />
            </Route>
            <Route path={`/:lang/${localizedSlug("sitemap")}`}>
              <SitemapPage />
            </Route>
            <Route path={`/:lang/${localizedSlug("support")}`}>
              <SupportPage />
            </Route>

            {/* --- 404 Fallback --- */}
            {/* Ten Route powinien pasować do wszystkiego innego */}
            <Route>
              <div className="container mx-auto px-4 py-16 text-center min-h-[60vh] flex flex-col justify-center items-center">
                <h2 className="text-6xl font-bold text-primary mb-4">404</h2>
                {/* Używamy t() dla tekstu 404 */}
                <p className="text-2xl mb-8">
                  {t(
                    "common.pageNotFound",
                    "Oops! Strona nie została znaleziona."
                  )}
                </p>
                {/* Link do strony głównej w aktualnym języku */}
                <Link
                  href={currentLang === defaultLang ? "/" : `/${currentLang}`}
                  className="px-6 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90 transition-colors"
                >
                  {t("common.backToHome", "Wróć na stronę główną")}
                </Link>
              </div>
            </Route>
          </Switch>
        </main>

        {/* Footer teraz może potrzebować dostępu do i18n lub gotowych ścieżek */}
        <Footer onParisLinkClick={scrollToParisFromFooter} />
        <Toaster />
      </div>
    </HelmetProvider>
  );
}

export default App;
