import { useParams } from "wouter";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { Photo } from "@/data/photos";
// Upewnij się, że importujesz obie funkcje, jeśli potrzebujesz
import { destinations, findDestinationBySlug } from "@/data/destinations";
import { photos } from "@/data/photos";
import ImageSlider from "@/components/ImageSlider";
import PhotoLightbox from "@/components/PhotoLightbox";

const DestinationPage = () => {
  // 1. Pobierz OBA parametry: 'slug' i 'lang' (jeśli istnieje)
  const params = useParams<{ slug?: string; lang?: string }>();
  console.log("Parametry z useParams w DestinationPage:", params); // Ważny log!

  const slug = params?.slug;
  const langParam = params?.lang; // Język z URL (może być undefined dla /podroz/...)

  const { t, i18n } = useTranslation(); // Można użyć i18n do pobrania języka domyślnego
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  // 2. Określ język DYNAMICZNIE
  const defaultLang = "pl"; // Można też pobrać z konfiguracji i18n, jeśli tam jest zdefiniowany
  const currentLang = langParam || defaultLang; // Użyj języka z URL, jeśli jest, w przeciwnym razie domyślny

  // Logowanie dla debugowania
  console.log(
    `Próba wyszukania destynacji: slug='${slug}', lang='${currentLang}'`
  );

  // Sprawdź, czy slug istnieje przed wyszukiwaniem
  if (!slug) {
    console.error("Błąd: Brak parametru 'slug' w URL.");
    return (
      <div className="container mx-auto px-4 py-8">
        Błąd: Nie można odczytać identyfikatora podróży z adresu URL.
      </div>
    );
  }

  // 3. Użyj dynamicznie określonego currentLang
  const destination = findDestinationBySlug(slug, currentLang);

  // Logowanie wyniku wyszukiwania
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

  // 4. Filtruj zdjęcia używając wewnętrznego ID znalezionej destynacji (bez zmian)
  const destinationPhotos = photos.filter(
    (photo) => photo.city === destination.id
  );

  const sliderImages = destinationPhotos.map((photo) => ({
    id: photo.id,
    src: photo.src,
    alt: t(photo.alt || "", photo.alt || ""), // Tłumaczenie alt
    location: t(photo.location || "", photo.location || ""),
    description: t(photo.title || "", photo.title || ""),
  }));

  // Usuwamy już niepotrzebne logi stąd, bo mamy lepsze wyżej
  // console.log("Slider images:", sliderImages);
  // console.log("Destination photos (filtered):", destinationPhotos);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6">
        {/* Używaj nameKey do tłumaczenia nazwy destynacji */}
        {t(destination.nameKey, destination.id)} {/* Dodajemy fallback na ID */}
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
