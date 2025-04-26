import { useParams } from "wouter";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { Photo } from "@/data/photos";
import { destinations, findDestinationBySlug } from "@/data/destinations";
import { photos } from "@/data/photos";
import ImageSlider from "@/components/ImageSlider";
import PhotoLightbox from "@/components/PhotoLightbox";

const DestinationPage = () => {
  const params = useParams<{ slug?: string; lang?: string }>();
  console.log("Parametry z useParams w DestinationPage:", params);

  const slug = params?.slug;
  const langParam = params?.lang;

  const { t, i18n } = useTranslation();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const defaultLang = "pl";
  const currentLang = langParam || defaultLang;
  console.log(
    `Próba wyszukania destynacji: slug='${slug}', lang='${currentLang}'`
  );

  if (!slug) {
    console.error("Błąd: Brak parametru 'slug' w URL.");
    return (
      <div className="container mx-auto px-4 py-8">
        Błąd: Nie można odczytać identyfikatora podróży z adresu URL.
      </div>
    );
  }

  const destination = findDestinationBySlug(slug, currentLang);

  if (destination) {
    console.log(
      `Znaleziono destynację: ID='${destination.id}', NameKey='${destination.nameKey}' dla języka '${currentLang}'`
    );
  } else {
    console.error(
      `Nie znaleziono destynacji w findDestinationBySlug dla slug='${slug}' i lang='${currentLang}'.`
    );
  }

  if (!destination) {
    return (
      <div className="container mx-auto px-4 py-8">
        {t("common.destinationNotFound", "Podróży nie znaleziono")}
      </div>
    );
  }

  const destinationPhotos = photos.filter(
    (photo) => photo.city === destination.id
  );

  const sliderImages = destinationPhotos.map((photo) => ({
    id: photo.id,
    src: photo.src,
    alt: t(photo.alt || "", photo.alt || ""),
    location: t(photo.location || "", photo.location || ""),
    description: t(photo.title || "", photo.title || ""),
  }));

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6">
        {t(destination.nameKey, destination.id)}
      </h2>

      <div className="h-[80vh] mb-8 rounded-lg overflow-hidden">
        {sliderImages.length > 0 ? (
          <ImageSlider
            images={sliderImages}
            onImageClick={(index) => {
              console.log("Otwieranie lightbox dla zdjęcia o indeksie:", index);
              setCurrentPhotoIndex(index);
              setLightboxOpen(true);
            }}
          />
        ) : (
          <div className="text-center text-lg text-gray-500">
            {t(
              "photos.noPhotos",
              "Nie ma jeszcze dostępnych zdjęć dla tej podróży."
            )}
          </div>
        )}
      </div>

      {lightboxOpen && destinationPhotos.length > 0 && (
        <PhotoLightbox
          isOpen={lightboxOpen}
          photos={destinationPhotos}
          currentIndex={currentPhotoIndex}
          onClose={() => {
            console.log("Zamykanie lightbox");
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
