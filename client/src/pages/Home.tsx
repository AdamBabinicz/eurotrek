import React, { forwardRef } from "react"; // 1. Importuj forwardRef
import { useTranslation } from "react-i18next";
import ImageSlider from "@/components/ImageSlider";
import DestinationTabs from "@/components/DestinationTabs";
import AboutSection from "@/components/AboutSection";
import FeaturedDestination from "@/components/FeaturedDestination"; // Upewnij się, że ten komponent też używa forwardRef!
import ContactSection from "@/components/ContactSection";
import { heroImages } from "@/data/photos";

// 2. Zdefiniuj (nawet pusty) interfejs dla propsów, jeśli Home nie przyjmuje innych
interface HomeProps {
  // Tutaj możesz dodać inne propsy, jeśli będą potrzebne
}

// 3. Użyj forwardRef
//    - Pierwszy typ generyczny <HTMLElement> to typ elementu, do którego odnosi się ref (może być bardziej specyficzny, np. HTMLDivElement, jeśli wiesz, że ref trafi do diva)
//    - Drugi typ generyczny <HomeProps> to typ propsów komponentu (bez ref)
const Home = forwardRef<HTMLElement, HomeProps>((props, ref) => {
  const { t } = useTranslation();

  // 'ref' jest teraz dostępny jako drugi argument
  // Przekażemy go do FeaturedDestination

  return (
    <>
      {/* Hero Section */}
      <section
        id="home" // Czy to ID jest potrzebne? Zazwyczaj nie przewija się do sekcji hero w ten sposób.
        className="relative h-[70vh] overflow-hidden"
        aria-label={t("home.heroAriaLabel")}
      >
        <ImageSlider images={heroImages} />
      </section>

      {/* Destinations Section */}
      <DestinationTabs />

      {/* About Section */}
      <AboutSection />

      {/* Featured Destination - odkomentowane i przekazujemy ref */}
      {/* 4. Przekaż ref do FeaturedDestination */}
      <FeaturedDestination ref={ref} />

      {/* Contact Section */}
      <ContactSection />
    </>
  );
});

// 5. Opcjonalnie: dodaj displayName dla lepszego debugowania w React DevTools
Home.displayName = "Home";

export default Home;
