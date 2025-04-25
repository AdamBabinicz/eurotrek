import { generate } from "critical";
import { glob } from "glob";
import path from "path";
import fs from "fs/promises";

// --- Konfiguracja Ścieżek (SPRAWDŹ DOKŁADNIE!) ---
const buildOutputDir = path.resolve(process.cwd(), "dist");
const publicDirInDist = path.join(buildOutputDir, "public");
// ------------------------------------

async function runCritical() {
  console.log("--- Starting critical CSS generation ---");
  console.log(`Build output directory (buildOutputDir): ${buildOutputDir}`);
  console.log(`Public directory in dist (publicDirInDist): ${publicDirInDist}`);

  try {
    // --- Wyszukiwanie HTML ---
    const htmlPattern = "**/*.html";
    console.log(
      `Searching for HTML files in: ${publicDirInDist} using pattern: ${htmlPattern}`
    );
    const htmlFiles = await glob(htmlPattern, {
      cwd: publicDirInDist,
      absolute: true,
      nodir: true,
    }); // Dodano nodir

    if (htmlFiles.length === 0) {
      console.error(
        `ERROR: No HTML files found matching pattern "${htmlPattern}" in directory: ${publicDirInDist}`
      );
      process.exit(1); // Zakończ, bo nie ma czego przetwarzać
    }
    console.log(`Found HTML files: ${htmlFiles.join("\n  - ")}`);

    // --- Wyszukiwanie CSS ---
    const cssPattern = path.join(publicDirInDist, "assets", "*.css");
    console.log(`Searching for CSS files using pattern: ${cssPattern}`);
    const cssFilesFound = await glob(cssPattern, {
      absolute: true,
      nodir: true,
    }); // Sprawdźmy, co znajdzie

    if (cssFilesFound.length === 0) {
      console.warn(
        `WARNING: No CSS files found matching pattern "${cssPattern}". Critical CSS might be incomplete.`
      );
      // Możemy kontynuować, ale to dziwne
    } else {
      console.log(
        `Found CSS files to process: ${cssFilesFound.join("\n  - ")}`
      );
    }

    // --- Przetwarzanie HTML ---
    for (const htmlFile of htmlFiles) {
      const relativePath = path.relative(buildOutputDir, htmlFile);
      console.log(`\nProcessing HTML file: ${htmlFile}`);
      console.log(`Relative path for logging: ${relativePath}`);

      const originalHtml = await fs.readFile(htmlFile, "utf-8");
      console.log(`Read ${originalHtml.length} bytes from ${relativePath}`);

      // --- Konfiguracja Critical ---
      const criticalConfig = {
        base: publicDirInDist, // Ważne: base musi wskazywać, gdzie są zasoby (HTML, assets)
        html: originalHtml,
        css: [cssPattern], // Używamy wzorca
        width: 1300,
        height: 900,
        inline: true, // Wstrzyknij
        extract: false, // Nie twórz pliku
        // Opcja do debugowania - pokazuje więcej logów z 'critical'
        penthouse: {
          // Opcje dla silnika penthouse (używanego przez critical)
          timeout: 60000, // Zwiększmy timeout na wszelki wypadek
          // Możesz dodać inne opcje penthouse do debugowania, np. blockJSRequests: false
        },
        // Możesz spróbować dodać 'ignore' dla drugiego CSS, jeśli pierwszy to główny:
        // ignore: [path.join(publicDirInDist, 'assets', 'index-DG8hUzto.css')]
      };
      console.log(
        "Critical configuration:",
        JSON.stringify(criticalConfig, null, 2)
      );

      try {
        console.log(`Generating critical CSS for ${relativePath}...`);
        const { html: criticalHtml, css: generatedCriticalCss } =
          await generate(criticalConfig);
        console.log(
          `Generated ${generatedCriticalCss.length} bytes of critical CSS for ${relativePath}`
        );
        console.log(
          `Original HTML length: ${originalHtml.length}, Critical HTML length: ${criticalHtml.length}`
        );

        if (originalHtml === criticalHtml) {
          console.warn(
            `WARNING: HTML content for ${relativePath} was NOT modified by critical. Check CSS/HTML complexity or critical config.`
          );
        } else {
          console.log(
            `HTML content for ${relativePath} was modified. Saving...`
          );
          await fs.writeFile(htmlFile, criticalHtml, "utf-8");
          console.log(`Successfully saved modified HTML for: ${relativePath}`);
        }
      } catch (generateError) {
        console.error(
          `ERROR generating critical CSS for ${relativePath}:`,
          generateError
        );
        // Nie przerywaj dla innych plików, ale zaloguj błąd
      }
    } // Koniec pętli for

    console.log("\n--- Critical CSS generation script finished ---");
  } catch (error) {
    console.error("FATAL ERROR during script execution:", error);
    process.exit(1);
  }
}

runCritical();
