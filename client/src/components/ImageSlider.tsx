import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button"; // Upewnij się, że ścieżka jest poprawna
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
}
const variants = {
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
  x: { type: "spring", stiffness: 260, damping: 30 },
  opacity: { duration: 0.2 },
};

const ImageSlider = ({
  images,
  autoPlayInterval = 6000,
  onImageClick,
}: ImageSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const [isAnimating, setIsAnimating] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const { t } = useTranslation();

  // Refy
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const justSwiped = useRef(false);
  const swipeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // --- Funkcja inicjująca zmianę slajdu ---
  // Nie potrzebuje już sprawdzania warunków tutaj, bo interwał nie będzie działał, gdy nie powinien
  const goToNextSlide = () => {
    setDirection("next");
    setIsAnimating(true); // Oznacz jako animujący *przed* zmianą indeksu
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // --- Funkcja startująca interwał ---
  const startInterval = () => {
    // Wyczyść stary interwał dla pewności
    stopInterval();
    // Ustaw nowy interwał tylko jeśli warunki podstawowe są spełnione
    if (autoPlayInterval > 0 && images.length > 1) {
      intervalRef.current = setInterval(goToNextSlide, autoPlayInterval);
    }
  };

  // --- Funkcja stopująca interwał ---
  const stopInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  // --- Główny useEffect do zarządzania cyklem życia interwału ---
  useEffect(() => {
    // Warunek, kiedy interwał powinien być AKTYWNY:
    const shouldBeRunning =
      autoPlayInterval > 0 && images.length > 1 && !isHovering && !isAnimating;

    if (shouldBeRunning) {
      startInterval(); // Uruchom lub upewnij się, że działa
    } else {
      stopInterval(); // Zatrzymaj lub upewnij się, że jest zatrzymany
    }

    // Cleanup przy odmontowaniu komponentu
    return stopInterval;

    // Zależności: Wszystkie stany i propsy, które wpływają na decyzję start/stop
  }, [isHovering, isAnimating, autoPlayInterval, images.length]);

  // --- Nawigacja (Dodano stopInterval) ---
  const handleNext = () => {
    if (!isAnimating && images.length > 1) {
      stopInterval(); // Zatrzymaj autoplay przy ręcznej akcji
      setDirection("next");
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }
  };
  const handlePrevious = () => {
    if (!isAnimating && images.length > 1) {
      stopInterval(); // Zatrzymaj autoplay przy ręcznej akcji
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
      stopInterval(); // Zatrzymaj autoplay przy ręcznej akcji
      setDirection(index > currentIndex ? "next" : "prev");
      setIsAnimating(true);
      setCurrentIndex(index);
    }
  };

  // --- Obsługa zdarzeń ---
  const handleAnimationComplete = () => {
    setIsAnimating(false);
    // Nie ma potrzeby restartować interwału tutaj,
    // główny useEffect zareaguje na zmianę isAnimating
  };

  // Handler kliknięcia obrazka (bez zmian)
  const handleImageClick = () => {
    if (!isAnimating && onImageClick && !justSwiped.current) {
      onImageClick(currentIndex);
    }
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

  // --- Renderowanie JSX (bez zmian) ---
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
      {/* Kontener na slajdy */}
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
            onAnimationComplete={handleAnimationComplete} // Resetuje isAnimating
            className="absolute inset-0 w-full h-full"
          >
            {images[currentIndex] && (
              <img
                src={images[currentIndex].src}
                alt={images[currentIndex].alt ?? "Slajd galerii"}
                className={`w-full h-full object-cover ${
                  isAnimating || justSwiped.current
                    ? "cursor-default"
                    : "cursor-pointer"
                }`}
                onClick={handleImageClick}
                draggable="false"
              />
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Przyciski Nawigacyjne */}
      {images.length > 1 && (
        <>
          <Button
            aria-label={t("imageSlider.previousSlide", "Poprzedni slajd")}
            onClick={handlePrevious}
            className="absolute top-1/2 left-2 md:left-4 transform -translate-y-1/2 z-20"
            disabled={isAnimating}
            variant="outline"
            size="icon"
          >
            <ChevronLeft />
          </Button>
          <Button
            aria-label={t("imageSlider.nextSlide", "Następny slajd")}
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

      {/* Kropki Nawigacyjne */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {images.map((_, index) => (
            <button
              aria-label={t(
                "imageSlider.goToSlide",
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

      {/* Opis Obrazka */}
      <div className="absolute bottom-4 left-4 right-4 md:right-auto md:max-w-sm z-10 pointer-events-none">
        <div className="bg-white/60 backdrop-blur-sm p-3 md:p-4 rounded-lg shadow-lg text-gray-900 text-left pointer-events-auto">
          {images.length > 0 && images[currentIndex] ? (
            <>
              <h3 className="font-semibold text-base md:text-lg mb-1">
                {" "}
                {t(
                  `photos.${images[currentIndex].id}.title`,
                  images[currentIndex].alt
                )}{" "}
              </h3>
              {images[currentIndex].location && (
                <p className="text-xs md:text-sm mb-1 opacity-80">
                  {" "}
                  {t(
                    `photos.${images[currentIndex].id}.location`,
                    images[currentIndex].location
                  )}{" "}
                </p>
              )}
              {images[currentIndex].description && (
                <p className="text-xs md:text-sm opacity-90">
                  {" "}
                  {t(
                    `photos.${images[currentIndex].id}.description`,
                    images[currentIndex].description
                  )}{" "}
                </p>
              )}
            </>
          ) : (
            images.length === 0 && (
              <p className="text-sm opacity-80">
                {" "}
                {t("common.no_photos_available", "Brak dostępnych zdjęć")}{" "}
              </p>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
