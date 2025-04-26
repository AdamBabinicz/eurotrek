import { useState, useMemo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import PhotoGrid from "./PhotoGrid";
import { destinations } from "@/data/destinations";
import { photos, Photo } from "@/data/photos";

// --- NOWE STAŁE ---
const INITIAL_PHOTOS_TO_SHOW = 4; // Ile zdjęć pokazać na początku dla miasta
const PHOTOS_TO_LOAD_ON_CLICK = 8; // Ile zdjęć doładować po kliknięciu
// --- KONIEC NOWYCH STAŁYCH ---

const DestinationTabs = () => {
  const [activeTab, setActiveTab] = useState<string>("all");
  const { t } = useTranslation();
  // Stan przechowujący liczbę AKTUALNIE widocznych zdjęć dla widoku miasta
  const [visibleCount, setVisibleCount] = useState<number>(
    INITIAL_PHOTOS_TO_SHOW
  ); // Domyślnie ustawiamy na początkową liczbę

  const filteredPhotos = useMemo(() => {
    // ... (logika filtrowania bez zmian) ...
    console.log(`Filtering photos for tab: ${activeTab}`);
    if (activeTab === "all") {
      const uniqueCities = [...new Set(photos.map((photo) => photo.city))];
      const representativePhotos = uniqueCities
        .map((cityName) => photos.find((photo) => photo.city === cityName))
        .filter((photo): photo is Photo => photo !== undefined);
      console.log(
        `Showing representative photos: ${representativePhotos.length}`
      );
      return representativePhotos;
    }
    const cityPhotos = photos.filter((photo) => photo.city === activeTab);
    console.log(`Showing photos for city ${activeTab}: ${cityPhotos.length}`);
    return cityPhotos;
  }, [activeTab]);

  // Logika paginacji pozostaje ta sama - bierze 'visibleCount'
  const paginatedPhotos = useMemo(() => {
    if (activeTab === "all") {
      console.log("Showing all representative photos, no pagination.");
      return filteredPhotos;
    }
    console.log(
      `Slicing photos for city ${activeTab}. Total: ${filteredPhotos.length}, Visible: ${visibleCount}`
    );
    // Slice zawsze bierze aktualny `visibleCount`
    return filteredPhotos.slice(0, visibleCount);
  }, [filteredPhotos, visibleCount, activeTab]);

  // --- AKTUALIZACJA HANDLE TAB CLICK ---
  const handleTabClick = useCallback((tab: string) => {
    setActiveTab(tab);
    if (tab !== "all") {
      // Zawsze resetuj do POCZĄTKOWEJ liczby zdjęć przy zmianie na miasto
      setVisibleCount(INITIAL_PHOTOS_TO_SHOW);
      console.log(
        `Tab changed to city: ${tab}. Reset visible count to ${INITIAL_PHOTOS_TO_SHOW}.`
      );
    } else {
      console.log(`Tab changed to: all.`);
      // Dla 'all' stan visibleCount nie jest używany do decydowania o wyświetlaniu
    }
  }, []);
  // --- KONIEC AKTUALIZACJI ---

  // --- AKTUALIZACJA HANDLE LOAD MORE ---
  const handleLoadMore = useCallback(() => {
    if (activeTab !== "all") {
      setVisibleCount((prevCount) => {
        // Dodajemy PHOTOS_TO_LOAD_ON_CLICK
        const newCount = prevCount + PHOTOS_TO_LOAD_ON_CLICK;
        console.log(
          `Loading more photos for city ${activeTab}. Adding ${PHOTOS_TO_LOAD_ON_CLICK}. New count: ${newCount}`
        );
        return newCount;
      });
    }
  }, [activeTab]);
  // --- KONIEC AKTUALIZACJI ---

  // --- AKTUALIZACJA LOGIKI STANU DISABLED ---
  const isCityView = activeTab !== "all";
  const totalPhotosForCity = filteredPhotos.length; // Całkowita liczba zdjęć dla aktywnego taba

  // Określamy, czy przycisk ma być wyłączony
  let isDisabled = true; // Domyślnie wyłączony poza widokiem miasta
  if (isCityView) {
    // Wyłącz, jeśli całkowita liczba zdjęć jest mniejsza niż 4
    // LUB jeśli wszystkie dostępne zdjęcia są już widoczne
    isDisabled = totalPhotosForCity < 4 || visibleCount >= totalPhotosForCity;
    console.log(
      `[Button Disabled Check] City: ${activeTab}, Total: ${totalPhotosForCity}, Visible: ${visibleCount}, isDisabled: ${isDisabled}`
    );
  }
  // --- KONIEC AKTUALIZACJI ---

  return (
    <section className="py-10 container mx-auto px-4" id="destinations">
      {/* ... (reszta JSX bez zmian aż do przycisku) ... */}
      <div
        className="flex flex-wrap justify-center gap-2 mb-8"
        role="tablist"
        aria-label={t("destinations.ariaLabel")}
      >
        {/* Zakładka "Wszystkie" */}
        <Button
          variant={activeTab === "all" ? "default" : "outline"}
          className={
            activeTab === "all"
              ? ""
              : "bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
          }
          onClick={() => handleTabClick("all")}
          role="tab"
          aria-selected={activeTab === "all"}
          aria-controls="all-photos-tabpanel"
          id="all-tab"
        >
          {t("destinations.allDestinations")}
        </Button>

        {/* Zakładki miast */}
        {destinations.map((destination) => (
          <Button
            key={destination.id}
            variant={activeTab === destination.id ? "default" : "outline"}
            className={
              activeTab === destination.id
                ? ""
                : "bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
            }
            onClick={() => handleTabClick(destination.id)}
            role="tab"
            aria-selected={activeTab === destination.id}
            aria-controls={`${destination.id}-photos-tabpanel`}
            id={`${destination.id}-tab`}
          >
            {t(`destinations.${destination.id}`)}
          </Button>
        ))}
      </div>
      <div
        id={`${activeTab}-photos-tabpanel`}
        role="tabpanel"
        aria-labelledby={`${activeTab}-tab`}
        tabIndex={0}
      >
        <PhotoGrid
          // Przekazujemy zdjęcia zgodnie z logiką paginacji (która używa visibleCount)
          photos={paginatedPhotos}
        />
      </div>

      {/* Przycisk "Załaduj więcej" - zawsze widoczny w widoku miasta */}
      <div className="mt-8 text-center">
        {isCityView && (
          <Button
            onClick={handleLoadMore}
            className="px-6 py-3"
            // Używamy obliczonej wartości isDisabled
            disabled={isDisabled}
            aria-disabled={isDisabled}
          >
            {t("destinations.loadMore")}
          </Button>
        )}
      </div>
    </section>
  );
};

export default DestinationTabs;
