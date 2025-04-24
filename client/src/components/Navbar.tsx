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
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ThemeToggle from "./ThemeToggle";
import LanguageSelector from "./LanguageSelector";
import { destinations, getSlugForDestination } from "@/data/destinations";

interface NavbarProps {
  currentPath: string;
}

const Navbar = ({ currentPath }: NavbarProps) => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  const defaultLang = "pl";
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [, setLocation] = useLocation();

  const createLocalizedPath = (routeKey: string, params = ""): string => {
    const prefix = currentLang === defaultLang ? "" : `/${currentLang}`;
    const slug =
      t(routeKey, { ns: "translation", keyPrefix: "routes" }) || routeKey;
    if (routeKey === "home") {
      // Dla języka domyślnego zwróć '/', dla innych sam prefix (np. '/en')
      return prefix || "/";
    }
    const finalSlug = slug ? `/${slug}` : "";
    return `${prefix}${finalSlug}${params}`;
  };

  const goToHome = () => {
    setLocation(createLocalizedPath("home"));
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const isActive = (routeKey: string, params = ""): boolean => {
    const pathToCheck = createLocalizedPath(routeKey, params);

    if (!params && params !== "/") return currentPath === pathToCheck;

    return currentPath.startsWith(pathToCheck);
  };

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-800 shadow-md">
      <nav
        className="container mx-auto px-4 py-3 flex items-center justify-between"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          href={createLocalizedPath("home")}
          className="flex items-center gap-2 text-foreground dark:text-primary"
          onClick={goToHome}
        >
          <span className="text-2xl">🌍</span>
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
              className="md:hidden"
              aria-label="Toggle menu"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <div className="mt-8 flex flex-col gap-4">
              {/* Mobile Home Link */}
              <Link
                href={createLocalizedPath("home")}
                className={`px-2 py-1 rounded-md ${
                  isActive("home") ? "bg-primary/10 text-primary" : ""
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t("navbar.home")}
              </Link>

              {/* Mobile Destinations Accordion */}
              <Accordion type="single" collapsible>
                <AccordionItem value="destinations">
                  <AccordionTrigger>
                    {t("navbar.destinations")}
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-col space-y-2 pl-4">
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
                            className={`px-2 py-1 rounded-md hover:bg-primary/10 hover:text-primary ${
                              currentPath.startsWith(destinationPath)
                                ? "bg-primary/10 text-primary"
                                : ""
                            }`}
                          >
                            {destinationName}{" "}
                          </Link>
                        );
                      })}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              {/* Mobile About Link */}
              <Link
                href={createLocalizedPath("about")}
                className={`px-2 py-1 rounded-md ${
                  isActive("about") ? "bg-primary/10 text-primary" : ""
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t("navbar.about")}
              </Link>

              {/* Mobile Contact Link */}
              <Link
                href={createLocalizedPath("contact")}
                className={`px-2 py-1 rounded-md ${
                  isActive("contact") ? "bg-primary/10 text-primary" : ""
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t("navbar.contact")}
              </Link>

              {/* Mobile Controls */}
              <div className="flex items-center justify-between mt-4">
                <LanguageSelector />
                <ThemeToggle />
              </div>
            </div>
          </SheetContent>
        </Sheet>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-6">
          <div className="flex gap-6">
            {/* Desktop Home Link */}
            <Link
              href={createLocalizedPath("home")}
              className={`font-medium text-foreground hover:text-primary dark:hover:text-primary transition-colors ${
                isActive("home") ? "!text-primary" : ""
              }`}
              onClick={goToHome}
            >
              {t("navbar.home")}
            </Link>

            {/* Desktop Destinations Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 font-medium text-foreground hover:text-primary dark:hover:text-primary transition-colors focus:outline-none">
                {t("navbar.destinations")} <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center">
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
                    <DropdownMenuItem key={destination.id} asChild>
                      <Link
                        href={destinationPath}
                        className="focus:outline-none focus:bg-accent w-full text-left"
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
              className={`font-medium text-foreground hover:text-primary dark:hover:text-primary transition-colors ${
                isActive("about") ? "text-primary" : ""
              }`}
            >
              {t("navbar.about")}
            </Link>

            {/* Desktop Contact Link */}
            <Link
              href={createLocalizedPath("contact")}
              className={`font-medium text-foreground hover:text-primary dark:hover:text-primary transition-colors ${
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
