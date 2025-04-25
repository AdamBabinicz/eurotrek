import { generate } from "critical";
// Poprawiony import dla 'glob' (CommonJS)
import pkg from "glob";
const { glob } = pkg;
// Koniec poprawionego importu
import path from "path";
import fs from "fs/promises";
import { fileURLToPath } from "url"; // Dodano import

// --- Konfiguracja Ścieżek (NOWE PODEJŚCIE) ---
const __filename = fileURLToPath(import.meta.url); // Ścieżka do bieżącego pliku
const __dirname = path.dirname(__filename); // Katalog bieżącego pliku
// Folder wyjściowy ('dist') - zakładamy, że jest poziom wyżej niż folder 'scripts'
const buildOutputDir = path.resolve(__dirname, "..", "dist");
// Folder 'public' wewnątrz folderu wyjściowego
const publicDirInDist = path.join(buildOutputDir, "public");
// ------------------------------------

async function runCritical() {
  console.log("--- Starting critical CSS generation ---");
  console.log(`Script directory (__dirname): ${__dirname}`);
  console.log(`Build output directory (buildOutputDir): ${buildOutputDir}`);
  console.log(`Public directory in dist (publicDirInDist): ${publicDirInDist}`);

  // Sprawdzenie, czy foldery istnieją (proste sanity check)
  try {
    await fs.access(buildOutputDir);
    await fs.access(publicDirInDist);
  } catch (err) {
    console.error(
      `ERROR: Output directory or public directory not found. Check paths.`
    );
    console.error(`buildOutputDir: ${buildOutputDir}`);
    console.error(`publicDirInDist: ${publicDirInDist}`);
    process.exit(1);
  }

  try {
    // --- Wyszukiwanie HTML ---
    const htmlPattern = "**/*.html";
    console.log(
      `Searching for HTML files in: ${publicDirInDist} using pattern: ${htmlPattern}`
    );
    // Używamy glob.sync dla prostoty i pewności zwrócenia tablicy
    const htmlFiles = glob.sync(htmlPattern, {
      cwd: publicDirInDist,
      absolute: true,
      nodir: true,
    });

    // Sprawdzamy, czy wynik jest tablicą i czy nie jest pusty
    if (!Array.isArray(htmlFiles) || htmlFiles.length === 0) {
      console.error(
        `ERROR: No HTML files found or invalid result from glob for pattern "${htmlPattern}" in directory: ${publicDirInDist}`
      );
      process.exit(1); // Zakończ, bo nie ma czego przetwarzać
    }
    // Logujemy znalezione pliki (teraz .join zadziała)
    console.log(`Found HTML files:\n  - ${htmlFiles.join("\n  - ")}`);

    // --- Wyszukiwanie CSS (NOWE PODEJŚCIE DO WZORCA) ---
    // Ścieżka do folderu assets, normalizowana
    const assetsDir = path.normalize(path.join(publicDirInDist, "assets"));
    // Użyj wzorca z ukośnikami '/' które glob zazwyczaj preferuje, nawet na Windows
    const cssPattern = `${assetsDir.replace(/\\/g, "/")}/*.css`;
    console.log(
      `Searching for CSS files using normalized pattern: ${cssPattern}`
    );
    // Używamy glob.sync dla spójności
    const cssFilesFound = glob.sync(cssPattern, {
      absolute: true,
      nodir: true,
    });

    // Sprawdzamy, czy znaleziono pliki CSS
    if (!Array.isArray(cssFilesFound) || cssFilesFound.length === 0) {
      console.warn(
        `WARNING: No CSS files found matching pattern "${cssPattern}". Critical CSS might be incomplete. 'critical' will try to find CSS via HTML links.`
      );
      // Nie przerywamy, pozwalamy 'critical' spróbować samemu
    } else {
      console.log(
        `Found CSS files to process:\n  - ${cssFilesFound.join("\n  - ")}`
      );
    }

    // --- Przetwarzanie HTML ---
    for (const htmlFile of htmlFiles) {
      const relativePath = path.relative(buildOutputDir, htmlFile); // Ścieżka względna do 'dist' dla logów
      console.log(`\nProcessing HTML file: ${htmlFile}`);
      console.log(`Relative path for logging: ${relativePath}`); // Np. public/index.html

      const originalHtml = await fs.readFile(htmlFile, "utf-8");
      console.log(`Read ${originalHtml.length} bytes from ${relativePath}`);

      // --- Konfiguracja Critical ---
      const criticalConfig = {
        base: publicDirInDist, // Katalog bazowy, gdzie są zasoby (HTML, assets)
        html: originalHtml, // Oryginalna zawartość HTML do przetworzenia
        // Przekaż znalezione pliki JAWNIE, jeśli zostały znalezione
        // Jeśli nie (tablica pusta), 'critical' spróbuje znaleźć sam na podstawie linków w HTML
        css: cssFilesFound.length > 0 ? cssFilesFound : undefined,
        width: 1300, // Przykładowa szerokość viewportu
        height: 900, // Przykładowa wysokość viewportu
        inline: true, // Wstrzyknij krytyczny CSS do HTML
        extract: false, // Nie twórz osobnego pliku dla krytycznego CSS
        // Opcje dla silnika penthouse (używanego przez critical)
        penthouse: {
          timeout: 60000, // Zwiększony timeout (w ms)
        },
        // ignore: [] // Można dodać reguły ignorowania, jeśli potrzebne
      };
      // console.log('Critical configuration:', JSON.stringify(criticalConfig, null, 2)); // Odkomentuj w razie potrzeby debugowania konfiguracji

      try {
        console.log(`Generating critical CSS for ${relativePath}...`);
        // Destrukturyzacja wyniku z generate
        const { html: criticalHtml, css: generatedCriticalCss } =
          await generate(criticalConfig);
        console.log(
          `Generated ${generatedCriticalCss.length} bytes of critical CSS for ${relativePath}`
        );
        console.log(
          `Original HTML length: ${originalHtml.length}, Critical HTML length: ${criticalHtml.length}`
        );

        // Sprawdzenie, czy HTML został faktycznie zmodyfikowany
        if (originalHtml === criticalHtml) {
          // Dla pliku google... to normalne, dla index.html byłoby dziwne, chyba że nie ma CSS
          if (relativePath.includes("google")) {
            console.log(
              `HTML content for ${relativePath} was not modified (as expected for verification file).`
            );
          } else {
            console.warn(
              `WARNING: HTML content for ${relativePath} was NOT modified by critical. Check CSS links in HTML or critical config.`
            );
          }
        } else {
          console.log(
            `HTML content for ${relativePath} was modified. Saving...`
          );
          // Zapisz zmodyfikowany HTML z powrotem do pliku
          await fs.writeFile(htmlFile, criticalHtml, "utf-8");
          console.log(`Successfully saved modified HTML for: ${relativePath}`);
        }
      } catch (generateError) {
        // Logowanie błędu dla konkretnego pliku, ale kontynuacja pętli
        console.error(
          `ERROR generating critical CSS for ${relativePath}:`,
          generateError
        );
      }
    } // Koniec pętli for

    console.log("\n--- Critical CSS generation script finished ---");
  } catch (error) {
    // Logowanie krytycznego błędu skryptu i zakończenie z kodem błędu
    console.error("FATAL ERROR during script execution:", error);
    process.exit(1);
  }
}

// Uruchomienie głównej funkcji skryptu
runCritical();
