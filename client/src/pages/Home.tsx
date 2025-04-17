import { useTranslation } from "react-i18next";
import ImageSlider from "@/components/ImageSlider";
import DestinationTabs from "@/components/DestinationTabs";
import AboutSection from "@/components/AboutSection";
import FeaturedDestination from "@/components/FeaturedDestination";
import ContactSection from "@/components/ContactSection";
import { heroImages } from "@/data/photos";

const Home = () => {
  const { t } = useTranslation();

  return (
    <>
      {/* Hero Section */}
      <section
        id="home"
        className="relative h-[70vh] overflow-hidden"
        aria-label={t("home.heroAriaLabel")}
      >
        <ImageSlider images={heroImages} />
      </section>

      {/* Destinations Section */}
      <DestinationTabs />

      {/* About Section */}
      <AboutSection />

      {/* Featured Destination */}
      {/* <FeaturedDestination /> */}

      {/* Contact Section */}
      <ContactSection />
    </>
  );
};

export default Home;
