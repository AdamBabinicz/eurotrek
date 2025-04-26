import React, { forwardRef } from "react"; // 1. Importuj forwardRef
import { useTranslation } from "react-i18next";
import ImageSlider from "@/components/ImageSlider";
import DestinationTabs from "@/components/DestinationTabs";
import AboutSection from "@/components/AboutSection";
import FeaturedDestination from "@/components/FeaturedDestination";
import ContactSection from "@/components/ContactSection";
import { heroImages } from "@/data/photos";

interface HomeProps {}

const Home = forwardRef<HTMLElement, HomeProps>((props, ref) => {
  const { t } = useTranslation();

  return (
    <>
      <section
        id="home"
        className="relative h-[70vh] overflow-hidden"
        aria-label={t("home.heroAriaLabel")}
      >
        <ImageSlider images={heroImages} isClickable={false} />
      </section>

      <DestinationTabs />

      <AboutSection />

      <FeaturedDestination ref={ref} />

      <ContactSection />
    </>
  );
});

// 5. Opcjonalnie: dodaj displayName dla lepszego debugowania w React DevTools
Home.displayName = "Home";

export default Home;
