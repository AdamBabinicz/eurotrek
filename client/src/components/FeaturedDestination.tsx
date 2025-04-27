import React, { useState, forwardRef } from "react";
import { useTranslation } from "react-i18next";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import PhotoLightbox from "./PhotoLightbox";
import { Photo, photos } from "@/data/photos";

interface FeaturedDestinationProps {}

interface PreviewImage {
  src: string;
  alt: string;
}
const lightboxImages: Photo[] = photos.filter(
  (photo) => photo.city === "paris" && photo.isFeatured // Filtruj te oznaczone jako polecane dla Paryża
);
const FeaturedDestination = forwardRef<HTMLElement, FeaturedDestinationProps>(
  (props, ref) => {
    const { t } = useTranslation();
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const previewImages: PreviewImage[] = [
      {
        src: "../../assets/niemcy-francja/1.avif",
        alt: t("featured.image1Alt", "Podgląd Paryż 1"),
      },
      {
        src: "../../assets/niemcy-francja/2.avif",
        alt: t("featured.image2Alt", "Podgląd Paryż 2"),
      },
      {
        src: "../../assets/niemcy-francja/3.avif",
        alt: t("featured.image3Alt", "Podgląd Paryż 3"),
      },
      {
        src: "../../assets/niemcy-francja/4.avif",
        alt: t("featured.image4Alt", "Podgląd Paryż 4"),
      },
    ];

    const lightboxImages: Photo[] = [
      { id: "paris-1", src: "../../assets/niemcy-francja/24.avif" },
      { id: "paris-2", src: "../../assets/niemcy-francja/25.avif" },
      { id: "paris-3", src: "../../assets/niemcy-francja/27.avif" },
      { id: "paris-4", src: "../../assets/niemcy-francja/32.avif" },
    ];

    const openLightbox = (index: number) => {
      setCurrentImageIndex(
        Math.max(0, Math.min(index, lightboxImages.length - 1))
      );
      setIsLightboxOpen(true);
    };

    const closeLightbox = () => {
      setIsLightboxOpen(false);
    };

    const goToNext = () => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % lightboxImages.length
      );
    };

    const goToPrevious = () => {
      setCurrentImageIndex(
        (prevIndex) =>
          (prevIndex - 1 + lightboxImages.length) % lightboxImages.length
      );
    };

    return (
      <>
        <section id="paris" ref={ref} className="py-16 container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <h2 className="font-heading font-bold text-2xl md:text-3xl mb-4">
                {t("featured.title")}
              </h2>
              <div className="h-1 w-20 bg-accent mb-6"></div>
              <p className="mb-4 text-gray-600 dark:text-gray-300">
                {t("featured.description1")}
              </p>
              <p className="mb-6 text-gray-600 dark:text-gray-300">
                {t("featured.description2")}
              </p>

              <Button
                onClick={() => openLightbox(0)}
                className="inline-flex items-center font-medium"
                variant="link"
              >
                {t("featured.exploreLink")}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="md:w-1/2">
              <div className="grid grid-cols-2 gap-4">
                {previewImages.map((image, index) => (
                  <img
                    key={index}
                    src={image.src}
                    alt={image.alt}
                    className="rounded-lg shadow-md aspect-[3/4] object-cover w-full h-full"
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        <PhotoLightbox
          isOpen={isLightboxOpen}
          photos={lightboxImages}
          currentIndex={currentImageIndex}
          onClose={closeLightbox}
          onNext={goToNext}
          onPrevious={goToPrevious}
        />
      </>
    );
  }
);

FeaturedDestination.displayName = "FeaturedDestination";
export default FeaturedDestination;
