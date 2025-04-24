import { useEffect } from "react"; // Usunięto nieużywany useState
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "wouter"; // Nadal potrzebujemy useLocation do przekazywania, jeśli jest używane wyżej
import {
  FaInstagram,
  FaTwitter,
  FaFacebook,
  FaLinkedin,
  FaFacebookMessenger,
} from "react-icons/fa";

interface FooterProps {
  onParisLinkClick: () => void;
}

const Footer: React.FC<FooterProps> = ({ onParisLinkClick }) => {
  // Dodano i18n
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  const defaultLang = "pl"; // <<<--- ZDEFINIUJ SWÓJ DOMYŚLNY JĘZYK

  // --- NOWA FUNKCJA POMOCNICZA DO TWORZENIA URL (taka sama jak w Navbar) ---
  const createLocalizedPath = (routeKey: string, params = ""): string => {
    const prefix = currentLang === defaultLang ? "" : `/${currentLang}`;
    const slug =
      t(routeKey, { ns: "translation", keyPrefix: "routes" }) || routeKey;
    if (routeKey === "home") {
      return prefix || "/";
    }
    const finalSlug = slug ? `/${slug}` : "";
    return `${prefix}${finalSlug}${params}`;
  };

  // Funkcja do przewijania na górę
  const scrollTop = () => {
    window.scrollTo(0, 0);
  };

  // Usunięto navigateAndScrollTop - Link sam nawiguje

  // Logika dla #paris - bez zmian
  useEffect(() => {
    if (window.location.hash === "#paris") {
      const element = document.getElementById("paris");
      if (element) {
        // Dajemy chwilę na ewentualne renderowanie
        const timer = setTimeout(() => {
          window.scrollTo({ top: element.offsetTop, behavior: "smooth" });
        }, 100);
        return () => clearTimeout(timer);
      }
    }
  }, []); // Uruchamiamy tylko raz przy montowaniu komponentu

  // Obsługa przycisku Ustawień Cookies - bez zmian w logice, użyto t()
  const handleCookieSettings = () => {
    console.warn("Implement Cookie Settings trigger from CookieScript API");
    alert(t("cookiePolicy.settingsInfoPlaceholder"));
    // if (window.CookieScript && typeof window.CookieScript.instance.show === 'function') {
    //   window.CookieScript.instance.show();
    // }
  };

  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sekcja Opis i Social Media (bez zmian) */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🌍</span>
              <span className="font-heading font-bold text-xl">EuroTrek</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              {t("footer.description")}
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-primary transition-colors"
                aria-label={t("footer.instagram")}
              >
                <FaInstagram className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-primary transition-colors"
                aria-label={t("footer.twitter")}
              >
                <FaTwitter className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100011937734013"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-primary transition-colors"
                aria-label={t("footer.facebook")}
              >
                <FaFacebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-primary transition-colors"
                aria-label={t("footer.linkedin")} // Dodano aria-label
              >
                <FaLinkedin className="h-5 w-5" />
              </a>
              <a
                href="https://m.me/profile.php?id=100011937734013"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-primary transition-colors"
                aria-label={t("footer.messenger")} // Dodano aria-label
              >
                <FaFacebookMessenger className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Sekcja Szybkie Linki (ZAKTUALIZOWANA) */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">
              {t("footer.quickLinks")}
            </h3>
            <ul className="space-y-2">
              <li>
                {/* Używamy createLocalizedPath i scrollTop */}
                <Link
                  href={createLocalizedPath("home")}
                  className="text-gray-300 hover:text-white transition-colors"
                  onClick={scrollTop}
                >
                  {t("navbar.home")}
                </Link>
              </li>
              <li>
                <Link
                  href={createLocalizedPath("about")}
                  className="text-gray-300 hover:text-white transition-colors"
                  onClick={scrollTop}
                >
                  {t("navbar.about")}
                </Link>
              </li>
              <li>
                {/* Przycisk do Paryża bez zmian */}
                <button
                  className="text-gray-300 hover:text-white transition-colors text-left"
                  onClick={onParisLinkClick}
                >
                  {t("footer.parisCollection")}
                </button>
              </li>
              <li>
                <Link
                  href={createLocalizedPath("contact")}
                  className="text-gray-300 hover:text-white transition-colors"
                  onClick={scrollTop}
                >
                  {t("navbar.contact")}
                </Link>
              </li>
              {/* Dodano link do ogólnej strony podróży */}
              <li>
                <Link
                  href={createLocalizedPath("destinations")}
                  className="text-gray-300 hover:text-white transition-colors"
                  onClick={scrollTop}
                >
                  {t("navbar.destinations")} {/* Używamy tekstu z navbara */}
                </Link>
              </li>
            </ul>
          </div>

          {/* Sekcja Zasoby (ZAKTUALIZOWANA) */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">
              {t("footer.resources")}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href={createLocalizedPath("privacy")}
                  className="text-gray-300 hover:text-white transition-colors"
                  onClick={scrollTop}
                >
                  {t("footer.privacyPolicy")}
                </Link>
              </li>
              <li>
                <Link
                  href={createLocalizedPath("terms")}
                  className="text-gray-300 hover:text-white transition-colors"
                  onClick={scrollTop}
                >
                  {t("footer.termsOfUse")}
                </Link>
              </li>
              <li>
                <Link
                  href={createLocalizedPath("accessibility")}
                  className="text-gray-300 hover:text-white transition-colors"
                  onClick={scrollTop}
                >
                  {t("footer.accessibility")}
                </Link>
              </li>
              <li>
                <Link
                  href={createLocalizedPath("cookiePolicy")}
                  className="text-gray-300 hover:text-white transition-colors"
                  onClick={scrollTop}
                >
                  {t("footer.cookiePolicy")}
                </Link>
              </li>
              <li>
                {/* Przycisk ustawień cookies bez zmian w logice */}
                <button
                  onClick={handleCookieSettings}
                  className="text-gray-300 hover:text-white transition-colors text-left w-full"
                >
                  {t("footer.cookieSettings")}
                </button>
              </li>
              <li>
                <Link
                  href={createLocalizedPath("faq")}
                  className="text-gray-300 hover:text-white transition-colors"
                  onClick={scrollTop}
                >
                  {t("footer.faq")}
                </Link>
              </li>
              <li>
                <Link
                  href={createLocalizedPath("sitemap")}
                  className="text-gray-300 hover:text-white transition-colors"
                  onClick={scrollTop}
                >
                  {t("footer.sitemap")}
                </Link>
              </li>
              <li>
                <Link
                  href={createLocalizedPath("support")}
                  className="text-gray-300 hover:text-white transition-colors"
                  onClick={scrollTop}
                >
                  {t("footer.support")}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright (bez zmian) */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
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
