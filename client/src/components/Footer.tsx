import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "wouter"; // Usunięto useLocation, bo nie jest używane tutaj
import {
  FaInstagram,
  FaTwitter,
  FaFacebook,
  FaLinkedin,
  FaFacebookMessenger,
} from "react-icons/fa";

// --- Deklaracja typu dla obiektu CookieScript w window (dla TypeScript) ---
declare global {
  interface Window {
    CookieScript?: {
      instance?: {
        show?: () => void;
      };
    };
  }
}
// --- Koniec deklaracji typu ---

interface FooterProps {
  onParisLinkClick: () => void; // Zakładam, że to jest potrzebne
}

const Footer: React.FC<FooterProps> = ({ onParisLinkClick }) => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  const defaultLang = "pl";

  // Funkcja createLocalizedPath (bez zmian)
  const createLocalizedPath = (routeKey: string, params = ""): string => {
    const prefix = currentLang === defaultLang ? "" : `/${currentLang}`;
    const slug =
      t(`routes.${routeKey}`, { defaultValue: routeKey }) || routeKey;
    if (routeKey === "home") {
      return prefix || "/";
    }
    const cleanSlug = slug.startsWith("/") ? slug.substring(1) : slug;
    const finalSlug = cleanSlug ? `/${cleanSlug}` : "";
    const cleanParams = params.startsWith("/") ? params.substring(1) : params;
    const finalParams = cleanParams ? `/${cleanParams}` : "";
    return `${prefix}${finalSlug}${finalParams}`;
  };

  // Funkcja scrollTop (bez zmian)
  const scrollTop = () => {
    window.scrollTo(0, 0);
  };

  // useEffect (bez zmian, chociaż jego logika może wymagać przeglądu w kontekście SPA)
  useEffect(() => {
    // Ta logika zadziała tylko przy pierwszym załadowaniu strony,
    // a nie przy nawigacji wewnątrz SPA za pomocą wouter, chyba że używasz hasha
    if (window.location.hash === "#paris") {
      const element = document.getElementById("paris"); // Zakładam, że jest element o ID "paris"
      if (element) {
        const timer = setTimeout(() => {
          window.scrollTo({ top: element.offsetTop, behavior: "smooth" });
        }, 100); // Drobne opóźnienie na render
        return () => clearTimeout(timer);
      }
    }
  }, []); // Pusta tablica zależności oznacza, że wykona się tylko raz po zamontowaniu

  // --- ZAKTUALIZOWANA FUNKCJA handleCookieSettings ---
  const handleCookieSettings = () => {
    // Sprawdź, czy obiekt CookieScript i jego instancja oraz metoda show istnieją
    if (
      window.CookieScript &&
      typeof window.CookieScript.instance?.show === "function"
    ) {
      // Używamy optional chaining (?.)
      // Wywołaj funkcję API CookieScript, aby pokazać panel ustawień
      window.CookieScript.instance.show();
    } else {
      // Jeśli API nie jest dostępne, poinformuj użytkownika i/lub zaloguj błąd
      console.error(
        "CookieScript API not found or 'show' method is not available in Footer."
      );
      // Używamy klucza tłumaczenia dla błędu
      alert(
        t(
          "cookiePolicy.settingsError",
          "Nie można otworzyć ustawień cookies. Spróbuj odświeżyć stronę lub skontaktuj się z pomocą techniczną."
        )
      );
    }
  };
  // --- KONIEC AKTUALIZACJI ---

  return (
    <footer className="bg-gray-800 text-white py-10 dark:bg-gray-900">
      {" "}
      {/* Dodano dark:bg-gray-900 dla trybu ciemnego */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Kolumna z logo i opisem */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl" aria-hidden="true">
                🌍
              </span>
              <span className="font-heading font-bold text-xl">EuroTrek</span>
            </div>
            <p className="text-gray-300 dark:text-gray-400 mb-4 max-w-md">
              {t("footer.description")}
            </p>
            {/* Ikony społecznościowe */}
            <div className="flex gap-4">
              <a
                href="https://instagram.com" // Zmień na prawdziwy link
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white dark:hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm" // Dodano style focus
                aria-label={t("footer.instagram")}
              >
                <FaInstagram className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com" // Zmień na prawdziwy link
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white dark:hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
                aria-label={t("footer.twitter")}
              >
                <FaTwitter className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100011937734013" // Zmień na prawdziwy link
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white dark:hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
                aria-label={t("footer.facebook")}
              >
                <FaFacebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com" // Zmień na prawdziwy link
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white dark:hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
                aria-label={t("footer.linkedin")}
              >
                <FaLinkedin className="h-5 w-5" />
              </a>
              <a
                href="https://m.me/profile.php?id=100011937734013" // Zmień na prawdziwy link
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white dark:hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
                aria-label={t("footer.messenger")} // Dodaj tłumaczenie dla 'messenger'
              >
                <FaFacebookMessenger className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Kolumna Szybkie Linki */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4 text-white">
              {" "}
              {/* Upewniono się, że kolor jest biały */}
              {t("footer.quickLinks")}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href={createLocalizedPath("home")}
                  className="text-gray-300 hover:text-white dark:hover:text-primary transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-ring rounded-sm"
                  onClick={scrollTop}
                >
                  {t("navbar.home")}
                </Link>
              </li>
              <li>
                <Link
                  href={createLocalizedPath("about")}
                  className="text-gray-300 hover:text-white dark:hover:text-primary transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-ring rounded-sm"
                  onClick={scrollTop}
                >
                  {t("navbar.about")}
                </Link>
              </li>
              {/* Przycisk Kolekcja Paryż - używa propa onClick */}
              <li>
                <button
                  className="text-gray-300 hover:text-white dark:hover:text-primary transition-colors text-left focus:outline-none focus-visible:ring-1 focus-visible:ring-ring rounded-sm"
                  onClick={onParisLinkClick}
                >
                  {t("footer.parisCollection")}
                </button>
              </li>
              <li>
                <Link
                  href={createLocalizedPath("contact")}
                  className="text-gray-300 hover:text-white dark:hover:text-primary transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-ring rounded-sm"
                  onClick={scrollTop}
                >
                  {t("navbar.contact")}
                </Link>
              </li>
              <li>
                <Link
                  href={createLocalizedPath("destinations")}
                  className="text-gray-300 hover:text-white dark:hover:text-primary transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-ring rounded-sm"
                  onClick={scrollTop}
                >
                  {t("navbar.destinations")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Kolumna Zasoby */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4 text-white">
              {t("footer.resources")}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href={createLocalizedPath("privacy")}
                  className="text-gray-300 hover:text-white dark:hover:text-primary transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-ring rounded-sm"
                  onClick={scrollTop}
                >
                  {t("footer.privacyPolicy")}
                </Link>
              </li>
              <li>
                <Link
                  href={createLocalizedPath("terms")}
                  className="text-gray-300 hover:text-white dark:hover:text-primary transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-ring rounded-sm"
                  onClick={scrollTop}
                >
                  {t("footer.termsOfUse")}
                </Link>
              </li>
              <li>
                <Link
                  href={createLocalizedPath("accessibility")}
                  className="text-gray-300 hover:text-white dark:hover:text-primary transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-ring rounded-sm"
                  onClick={scrollTop}
                >
                  {t("footer.accessibility")}
                </Link>
              </li>
              <li>
                <Link
                  href={createLocalizedPath("cookiePolicy")}
                  className="text-gray-300 hover:text-white dark:hover:text-primary transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-ring rounded-sm"
                  onClick={scrollTop}
                >
                  {t("footer.cookiePolicy")}
                </Link>
              </li>
              {/* Przycisk Ustawienia Cookies */}
              <li>
                <button
                  onClick={handleCookieSettings} // Wywołuje zaktualizowaną funkcję
                  className="text-gray-300 hover:text-white dark:hover:text-primary transition-colors text-left w-full focus:outline-none focus-visible:ring-1 focus-visible:ring-ring rounded-sm"
                >
                  {t("footer.cookieSettings")}
                </button>
              </li>
              <li>
                <Link
                  href={createLocalizedPath("faq")}
                  className="text-gray-300 hover:text-white dark:hover:text-primary transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-ring rounded-sm"
                  onClick={scrollTop}
                >
                  {t("footer.faq")}
                </Link>
              </li>
              <li>
                <Link
                  href={createLocalizedPath("sitemap")}
                  className="text-gray-300 hover:text-white dark:hover:text-primary transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-ring rounded-sm"
                  onClick={scrollTop}
                >
                  {t("footer.sitemap")}
                </Link>
              </li>
              <li>
                <Link
                  href={createLocalizedPath("support")}
                  className="text-gray-300 hover:text-white dark:hover:text-primary transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-ring rounded-sm"
                  onClick={scrollTop}
                >
                  {t("footer.support")}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Dolna sekcja copyright */}
        <div className="border-t border-gray-700 dark:border-gray-600 mt-8 pt-8 text-center text-gray-400 dark:text-gray-500 text-sm">
          <p>
            © 2021 - {new Date().getFullYear()} EuroTrek Gdańsk.{" "}
            {t("footer.copyright")}
          </p>
          <p className="mt-2">{t("footer.tagline")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
