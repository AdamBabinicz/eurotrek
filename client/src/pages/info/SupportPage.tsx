import React from "react";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { FaEnvelope, FaQuestionCircle } from "react-icons/fa"; // Usunięto FaPhone, bo nie jest używane

// --- Zaimportuj funkcję z utils ---
import { createLocalizedPath } from "@/utils/localization"; // Dostosuj ścieżkę, jeśli trzeba

const SupportPage: React.FC = () => {
  const { t, i18n } = useTranslation(); // Pobierz instancję i18n

  // Funkcja do przewijania na górę (bez zmian)
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

        {/* Usunięto klasę prose, aby mieć większą kontrolę nad stylami */}
        <div className="max-w-none text-gray-700 dark:text-gray-300">
          <p className="text-lg leading-relaxed mb-8">
            {t("support.introduction")}
          </p>

          <section className="mt-8 grid md:grid-cols-2 gap-6 md:gap-8">
            {" "}
            {/* Zmieniono gap */}
            {/* Opcja 1: FAQ */}
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm border dark:border-gray-700 flex flex-col">
              {" "}
              {/* Dodano flex */}
              <FaQuestionCircle className="text-3xl text-primary mb-4" />{" "}
              {/* Zwiększono mb */}
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                {" "}
                {/* Zmieniono na h3 dla semantyki */}
                {t("support.faqTitle")}
              </h3>
              <p className="mb-4 flex-grow">{t("support.faqDescription")}</p>{" "}
              {/* Dodano flex-grow */}
              {/* Użyj createLocalizedPath do wygenerowania linku FAQ */}
              <Link
                href={createLocalizedPath(i18n, "faq")} // <<< ZMIANA
                onClick={scrollToTop}
                className="text-primary hover:underline font-medium mt-auto" // Dodano mt-auto
              >
                {t("support.goToFaq")}
              </Link>
            </div>
            {/* Opcja 2: Formularz Kontaktowy */}
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm border dark:border-gray-700 flex flex-col">
              {" "}
              {/* Dodano flex */}
              <FaEnvelope className="text-3xl text-primary mb-4" />{" "}
              {/* Zwiększono mb */}
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                {" "}
                {/* Zmieniono na h3 */}
                {t("support.contactFormTitle")}
              </h3>
              <p className="mb-4 flex-grow">
                {t("support.contactFormDescription")}
              </p>{" "}
              {/* Dodano flex-grow */}
              {/* Użyj createLocalizedPath do wygenerowania linku Kontakt */}
              <Link
                href={createLocalizedPath(i18n, "contact")} // <<< ZMIANA
                onClick={scrollToTop}
                className="text-primary hover:underline font-medium mt-auto" // Dodano mt-auto
              >
                {t("support.goToContact")}
              </Link>
            </div>
          </section>

          {/* Usunięto sekcję Telefon, bo nie była używana */}

          <p className="mt-8 text-lg leading-relaxed">
            {t("support.responseInfo")}
          </p>
        </div>
      </div>
    </>
  );
};

export default SupportPage;
