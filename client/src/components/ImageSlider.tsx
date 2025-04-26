import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

// Interfejsy, Warianty, Przejścia (bez zmian)
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
  isClickable?: boolean; // <-- NOWY PROP zdefiniowany
}
const variants = {
  // ... (bez zmian)
  enter: (direction: "next" | "prev") => ({
    x: direction === "next" ? "100%" : "-100%",
    opacity: 0,
  }),
  center: { zIndex: 1, x: 0, opacity: 1 },
  exit: (direction: "next" | "prev") => ({
    zIndex: 0,
    x: direction === "next" ? "-100%" : "100%",
    opacity: 0,
  }),
};
const transition = {
  // ... (bez zmian)
  x: { type: "spring", stiffness: 260, damping: 30 },
  opacity: { duration: 0.2 },
};

const ImageSlider = ({
  images,
  autoPlayInterval = 6000,
  onImageClick,
  isClickable = true, // <-- Ustawiamy wartość domyślną na true
}: ImageSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const [isAnimating, setIsAnimating] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const { t } = useTranslation();

  // Refy (bez zmian)
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const justSwiped = useRef(false);
  const swipeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Funkcje goToNextSlide, startInterval, stopInterval (bez zmian)
  const goToNextSlide = () => {
    setDirection("next");
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  const startInterval = () => {
    stopInterval();
    if (autoPlayInterval > 0 && images.length > 1) {
      intervalRef.current = setInterval(goToNextSlide, autoPlayInterval);
    }
  };
  const stopInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  // Główny useEffect do zarządzania cyklem życia interwału (bez zmian)
  useEffect(() => {
    const shouldBeRunning =
      autoPlayInterval > 0 && images.length > 1 && !isHovering && !isAnimating;
    if (shouldBeRunning) {
      startInterval();
    } else {
      stopInterval();
    }
    return stopInterval;
  }, [isHovering, isAnimating, autoPlayInterval, images.length]); // Dodano images.length jako zależność

  // Nawigacja (bez zmian)
  const handleNext = () => {
    if (!isAnimating && images.length > 1) {
      stopInterval();
      setDirection("next");
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }
  };
  const handlePrevious = () => {
    if (!isAnimating && images.length > 1) {
      stopInterval();
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
      index < images.length &&
      index !== currentIndex
    ) {
      stopInterval();
      setDirection(index > currentIndex ? "next" : "prev");
      setIsAnimating(true);
      setCurrentIndex(index);
    }
  };

  // Obsługa zdarzeń (bez zmian)
  const handleAnimationComplete = () => {
    setIsAnimating(false);
  };

  // Handler kliknięcia obrazka (z modyfikacją dla isClickable)
  const handleImageClick = () => {
    // Wywołaj onImageClick tylko jeśli slider jest klikalny, nie trwa animacja i nie było swipe'a
    if (isClickable && !isAnimating && onImageClick && !justSwiped.current) {
      onImageClick(currentIndex);
    }
    // Resetuj stan swipe niezależnie od klikalności
    justSwiped.current = false;
    if (swipeTimeoutRef.current) {
      clearTimeout(swipeTimeoutRef.current);
      swipeTimeoutRef.current = null;
    }
  };

  // Handlery Dotyku (bez zmian)
  const handleTouchStart = (e: React.TouchEvent) => {
    if (swipeTimeoutRef.current) {
      clearTimeout(swipeTimeoutRef.current);
      swipeTimeoutRef.current = null;
    }
    justSwiped.current = false;
    touchStartX.current = e.touches[0]?.clientX ?? 0;
    touchEndX.current = touchStartX.current;
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0]?.clientX ?? 0;
  };
  const handleTouchEnd = () => {
    if (touchStartX.current === 0) return;
    const dx = touchEndX.current - touchStartX.current;
    const swipeThreshold = 50;
    if (Math.abs(dx) > swipeThreshold) {
      justSwiped.current = true;
      if (dx < 0) {
        handleNext();
      } else {
        handlePrevious();
      }
      swipeTimeoutRef.current = setTimeout(() => {
        justSwiped.current = false;
        swipeTimeoutRef.current = null;
      }, 300);
    } else {
      justSwiped.current = false;
    }
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  // Handlery Myszki (bez zmian)
  const handleMouseEnter = () => {
    setIsHovering(true);
  };
  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  // --- Renderowanie JSX (z modyfikacją img className) ---
  return (
    <div
      className="image-slider h-full relative select-none"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ touchAction: "pan-y" }}
    >
      <div className="slider-container h-full relative overflow-hidden">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={transition}
            onAnimationComplete={handleAnimationComplete}
            className="absolute inset-0 w-full h-full"
          >
            {images[currentIndex] && (
              <img
                src={images[currentIndex].src}
                alt={images[currentIndex].alt ?? "Slajd galerii"}
                // --- ZMODYFIKOWANA LOGIKA KLAS KURSORA ---
                className={`w-full h-full object-cover ${
                  !isClickable || isAnimating || justSwiped.current // Dodano warunek !isClickable
                    ? "cursor-default"
                    : "cursor-pointer"
                }`}
                // --- KONIEC MODYFIKACJI KLAS ---
                onClick={handleImageClick} // onClick jest nadal podpięty, ale logika wewnątrz sprawdza isClickable
                draggable="false"
              />
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Przyciski nawigacyjne i kropki (bez zmian) */}
      {images.length > 1 && (
        <>
          <Button
            aria-label={t("slider.previous", "Poprzedni slajd")} // Użycie klucza z Twoich plików tłumaczeń
            onClick={handlePrevious}
            className="absolute top-1/2 left-2 md:left-4 transform -translate-y-1/2 z-20"
            disabled={isAnimating}
            variant="outline"
            size="icon"
          >
            <ChevronLeft />
          </Button>
          <Button
            aria-label={t("slider.next", "Następny slajd")} // Użycie klucza z Twoich plików tłumaczeń
            onClick={handleNext}
            className="absolute top-1/2 right-2 md:right-4 transform -translate-y-1/2 z-20"
            disabled={isAnimating}
            variant="outline"
            size="icon"
          >
            <ChevronRight />
          </Button>
        </>
      )}

      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {images.map((_, index) => (
            <button
              aria-label={t(
                "slider.goToSlide", // Użycie klucza z Twoich plików tłumaczeń
                "Przejdź do slajdu {{index}}",
                { index: index + 1 }
              )}
              aria-current={index === currentIndex ? "true" : undefined}
              key={index}
              onClick={() => handleDotClick(index)}
              className={`p-1 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black/50 focus:ring-white ${
                isAnimating
                  ? "cursor-wait"
                  : "hover:bg-white/20 active:bg-white/30"
              }`}
              disabled={isAnimating}
            >
              <span
                className={`block w-2 h-2 rounded-full transition-colors duration-300 ${
                  currentIndex === index ? "bg-white" : "bg-white/50"
                }`}
              ></span>
            </button>
          ))}
        </div>
      )}

      {/* Opis slajdu (bez zmian, zakładając użycie kluczy z Twoich plików tłumaczeń) */}
      <div className="absolute bottom-4 left-4 right-4 md:right-auto md:max-w-sm z-10 pointer-events-none">
        <div className="bg-white/60 backdrop-blur-sm p-3 md:p-4 rounded-lg shadow-lg text-gray-900 text-left pointer-events-auto">
          {images.length > 0 && images[currentIndex] ? (
            <>
              <h3 className="font-semibold text-base md:text-lg mb-1">
                {/* Użycie kluczy z Twoich plików tłumaczeń */}
                {t(
                  `heroSlides.${images[currentIndex].id}.title`, // Poprawiono na heroSlides jeśli to ID stamtąd
                  images[currentIndex].alt // Fallback na alt jeśli brak title w tłumaczeniu
                )}
              </h3>
              {images[currentIndex].location && (
                <p className="text-xs md:text-sm mb-1 opacity-80">
                  {t(
                    `heroSlides.${images[currentIndex].id}.location`,
                    images[currentIndex].location
                  )}
                </p>
              )}
              {images[currentIndex].description && (
                <p className="text-xs md:text-sm opacity-90">
                  {t(
                    `heroSlides.${images[currentIndex].id}.description`,
                    images[currentIndex].description
                  )}
                </p>
              )}
            </>
          ) : (
            images.length === 0 && (
              <p className="text-sm opacity-80">
                {/* Użycie klucza z Twoich plików tłumaczeń */}
                {t("common.no_photos_data", "Brak danych zdjęć")}
              </p>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
