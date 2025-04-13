import { useTranslation } from "react-i18next";
import { Camera, MapPin, Globe } from "lucide-react";

const AboutSection = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading font-bold text-2xl md:text-3xl mb-4">{t('about.title')}</h2>
          <div className="h-1 w-20 bg-accent mx-auto mb-6"></div>
          <p className="mb-6 text-gray-600 dark:text-gray-300">
            {t('about.description1')}
          </p>
          <p className="mb-8 text-gray-600 dark:text-gray-300">
            {t('about.description2')}
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex flex-col items-center">
              <span className="text-primary text-3xl mb-2">
                <Camera className="h-8 w-8" />
              </span>
              <h3 className="font-heading font-semibold text-lg mb-2">{t('about.feature1.title')}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 text-center">{t('about.feature1.description')}</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex flex-col items-center">
              <span className="text-primary text-3xl mb-2">
                <MapPin className="h-8 w-8" />
              </span>
              <h3 className="font-heading font-semibold text-lg mb-2">{t('about.feature2.title')}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 text-center">{t('about.feature2.description')}</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex flex-col items-center">
              <span className="text-primary text-3xl mb-2">
                <Globe className="h-8 w-8" />
              </span>
              <h3 className="font-heading font-semibold text-lg mb-2">{t('about.feature3.title')}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 text-center">{t('about.feature3.description')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
