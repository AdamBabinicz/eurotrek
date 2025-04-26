import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Photo } from "@/data/photos";

interface GridImageItemProps {
  photo: Photo;
  onClick: (photoId: string) => void;
  itemVariants: any;
}

const GridImageItem = ({
  photo,
  onClick,
  itemVariants,
}: GridImageItemProps) => {
  const [hasLoadError, setHasLoadError] = useState(false);
  const { t } = useTranslation();

  const handleError = () => {
    console.error("Error loading image:", photo.src);
    setHasLoadError(true);
  };

  const photoTitle = t(
    `photos.${photo.id}.title`,
    photo.title ?? "Untitled Photo"
  );
  const photoAlt = t(`photos.${photo.id}.alt`, photo.alt ?? photoTitle);
  const photoLocation = t(
    `photos.${photo.id}.location`,
    photo.location ?? "Unknown location"
  );
  const ariaLabel = t("photos.view", "View photo: {{title}}", {
    title: photoTitle,
  });

  if (hasLoadError) {
    return (
      <motion.div
        className="flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md aspect-[4/3]"
        variants={itemVariants}
        aria-hidden="true"
      >
        <span className="text-gray-400 dark:text-gray-600 text-xs">
          {t("photos.loadError", "Błąd ładowania")}
        </span>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="group relative overflow-hidden rounded-lg shadow-md aspect-[4/3] cursor-pointer"
      onClick={() => onClick(photo.id)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick(photo.id);
        }
      }}
      tabIndex={0}
      role="button"
      aria-label={ariaLabel}
      variants={itemVariants}
    >
      <img
        src={photo.src}
        alt={photoAlt}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 group-focus:scale-105"
        loading="lazy"
        onError={handleError}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300"></div>
      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 group-focus:opacity-100 transition-all duration-300">
        <p className="text-white font-accent text-lg">{photoTitle}</p>
        <p className="text-white/90 text-sm">{photoLocation}</p>
      </div>
    </motion.div>
  );
};

export default GridImageItem;
