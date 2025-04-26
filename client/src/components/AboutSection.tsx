import { useTranslation } from "react-i18next";
import { Camera, MapPin, Globe } from "lucide-react";
const AboutSection = () => {
  const { t } = useTranslation();
  return (
    <section id="about" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading font-bold text-2xl md:text-3xl mb-4">
            {t("about.title")}
          </h2>
          <div className="h-1 w-20 bg-accent mx-auto mb-6"></div>
          <p className="mb-6 text-gray-600 dark:text-gray-300 text-left">
            {t("about.description1")}
          </p>
          <p className="mb-8 text-gray-600 dark:text-gray-300 text-left">
            {t("about.description2")}
          </p>
        </div>
      </div>

      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative">
            <img
              src="/assets/lizbona/6.avif"
              alt="Travelers exploring Europe"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute bottom-0 left-0 w-full bg-gray-200 bg-opacity-75 dark:bg-gray-800 dark:bg-opacity-75 p-4">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                {t("about.image1.title")}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                {t("about.image1.description")}
              </p>
            </div>
          </div>

          <div className="grid grid-rows-2 gap-4">
            <div className="relative">
              <img
                src="/assets/niemcy-francja/8.avif"
                alt="Adventurers in Europe"
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 w-full bg-gray-200 bg-opacity-75 dark:bg-gray-800 dark:bg-opacity-75 p-4">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                  {t("about.image2.title")}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                  {t("about.image2.description")}
                </p>
              </div>
            </div>

            <div className="relative">
              <img
                src="/assets/neapol/1.avif"
                alt="Adventurers in Europe"
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 w-full bg-gray-200 bg-opacity-75 dark:bg-gray-800 dark:bg-opacity-75 p-4">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                  {t("about.image3.title")}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                  {t("about.image3.description")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-8">
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex items-center">
              <span className="text-primary text-3xl mb-2 mr-4">
                <Camera className="h-8 w-8" />
              </span>
              <div>
                <h3 className="font-heading font-semibold text-lg mb-2">
                  {t("about.feature1.title")}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 text-left">
                  {t("about.feature1.description")}
                </p>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex items-center">
              <span className="text-primary text-3xl mb-2 mr-4">
                <MapPin className="h-8 w-8" />
              </span>
              <div>
                <h3 className="font-heading font-semibold text-lg mb-2">
                  {t("about.feature2.title")}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 text-left">
                  {t("about.feature2.description")}
                </p>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex items-center">
              <span className="text-primary text-3xl mb-2 mr-4">
                <Globe className="h-8 w-8" />
              </span>
              <div>
                <h3 className="font-heading font-semibold text-lg mb-2">
                  {t("about.feature3.title")}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 text-left">
                  {t("about.feature3.description")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
