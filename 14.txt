import { useParams } from "wouter";
import { useTranslation } from "react-i18next";
import { useState } from "react";
// import type { Photo } from "@/components/PhotoGrid";
import { Photo } from "@/data/photos";
import { destinations } from "@/data/destinations";
import { photos } from "@/data/photos";
import ImageSlider from "@/components/ImageSlider";
import PhotoLightbox from "@/components/PhotoLightbox";

const DestinationPage = () => {
  const { id } = useParams();
  const { t } = useTranslation();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const destination = destinations.find((d) => d.id === id);
  const destinationPhotos = photos.filter((photo) => photo.city === id);

  if (!destination) {
    return (
      <div className="container mx-auto px-4 py-8">Podróży nie znaleziono</div>
    );
  }

  const sliderImages = destinationPhotos.map((photo) => ({
    id: photo.id,
    src: photo.src,
    alt: photo.alt || "",
    location: photo.location || "",
    description: photo.title || "",
  }));

  console.log("Slider images:", sliderImages);
  console.log("Destination photos:", destinationPhotos); // Sprawdź dane

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6">
        {t(`destinations.${destination.id}`)}
      </h2>

      {/* Image Slider */}
      <div className="h-[80vh] mb-8 rounded-lg overflow-hidden">
        {sliderImages.length > 0 ? (
          <ImageSlider
            images={sliderImages}
            onImageClick={(index) => {
              console.log("Opening lightbox with photo index:", index);
              setCurrentPhotoIndex(index);
              setLightboxOpen(true);
            }}
          />
        ) : (
          <div className="text-center text-lg text-gray-500">
            Brak zdjęć do wyświetlenia
          </div>
        )}
      </div>

      {lightboxOpen && sliderImages.length > 0 && (
        <PhotoLightbox
          isOpen={lightboxOpen}
          photos={destinationPhotos}
          currentIndex={currentPhotoIndex}
          onClose={() => {
            console.log("Zamykam lightbox");
            setLightboxOpen(false);
          }}
          onNext={() =>
            setCurrentPhotoIndex(
              (prevIndex) => (prevIndex + 1) % destinationPhotos.length
            )
          }
          onPrevious={() =>
            setCurrentPhotoIndex(
              (prevIndex) =>
                (prevIndex - 1 + destinationPhotos.length) %
                destinationPhotos.length
            )
          }
        />
      )}
    </div>
  );
};

export default DestinationPage;
