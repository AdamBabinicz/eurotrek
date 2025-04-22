import React from "react";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";

const CookiePolicyPage: React.FC = () => {
  const { t } = useTranslation();

  const handleCookieSettings = () => {
    // !!! WAŻNE: Dostosuj to do API Twojego dostawcy zgody na cookie (np. CookieScript) !!!
    // Przykłady (mogą nie działać, sprawdź dokumentację CookieScript):
    // if (window.CookieScript && typeof window.CookieScript.instance.show === 'function') {
    //   window.CookieScript.instance.show();
    // } else {
    //   alert(t('cookiePolicy.settingsError')); // Komunikat błędu
    // }
    console.warn("Implement Cookie Settings trigger from CookieScript API");
    alert(t("cookiePolicy.settingsInfoPlaceholder")); // Tymczasowy placeholder
  };

  return (
    <>
      <Helmet>
        <title>{t("cookiePolicy.title")} - EuroTrek</title>
        <meta name="description" content={t("cookiePolicy.metaDescription")} />
      </Helmet>
      <div className="container mx-auto px-4 py-12 md:py-16 min-h-screen">
        <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6 text-gray-900 dark:text-white">
          {t("cookiePolicy.title")}
        </h2>
        <p className="mb-6 text-sm text-gray-600 dark:text-gray-400">
          {t("common.lastUpdated")}: 2024-07-27
        </p>
        <article className="prose dark:prose-invert lg:prose-xl max-w-none text-gray-700 dark:text-gray-300">
          <p>{t("cookiePolicy.introduction")}</p>

          <section className="mt-6">
            <h2>{t("cookiePolicy.section1Title")}</h2>
            <p>{t("cookiePolicy.section1Content")}</p>
            {/* <p>{t("common.placeholderContent")}</p> */}
          </section>

          <section className="mt-6">
            <h2>{t("cookiePolicy.section2Title")}</h2>
            <p>{t("cookiePolicy.section2Content")}</p>
            <ul>
              <li>{t("cookiePolicy.type1")}</li>
              <li>{t("cookiePolicy.type2")}</li>
              <li>{t("cookiePolicy.type3")}</li>
              <li>{t("cookiePolicy.type4")}</li>
            </ul>
            {/* <p>{t("common.placeholderContent")}</p> */}
          </section>

          <section className="mt-6">
            <h2>{t("cookiePolicy.section3Title")}</h2>
            <p>{t("cookiePolicy.section3Content")}</p>
            {/* Dodaj przycisk do otwierania ustawień CookieScript */}
            <button
              onClick={handleCookieSettings}
              className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary dark:bg-primary-dark dark:hover:bg-primary"
            >
              {t("footer.cookieSettings")}
            </button>
          </section>

          {/* DODAJ TUTAJ RZECZYWISTE SEKCJE DOT. COOKIES */}

          <section className="mt-6">
            <h2>{t("cookiePolicy.contactTitle")}</h2>
            <p>{t("cookiePolicy.contactContent")}</p>
          </section>
        </article>
      </div>
    </>
  );
};

export default CookiePolicyPage;
