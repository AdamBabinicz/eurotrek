import React, { useState, useEffect, useRef } from "react"; // Dodano React dla typów TouchEvent
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button"; // Upewnij się, że ścieżka jest poprawna
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

// Interfejsy
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

// Warianty animacji dla Framer Motion
const variants = {
  enter: (direction: "next" | "prev") => ({
    x: direction === "next" ? "100%" : "-100%",
    opacity: 0,
  }),
  center: {
    zIndex: 1, // Aktywny slajd na wierzchu
    x: 0,
    opacity: 1,
  },
  exit: (direction: "next" | "prev") => ({
    zIndex: 0, // Wychodzący slajd pod spodem
    x: direction === "next" ? "-100%" : "100%", // Poprawiony kierunek wyjścia
    opacity: 0,
  }),
};

// Przejścia animacji
const transition = {
  x: { type: "spring", stiffness: 300, damping: 30 },
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
  const { t } = useTranslation();

  // Refy dla obsługi dotyku
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const justSwiped = useRef(false); // Flaga do ignorowania kliknięcia po swipe
  const swipeTimeoutRef = useRef<NodeJS.Timeout | null>(null); // Ref do timeoutu flagi

  // Efekt dla Autoplay
  useEffect(() => {
    if (autoPlayInterval <= 0 || images.length <= 1) return;

    const interval = setInterval(() => {
      // Używamy funkcji w setState, aby mieć pewność, że bazujemy na najnowszym stanie isAnimating
      setIsAnimating((currentIsAnimating) => {
        if (!currentIsAnimating) {
          setDirection("next");
          setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
          return true; // Ustaw isAnimating na true
        }
        return currentIsAnimating; // Pozostaw bez zmian, jeśli już animuje
      });
    }, autoPlayInterval);

    // Cleanup interwału i timeoutu
    return () => {
      clearInterval(interval);
      if (swipeTimeoutRef.current) {
        clearTimeout(swipeTimeoutRef.current);
      }
    };
  }, [autoPlayInterval, images.length]); // Usunięto isAnimating z zależności, aby uniknąć resetowania interwału przy każdej animacji

  // Nawigacja: Następny slajd
  const handleNext = () => {
    if (!isAnimating && images.length > 1) {
      // Sprawdzamy > 1 dla bezpieczeństwa
      setDirection("next");
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }
  };

  // Nawigacja: Poprzedni slajd
  const handlePrevious = () => {
    if (!isAnimating && images.length > 1) {
      setDirection("prev");
      setIsAnimating(true);
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + images.length) % images.length
      );
    }
  };

  // Nawigacja: Kliknięcie kropki
  const handleDotClick = (index: number) => {
    if (
      !isAnimating &&
      images.length > 0 &&
      index >= 0 &&
      index < images.length &&
      index !== currentIndex // Tylko jeśli kliknięto inną kropkę niż aktywna
    ) {
      setDirection(index > currentIndex ? "next" : "prev"); // Ustaw kierunek na podstawie klikniętej kropki
      setCurrentIndex(index);
      setIsAnimating(true); // Rozpocznij animację
    }
  };

  // Wywoływane po zakończeniu animacji Framer Motion
  const handleAnimationComplete = () => {
    setIsAnimating(false);
  };

  // Obsługa kliknięcia obrazka (otwarcie popupu)
  const handleImageClick = () => {
    // Wywołaj tylko jeśli:
    // - Nie ma animacji
    // - Funkcja onImageClick istnieje
    // - Ostatnia interakcja dotykowa NIE była swipe'em
    if (!isAnimating && onImageClick && !justSwiped.current) {
      onImageClick(currentIndex);
    }
    // Resetuj flagę justSwiped na wszelki wypadek, chociaż timeout powinien to zrobić
    justSwiped.current = false;
    if (swipeTimeoutRef.current) {
      clearTimeout(swipeTimeoutRef.current);
      swipeTimeoutRef.current = null;
    }
  };

  // Obsługa dotyku: Początek
  const handleTouchStart = (e: React.TouchEvent) => {
    // Wyczyść poprzedni timeout, jeśli użytkownik szybko zacznie nowy dotyk
    if (swipeTimeoutRef.current) {
      clearTimeout(swipeTimeoutRef.current);
      swipeTimeoutRef.current = null;
    }
    justSwiped.current = false; // Resetuj flagę swipe na początku nowego dotyku
    touchStartX.current = e.touches[0]?.clientX ?? 0; // Użyj ?? dla wartości domyślnej
    touchEndX.current = touchStartX.current; // Zainicjuj EndX na StartX
  };

  // Obsługa dotyku: Ruch
  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0]?.clientX ?? 0; // Aktualizuj EndX podczas ruchu
  };

  // Obsługa dotyku: Koniec
  const handleTouchEnd = () => {
    // Upewnij się, że touchStart był zarejestrowany
    if (touchStartX.current === 0) return;

    const dx = touchEndX.current - touchStartX.current;
    const swipeThreshold = 50; // Minimalna odległość swipe'a

    if (Math.abs(dx) > swipeThreshold) {
      // --- Wykryto Swipe ---
      justSwiped.current = true; // Ustaw flagę, że był swipe

      if (dx < 0) {
        // Swipe w lewo -> Następny
        handleNext();
      } else {
        // Swipe w prawo -> Poprzedni
        handlePrevious();
      }

      // Ustaw krótki timeout, aby zignorować potencjalny 'click' po swipe
      // Jeśli użytkownik kliknie *naprawdę* po tym czasie, flaga będzie false
      swipeTimeoutRef.current = setTimeout(() => {
        justSwiped.current = false;
        swipeTimeoutRef.current = null;
      }, 300); // 300ms powinno wystarczyć
    } else {
      // --- Nie wykryto Swipe (prawdopodobnie Tap) ---
      // Nie robimy nic (handleImageClick zajmie się tapnięciem)
      // Upewnij się, że flaga jest false
      justSwiped.current = false;
    }

    // Resetuj koordynaty dotyku na koniec
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  return (
    <div
      className="image-slider h-full relative select-none" // Dodano select-none
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      style={{ touchAction: "pan-y" }} // Pozwól na pionowe przewijanie strony
    >
      {/* Kontener na slajdy */}
      <div className="slider-container h-full relative overflow-hidden">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex} // Klucz = index, aby Framer wiedział, co animować
            custom={direction} // Przekaż kierunek do wariantów
            variants={variants} // Użyj zdefiniowanych wariantów
            initial="enter"
            animate="center"
            exit="exit"
            transition={transition} // Użyj zdefiniowanych przejść
            onAnimationComplete={handleAnimationComplete} // Resetuj isAnimating po zakończeniu
            className="absolute inset-0 w-full h-full" // Upewnij się, że div zajmuje całe miejsce
          >
            <img
              src={images[currentIndex]?.src} // Używaj bezpośrednio, obsługa braku obrazków poniżej
              alt={images[currentIndex]?.alt ?? "Slajd galerii"} // Domyślny alt
              className={`w-full h-full object-cover ${
                isAnimating || justSwiped.current
                  ? "cursor-default"
                  : "cursor-pointer" // Zmień kursor podczas animacji lub po swipe
              }`}
              onClick={handleImageClick} // Handler kliknięcia
              draggable="false" // Zapobiegaj przeciąganiu obrazka
              // Można rozważyć pointerEvents: none podczas animacji, jeśli kursor to za mało
              // style={{ pointerEvents: isAnimating ? 'none' : 'auto' }}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Przyciski nawigacyjne (tylko jeśli więcej niż 1 obrazek) */}
      {images.length > 1 && (
        <>
          <Button
            aria-label={t("imageSlider.previousSlide", "Poprzedni slajd")} // Dodaj klucz tłumaczenia
            onClick={handlePrevious}
            className="absolute top-1/2 left-2 md:left-4 transform -translate-y-1/2 z-20" // z-20 aby były nad tekstem
            disabled={isAnimating} // Wyłącz podczas animacji
            variant="outline" // Możesz dostosować wariant przycisku
            size="icon"
          >
            <ChevronLeft />
          </Button>
          <Button
            aria-label={t("imageSlider.nextSlide", "Następny slajd")} // Dodaj klucz tłumaczenia
            onClick={handleNext}
            className="absolute top-1/2 right-2 md:right-4 transform -translate-y-1/2 z-20" // z-20 aby były nad tekstem
            disabled={isAnimating} // Wyłącz podczas animacji
            variant="outline"
            size="icon"
          >
            <ChevronRight />
          </Button>
        </>
      )}

      {/* Kropki nawigacyjne (tylko jeśli więcej niż 1 obrazek) */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {images.map((_, index) => (
            <button
              aria-label={t(
                "imageSlider.goToSlide",
                "Przejdź do slajdu {{index}}",
                { index: index + 1 }
              )} // Klucz tłumaczenia z interpolacją
              aria-current={index === currentIndex ? "true" : undefined}
              key={index}
              onClick={() => handleDotClick(index)}
              className={`p-1 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black/50 focus:ring-white ${
                isAnimating
                  ? "cursor-wait"
                  : "hover:bg-white/20 active:bg-white/30"
              }`} // Zmieniony padding i kursor
              disabled={isAnimating} // Wyłącz podczas animacji
            >
              <span
                className={`block w-2 h-2 rounded-full transition-colors duration-300 ${
                  // Zmniejszone kropki, dodane przejście
                  currentIndex === index ? "bg-white" : "bg-white/50"
                }`}
              ></span>
            </button>
          ))}
        </div>
      )}

      {/* Opis obrazka */}
      <div className="absolute bottom-4 left-4 right-4 md:right-auto md:max-w-sm z-10 pointer-events-none">
        {" "}
        {/* Pozycja lewa-dół, responsywna szerokość, pointer-events na wrapperze */}
        <div className="bg-white/60 backdrop-blur-sm p-3 md:p-4 rounded-lg shadow-lg text-gray-900 text-left pointer-events-auto">
          {images.length > 0 && images[currentIndex] ? (
            <>
              <h3 className="font-semibold text-base md:text-lg mb-1">
                {" "}
                {/* Usunięto truncate, jeśli niepotrzebne przy wyrównaniu do lewej */}
                {t(
                  `photos.${images[currentIndex].id}.title`,
                  images[currentIndex].alt
                )}
              </h3>
              {images[currentIndex].location && (
                <p className="text-xs md:text-sm mb-1 opacity-80">
                  {t(
                    `photos.${images[currentIndex].id}.location`,
                    images[currentIndex].location
                  )}
                </p>
              )}
              {images[currentIndex].description && (
                <p className="text-xs md:text-sm opacity-90">
                  {" "}
                  {/* Zwiększona opacity dla lepszej czytelności */}
                  {t(
                    `photos.${images[currentIndex].id}.description`,
                    images[currentIndex].description
                  )}
                </p>
              )}
            </>
          ) : (
            images.length === 0 && (
              <p className="text-sm opacity-80">
                {t("common.no_photos_available", "Brak dostępnych zdjęć")}
              </p>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
