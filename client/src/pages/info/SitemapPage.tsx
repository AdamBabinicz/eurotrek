import React from "react";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import { Link, useLocation } from "wouter";

// --- Zaimportuj funkcję z utils ---
import { createLocalizedPath } from "@/utils/localization"; // Dostosuj ścieżkę, jeśli trzeba

// --- Usuń niepotrzebne importy z destinations, bo createLocalizedPath ich używa wewnętrznie ---
// import { destinations, Destination, findDestinationById } from "@/data/destinations";

const SitemapPage: React.FC = () => {
  const { t, i18n } = useTranslation(); // Pobierz instancję i18n
  const [location, setLocation] = useLocation();
  // const currentLang = i18n.language || "pl"; // Niepotrzebne, odczytywane w createLocalizedPath
  // const defaultLang = "pl"; // Niepotrzebne, zdefiniowane w createLocalizedPath

  // --- Usuń lokalne definicje localizedSlug i createLocalizedPath ---
  // const localizedSlug = ...
  // const createLocalizedPath = ...

  // Funkcja scrollToTop (bez zmian)
  const scrollToTop = () => window.scrollTo(0, 0);

  // Struktura strony (bez zmian, używa entityId)
  const siteStructure = [
    { routeKey: "home", labelKey: "navbar.home" },
    {
      labelKey: "navbar.destinations",
      isHeader: true,
      children: [
        {
          baseRouteKey: "destinationDetail",
          entityId: "lisbon",
          labelKey: "destinations.lisbon",
        },
        {
          baseRouteKey: "destinationDetail",
          entityId: "paris",
          labelKey: "destinations.paris",
        },
        {
          baseRouteKey: "destinationDetail",
          entityId: "berlin",
          labelKey: "destinations.berlin",
        },
        {
          baseRouteKey: "destinationDetail",
          entityId: "capri",
          labelKey: "destinations.capri",
        },
        {
          baseRouteKey: "destinationDetail",
          entityId: "naples",
          labelKey: "destinations.naples",
        },
        {
          baseRouteKey: "destinationDetail",
          entityId: "prague",
          labelKey: "destinations.prague",
        },
      ],
    },
    { routeKey: "about", labelKey: "navbar.about" },
    { isHashLink: true, path: "#paris", labelKey: "footer.parisCollection" },
    { routeKey: "contact", labelKey: "navbar.contact" },
    {
      labelKey: "footer.resources",
      isHeader: true,
      children: [
        { routeKey: "privacy", labelKey: "footer.privacyPolicy" },
        { routeKey: "terms", labelKey: "footer.termsOfUse" },
        { routeKey: "accessibility", labelKey: "footer.accessibility" },
        { routeKey: "cookiePolicy", labelKey: "footer.cookiePolicy" },
        { routeKey: "faq", labelKey: "footer.faq" },
        { routeKey: "sitemap", labelKey: "footer.sitemap" },
        { routeKey: "support", labelKey: "footer.support" },
      ],
    },
  ];

  // Renderowanie linków (używa zaimportowanej createLocalizedPath)
  const renderLinks = (items: any[], level: number = 0) => (
    <ul className="list-none space-y-2">
      {items.map((item, index) => {
        const paddingLeft = `pl-${level * 4}`;
        let localizedPath: string | null = null;

        // Generuj ścieżkę używając funkcji z utils i przekazując i18n
        if (
          !item.isHashLink &&
          (item.routeKey || item.baseRouteKey || item.path === "/")
        ) {
          localizedPath = createLocalizedPath(
            // Użyj zaimportowanej funkcji
            i18n, // <<< Przekaż i18n
            item.baseRouteKey || item.routeKey,
            item.entityId
          );
          // Opcjonalny console log do debugowania
          // console.log(`[Sitemap] Lang: ${i18n.language}, Key: ${item.baseRouteKey || item.routeKey}, ID: ${item.entityId}, HREF: ${localizedPath}`);
        }

        // Generowanie linku dla #hash (używa createLocalizedPath dla bazowej ścieżki)
        let hashLinkPath: string | null = null;
        if (item.isHashLink) {
          hashLinkPath = createLocalizedPath(i18n, null) + item.path; // np. /#paris lub /en/#paris
        }

        return (
          <li key={index} className={`${paddingLeft}`}>
            {item.isHeader && level === 0 ? (
              <span className="font-semibold text-gray-800 dark:text-gray-200 block mt-4 mb-1">
                {t(item.labelKey)}
              </span>
            ) : item.isHashLink && hashLinkPath ? ( // Sprawdź czy hashLinkPath nie jest null
              <a
                href={hashLinkPath}
                className="text-primary hover:underline inline-block"
                onClick={(e) => {
                  e.preventDefault();
                  setLocation(hashLinkPath!);
                }} // Dodano '!' bo wiemy, że nie jest null
              >
                {t(item.labelKey)}
              </a>
            ) : localizedPath ? (
              <Link
                href={localizedPath}
                className="text-primary hover:underline inline-block"
                onClick={scrollToTop}
              >
                {t(item.labelKey)}
              </Link>
            ) : item.labelKey ? (
              <span className="text-gray-600 dark:text-gray-400">
                {t(item.labelKey)}
              </span>
            ) : null}
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
        <h2 className="text-3xl md:text-4xl font-bold font-heading mb-8 text-gray-900 dark:text-white">
          {t("sitemap.title")}
        </h2>
        <div className="text-gray-700 dark:text-gray-300">
          <p className="mb-6">{t("sitemap.introduction")}</p>
          <div className="mt-6">{renderLinks(siteStructure, 0)}</div>
        </div>
      </div>
    </>
  );
};

export default SitemapPage;
