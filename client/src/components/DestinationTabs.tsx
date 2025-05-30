import { useState, useMemo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import PhotoGrid from "./PhotoGrid";
import { destinations } from "@/data/destinations";
import { photos, Photo } from "@/data/photos";

const INITIAL_PHOTOS_TO_SHOW = 4; // Ile zdjęć pokazać na początku dla miasta
const PHOTOS_TO_LOAD_ON_CLICK = 8; // Ile zdjęć doładować po kliknięciu

const DestinationTabs = () => {
  const [activeTab, setActiveTab] = useState<string>("all");
  const { t } = useTranslation();
  const [visibleCount, setVisibleCount] = useState<number>(
    INITIAL_PHOTOS_TO_SHOW
  );

  const filteredPhotos = useMemo(() => {
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

  const paginatedPhotos = useMemo(() => {
    if (activeTab === "all") {
      console.log("Showing all representative photos, no pagination.");
      return filteredPhotos;
    }
    console.log(
      `Slicing photos for city ${activeTab}. Total: ${filteredPhotos.length}, Visible: ${visibleCount}`
    );
    return filteredPhotos.slice(0, visibleCount);
  }, [filteredPhotos, visibleCount, activeTab]);

  const handleTabClick = useCallback((tab: string) => {
    setActiveTab(tab);
    if (tab !== "all") {
      setVisibleCount(INITIAL_PHOTOS_TO_SHOW);
      console.log(
        `Tab changed to city: ${tab}. Reset visible count to ${INITIAL_PHOTOS_TO_SHOW}.`
      );
    } else {
      console.log(`Tab changed to: all.`);
    }
  }, []);

  const handleLoadMore = useCallback(() => {
    if (activeTab !== "all") {
      setVisibleCount((prevCount) => {
        const newCount = prevCount + PHOTOS_TO_LOAD_ON_CLICK;
        console.log(
          `Loading more photos for city ${activeTab}. Adding ${PHOTOS_TO_LOAD_ON_CLICK}. New count: ${newCount}`
        );
        return newCount;
      });
    }
  }, [activeTab]);

  const isCityView = activeTab !== "all";
  const totalPhotosForCity = filteredPhotos.length;
  let isDisabled = true;
  if (isCityView) {
    isDisabled =
      totalPhotosForCity < INITIAL_PHOTOS_TO_SHOW + 1 ||
      visibleCount >= totalPhotosForCity; // Wyłączony, jeśli < 5 zdjęć LUB wszystkie są widoczne
    // Zmieniono logikę na totalPhotosForCity < (INITIAL_PHOTOS_TO_SHOW + 1), aby był aktywny przy 4 zdjęciach
    console.log(
      `[Button Disabled Check] City: ${activeTab}, Total: ${totalPhotosForCity}, Visible: ${visibleCount}, isDisabled: ${isDisabled}`
    );
  }

  return (
    <section className="py-10 container mx-auto px-4" id="destinations">
      {/* --- PRZYWRÓCONY BLOK H1 I OPISU --- */}
      <div className="mb-8 text-center">
        <h1 className="font-heading font-bold text-2xl md:text-3xl mb-2">
          {t("destinations.exploreTitle")}
        </h1>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          {t("destinations.exploreDescription")}
        </p>
      </div>
      {/* --- KONIEC PRZYWRÓCONEGO BLOKU --- */}

      {/* Przyciski zakładek */}
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

      {/* Panel z siatką zdjęć */}
      <div
        id={`${activeTab}-photos-tabpanel`}
        role="tabpanel"
        aria-labelledby={`${activeTab}-tab`}
        tabIndex={0}
      >
        <PhotoGrid photos={paginatedPhotos} />
      </div>

      {/* Przycisk "Załaduj więcej" */}
      <div className="mt-8 text-center">
        {isCityView && (
          <Button
            onClick={handleLoadMore}
            className="px-6 py-3"
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
