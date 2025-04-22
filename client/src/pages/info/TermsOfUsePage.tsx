import React from "react";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";

const TermsOfUsePage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t("termsOfUse.title")} - EuroTrek</title>
        <meta name="description" content={t("termsOfUse.metaDescription")} />
      </Helmet>
      <div className="container mx-auto px-4 py-12 md:py-16 min-h-screen">
        <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6 text-gray-900 dark:text-white">
          {t("termsOfUse.title")}
        </h2>
        <p className="mb-6 text-sm text-gray-600 dark:text-gray-400">
          {t("common.lastUpdated")}: 2024-07-27
        </p>
        <article className="prose dark:prose-invert lg:prose-xl max-w-none text-gray-700 dark:text-gray-300">
          <p>{t("termsOfUse.introduction")}</p>

          <section className="mt-6">
            <h2>{t("termsOfUse.section1Title")}</h2>
            <p>{t("termsOfUse.section1Content")}</p>
            {/* <p>{t("common.placeholderContent")}</p> */}
          </section>

          {/* DODAJ TUTAJ RZECZYWISTE SEKCJE WARUNKÓW */}

          <section className="mt-6">
            <h2>{t("termsOfUse.contactTitle")}</h2>
            <p>{t("termsOfUse.contactContent")}</p>
          </section>
        </article>
      </div>
    </>
  );
};

export default TermsOfUsePage;
