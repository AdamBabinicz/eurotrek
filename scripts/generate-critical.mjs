import { generate } from "critical";
import { glob } from "glob";
import path from "path";
import fs from "fs/promises";

// --- Konfiguracja Ścieżek (DOSTOSUJ!) ---
// Folder wyjściowy (zakładamy, że 'dist' jest w głównym katalogu)
const buildOutputDir = path.resolve(process.cwd(), "dist");
// Ścieżka do folderu public wewnątrz dist
const publicDirInDist = path.join(buildOutputDir, "public");
// ------------------------------------

async function runCritical() {
  console.log("Starting critical CSS generation...");

  try {
    // Znajdź pliki HTML w folderze 'dist/public' (dostosowane)
    const htmlFiles = await glob("**/*.html", {
      cwd: publicDirInDist,
      absolute: true,
    });

    if (htmlFiles.length === 0) {
      console.warn(
        "No HTML files found in build output directory:",
        publicDirInDist
      );
      return;
    }

    console.log(`Found HTML files: ${htmlFiles.join(", ")}`);

    for (const htmlFile of htmlFiles) {
      const relativePath = path.relative(buildOutputDir, htmlFile); // Ścieżka względna do 'dist'
      console.log(`Processing: ${relativePath}`); // Powinno pokazać np. public/index.html

      const originalHtml = await fs.readFile(htmlFile, "utf-8");

      // --- Poprawiony wzorzec CSS ---
      // Wskazujemy na folder dist/public/assets
      const cssPattern = path.join(publicDirInDist, "assets", "*.css");
      // Można też podać obie ścieżki jawnie, jeśli wiesz które są istotne:
      // const cssFiles = [
      //   path.join(publicDirInDist, 'assets', 'index-C-bDfRjd.css'),
      //   path.join(publicDirInDist, 'assets', 'index-DG8hUzto.css'),
      // ];

      console.log(`Using CSS pattern: ${cssPattern}`);

      const criticalConfig = {
        base: publicDirInDist, // Katalog bazowy zmieniony na dist/public
        html: originalHtml,
        css: [cssPattern], // Używamy wzorca lub tablicy cssFiles
        width: 1300,
        height: 900,
        inline: true,
        extract: false,
        // Opcja 'ignore': Możesz spróbować zignorować jeden z plików CSS,
        // jeśli wiesz, że zawiera tylko niekrytyczne style (np. dla animacji, ikon)
        // ignore: ['@font-face', /url\(/, path.join(publicDirInDist, 'assets', 'index-DG8hUzto.css')]
      };

      // Generuj krytyczny CSS
      const { html: criticalHtml } = await generate(criticalConfig);

      // Zapisz zmodyfikowany HTML
      await fs.writeFile(htmlFile, criticalHtml, "utf-8");
      console.log(`Successfully generated critical CSS for: ${relativePath}`);
    }

    console.log("Critical CSS generation finished successfully.");
  } catch (error) {
    console.error("Error during critical CSS generation:", error);
    process.exit(1);
  }
}

runCritical();
