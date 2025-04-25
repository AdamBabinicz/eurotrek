import { generate } from "critical";
import { glob } from "glob"; // Do znalezienia plików HTML
import path from "path";
import fs from "fs/promises"; // Do odczytu/zapisu plików

// --- Konfiguracja Ścieżek (DOSTOSUJ!) ---
// Zakładamy, że budujesz do folderu 'dist' w głównym katalogu projektu
// a plik vite.config.ts i package.json są też w głównym katalogu
const buildOutputDir = path.resolve(process.cwd(), "dist");
const baseHref = "/"; // Jeśli Twoja strona jest w podfolderze, zmień to
// ------------------------------------

async function runCritical() {
  console.log("Starting critical CSS generation...");

  try {
    // Znajdź pliki HTML w folderze wyjściowym
    const htmlFiles = await glob("**/*.html", {
      cwd: buildOutputDir,
      absolute: true,
    });

    if (htmlFiles.length === 0) {
      console.warn(
        "No HTML files found in build output directory:",
        buildOutputDir
      );
      return;
    }

    console.log(`Found HTML files: ${htmlFiles.join(", ")}`);

    // Przetwórz każdy znaleziony plik HTML
    for (const htmlFile of htmlFiles) {
      const relativePath = path.relative(buildOutputDir, htmlFile);
      console.log(`Processing: ${relativePath}`);

      // Odczytaj oryginalny HTML
      const originalHtml = await fs.readFile(htmlFile, "utf-8");

      // Opcje dla biblioteki 'critical'
      const criticalConfig = {
        base: buildOutputDir, // Katalog bazowy dla zasobów
        html: originalHtml, // Oryginalna zawartość HTML
        css: [`${buildOutputDir}/assets/*.css`], // Wzorzec do znalezienia CSS (dostosuj, jeśli Vite generuje inaczej)
        width: 1300, // Przykładowa szerokość viewportu
        height: 900, // Przykładowa wysokość viewportu
        inline: true, // Wstrzyknij krytyczny CSS
        extract: false, // Nie twórz osobnego pliku dla krytycznego CSS
        // Możesz dodać więcej opcji 'critical' tutaj, np. ignore
        // Zobacz: https://github.com/addyosmani/critical#options
      };

      // Generuj krytyczny CSS
      const { html: criticalHtml } = await generate(criticalConfig);

      // Zapisz zmodyfikowany HTML z wstrzykniętym CSS
      await fs.writeFile(htmlFile, criticalHtml, "utf-8");
      console.log(`Successfully generated critical CSS for: ${relativePath}`);
    }

    console.log("Critical CSS generation finished successfully.");
  } catch (error) {
    console.error("Error during critical CSS generation:", error);
    process.exit(1); // Zakończ z błędem
  }
}

runCritical();
