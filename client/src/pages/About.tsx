import { useTranslation } from "react-i18next";
import AboutSection from "@/components/AboutSection";
import FeaturedDestination from "@/components/FeaturedDestination";

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="pt-10 pb-16">
      <div className="container mx-auto px-4 mb-12">
        <h1 className="font-heading font-bold text-3xl md:text-4xl mb-6 text-center">
          {t("about.pageTitle")}
        </h1>
        <div className="w-20 h-1 bg-primary mx-auto mb-10"></div>

        <div className="max-w-3xl mx-auto">
          <p className="mb-6 text-lg">{t("about.pageDescription1")}</p>
          <p className="mb-6">{t("about.pageDescription2")}</p>
          <p className="mb-8">{t("about.pageDescription3")}</p>

          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 mb-8">
            <h2 className="font-heading font-semibold text-xl mb-4">
              {t("about.mission.title")}
            </h2>
            <p>{t("about.mission.description")}</p>
          </div>

          <h2 className="font-heading font-semibold text-xl mb-4">
            {t("about.team.title")}
          </h2>
          <p className="mb-6">{t("about.team.description")}</p>
        </div>
      </div>

      <AboutSection />
      {/* <FeaturedDestination /> */}
    </div>
  );
};

export default About;
