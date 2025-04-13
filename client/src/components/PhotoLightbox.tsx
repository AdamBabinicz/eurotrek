import { useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Photo } from "./PhotoGrid";

interface PhotoLightboxProps {
  isOpen: boolean;
  photos: Photo[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
}

const PhotoLightbox = ({ 
  isOpen, 
  photos, 
  currentIndex, 
  onClose, 
  onNext, 
  onPrevious 
}: PhotoLightboxProps) => {
  const { t } = useTranslation();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      
      switch (e.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowRight':
          onNext();
          break;
        case 'ArrowLeft':
          onPrevious();
          break;
        default:
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose, onNext, onPrevious]);

  return (
    <AnimatePresence>
      {isOpen && photos.length > 0 && (
        <motion.div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Button 
            variant="ghost" 
            size="icon" 
            className="absolute top-4 right-4 text-white text-2xl hover:text-gray-300 transition-colors focus:outline-none" 
            onClick={onClose}
            aria-label={t('lightbox.close')}
          >
            <X className="h-6 w-6" />
          </Button>
          
          <Button 
            variant="ghost" 
            size="icon" 
            className="absolute left-4 text-white text-2xl hover:text-gray-300 transition-colors focus:outline-none" 
            onClick={onPrevious}
            aria-label={t('lightbox.previous')}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          
          <div className="max-w-4xl max-h-[80vh] px-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center"
              >
                <img 
                  src={photos[currentIndex].src} 
                  alt={t(`photos.${photos[currentIndex].id}.alt`)} 
                  className="max-w-full max-h-[70vh] object-contain"
                />
                <div className="mt-4 text-white text-center">
                  <h3 className="font-accent text-xl">{t(`photos.${photos[currentIndex].id}.title`)}</h3>
                  <p className="text-white/80">{t(`photos.${photos[currentIndex].id}.location`)}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          <Button 
            variant="ghost" 
            size="icon" 
            className="absolute right-4 text-white text-2xl hover:text-gray-300 transition-colors focus:outline-none" 
            onClick={onNext}
            aria-label={t('lightbox.next')}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PhotoLightbox;
