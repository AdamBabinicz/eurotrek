import React from "react";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import { Link } from "wouter"; // Importuj Link

const SitemapPage: React.FC = () => {
  const { t } = useTranslation();

  // Funkcja do przewijania na górę
  const scrollToTop = () => window.scrollTo(0, 0);

  // Definicja struktury strony - z sekcją Podróże
  const siteStructure = [
    { path: "/", labelKey: "navbar.home" },
    {
      labelKey: "navbar.destinations", // Klucz dla "Podróże"
      isHeader: true, // Traktuj jako nagłówek sekcji
      children: [
        // Linki do poszczególnych podróży
        { path: "/destination/lisbon", labelKey: "destinations.lisbon" },
        { path: "/destination/paris", labelKey: "destinations.paris" },
        { path: "/destination/berlin", labelKey: "destinations.berlin" },
        { path: "/destination/capri", labelKey: "destinations.capri" },
        { path: "/destination/naples", labelKey: "destinations.naples" },
        { path: "/destination/prague", labelKey: "destinations.prague" },
        // Dodaj inne podróże, jeśli masz więcej
      ],
    },
    { path: "/about", labelKey: "navbar.about" },
    // Możesz zdecydować czy zostawić ten link kotwiczny do kolekcji Paryż
    // { path: "/#paris", labelKey: "footer.parisCollection", isHashLink: true },
    { path: "/contact", labelKey: "navbar.contact" },
    {
      labelKey: "footer.resources", // Klucz dla "Zasoby"
      isHeader: true, // Traktuj jako nagłówek sekcji
      children: [
        { path: "/privacy-policy", labelKey: "footer.privacyPolicy" },
        { path: "/terms-of-use", labelKey: "footer.termsOfUse" },
        { path: "/accessibility", labelKey: "footer.accessibility" },
        { path: "/cookie-policy", labelKey: "footer.cookiePolicy" },
        { path: "/faq", labelKey: "footer.faq" },
        { path: "/sitemap", labelKey: "footer.sitemap" },
        { path: "/support", labelKey: "footer.support" },
      ],
    },
    // Możesz tu dodać inne główne linki/sekcje w przyszłości
  ];

  // Zmodyfikowana, rekurencyjna funkcja do renderowania listy linków
  // Dodajemy argument 'level' (poziom zagnieżdżenia), domyślnie 0
  const renderLinks = (items: any[], level: number = 0) => (
    // Usunięto ml-4 z głównego ul, będziemy kontrolować margines na li
    <ul className="list-none space-y-2">
      {" "}
      {/* Zmieniono list-disc na list-none */}
      {items.map((item, index) => {
        // Oblicz wcięcie na podstawie poziomu
        const paddingLeft = `pl-${level * 4}`; // Tailwind: pl-0, pl-4, pl-8, ...

        return (
          <li key={index} className={`${paddingLeft}`}>
            {" "}
            {/* Dodajemy dynamiczny padding */}
            {/* Nagłówek sekcji (level 0) - renderujemy jako tekst */}
            {item.isHeader && level === 0 ? (
              <span className="font-semibold text-gray-800 dark:text-gray-200 block mt-4 mb-1">
                {" "}
                {/* Style dla nagłówka */}
                {t(item.labelKey)}
              </span>
            ) : // Link kotwiczny (renderowany jako <a>)
            item.isHashLink ? (
              <a
                href={item.path}
                className="text-primary hover:underline inline-block" // inline-block dla spójności
                onClick={(e) => {
                  e.preventDefault(); // Zapobiegaj domyślnej akcji hash linku
                  const element = document.getElementById("paris"); // Zakładamy, że ID 'paris' jest w komponencie Home/FeaturedDestination
                  if (element) {
                    window.scrollTo({
                      top: element.offsetTop,
                      behavior: "smooth",
                    });
                  } else {
                    // Jeśli jesteśmy na innej stronie, przejdź i spróbuj przewinąć po załadowaniu
                    window.location.href = item.path;
                  }
                }}
              >
                {t(item.labelKey)}
              </a>
            ) : (
              // Zwykły link (renderowany jako <Link>)
              <Link
                href={item.path}
                className="text-primary hover:underline inline-block" // inline-block dla spójności
                onClick={scrollToTop} // Przewiń do góry po kliknięciu
              >
                {t(item.labelKey)}
              </Link>
            )}
            {/* Rekurencyjnie renderuj dzieci, zwiększając poziom */}
            {item.children && renderLinks(item.children, level + 1)}
          </li>
        );
      })}
    </ul>
  );

  return (
    <>
      <Helmet>
        <title>{t("sitemap.title")} - EuroTrek</title>
        <meta name="description" content={t("sitemap.metaDescription")} />
      </Helmet>
      <div className="container mx-auto px-4 py-12 md:py-16 min-h-screen">
        {/* Użyłem h2 zamiast h1, zakładając że h1 jest globalnie dla strony w Headerze lub App */}
        <h2 className="text-3xl md:text-4xl font-bold font-heading mb-8 text-gray-900 dark:text-white">
          {t("sitemap.title")}
        </h2>

        {/* Zmieniono 'prose' na zwykły div, bo 'prose' może nadpisywać style listy */}
        <div className="text-gray-700 dark:text-gray-300">
          <p className="mb-6">{t("sitemap.introduction")}</p>{" "}
          {/* Dodano mb-6 do paragrafu */}
          <div className="mt-6">
            {/* Wywołaj renderLinks zaczynając od poziomu 0 */}
            {renderLinks(siteStructure, 0)}
          </div>
        </div>
      </div>
    </>
  );
};

export default SitemapPage;
