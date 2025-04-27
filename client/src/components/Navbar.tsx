import { useState } from "react";
import { Link, useLocation } from "wouter";
import { useTranslation } from "react-i18next";
import { Menu, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ThemeToggle from "./ThemeToggle";
import LanguageSelector from "./LanguageSelector";

// --- Zaimportuj funkcje z utils ---
import { localizedSlug, createLocalizedPath } from "@/utils/localization"; // Dostosuj ścieżkę, jeśli trzeba

// --- Zaimportuj dane destynacji (bez getSlugForDestination) ---
import {
  destinations,
  Destination,
  findDestinationById,
} from "@/data/destinations"; // findDestinationById jest potrzebne w createLocalizedPath

interface NavbarProps {
  currentPath: string;
}

const Navbar = ({ currentPath }: NavbarProps) => {
  const { t, i18n } = useTranslation(); // Pobierz instancję i18n
  const currentLang = i18n.language || "pl"; // Bez zmian
  // const defaultLang = "pl"; // defaultLang jest zdefiniowany w createLocalizedPath, niepotrzebny tutaj
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [, setLocation] = useLocation();

  // --- Usuń lokalne definicje localizedSlug i createLocalizedPath ---
  // const localizedSlug = ...
  // const createLocalizedPath = ...

  // Funkcja handleLinkClick (bez zmian)
  const handleLinkClick = (path: string) => {
    setLocation(path);
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  // Funkcja goToHome (używa teraz zaimportowanej createLocalizedPath)
  const goToHome = () => {
    // Przekaż i18n do zaimportowanej funkcji
    handleLinkClick(createLocalizedPath(i18n, "home"));
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm dark:shadow-md">
      <nav
        className="container mx-auto px-4 py-3 flex items-center justify-between"
        aria-label={t("navbar.mainNavLabel", "Główna nawigacja")}
      >
        {/* Link do strony głównej (używa zaimportowanej createLocalizedPath) */}
        <Link
          href={createLocalizedPath(i18n, "home")} // Przekaż i18n
          className="flex items-center gap-2 text-foreground dark:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
          onClick={goToHome}
          aria-label={t("navbar.goToHome", "Przejdź do strony głównej")}
        >
          <span className="text-2xl" aria-hidden="true">
            🌍
          </span>
          <span className="font-heading font-bold text-lg md:text-xl">
            EuroTrek
          </span>
        </Link>

        {/* --- Menu mobilne (Sheet) --- */}
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              aria-label={t("navbar.toggleMenu", "Otwórz/Zamknij menu")}
              aria-expanded={isMobileMenuOpen}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-[300px] sm:w-[400px] bg-background p-6 flex flex-col"
          >
            <SheetHeader className="mb-4 text-left">
              <SheetTitle>{t("navbar.mobileMenuTitle", "Menu")}</SheetTitle>
            </SheetHeader>

            <div className="flex-grow overflow-y-auto flex flex-col gap-2 pr-2">
              {/* Link: Strona Główna (Mobile) */}
              <Link
                href={createLocalizedPath(i18n, "home")} // Przekaż i18n
                className={`block px-3 py-2 rounded-md text-base font-medium hover:bg-accent hover:text-accent-foreground ${
                  currentPath === createLocalizedPath(i18n, "home")
                    ? "bg-accent text-accent-foreground"
                    : "text-muted-foreground"
                }`}
                onClick={() =>
                  handleLinkClick(createLocalizedPath(i18n, "home"))
                }
              >
                {t("navbar.home")}
              </Link>

              {/* Akordeon: Podróże (Mobile) */}
              <Accordion type="single" collapsible className="w-full -mx-3">
                <AccordionItem value="destinations" className="border-b-0">
                  <AccordionTrigger
                    className={`flex w-full items-center justify-between px-3 py-2 rounded-md text-base font-medium hover:bg-accent hover:text-accent-foreground hover:no-underline ${
                      // Sprawdzenie aktywnego stanu: czy ścieżka zawiera slug trasy destinationDetail?
                      // Usunięto odwołanie do nieistniejącej trasy /destinations
                      currentPath.includes(
                        localizedSlug("destinationDetail", i18n)
                      ) // Przekaż i18n
                        ? "text-accent-foreground"
                        : "text-muted-foreground"
                    }`}
                  >
                    {t("navbar.destinations")}
                  </AccordionTrigger>
                  <AccordionContent className="pt-1 pb-0">
                    <div className="flex flex-col space-y-1 pl-8 pr-3">
                      {/* Pętla generująca linki do destynacji (Mobile) */}
                      {destinations.map((destination) => {
                        const destinationPath = createLocalizedPath(
                          i18n, // Przekaż i18n
                          "destinationDetail",
                          destination.id
                        );
                        const destinationName = t(
                          destination.nameKey ||
                            `destinations.${destination.id}`
                        );

                        return (
                          <Link
                            key={destination.id}
                            href={destinationPath}
                            onClick={() => handleLinkClick(destinationPath)}
                            className={`block px-3 py-2 rounded-md text-sm font-medium hover:bg-accent hover:text-accent-foreground ${
                              currentPath === destinationPath
                                ? "bg-accent text-accent-foreground"
                                : "text-muted-foreground"
                            }`}
                          >
                            {destinationName}
                          </Link>
                        );
                      })}
                      {/* Usunięto link "Wszystkie podróże" */}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              {/* Link: O Nas (Mobile) */}
              <Link
                href={createLocalizedPath(i18n, "about")} // Przekaż i18n
                className={`block px-3 py-2 rounded-md text-base font-medium hover:bg-accent hover:text-accent-foreground ${
                  currentPath === createLocalizedPath(i18n, "about")
                    ? "bg-accent text-accent-foreground"
                    : "text-muted-foreground"
                }`}
                onClick={() =>
                  handleLinkClick(createLocalizedPath(i18n, "about"))
                }
              >
                {t("navbar.about")}
              </Link>

              {/* Link: Kontakt (Mobile) */}
              <Link
                href={createLocalizedPath(i18n, "contact")} // Przekaż i18n
                className={`block px-3 py-2 rounded-md text-base font-medium hover:bg-accent hover:text-accent-foreground ${
                  currentPath === createLocalizedPath(i18n, "contact")
                    ? "bg-accent text-accent-foreground"
                    : "text-muted-foreground"
                }`}
                onClick={() =>
                  handleLinkClick(createLocalizedPath(i18n, "contact"))
                }
              >
                {t("navbar.contact")}
              </Link>
            </div>

            {/* Kontrolki Języka i Motywu (Mobile) (bez zmian) */}
            <div className="flex items-center justify-between mt-auto pt-6 border-t">
              <LanguageSelector />
              <ThemeToggle />
            </div>
          </SheetContent>
        </Sheet>

        {/* --- Nawigacja Desktopowa --- */}
        <div className="hidden md:flex items-center gap-6">
          <div className="flex gap-6">
            {/* Link: Strona Główna (Desktop) */}
            <Link
              href={createLocalizedPath(i18n, "home")} // Przekaż i18n
              className={`font-medium text-foreground hover:text-primary dark:hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm ${
                currentPath === createLocalizedPath(i18n, "home")
                  ? "!text-primary"
                  : ""
              }`}
              onClick={goToHome}
            >
              {t("navbar.home")}
            </Link>

            {/* Dropdown: Podróże (Desktop) */}
            <DropdownMenu>
              <DropdownMenuTrigger
                className={`flex items-center gap-1 font-medium text-foreground hover:text-primary dark:hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm ${
                  // Sprawdzenie aktywnego stanu: czy ścieżka zawiera slug trasy destinationDetail?
                  currentPath.includes(localizedSlug("destinationDetail", i18n)) // Przekaż i18n
                    ? "text-primary"
                    : ""
                }`}
              >
                {t("navbar.destinations")} <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                {/* Pętla generująca linki do destynacji (Desktop) */}
                {destinations.map((destination) => {
                  const destinationPath = createLocalizedPath(
                    i18n, // Przekaż i18n
                    "destinationDetail",
                    destination.id
                  );
                  const destinationName = t(
                    destination.nameKey || `destinations.${destination.id}`
                  );

                  return (
                    <DropdownMenuItem
                      key={destination.id}
                      asChild
                      className="focus:bg-accent focus:text-accent-foreground"
                    >
                      <Link
                        href={destinationPath}
                        className={`w-full text-left block px-2 py-1.5 text-sm ${
                          currentPath === destinationPath
                            ? "bg-accent text-accent-foreground"
                            : "hover:bg-accent/80 hover:text-accent-foreground"
                        }`}
                        onClick={() => window.scrollTo(0, 0)}
                      >
                        {destinationName}
                      </Link>
                    </DropdownMenuItem>
                  );
                })}
                {/* Usunięto pusty DropdownMenuItem dla "Wszystkie podróże" */}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Link: O Nas (Desktop) */}
            <Link
              href={createLocalizedPath(i18n, "about")} // Przekaż i18n
              className={`font-medium text-foreground hover:text-primary dark:hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm ${
                currentPath === createLocalizedPath(i18n, "about")
                  ? "text-primary"
                  : ""
              }`}
              onClick={() => window.scrollTo(0, 0)}
            >
              {t("navbar.about")}
            </Link>

            {/* Link: Kontakt (Desktop) */}
            <Link
              href={createLocalizedPath(i18n, "contact")} // Przekaż i18n
              className={`font-medium text-foreground hover:text-primary dark:hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm ${
                currentPath === createLocalizedPath(i18n, "contact")
                  ? "text-primary"
                  : ""
              }`}
              onClick={() => window.scrollTo(0, 0)}
            >
              {t("navbar.contact")}
            </Link>
          </div>

          {/* Kontrolki Języka i Motywu (Desktop) (bez zmian) */}
          <div className="flex items-center gap-3">
            <LanguageSelector />
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
