import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import PhotoLightbox from "./PhotoLightbox";

export interface Photo {
  id: string;
  src: string;
  alt: string;
  title: string;
  location: string;
  city: string;
}

interface PhotoGridProps {
  photos: Photo[];
  city?: string;
}

const PhotoGrid = ({ photos, city }: PhotoGridProps) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const { t } = useTranslation();

  const filteredPhotos = city ? photos.filter(photo => photo.city === city) : photos;

  const handlePhotoClick = (index: number) => {
    setCurrentPhotoIndex(index);
    setLightboxOpen(true);
  };

  const container = {
    show: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  if (filteredPhotos.length === 0) {
    return (
      <div className="flex justify-center items-center h-40">
        <p className="text-gray-500 dark:text-gray-400">
          {t('photos.noPhotos')}
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
        {filteredPhotos.map((photo, index) => (
          <motion.div 
            key={photo.id} 
            className="group relative overflow-hidden rounded-lg shadow-md aspect-[4/3] cursor-pointer"
            onClick={() => handlePhotoClick(index)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handlePhotoClick(index);
              }
            }}
            tabIndex={0}
            role="button"
            aria-label={t('photos.view', { title: t(`photos.${photo.id}.title`) })}
            variants={item}
          >
            <img 
              src={photo.src} 
              alt={t(`photos.${photo.id}.alt`)} 
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 group-focus:scale-105" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 group-focus:translate-y-0 group-focus:opacity-100 transition-all duration-300">
              <h3 className="text-white font-accent text-lg">{t(`photos.${photo.id}.title`)}</h3>
              <p className="text-white/90 text-sm">{t(`photos.${photo.id}.location`)}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <PhotoLightbox
        isOpen={lightboxOpen}
        photos={filteredPhotos}
        currentIndex={currentPhotoIndex}
        onClose={() => setLightboxOpen(false)}
        onNext={() => setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % filteredPhotos.length)}
        onPrevious={() => setCurrentPhotoIndex((prevIndex) => (prevIndex - 1 + filteredPhotos.length) % filteredPhotos.length)}
      />
    </>
  );
};

export default PhotoGrid;
