import React from "react";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import { Link } from "wouter"; // Importuj Link

const SitemapPage: React.FC = () => {
  const { t } = useTranslation();

  // Funkcja do przewijania na górę
  const scrollToTop = () => window.scrollTo(0, 0);

  // Definicja struktury strony - dostosuj do swojej aktualnej struktury
  const siteStructure = [
    { path: "/", labelKey: "navbar.home" },
    { path: "/about", labelKey: "navbar.about" },
    { path: "/#paris", labelKey: "footer.parisCollection", isHashLink: true }, // Specjalna obsługa linku z hashem
    { path: "/contact", labelKey: "navbar.contact" },
    {
      labelKey: "footer.resources",
      isHeader: true,
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
    // Dodaj inne sekcje/strony
  ];

  // Rekurencyjna funkcja do renderowania listy linków
  const renderLinks = (items: any[]) => (
    <ul className="list-disc list-inside space-y-2 ml-4">
      {items.map((item, index) => (
        <li key={index} className={item.isHeader ? "mt-4 -ml-4" : ""}>
          {item.isHeader ? (
            <span className="font-semibold text-gray-800 dark:text-gray-200">
              {t(item.labelKey)}
            </span>
          ) : item.isHashLink ? (
            <a
              href={item.path}
              className="text-primary hover:underline"
              onClick={(e) => {
                e.preventDefault(); // Zapobiegaj domyślnej akcji hash linku
                const element = document.getElementById("paris");
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
            <Link
              href={item.path}
              className="text-primary hover:underline"
              onClick={scrollToTop}
            >
              {t(item.labelKey)}
            </Link>
          )}
          {item.children && renderLinks(item.children)}
        </li>
      ))}
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

        <article className="prose dark:prose-invert lg:prose-xl max-w-none text-gray-700 dark:text-gray-300">
          <p>{t("sitemap.introduction")}</p>
          <div className="mt-6">{renderLinks(siteStructure)}</div>
        </article>
      </div>
    </>
  );
};

export default SitemapPage;
