import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

interface SlideImage {
  id: string;
  src: string;
  alt: string;
  location: string;
  description: string;
}

interface ImageSliderProps {
  images: SlideImage[];
  autoPlayInterval?: number;
}

const ImageSlider = ({ images, autoPlayInterval = 5000 }: ImageSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { t } = useTranslation();

  useEffect(() => {
    if (autoPlayInterval <= 0 || images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlayInterval, images.length]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="image-slider h-full relative">
      <div className="slider-container h-full relative overflow-hidden">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentIndex}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
          >
            <img 
              src={images[currentIndex].src} 
              alt={images[currentIndex].alt} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 text-white">
              <h2 className="font-accent italic text-xl md:text-3xl mb-2">{t(`heroSlides.${images[currentIndex].id}.location`)}</h2>
              <p className="text-sm md:text-base max-w-md">{t(`heroSlides.${images[currentIndex].id}.description`)}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      
      <Button 
        variant="ghost" 
        size="icon" 
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/70 dark:bg-black/50 rounded-full text-black dark:text-white hover:bg-white hover:dark:bg-black transition-colors z-10 focus:outline-none focus:ring-2 focus:ring-primary" 
        onClick={handlePrevious}
        aria-label={t('slider.previous')}
      >
        <ChevronLeft className="h-5 w-5" />
      </Button>
      
      <Button 
        variant="ghost" 
        size="icon" 
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/70 dark:bg-black/50 rounded-full text-black dark:text-white hover:bg-white hover:dark:bg-black transition-colors z-10 focus:outline-none focus:ring-2 focus:ring-primary" 
        onClick={handleNext}
        aria-label={t('slider.next')}
      >
        <ChevronRight className="h-5 w-5" />
      </Button>
      
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, index) => (
          <Button 
            key={index} 
            variant="ghost" 
            size="icon" 
            className={`w-3 h-3 p-0 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-white/50 hover:bg-white'} transition-colors focus:outline-none focus:ring-2 focus:ring-primary`} 
            onClick={() => handleDotClick(index)}
            aria-label={t('slider.goToSlide', { index: index + 1 })}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
