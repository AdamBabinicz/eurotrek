import type { i18n as I18nInstanceType } from "i18next";
import { Destination, findDestinationById } from "@/data/destinations";

// --- ZMODYFIKOWANA WSPÓLNA FUNKCJA localizedSlug ---
export const localizedSlug = (
  routeKey: string,
  i18nInstance: I18nInstanceType
): string => {
  const currentLang = i18nInstance.language || "pl";
  const namespace = "translation"; // Zgodnie z Twoją konfiguracją
  const fullKey = `routes.${routeKey}`; // Pełny klucz, bo getResource nie używa keyPrefix

  console.log(
    `[Utils localizedSlug] Trying key='${routeKey}' (full: '${fullKey}'), lang='${currentLang}', ns='${namespace}'`
  );

  // 1. Spróbuj pobrać zasób bezpośrednio - wiemy, że to działało w App.tsx
  let resourceResult = i18nInstance.getResource(
    currentLang,
    namespace,
    fullKey
  );

  // 2. Sprawdź, czy wynik jest stringiem
  if (typeof resourceResult === "string" && resourceResult !== fullKey) {
    // Sprawdź też czy nie zwrócono samego klucza
    console.log(
      `[Utils localizedSlug] Got string from getResource: "${resourceResult}"`
    );
    return resourceResult;
  }

  // 3. Jeśli getResource zawiodło lub zwróciło obiekt/null/klucz, spróbuj t() jako fallback
  //    (Chociaż spodziewamy się, że to zwróci błąd w formie stringa)
  console.warn(
    `[Utils localizedSlug] getResource failed for '${fullKey}'. Falling back to t(). Previous getResource result:`,
    resourceResult
  );
  try {
    const tResult = i18nInstance.t(fullKey, { ns: namespace }); // Wywołaj t() z pełnym kluczem
    console.log(
      `[Utils localizedSlug] Fallback t() result for '${fullKey}':`,
      tResult,
      `(Type: ${typeof tResult})`
    );
    // Zwróć wynik t() tylko jeśli jest stringiem i nie jest błędem; inaczej zwróć klucz bazowy
    if (
      typeof tResult === "string" &&
      !tResult.includes("returned an object")
    ) {
      return tResult;
    } else {
      // Jeśli t() zwróciło błąd lub nie-string, zwróć oryginalny routeKey
      console.error(
        `[Utils localizedSlug] Fallback t() also failed or returned non-string/error message for '${fullKey}'. Returning original key: '${routeKey}'`
      );
      return routeKey;
    }
  } catch (error) {
    console.error(
      `[Utils localizedSlug] Error in fallback t() for '${fullKey}':`,
      error
    );
    return routeKey; // Zwróć klucz bazowy w razie błędu
  }
};

// --- WSPÓLNA FUNKCJA createLocalizedPath ---
// Ta funkcja powinna teraz działać poprawnie, bo używa poprawionego localizedSlug
export const createLocalizedPath = (
  i18nInstance: I18nInstanceType,
  baseRouteKey: string | null,
  entityId: string | null = null
): string => {
  const currentLang = i18nInstance.language || "pl";
  const defaultLang = "pl";

  let baseSlugPart = "";
  if (baseRouteKey === "home" || baseRouteKey === null) {
    baseSlugPart = "";
  } else if (baseRouteKey) {
    // Wywołuje ZMODYFIKOWANĄ localizedSlug
    baseSlugPart = "/" + localizedSlug(baseRouteKey, i18nInstance);
  }

  let dynamicSlugPart = "";
  if (baseRouteKey === "destinationDetail" && entityId) {
    const destination = findDestinationById(entityId);
    if (destination) {
      const langKey = currentLang as keyof Destination["slugs"];
      dynamicSlugPart =
        "/" + (destination.slugs[langKey] ?? destination.slugs.en ?? entityId);
    } else {
      console.warn(
        `[createLocalizedPath] Nie znaleziono destynacji o ID "${entityId}" podczas tworzenia ścieżki.`
      );
      dynamicSlugPart = `/${entityId}-not-found`;
    }
  } else if (entityId) {
    dynamicSlugPart = "/" + entityId;
  }

  const fullPathWithoutLang = `${baseSlugPart}${dynamicSlugPart}`;

  if (currentLang === defaultLang) {
    return fullPathWithoutLang || "/";
  } else {
    return `/${currentLang}${fullPathWithoutLang}` || `/${currentLang}`;
  }
};
