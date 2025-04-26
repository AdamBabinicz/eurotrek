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
  // SheetDescription, // Można dodać, jeśli potrzebny opis
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
import { destinations, getSlugForDestination } from "@/data/destinations"; // Upewnij się, że ścieżka i eksport są poprawne

interface NavbarProps {
  currentPath: string;
}

const Navbar = ({ currentPath }: NavbarProps) => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  const defaultLang = "pl"; // Ustaw język domyślny
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [, setLocation] = useLocation();

  const createLocalizedPath = (routeKey: string, params = ""): string => {
    const prefix = currentLang === defaultLang ? "" : `/${currentLang}`;
    const slug =
      t(`routes.${routeKey}`, { defaultValue: routeKey }) || routeKey;

    if (routeKey === "home") {
      return prefix || "/";
    }
    const cleanSlug = slug.startsWith("/") ? slug.substring(1) : slug;
    const finalSlug = cleanSlug ? `/${cleanSlug}` : "";
    const cleanParams = params.startsWith("/") ? params.substring(1) : params;
    const finalParams = cleanParams ? `/${cleanParams}` : "";

    return `${prefix}${finalSlug}${finalParams}`;
  };

  const goToHome = () => {
    setLocation(createLocalizedPath("home"));
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const isActive = (routeKey: string, params = ""): boolean => {
    const pathToCheck = createLocalizedPath(routeKey, params);
    if (!params || params === "/") {
      // Dokładne dopasowanie dla strony głównej
      return currentPath === pathToCheck;
    }
    // Sprawdzenie, czy bieżąca ścieżka zaczyna się od pathToCheck,
    // ale upewnienie się, że dopasowanie nie jest tylko częściowe (np. /blog vs /blog/post)
    // Chyba że to główna ścieżka sekcji (np. /podroze)
    if (
      routeKey === "destinations" ||
      routeKey === "about" ||
      routeKey === "contact"
    ) {
      return (
        currentPath === pathToCheck || currentPath.startsWith(pathToCheck + "/")
      );
    }
    // Dla detali destynacji, dopasowanie musi być dokładne lub zaczynać się od...
    if (routeKey === "destinationDetail") {
      return currentPath.startsWith(pathToCheck);
    }

    return currentPath.startsWith(pathToCheck); // Domyślne sprawdzenie dla innych przypadków
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm dark:shadow-md">
      {" "}
      {/* Użycie zmiennych tła i cienia */}
      <nav
        className="container mx-auto px-4 py-3 flex items-center justify-between"
        aria-label={t("navbar.mainNavLabel", "Główna nawigacja")}
      >
        {/* Logo */}
        <Link
          href={createLocalizedPath("home")}
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

        {/* Mobile menu button */}
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
              {/* <SheetDescription>Wybierz opcję nawigacji.</SheetDescription> */}
            </SheetHeader>

            <div className="flex-grow overflow-y-auto flex flex-col gap-2 pr-2">
              {/* Mobile Home Link */}
              <Link
                href={createLocalizedPath("home")}
                className={`block px-3 py-2 rounded-md text-base font-medium hover:bg-accent hover:text-accent-foreground ${
                  isActive("home", "/")
                    ? "bg-accent text-accent-foreground"
                    : "text-muted-foreground"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t("navbar.home")}
              </Link>

              {/* Mobile Destinations Accordion */}
              {/* --- PRZYWRÓCONO type="single" --- */}
              <Accordion type="single" collapsible className="w-full -mx-3">
                <AccordionItem value="destinations" className="border-b-0">
                  <AccordionTrigger
                    className={`flex w-full items-center justify-between px-3 py-2 rounded-md text-base font-medium hover:bg-accent hover:text-accent-foreground hover:no-underline ${
                      isActive("destinations")
                        ? "text-accent-foreground"
                        : "text-muted-foreground"
                    }`}
                  >
                    {t("navbar.destinations")}
                  </AccordionTrigger>
                  <AccordionContent className="pt-1 pb-0">
                    <div className="flex flex-col space-y-1 pl-8 pr-3">
                      {destinations.map((destination) => {
                        const localizedDestinationSlug = getSlugForDestination(
                          destination.id,
                          currentLang
                        );
                        const destinationPath = createLocalizedPath(
                          "destinationDetail",
                          `/${localizedDestinationSlug}`
                        );
                        const destinationName = t(
                          destination.nameKey ||
                            `destinations.${destination.id}`
                        );

                        return (
                          <Link
                            key={destination.id}
                            href={destinationPath}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={`block px-3 py-2 rounded-md text-sm font-medium hover:bg-accent hover:text-accent-foreground ${
                              currentPath.startsWith(destinationPath)
                                ? "bg-accent text-accent-foreground"
                                : "text-muted-foreground"
                            }`}
                          >
                            {destinationName}
                          </Link>
                        );
                      })}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              {/* --- KONIEC POPRAWKI --- */}

              {/* Mobile About Link */}
              <Link
                href={createLocalizedPath("about")}
                className={`block px-3 py-2 rounded-md text-base font-medium hover:bg-accent hover:text-accent-foreground ${
                  isActive("about")
                    ? "bg-accent text-accent-foreground"
                    : "text-muted-foreground"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t("navbar.about")}
              </Link>

              {/* Mobile Contact Link */}
              <Link
                href={createLocalizedPath("contact")}
                className={`block px-3 py-2 rounded-md text-base font-medium hover:bg-accent hover:text-accent-foreground ${
                  isActive("contact")
                    ? "bg-accent text-accent-foreground"
                    : "text-muted-foreground"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t("navbar.contact")}
              </Link>
            </div>

            {/* Mobile Controls (na dole) */}
            <div className="flex items-center justify-between mt-auto pt-6 border-t">
              <LanguageSelector />
              <ThemeToggle />
            </div>
          </SheetContent>
        </Sheet>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-6">
          <div className="flex gap-6">
            {/* Desktop Home Link */}
            <Link
              href={createLocalizedPath("home")}
              className={`font-medium text-foreground hover:text-primary dark:hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm ${
                isActive("home", "/") ? "!text-primary" : ""
              }`}
              onClick={goToHome}
            >
              {t("navbar.home")}
            </Link>

            {/* Desktop Destinations Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 font-medium text-foreground hover:text-primary dark:hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm">
                {t("navbar.destinations")} <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                {destinations.map((destination) => {
                  const localizedDestinationSlug = getSlugForDestination(
                    destination.id,
                    currentLang
                  );
                  const destinationPath = createLocalizedPath(
                    "destinationDetail",
                    `/${localizedDestinationSlug}`
                  );
                  const destinationName = t(
                    destination.nameKey || `destinations.${destination.id}`
                  );

                  return (
                    <DropdownMenuItem
                      key={destination.id}
                      asChild
                      className="focus:bg-accent"
                    >
                      <Link
                        href={destinationPath}
                        className={`w-full text-left block px-2 py-1.5 text-sm ${
                          currentPath.startsWith(destinationPath)
                            ? "bg-accent text-accent-foreground"
                            : ""
                        }`}
                      >
                        {destinationName}
                      </Link>
                    </DropdownMenuItem>
                  );
                })}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Desktop About Link */}
            <Link
              href={createLocalizedPath("about")}
              className={`font-medium text-foreground hover:text-primary dark:hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm ${
                isActive("about") ? "text-primary" : ""
              }`}
            >
              {t("navbar.about")}
            </Link>

            {/* Desktop Contact Link */}
            <Link
              href={createLocalizedPath("contact")}
              className={`font-medium text-foreground hover:text-primary dark:hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm ${
                isActive("contact") ? "text-primary" : ""
              }`}
            >
              {t("navbar.contact")}
            </Link>
          </div>

          {/* Desktop Controls */}
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
