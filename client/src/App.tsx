import React, { useRef, useEffect } from "react";
import {
  Switch,
  Route,
  useLocation,
  // Redirect, // Nie jest używany
  // Router,   // Nie jest używany
  useParams,
  Link,
} from "wouter";
import { useTranslation } from "react-i18next";

// --- Zaimportuj funkcję z utils ---
import { localizedSlug } from "@/utils/localization"; // Dostosuj ścieżkę

import { Toaster } from "@/components/ui/toaster";
// import NotFound from "@/pages/not-found"; // Nie jest używany
import Home from "@/pages/Home";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import DestinationPage from "@/pages/Destination";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
// import { useTheme } from "@/context/ThemeContext"; // Nie jest używany
import { HelmetProvider } from "react-helmet-async";
import PrivacyPolicyPage from "./pages/info/PrivacyPolicyPage";
import TermsOfUsePage from "./pages/info/TermsOfUsePage";
import AccessibilityPage from "./pages/info/AccessibilityPage";
import CookiePolicyPage from "./pages/info/CookiePolicyPage";
import FaqPage from "./pages/info/FaqPage";
import SitemapPage from "./pages/info/SitemapPage";
import SupportPage from "./pages/info/SupportPage";

// Komponent LanguageSetter z poprawką
function LanguageSetter() {
  const params = useParams();
  const { i18n } = useTranslation();
  const lang = params.lang;

  useEffect(() => {
    if (
      lang &&
      i18n.options.supportedLngs &&
      (i18n.options.supportedLngs as string[]).includes(lang) &&
      i18n.language !== lang
    ) {
      i18n.changeLanguage(lang);
    }
  }, [lang, i18n]);

  return null; // <<< POPRAWKA: Dodano brakujący return null
}

function App() {
  const parisSectionRef = useRef<HTMLElement>(null);
  // const themeContext = useTheme(); // Nie jest używane
  const [location, setLocation] = useLocation();
  const { t, i18n } = useTranslation(); // Pobierz instancję i18n

  // --- Funkcja scrollToParisFromFooter (bez zmian) ---
  const scrollToParisFromFooter = () => {
    const defaultLang = "pl";
    const currentLang = i18n.language || defaultLang;
    const homePath = currentLang === defaultLang ? "/" : `/${currentLang}`;

    if (location === homePath) {
      parisSectionRef.current?.scrollIntoView({ behavior: "smooth" });
    } else {
      setLocation(`${homePath}#paris`);
    }
  };

  // --- useEffect dla scrollowania (bez zmian) ---
  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }

    if (window.location.hash === "#paris") {
      const timer = setTimeout(() => {
        parisSectionRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [location]);

  const defaultLang = "pl";
  const currentLang = i18n.language || defaultLang;

  // --- Blok Debugowania i18next ---
  console.log("--- App Component Debug ---");
  console.log("i18n.isInitialized:", i18n.isInitialized);
  console.log("i18n.language:", i18n.language);
  const aboutResource = i18n.getResource("pl", "translation", "routes.about");
  console.log(
    "Resource for 'pl', 'translation', 'routes.about':",
    aboutResource
  );
  const translatedAboutSimple = t("routes.about");
  console.log("Simple t('routes.about'):", translatedAboutSimple);
  const translatedAboutWithOptions = t("about", {
    ns: "translation",
    keyPrefix: "routes",
  });
  console.log(
    "t('about', { ns: 'translation', keyPrefix: 'routes' }):",
    translatedAboutWithOptions
  );
  let slugFromUtils = null;
  try {
    slugFromUtils = localizedSlug("about", i18n); // Użyj zaimportowanej funkcji
    console.log("Result from localizedSlug('about', i18n):", slugFromUtils);
  } catch (error) {
    console.error("Error calling localizedSlug from utils:", error);
  }
  console.log("--- End App Component Debug ---");
  // --- Koniec Bloku Debugowania ---

  return (
    <HelmetProvider>
      <div className="min-h-screen flex flex-col bg-background text-foreground">
        {/* Navbar (bez zmian, ale upewnij się, że używa funkcji z utils) */}
        <Navbar currentPath={location} />

        <main className="flex-grow px-4 sm:px-8 md:px-16 lg:px-40">
          {/* LanguageSetter (bez zmian) */}
          <Route path="/:lang/:rest*">
            <LanguageSetter />
          </Route>
          {/* Pusta trasa '/' jest zbędna */}
          <Route path="/"></Route>

          <Switch>
            {/* Trasa główna (bez zmian) */}
            <Route path="/">
              <Home ref={parisSectionRef} />
            </Route>

            {/* --- Trasy dla języka domyślnego --- */}
            {/* Użyj zaimportowanej localizedSlug z instancją i18n */}
            <Route path={`/${localizedSlug("about", i18n)}`}>
              {" "}
              <About />{" "}
            </Route>
            <Route path={`/${localizedSlug("contact", i18n)}`}>
              {" "}
              <Contact />{" "}
            </Route>
            <Route path={`/${localizedSlug("destinationDetail", i18n)}/:slug`}>
              {" "}
              <DestinationPage />{" "}
            </Route>
            <Route path={`/${localizedSlug("privacy", i18n)}`}>
              {" "}
              <PrivacyPolicyPage />{" "}
            </Route>
            <Route path={`/${localizedSlug("terms", i18n)}`}>
              {" "}
              <TermsOfUsePage />{" "}
            </Route>
            <Route path={`/${localizedSlug("accessibility", i18n)}`}>
              {" "}
              <AccessibilityPage />{" "}
            </Route>
            <Route path={`/${localizedSlug("cookiePolicy", i18n)}`}>
              {" "}
              <CookiePolicyPage />{" "}
            </Route>
            <Route path={`/${localizedSlug("faq", i18n)}`}>
              {" "}
              <FaqPage />{" "}
            </Route>
            <Route path={`/${localizedSlug("sitemap", i18n)}`}>
              {" "}
              <SitemapPage />{" "}
            </Route>
            <Route path={`/${localizedSlug("support", i18n)}`}>
              {" "}
              <SupportPage />{" "}
            </Route>

            {/* --- Trasy dla innych języków (z :lang) --- */}
            {/* Użyj zaimportowanej localizedSlug z instancją i18n */}
            <Route path="/:lang/">
              {" "}
              <Home ref={parisSectionRef} />{" "}
            </Route>
            <Route path={`/:lang/${localizedSlug("about", i18n)}`}>
              {" "}
              <About />{" "}
            </Route>
            <Route path={`/:lang/${localizedSlug("contact", i18n)}`}>
              {" "}
              <Contact />{" "}
            </Route>
            <Route
              path={`/:lang/${localizedSlug("destinationDetail", i18n)}/:slug`}
            >
              {" "}
              <DestinationPage />{" "}
            </Route>
            <Route path={`/:lang/${localizedSlug("privacy", i18n)}`}>
              {" "}
              <PrivacyPolicyPage />{" "}
            </Route>
            <Route path={`/:lang/${localizedSlug("terms", i18n)}`}>
              {" "}
              <TermsOfUsePage />{" "}
            </Route>
            <Route path={`/:lang/${localizedSlug("accessibility", i18n)}`}>
              {" "}
              <AccessibilityPage />{" "}
            </Route>
            <Route path={`/:lang/${localizedSlug("cookiePolicy", i18n)}`}>
              {" "}
              <CookiePolicyPage />{" "}
            </Route>
            <Route path={`/:lang/${localizedSlug("faq", i18n)}`}>
              {" "}
              <FaqPage />{" "}
            </Route>
            <Route path={`/:lang/${localizedSlug("sitemap", i18n)}`}>
              {" "}
              <SitemapPage />{" "}
            </Route>
            <Route path={`/:lang/${localizedSlug("support", i18n)}`}>
              {" "}
              <SupportPage />{" "}
            </Route>

            {/* Trasa 404 (bez zmian) */}
            <Route>
              <div className="container mx-auto px-4 py-16 text-center min-h-[60vh] flex flex-col justify-center items-center">
                <h2 className="text-6xl font-bold text-primary mb-4">404</h2>
                <p className="text-2xl mb-8">
                  {t(
                    "common.pageNotFound",
                    "Oops! Strona nie została znaleziona."
                  )}
                </p>
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

        {/* Footer (bez zmian, ale upewnij się, że używa funkcji z utils) */}
        <Footer onParisLinkClick={scrollToParisFromFooter} />
        {/* Toaster (bez zmian) */}
        <Toaster />
      </div>
    </HelmetProvider>
  );
}

export default App;
