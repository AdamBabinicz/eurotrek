import React from "react";
// Importuj hooki wouter i i18next
import { useLocation, useRoute } from "wouter"; // Usunięto nieużywany Link
import { useTranslation } from "react-i18next";
import { Globe, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
// Importuj funkcje z utils
import { createLocalizedPath, localizedSlug } from "@/utils/localization";

// Importuj dane i funkcje do znalezienia ID
import { destinations, Destination } from "@/data/destinations"; // Import Destination jest potrzebny dla findIdByLocalizedSlug

// Definicja języków (bez zmian)
const languages = [
  { code: "pl", label: "Polski" },
  { code: "en", label: "English" },
  { code: "fr", label: "Français" },
  { code: "es", label: "Español" },
  { code: "de", label: "Deutsch" },
  { code: "it", label: "Italiano" },
  { code: "cs", label: "Čeština" },
];

// --- Funkcja pomocnicza do znalezienia ID na podstawie slugu i języka ---
// (Przenieś ją do utils/destinations.ts lub utils/localization.ts dla lepszej organizacji)
const findIdByLocalizedSlug = (slug: string, lang: string): string | null => {
  // Sprawdź, czy język jest prawidłowym kluczem w slugs
  // (TypeScript może wymagać asercji typu lub bardziej złożonego sprawdzania)
  const langKey = lang as keyof Destination["slugs"];

  const destination = destinations.find((dest) => {
    // Upewnij się, że sprawdzasz istnienie klucza przed dostępem
    return dest.slugs && dest.slugs[langKey] === slug;
  });
  return destination ? destination.id : null;
};
// --- Koniec funkcji pomocniczej ---

const LanguageSelector = () => {
  const { t, i18n } = useTranslation();
  const [location, setLocation] = useLocation();
  const currentLang = i18n.language || "pl";

  // --- Sprawdź aktualną trasę ---
  // Używamy i18n do dynamicznego generowania wzorców tras
  // (Ta część może być wrażliwa na moment inicjalizacji i18n, ale zwykle działa)
  const [isHomePage] = useRoute(createLocalizedPath(i18n, "home"));
  const [isAboutPage] = useRoute(createLocalizedPath(i18n, "about"));
  const [isContactPage] = useRoute(createLocalizedPath(i18n, "contact"));
  const [isFaqPage] = useRoute(createLocalizedPath(i18n, "faq"));
  const [isSitemapPage] = useRoute(createLocalizedPath(i18n, "sitemap"));
  const [isSupportPage] = useRoute(createLocalizedPath(i18n, "support"));
  const [isPrivacyPage] = useRoute(createLocalizedPath(i18n, "privacy"));
  const [isTermsPage] = useRoute(createLocalizedPath(i18n, "terms"));
  const [isAccessPage] = useRoute(createLocalizedPath(i18n, "accessibility"));
  const [isCookiePage] = useRoute(createLocalizedPath(i18n, "cookiePolicy"));

  // Wzorce dla trasy destinationDetail
  const destinationDetailBaseSlug = localizedSlug("destinationDetail", i18n);
  const destinationRoutePattern = destinationDetailBaseSlug
    ? `/${destinationDetailBaseSlug}/:slug`
    : "/dummy-never-match";
  const destinationRoutePatternLang = destinationDetailBaseSlug
    ? `/:lang/${destinationDetailBaseSlug}/:slug`
    : "/dummy-never-match";

  // Użycie useRoute z typowaniem parametrów
  const [isDestinationPage, paramsDestination] = useRoute<{ slug?: string }>(
    destinationRoutePattern
  );
  const [isDestinationPageLang, paramsDestinationLang] = useRoute<{
    lang?: string;
    slug?: string;
  }>(destinationRoutePatternLang);

  const handleLanguageChange = (newLang: string) => {
    const previousLang = currentLang; // Zapisz język *przed* zmianą
    if (newLang === previousLang) return;

    // 1. Zmień język i18n
    i18n.changeLanguage(newLang).then(() => {
      // 2. Oblicz nowy URL
      let newPath = "/";
      let currentBaseRouteKey: string | null = null;
      let currentEntityId: string | null = null;

      // Identyfikacja aktualnej trasy (logika if/else if bez zmian)
      if (isHomePage) {
        currentBaseRouteKey = "home";
      } else if (isAboutPage) {
        currentBaseRouteKey = "about";
      } else if (isContactPage) {
        currentBaseRouteKey = "contact";
      } else if (isFaqPage) {
        currentBaseRouteKey = "faq";
      } else if (isSitemapPage) {
        currentBaseRouteKey = "sitemap";
      } else if (isSupportPage) {
        currentBaseRouteKey = "support";
      } else if (isPrivacyPage) {
        currentBaseRouteKey = "privacy";
      } else if (isTermsPage) {
        currentBaseRouteKey = "terms";
      } else if (isAccessPage) {
        currentBaseRouteKey = "accessibility";
      } else if (isCookiePage) {
        currentBaseRouteKey = "cookiePolicy";
      } else if (isDestinationPageLang && paramsDestinationLang?.slug) {
        currentBaseRouteKey = "destinationDetail";
        const slugFromParams = paramsDestinationLang.slug;
        // Znajdź ID używając slugu i JĘZYKA POPRZEDNIEGO
        currentEntityId = findIdByLocalizedSlug(slugFromParams, previousLang);
        if (!currentEntityId) {
          console.error(
            `Nie można znaleźć ID dla slugu "${slugFromParams}" w języku "${previousLang}". Przekierowuję na stronę główną.`
          );
          currentBaseRouteKey = "home";
        }
      } else if (isDestinationPage && paramsDestination?.slug) {
        currentBaseRouteKey = "destinationDetail";
        const slugFromParams = paramsDestination.slug;
        // Znajdź ID używając slugu i JĘZYKA POPRZEDNIEGO (który był domyślny)
        currentEntityId = findIdByLocalizedSlug(slugFromParams, previousLang);
        if (!currentEntityId) {
          console.error(
            `Nie można znaleźć ID dla slugu "${slugFromParams}" w języku "${previousLang}". Przekierowuję na stronę główną.`
          );
          currentBaseRouteKey = "home";
        }
      } else {
        currentBaseRouteKey = "home";
      }

      // 3. Wygeneruj nową ścieżkę używając JUŻ ZMIENIONEJ instancji i18n
      // createLocalizedPath użyje nowego języka (newLang) odczytanego z i18n.language
      newPath = createLocalizedPath(i18n, currentBaseRouteKey, currentEntityId);

      // 4. Nawiguj
      console.log(
        `[LanguageSelector] Language changed to ${newLang}. Navigating from ${location} to ${newPath}`
      );
      setLocation(newPath, { replace: true });
    });
  };

  const currentLanguageLabel =
    languages.find((lang) => lang.code === currentLang)?.code.toUpperCase() ||
    "...";

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex items-center gap-1 text-sm font-medium hover:text-primary dark:hover:text-primary transition-colors h-8 px-2"
          aria-label={t("language.changeLanguage")}
        >
          <Globe className="h-4 w-4" />
          <span>{currentLanguageLabel}</span>
          <ChevronDown className="h-3 w-3" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center" className="w-32">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            disabled={currentLang === lang.code}
            onClick={() => handleLanguageChange(lang.code)}
            className={`cursor-pointer text-sm ${
              currentLang === lang.code ? "opacity-50 cursor-default" : ""
            }`}
          >
            {lang.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSelector;
