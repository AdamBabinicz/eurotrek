import { useState, useEffect, useRef } from "react";
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
  onImageClick?: (index: number) => void;
}
const ImageSlider = ({
  images,
  autoPlayInterval = 6000,
  onImageClick,
}: ImageSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const [isAnimating, setIsAnimating] = useState(false);
  const { t } = useTranslation();
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  useEffect(() => {
    if (autoPlayInterval <= 0 || images.length <= 1) return;
    const interval = setInterval(() => {
      if (!isAnimating) {
        setDirection("next");
        setIsAnimating(true);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlayInterval, images.length, isAnimating]);
  const handleNext = () => {
    if (!isAnimating && images.length > 0) {
      setDirection("next");
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }
  };
  const handlePrevious = () => {
    if (!isAnimating && images.length > 0) {
      setDirection("prev");
      setIsAnimating(true);
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + images.length) % images.length
      );
    }
  };
  const handleDotClick = (index: number) => {
    if (
      !isAnimating &&
      images.length > 0 &&
      index >= 0 &&
      index < images.length
    ) {
      setCurrentIndex(index);
      setIsAnimating(true);
    }
  };
  const handleAnimationComplete = () => {
    setIsAnimating(false);
  };
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches?.[0]?.clientX || 0;
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches?.[0]?.clientX || 0;
  };
  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      handleNext();
    }
    if (touchEndX.current - touchStartX.current > 50) {
      handlePrevious();
    }
  };
  return (
    <div
      className="image-slider h-full relative"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="slider-container h-full relative overflow-hidden">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentIndex}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction === "next" ? "100%" : "-100%" }}
            transition={{
              duration: 0.5,
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
            onAnimationComplete={handleAnimationComplete}
          >
            <img
              src={images?.[currentIndex]?.src}
              alt={images?.[currentIndex]?.alt}
              className="w-full h-full object-cover cursor-pointer"
              onClick={() => onImageClick?.(currentIndex)}
            />
          </motion.div>
        </AnimatePresence>
      </div>
      <Button
        onClick={handlePrevious}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10"
        disabled={images.length <= 1}
      >
        <ChevronLeft />
      </Button>
      <Button
        onClick={handleNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10"
        disabled={images.length <= 1}
      >
        <ChevronRight />
      </Button>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-2.5 h-2.5 rounded-full ${
              currentIndex === index ? "bg-white" : "bg-white/50"
            }`}
            disabled={images.length <= 1}
          />
        ))}
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white z-10 w-full">
        {images.length > 0 && images?.[currentIndex]?.id ? (
          <>
            <h3 className="font-bold text-xl left-4 p-2">
              {t(`photos.${images?.[currentIndex]?.id}.title`)}
            </h3>
            <p className="text-sm left-4 p-2">
              {t(`photos.${images?.[currentIndex]?.id}.location`)}
            </p>
            <p className="text-sm mt-2 left-4 p-2">
              {t(`photos.${images?.[currentIndex]?.id}.description`)}
            </p>
          </>
        ) : (
          <p className="text-sm left-4 p-2">
            {t("common.no_photos_data")}{" "}
            {/* Dodaj tłumaczenie dla braku danych */}
          </p>
        )}
      </div>
    </div>
  );
};
export default ImageSlider;
