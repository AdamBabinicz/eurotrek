import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "wouter";
import {
  FaInstagram,
  FaTwitter,
  FaFacebook,
  FaLinkedin,
  FaFacebookMessenger,
} from "react-icons/fa";

// --- Zaimportuj funkcję z utils ---
import { createLocalizedPath } from "@/utils/localization"; // Dostosuj ścieżkę w razie potrzeby

// --- Usuń niepotrzebne importy z destinations, bo createLocalizedPath ich używa wewnętrznie ---
// import { Destination, findDestinationById } from "@/data/destinations";

// --- Deklaracja typu dla CookieScript (bez zmian) ---
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
  onParisLinkClick: () => void;
}

const Footer: React.FC<FooterProps> = ({ onParisLinkClick }) => {
  const { t, i18n } = useTranslation(); // Pobierz instancję i18n
  // const currentLang = i18n.language || "pl"; // Niepotrzebne, odczytywane w createLocalizedPath
  // const defaultLang = "pl"; // Niepotrzebne, zdefiniowane w createLocalizedPath

  // --- Usuń lokalne definicje localizedSlug i createLocalizedPath ---
  // const localizedSlug = ...
  // const createLocalizedPath = ...

  // Funkcja scrollTop (bez zmian)
  const scrollTop = () => {
    window.scrollTo(0, 0);
  };

  // useEffect dla #paris (bez zmian)
  useEffect(() => {
    if (window.location.hash === "#paris") {
      const element = document.getElementById("paris");
      if (element) {
        const timer = setTimeout(() => {
          window.scrollTo({ top: element.offsetTop, behavior: "smooth" });
        }, 150);
        return () => clearTimeout(timer);
      }
    }
  }, []);

  // Funkcja handleCookieSettings (bez zmian)
  const handleCookieSettings = () => {
    if (
      window.CookieScript &&
      typeof window.CookieScript.instance?.show === "function"
    ) {
      window.CookieScript.instance.show();
    } else {
      console.error(
        "CookieScript API not found or 'show' method is not available in Footer."
      );
      alert(
        t(
          "cookiePolicy.settingsError",
          "Nie można otworzyć ustawień cookies. Spróbuj odświeżyć stronę lub skontaktuj się z pomocą techniczną."
        )
      );
    }
  };

  return (
    <footer className="bg-gray-800 text-white py-10 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sekcja Info + Social Media (bez zmian) */}
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
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white dark:hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
                aria-label={t("footer.instagram")}
              >
                {" "}
                <FaInstagram className="h-5 w-5" />{" "}
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white dark:hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
                aria-label={t("footer.twitter")}
              >
                {" "}
                <FaTwitter className="h-5 w-5" />{" "}
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100011937734013"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white dark:hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
                aria-label={t("footer.facebook")}
              >
                {" "}
                <FaFacebook className="h-5 w-5" />{" "}
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white dark:hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
                aria-label={t("footer.linkedin")}
              >
                {" "}
                <FaLinkedin className="h-5 w-5" />{" "}
              </a>
              <a
                href="https://m.me/profile.php?id=100011937734013"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white dark:hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
                aria-label={t("footer.messenger")}
              >
                {" "}
                <FaFacebookMessenger className="h-5 w-5" />{" "}
              </a>
            </div>
          </div>

          {/* Sekcja Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4 text-white">
              {t("footer.quickLinks")}
            </h3>
            <ul className="space-y-2">
              <li>
                {/* Użyj zaimportowanej createLocalizedPath z i18n */}
                <Link
                  href={createLocalizedPath(i18n, "home")}
                  className="text-gray-300 hover:text-white dark:hover:text-primary transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-ring rounded-sm"
                  onClick={scrollTop}
                >
                  {t("navbar.home")}
                </Link>
              </li>
              <li>
                {/* Użyj zaimportowanej createLocalizedPath z i18n */}
                <Link
                  href={createLocalizedPath(i18n, "about")}
                  className="text-gray-300 hover:text-white dark:hover:text-primary transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-ring rounded-sm"
                  onClick={scrollTop}
                >
                  {t("navbar.about")}
                </Link>
              </li>
              <li>
                <button
                  className="text-gray-300 hover:text-white dark:hover:text-primary transition-colors text-left focus:outline-none focus-visible:ring-1 focus-visible:ring-ring rounded-sm"
                  onClick={onParisLinkClick}
                >
                  {t("footer.parisCollection")}
                </button>
              </li>
              <li>
                {/* Użyj zaimportowanej createLocalizedPath z i18n */}
                <Link
                  href={createLocalizedPath(i18n, "contact")}
                  className="text-gray-300 hover:text-white dark:hover:text-primary transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-ring rounded-sm"
                  onClick={scrollTop}
                >
                  {t("navbar.contact")}
                </Link>
              </li>
              {/* Usunięto link do /destinations */}
            </ul>
          </div>

          {/* Sekcja Resources */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4 text-white">
              {t("footer.resources")}
            </h3>
            <ul className="space-y-2">
              <li>
                {/* Użyj zaimportowanej createLocalizedPath z i18n */}
                <Link
                  href={createLocalizedPath(i18n, "privacy")}
                  className="text-gray-300 hover:text-white dark:hover:text-primary transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-ring rounded-sm"
                  onClick={scrollTop}
                >
                  {t("footer.privacyPolicy")}
                </Link>
              </li>
              <li>
                {/* Użyj zaimportowanej createLocalizedPath z i18n */}
                <Link
                  href={createLocalizedPath(i18n, "terms")}
                  className="text-gray-300 hover:text-white dark:hover:text-primary transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-ring rounded-sm"
                  onClick={scrollTop}
                >
                  {t("footer.termsOfUse")}
                </Link>
              </li>
              <li>
                {/* Użyj zaimportowanej createLocalizedPath z i18n */}
                <Link
                  href={createLocalizedPath(i18n, "accessibility")}
                  className="text-gray-300 hover:text-white dark:hover:text-primary transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-ring rounded-sm"
                  onClick={scrollTop}
                >
                  {t("footer.accessibility")}
                </Link>
              </li>
              <li>
                {/* Użyj zaimportowanej createLocalizedPath z i18n */}
                <Link
                  href={createLocalizedPath(i18n, "cookiePolicy")}
                  className="text-gray-300 hover:text-white dark:hover:text-primary transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-ring rounded-sm"
                  onClick={scrollTop}
                >
                  {t("footer.cookiePolicy")}
                </Link>
              </li>
              <li>
                <button
                  onClick={handleCookieSettings}
                  className="text-gray-300 hover:text-white dark:hover:text-primary transition-colors text-left w-full focus:outline-none focus-visible:ring-1 focus-visible:ring-ring rounded-sm"
                >
                  {t("footer.cookieSettings")}
                </button>
              </li>
              <li>
                {/* Użyj zaimportowanej createLocalizedPath z i18n */}
                <Link
                  href={createLocalizedPath(i18n, "faq")}
                  className="text-gray-300 hover:text-white dark:hover:text-primary transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-ring rounded-sm"
                  onClick={scrollTop}
                >
                  {t("footer.faq")}
                </Link>
              </li>
              <li>
                {/* Użyj zaimportowanej createLocalizedPath z i18n */}
                <Link
                  href={createLocalizedPath(i18n, "sitemap")}
                  className="text-gray-300 hover:text-white dark:hover:text-primary transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-ring rounded-sm"
                  onClick={scrollTop}
                >
                  {t("footer.sitemap")}
                </Link>
              </li>
              <li>
                {/* Użyj zaimportowanej createLocalizedPath z i18n */}
                <Link
                  href={createLocalizedPath(i18n, "support")}
                  className="text-gray-300 hover:text-white dark:hover:text-primary transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-ring rounded-sm"
                  onClick={scrollTop}
                >
                  {t("footer.support")}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Sekcja Copyright (bez zmian) */}
        <div className="border-t border-gray-700 dark:border-gray-600 mt-8 pt-8 text-center text-gray-400 dark:text-gray-500 text-sm">
          <p>
            © 2021 - {new Date().getFullYear()} EuroTrek Gdańsk.
            {t("footer.copyright")}
          </p>
          <p className="mt-2">{t("footer.tagline")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
