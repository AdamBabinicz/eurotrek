import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "wouter";
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
  const { t } = useTranslation();
  const [, setLocation] = useLocation(); // Nadal potrzebne do navigateAndScrollTop

  // Funkcja do przewijania na górę przy nawigacji Linkiem
  const scrollTop = () => {
    window.scrollTo(0, 0);
  };

  // Funkcja używana przez stare linki (Home, About, Contact)
  const navigateAndScrollTop = (path: string) => {
    setLocation(path);
    scrollTop();
  };

  // Logika dla #paris - bez zmian
  useEffect(() => {
    if (window.location.hash === "#paris") {
      const element = document.getElementById("paris");
      if (element) {
        window.scrollTo({ top: element.offsetTop, behavior: "smooth" });
      }
    }
  }, []);

  // Obsługa przycisku Ustawień Cookies
  const handleCookieSettings = () => {
    // !!! WAŻNE: Dostosuj to do API Twojego dostawcy zgody na cookie (np. CookieScript) !!!
    console.warn("Implement Cookie Settings trigger from CookieScript API");
    alert(t("cookiePolicy.settingsInfoPlaceholder")); // Użyj klucza z tłumaczeń
    // Przykładowy kod (sprawdź dokumentację CookieScript):
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
              {/* Ikony Social Media - bez zmian */}
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
                aria-label={t("footer.linkedin")}
              >
                <FaLinkedin className="h-5 w-5" />
              </a>
              <a
                href="https://m.me/profile.php?id=100011937734013"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-primary transition-colors"
                aria-label={t("footer.messenger")}
              >
                <FaFacebookMessenger className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Sekcja Szybkie Linki (bez zmian w logice nawigacji) */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">
              {t("footer.quickLinks")}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-white transition-colors"
                  onClick={() => navigateAndScrollTop("/")}
                >
                  {t("navbar.home")}
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-white transition-colors"
                  onClick={() => navigateAndScrollTop("/about")}
                >
                  {t("navbar.about")}
                </Link>
              </li>
              <li>
                <button
                  className="text-gray-300 hover:text-white transition-colors text-left"
                  onClick={onParisLinkClick}
                >
                  {t("footer.parisCollection")}
                </button>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-white transition-colors"
                  onClick={() => navigateAndScrollTop("/contact")}
                >
                  {t("navbar.contact")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Sekcja Zasoby (ZAKTUALIZOWANA o nowe linki) */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">
              {t("footer.resources")}
            </h3>
            <ul className="space-y-2">
              {/* Istniejące linki - dodano onClick={scrollTop} */}
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-gray-300 hover:text-white transition-colors"
                  onClick={scrollTop}
                >
                  {t("footer.privacyPolicy")}
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-of-use"
                  className="text-gray-300 hover:text-white transition-colors"
                  onClick={scrollTop}
                >
                  {t("footer.termsOfUse")}
                </Link>
              </li>
              <li>
                <Link
                  href="/accessibility"
                  className="text-gray-300 hover:text-white transition-colors"
                  onClick={scrollTop}
                >
                  {t("footer.accessibility")}
                </Link>
              </li>
              {/* --- NOWE LINKI --- */}
              <li>
                <Link
                  href="/cookie-policy"
                  className="text-gray-300 hover:text-white transition-colors"
                  onClick={scrollTop}
                >
                  {t("footer.cookiePolicy")}
                </Link>
              </li>
              <li>
                <button
                  onClick={handleCookieSettings}
                  className="text-gray-300 hover:text-white transition-colors text-left w-full"
                >
                  {t("footer.cookieSettings")}
                </button>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-gray-300 hover:text-white transition-colors"
                  onClick={scrollTop}
                >
                  {t("footer.faq")}
                </Link>
              </li>
              <li>
                <Link
                  href="/sitemap"
                  className="text-gray-300 hover:text-white transition-colors"
                  onClick={scrollTop}
                >
                  {t("footer.sitemap")}
                </Link>
              </li>
              <li>
                <Link
                  href="/support"
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
