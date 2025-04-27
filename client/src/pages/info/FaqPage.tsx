import React from "react";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import { Link } from "wouter";

const FaqPage: React.FC = () => {
  const { t, i18n } = useTranslation();

  const defaultLang = "pl";
  const currentLang = i18n.language || defaultLang;

  const localizedSlug = (routeKey: string): string => {
    return t(routeKey, { ns: "translation", keyPrefix: "routes" }) || routeKey;
  };

  const contactSlug = localizedSlug("contact");
  const contactPath =
    currentLang === defaultLang
      ? `/${contactSlug}`
      : `/${currentLang}/${contactSlug}`;

  const faqItems = [
    { qKey: "faq.q1", aKey: "faq.a1" },
    { qKey: "faq.q2", aKey: "faq.a2" },
    { qKey: "faq.q3", aKey: "faq.a3" },
  ];

  return (
    <>
      <Helmet>
        <title>{t("faq.title")} - EuroTrek</title>
        <meta name="description" content={t("faq.metaDescription")} />
      </Helmet>
      <div className="container mx-auto px-4 py-12 md:py-16 min-h-screen">
        <h2 className="text-3xl md:text-4xl font-bold font-heading mb-8 text-gray-900 dark:text-white">
          {t("faq.title")}
        </h2>

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <details
              key={index}
              className="group bg-gray-50 dark:bg-gray-800 p-4 rounded-lg shadow-sm"
            >
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                <span className="text-gray-900 dark:text-white">
                  {t(item.qKey)}
                </span>
                <span className="transition group-open:rotate-180 text-primary">
                  <svg
                    fill="none"
                    height="24"
                    shapeRendering="geometricPrecision"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <div className="text-gray-700 dark:text-gray-300 mt-3 group-open:animate-fadeIn">
                <p>{t(item.aKey)}</p>
              </div>
            </details>
          ))}
        </div>

        <div className="mt-10 text-center text-gray-600 dark:text-gray-400">
          <p>{t("faq.stillHaveQuestions")}</p>

          <Link
            href={contactPath}
            className="text-primary hover:underline font-medium"
          >
            {t("faq.contactUs")}
          </Link>
        </div>
      </div>
    </>
  );
};

export default FaqPage;
