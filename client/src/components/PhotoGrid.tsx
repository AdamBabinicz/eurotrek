import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import PhotoLightbox from "./PhotoLightbox";
import { Photo } from "@/data/photos";

interface PhotoGridProps {
  photos: Photo[];
  city?: string;
  onPhotoClick: (index: number) => void;
}

const PhotoGrid = ({ photos, city, onPhotoClick }: PhotoGridProps) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const { t } = useTranslation();

  let displayedPhotos: Photo[] = [];

  if (city === undefined || city === "all") {
    // Pokaż po jednej fotce z każdego miasta
    const uniqueCities = [...new Set(photos.map((photo) => photo.city))];
    displayedPhotos = uniqueCities
      .map((cityName) => photos.find((photo) => photo.city === cityName))
      .filter((photo) => photo !== undefined) as Photo[];
  } else {
    // Pokaż wszystkie fotki z wybranego miasta
    displayedPhotos = photos.filter((photo) => photo.city === city);
  }

  const handleGridPhotoClick = (photoId: string) => {
    const index = displayedPhotos.findIndex((p) => p.id === photoId);
    if (index !== -1) {
      setCurrentPhotoIndex(index);
      setLightboxOpen(true);
    }
  };

  const container = {
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  if (displayedPhotos.length === 0) {
    return (
      <div className="flex justify-center items-center h-40">
        <p className="text-gray-500 dark:text-gray-400">
          {t("photos.noPhotos")}
        </p>
      </div>
    );
  }

  return (
    <>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {displayedPhotos.map((photo, index) => (
          <motion.div
            key={photo.id}
            className="group relative overflow-hidden rounded-lg shadow-md aspect-[4/3] cursor-pointer"
            onClick={() => handleGridPhotoClick(photo.id)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                handleGridPhotoClick(photo.id);
              }
            }}
            tabIndex={0}
            role="button"
            aria-label={t("photos.view", {
              title: t(`photos.${photo.id}.title`),
            })}
            variants={item}
          >
            <img
              src={photo.src}
              alt={t(`photos.${photo.id}.alt`)}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 group-focus:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 group-focus:opacity-100 transition-all duration-300">
              <p className="text-white font-accent text-lg">
                {t(`photos.${photo.id}.title`)}
              </p>
              <p className="text-white/90 text-sm">
                {t(`photos.${photo.id}.location`)}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <PhotoLightbox
        isOpen={lightboxOpen}
        photos={displayedPhotos}
        currentIndex={currentPhotoIndex}
        onClose={() => setLightboxOpen(false)}
        onNext={() =>
          setCurrentPhotoIndex(
            (prevIndex) => (prevIndex + 1) % displayedPhotos.length
          )
        }
        onPrevious={() =>
          setCurrentPhotoIndex(
            (prevIndex) =>
              (prevIndex - 1 + displayedPhotos.length) % displayedPhotos.length
          )
        }
      />
    </>
  );
};

// export { Photo };
export default PhotoGrid;
