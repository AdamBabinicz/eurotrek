import { useTranslation } from "react-i18next";
import ContactSection from "@/components/ContactSection";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className="pt-10 pb-16">
      <div className="container mx-auto px-4 mb-12">
        <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6 text-center">
          {t("contact.pageTitle")}
        </h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-10"></div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="flex flex-col items-center text-center bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <Mail className="h-10 w-10 text-primary mb-4" />
              <h3 className="font-heading font-semibold text-lg mb-2">
                {t("contact.email.title")}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {t("contact.email.description")}
              </p>
              <a
                href="mailto:info@eurotrek.example"
                className="text-primary mt-2 hover:underline"
              >
                puaro@vp.pl
              </a>
            </div>

            <div className="flex flex-col items-center text-center bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <MapPin className="h-10 w-10 text-primary mb-4" />
              <h3 className="font-heading font-semibold text-lg mb-2">
                {t("contact.location.title")}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {t("contact.location.description")}
              </p>
              <address className="not-italic text-primary mt-2">
                {t("contact.location.address")}
              </address>
            </div>

            <div className="flex flex-col items-center text-center bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <Phone className="h-10 w-10 text-primary mb-4" />
              <h3 className="font-heading font-semibold text-lg mb-2">
                {t("contact.phone.title")}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {t("contact.phone.description")}
              </p>
              <a
                href="tel:+123456789"
                className="text-primary mt-2 hover:underline"
              >
                +1 (234) 567-89
              </a>
            </div>
          </div>

          <div className="mb-8 text-center">
            <h2 className="font-heading font-bold text-xl md:text-2xl mb-4">
              {t("contact.getInTouch")}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
              {t("contact.getInTouchDescription")}
            </p>
          </div>
        </div>
      </div>

      <ContactSection />
    </div>
  );
};

export default Contact;
