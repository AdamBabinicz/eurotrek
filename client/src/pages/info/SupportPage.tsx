import React from "react";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import { Link } from "wouter"; // Dla linku do kontaktu
import { FaEnvelope, FaPhone, FaQuestionCircle } from "react-icons/fa"; // Ikony

const SupportPage: React.FC = () => {
  const { t } = useTranslation();

  // Funkcja do przewijania na górę
  const scrollToTop = () => window.scrollTo(0, 0);

  return (
    <>
      <Helmet>
        <title>{t("support.title")} - EuroTrek</title>
        <meta name="description" content={t("support.metaDescription")} />
      </Helmet>
      <div className="container mx-auto px-4 py-12 md:py-16 min-h-screen">
        <h2 className="text-3xl md:text-4xl font-bold font-heading mb-8 text-gray-900 dark:text-white">
          {t("support.title")}
        </h2>

        <article className="prose dark:prose-invert lg:prose-xl max-w-none text-gray-700 dark:text-gray-300">
          <p>{t("support.introduction")}</p>

          <section className="mt-8 grid md:grid-cols-2 gap-8">
            {/* Opcja 1: FAQ */}
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm border dark:border-gray-700">
              <FaQuestionCircle className="text-3xl text-primary mb-3" />
              <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                {t("support.faqTitle")}
              </h2>
              <p className="mb-4">{t("support.faqDescription")}</p>
              <Link
                href="/faq"
                onClick={scrollToTop}
                className="text-primary hover:underline font-medium"
              >
                {t("support.goToFaq")}
              </Link>
            </div>

            {/* Opcja 2: Formularz Kontaktowy */}
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm border dark:border-gray-700">
              <FaEnvelope className="text-3xl text-primary mb-3" />
              <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                {t("support.contactFormTitle")}
              </h2>
              <p className="mb-4">{t("support.contactFormDescription")}</p>
              <Link
                href="/contact"
                onClick={scrollToTop}
                className="text-primary hover:underline font-medium"
              >
                {t("support.goToContact")}
              </Link>
            </div>
          </section>

          <p className="mt-8">{t("support.responseInfo")}</p>
          {/* <p>{t("common.placeholderContent")}</p> */}
        </article>
      </div>
    </>
  );
};

export default SupportPage;
