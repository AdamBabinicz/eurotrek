import { useState } from "react";
import { Link, useLocation } from "wouter";
import { useTranslation } from "react-i18next";
import { Menu, Globe, ChevronDown } from "lucide-react";
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
import { destinations } from "@/data/destinations";

interface NavbarProps {
  currentPath: string;
}

const Navbar = ({ currentPath }: NavbarProps) => {
  const { t } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [, setLocation] = useLocation();

  const goToHome = () => {
    setLocation("/");
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-md">
      <nav
        className="container mx-auto px-4 py-3 flex items-center justify-between"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          href="/"
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
              <Link
                href="/"
                className={`px-2 py-1 rounded-md ${
                  currentPath === "/" ? "bg-primary/10 text-primary" : ""
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t("navbar.home")}
              </Link>

              <Accordion type="single" collapsible>
                <AccordionItem value="destinations">
                  <AccordionTrigger>
                    {t("navbar.destinations")}
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-col space-y-2 pl-4">
                      {destinations.map((destination) => (
                        <Link
                          key={destination.id}
                          href={`/destination/${destination.id}`}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="px-2 py-1 rounded-md hover:bg-primary/10 hover:text-primary"
                        >
                          {t(`destinations.${destination.id}`)}
                        </Link>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <Link
                href="/about"
                className={`px-2 py-1 rounded-md ${
                  currentPath === "/about" ? "bg-primary/10 text-primary" : ""
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t("navbar.about")}
              </Link>

              <Link
                href="/contact"
                className={`px-2 py-1 rounded-md ${
                  currentPath === "/contact" ? "bg-primary/10 text-primary" : ""
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t("navbar.contact")}
              </Link>

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
            <Link
              href="/"
              className={`font-medium text-foreground hover:text-primary dark:hover:text-primary transition-colors ${
                currentPath === "/" ? "!text-primary" : ""
              }`}
              onClick={goToHome}
            >
              {t("navbar.home")}
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 font-medium text-foreground hover:text-primary dark:hover:text-primary transition-colors focus:outline-none">
                {t("navbar.destinations")} <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center">
                {destinations.map((destination) => (
                  <DropdownMenuItem key={destination.id} asChild>
                    <Link
                      href={`/destination/${destination.id}`}
                      className="focus:outline-none focus:bg-accent"
                    >
                      {t(`destinations.${destination.id}`)}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              href="/about"
              className={`font-medium text-foreground hover:text-primary dark:hover:text-primary transition-colors ${
                currentPath === "/about" ? "text-primary" : ""
              }`}
            >
              {t("navbar.about")}
            </Link>

            <Link
              href="/contact"
              className={`font-medium text-foreground hover:text-primary dark:hover:text-primary transition-colors ${
                currentPath === "/contact" ? "text-primary" : ""
              }`}
            >
              {t("navbar.contact")}
            </Link>
          </div>

          {/* Controls */}
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
