import { useParams } from "wouter";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "wouter";

// --- Importy: Używamy findDestinationBySlug ---
import { findDestinationBySlug, Destination } from "@/data/destinations";
import { photos } from "@/data/photos";
import ImageSlider from "@/components/ImageSlider";
import PhotoLightbox from "@/components/PhotoLightbox";

const DestinationPage = () => {
  const params = useParams<{ slug?: string; lang?: string }>();
  console.log("[DestinationPage] Parametry z useParams:", params);

  const localizedSlugFromUrl = params?.slug;
  const langParam = params?.lang;

  const { t, i18n } = useTranslation();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [destination, setDestination] = useState<Destination | undefined>(
    undefined
  );
  const [isLoading, setIsLoading] = useState(true);

  const defaultLang = "pl";
  const currentLang = langParam || i18n.language || defaultLang;

  // --- Funkcje pomocnicze (dla linku powrotnego, powinny być w utils) ---
  const localizedSlugHelper = (routeKey: string): string => {
    return t(routeKey, { ns: "translation", keyPrefix: "routes" }) || routeKey;
  };

  const createLocalizedPath = (
    baseRouteKey: string | null,
    entityId: string | null = null
  ): string => {
    let baseSlugPart = "";
    if (baseRouteKey === "home" || baseRouteKey === null) {
      baseSlugPart = "";
    } else if (baseRouteKey) {
      baseSlugPart = "/" + localizedSlugHelper(baseRouteKey);
    }
    let dynamicSlugPart = "";
    if (entityId) {
      dynamicSlugPart = "/" + entityId;
    }
    const fullPathWithoutLang = `${baseSlugPart}${dynamicSlugPart}`;
    if (currentLang === defaultLang) {
      return fullPathWithoutLang || "/";
    } else {
      return `/${currentLang}${fullPathWithoutLang}` || `/${currentLang}`;
    }
  };
  // --- Koniec funkcji pomocniczych ---

  // --- useEffect: Pobieranie danych za pomocą findDestinationBySlug ---
  useEffect(() => {
    console.log(
      `[DestinationPage] useEffect: Szukanie dla slug='${localizedSlugFromUrl}', lang='${currentLang}'`
    );
    setIsLoading(true);

    if (!localizedSlugFromUrl) {
      console.error("[DestinationPage] Błąd: Brak parametru slugu w URL.");
      setDestination(undefined);
      setIsLoading(false);
      return;
    }

    // Używamy findDestinationBySlug zgodnie z potrzebą interpretacji URL
    const foundDestination = findDestinationBySlug(
      localizedSlugFromUrl,
      currentLang
    );

    if (foundDestination) {
      console.log(
        `[DestinationPage] Znaleziono destynację przez Slug: ID='${foundDestination.id}', NameKey='${foundDestination.nameKey}' dla języka '${currentLang}'`
      );
      setDestination(foundDestination);
    } else {
      console.error(
        `[DestinationPage] Nie znaleziono destynacji w findDestinationBySlug dla slug='${localizedSlugFromUrl}' i lang='${currentLang}'.`
      );
      setDestination(undefined);
    }
    setIsLoading(false);
  }, [localizedSlugFromUrl, currentLang]); // Zależności bez zmian

  // --- Renderowanie ---

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        Ładowanie...
      </div>
    );
  }

  if (!destination) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <Helmet>
          <title>
            {t("common.destinationNotFound", "Podróży nie znaleziono")} -
            EuroTrek
          </title>
        </Helmet>
        <h2>{t("common.destinationNotFound", "Podróży nie znaleziono")}</h2>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          {t(
            "common.destinationNotFoundMessage",
            'Nie mogliśmy znaleźć strony dla adresu "{slug}".',
            { slug: localizedSlugFromUrl }
          )}
        </p>
        <Link
          href={createLocalizedPath("home")}
          className="mt-4 inline-block text-primary hover:underline"
        >
          {t("common.backToHome", "Wróć na stronę główną")}
        </Link>
      </div>
    );
  }

  // Filtrowanie zdjęć (bez zmian)
  const destinationPhotos = photos.filter(
    (photo) => photo.city === destination.id && !photo.isFeatured
  );

  // Mapowanie zdjęć (bez zmian)
  const sliderImages = destinationPhotos.map((photo) => ({
    id: photo.id,
    src: photo.src,
    alt: t(photo.alt || "", photo.alt || ""),
    location: t(photo.location || "", photo.location || ""),
    description: t(photo.title || "", photo.title || ""),
  }));

  return (
    <>
      <Helmet>
        {/* Tytuł strony - używa nameKey z znalezionej destynacji */}
        <title>{t(destination.nameKey, destination.id)} - EuroTrek</title>
        {/* Usunięto meta description, bo usunęliśmy logikę opisu */}
      </Helmet>

      <div className="container mx-auto px-4 py-8">
        {/* Wyświetlanie tytułu (bez zmian) */}
        <h2 className="text-3xl font-bold mb-8">
          {" "}
          {/* Zwiększono mb z powrotem na 8 */}
          {t(destination.nameKey, destination.id)}
        </h2>

        {/* <<< --- USUNIĘTO BLOK OPISU --- >>> */}

        {/* Galeria zdjęć (bez zmian) */}
        <div className="h-[80vh] mb-8 rounded-lg overflow-hidden shadow-lg">
          {sliderImages.length > 0 ? (
            <ImageSlider
              images={sliderImages}
              onImageClick={(index) => {
                console.log(
                  "[DestinationPage] Otwieranie lightbox dla indeksu:",
                  index
                );
                setCurrentPhotoIndex(index);
                setLightboxOpen(true);
              }}
            />
          ) : (
            <div className="flex items-center justify-center h-full bg-gray-100 dark:bg-gray-800">
              <p className="text-center text-lg text-gray-500 dark:text-gray-400">
                {t(
                  "photos.noPhotos",
                  "Nie ma jeszcze dostępnych zdjęć dla tej podróży."
                )}
              </p>
            </div>
          )}
        </div>

        {/* Lightbox (bez zmian) */}
        {lightboxOpen && destinationPhotos.length > 0 && (
          <PhotoLightbox
            isOpen={lightboxOpen}
            photos={destinationPhotos}
            currentIndex={currentPhotoIndex}
            onClose={() => {
              console.log("[DestinationPage] Zamykanie lightbox");
              setLightboxOpen(false);
            }}
            onNext={() =>
              setCurrentPhotoIndex(
                (prev) => (prev + 1) % destinationPhotos.length
              )
            }
            onPrevious={() =>
              setCurrentPhotoIndex(
                (prev) =>
                  (prev - 1 + destinationPhotos.length) %
                  destinationPhotos.length
              )
            }
          />
        )}
      </div>
    </>
  );
};

export default DestinationPage;
