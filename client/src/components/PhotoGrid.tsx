import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import PhotoLightbox from "./PhotoLightbox";
import { Photo } from "@/data/photos";
import GridImageItem from "./GridImageItem"; // --- IMPORTUJ NOWY KOMPONENT ---

interface PhotoGridProps {
  photos: Photo[];
}

const PhotoGrid = ({ photos }: PhotoGridProps) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const { t } = useTranslation();

  const displayedPhotos = photos; // Już przefiltrowane i spaginowane

  // Handler kliknięcia pozostaje w PhotoGrid, bo zarządza stanem Lightboxa
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

  if (!displayedPhotos || displayedPhotos.length === 0) {
    return (
      <div className="flex justify-center items-center h-40">
        <p className="text-gray-500 dark:text-gray-400">
          {t("photos.noPhotos", "No photos to display.")}
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
        {/* --- UŻYJ KOMPONENTU GridImageItem --- */}
        {displayedPhotos.map((photo) =>
          // Sprawdzenie, czy photo istnieje, na wszelki wypadek
          photo ? (
            <GridImageItem
              key={photo.id} // Klucz przekazujemy tutaj
              photo={photo}
              onClick={handleGridPhotoClick} // Przekazujemy handler kliknięcia
              itemVariants={item} // Przekazujemy warianty animacji
            />
          ) : null
        )}
        {/* --- KONIEC UŻYCIA GridImageItem --- */}
      </motion.div>

      {/* Lightbox bez zmian */}
      <PhotoLightbox
        isOpen={lightboxOpen}
        photos={displayedPhotos.filter((p) => p)} // Przekazujemy tylko istniejące zdjęcia do lightboxa
        currentIndex={currentPhotoIndex}
        onClose={() => setLightboxOpen(false)}
        onNext={() =>
          setCurrentPhotoIndex(
            (prevIndex) =>
              (prevIndex + 1) % displayedPhotos.filter((p) => p).length
          )
        }
        onPrevious={() =>
          setCurrentPhotoIndex(
            (prevIndex) =>
              (prevIndex - 1 + displayedPhotos.filter((p) => p).length) %
              displayedPhotos.filter((p) => p).length
          )
        }
      />
    </>
  );
};

export default PhotoGrid;
