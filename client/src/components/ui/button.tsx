import * as React from "react";
import { Slot } from "@radix-ui/react-slot"; // Komponent do "przekazywania" propsów i refa do bezpośredniego dziecka
import { cva, type VariantProps } from "class-variance-authority"; // Biblioteka do tworzenia wariantów klas CSS

import { cn } from "@/lib/utils"; // Funkcja pomocnicza do łączenia klas CSS (często z `clsx` i `tailwind-merge`)

// Definicja wariantów przycisku za pomocą CVA
const buttonVariants = cva(
  // --- Klasy bazowe, stosowane do wszystkich wariantów ---
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    // --- Definicja wariantów ---
    variants: {
      // Warianty wyglądu (styl)
      variant: {
        // Wariant Default: Jasnoszare tło -> Hover: Ciemnoniebieskie tło / BIAŁY tekst
        default: [
          "bg-secondary text-secondary-foreground", // Domyślny: Jasne tło (w light), ciemny tekst (w light)
          "hover:bg-primary hover:text-white", // Hover: Tło primary, ZAWSZE biały tekst
        ],
        // Wariant Destructive: Czerwone tło, jasny tekst (wg CSS)
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90", // Standardowy hover przyciemniający

        // Wariant Outline: Przezroczyste/białe tło, ciemny/jasny tekst (wg CSS)
        outline: [
          "border border-input bg-background text-foreground", // Domyślny
          "hover:bg-accent hover:text-accent-foreground", // Hover wg zmiennych accent
          "dark:hover:bg-accent dark:hover:text-accent-foreground", // Jawny hover dla dark (choć może być taki sam jak light)
        ],
        // Wariant Secondary: Tak samo jak Default
        secondary: [
          "bg-secondary text-secondary-foreground",
          "hover:bg-primary hover:text-white", // Hover: Tło primary, ZAWSZE biały tekst
        ],
        // Wariant Ghost: Przezroczyste tło, ciemny/jasny tekst (wg CSS)
        ghost: [
          "text-foreground", // Domyślny tekst wg trybu
          "hover:bg-accent hover:text-accent-foreground", // Hover wg zmiennych accent
          "dark:hover:bg-accent dark:hover:text-accent-foreground",
        ],
        // Wariant Link: Wygląda jak link tekstowy
        link: "text-primary underline-offset-4 hover:underline",

        // Wariant Primary: Ciemne tło, jasny tekst (wg CSS)
        primary: "bg-primary text-primary-foreground hover:bg-primary/90", // Standardowy hover przyciemniający
      },
      // Warianty rozmiaru
      size: {
        default: "h-10 px-4 py-2", // Domyślny rozmiar
        sm: "h-9 rounded-md px-3", // Mały
        lg: "h-11 rounded-md px-8", // Duży
        icon: "h-10 w-10", // Przycisk-ikona (kwadratowy)
      },
    },
    // --- Domyślne warianty, jeśli nie zostaną podane ---
    defaultVariants: {
      variant: "default", // Domyślnie używaj wariantu 'default'
      size: "default", // Domyślnie używaj rozmiaru 'default'
    },
  }
);

// --- Definicja typów dla propsów komponentu Button ---
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, // Dziedziczy standardowe atrybuty HTML przycisku (onClick, type, disabled itp.)
    VariantProps<typeof buttonVariants> {
  // Dodaje typy dla wariantów zdefiniowanych w CVA (variant, size)
  asChild?: boolean; // Opcjonalny prop do renderowania jako inny komponent (za pomocą Slot)
}

// --- Komponent Funkcyjny Button ---
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  // Używa forwardRef do przekazania refa do elementu DOM
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    // Wybierz komponent do renderowania: Slot jeśli asChild=true, inaczej 'button'
    const Comp = asChild ? Slot : "button";
    // Zwróć wybrany komponent
    return (
      <Comp
        // Połącz klasy:
        // - Wygenerowane przez CVA na podstawie propsów variant, size
        // - Dodatkowe klasy przekazane przez prop `className`
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref} // Przekaż ref
        {...props} // Przekaż wszystkie pozostałe propsy (np. onClick, children, type)
      />
    );
  }
);
// Ustawienie displayName dla lepszego debugowania w React DevTools
Button.displayName = "Button";

// --- Eksportowanie komponentu i wariantów ---
export { Button, buttonVariants };
