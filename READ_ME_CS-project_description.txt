# Prezentace Projektu: Netflix Simulace

## Úvod

Tento projekt simuluje základní funkcionalitu webu podobného Netflixu. Je postaven na standardních webových technologiích a skládá se ze tří hlavních stránek: úvodní, stránky s filmy a registrační stránky.

## Architektura Projektu

Projekt využívá standardní webovou architekturu s oddělením:

*   **Struktura (HTML):** Definuje obsah a rozložení stránek.
*   **Styl (CSS):** Určuje vizuální prezentaci a responzivní design. Všechny barevné hodnoty jsou uloženy jako CSS proměnné v `:root` bloku v `style.css`     		    pro snadnou správu a konzistenci.
*   **Chování (JavaScript):** Zajišťuje interaktivitu a dynamické prvky.

Kód je organizován do samostatných souborů pro každou stránku a pro globální styly.

## Funkcionalita - Úvodní Stránka (index.html)

*   Zobrazuje úvodní sekci s informacemi o projektu.
*   Obsahuje formulář pro zadání e-mailu s validací.
*   Přesměrování na registrační stránku s předvyplněným e-mailem.
*   Sekce "Nejsledovanější filmy" s 3 ukázkovými kartami.
*   Tlačítko "Najít další filmy" pro navigaci na stránku s filmy.
*   Patička s navigačními odkazy.
*   Tlačítko "Scroll to Top" pro plynulý posun nahoru.
*   Adaptivní header pro mobilní zařízení (skrývání/zobrazování při scrollování).

## Funkcionalita - Stránka s Filmy (movies.html)

*   Hlavička s tlačítkem pro návrat na úvodní stranu.
*   Rozbalovací seznam (dropdown) pro filtrování filmů.
*   Asynchronní načítání dat z externího API (TVmaze API) na základě výběru z rozbalovacího seznamu (dropdown).
*   Zobrazení filmů v responzivním gridu.
*   Loading spinner během načítání dat.
*   Zprávy pro případ nenalezených výsledků nebo chyby API volání.
*   Filmové karty s hover efektem.
*   Placeholder tlačítko "Play" (aktuálně zobrazuje alert s ID filmu).

## Funkcionalita - Registrační Stránka (register.html)

*   Hlavička s logem a tlačítkem pro návrat na úvodní stranu.
*   Registrační formulář (jméno, příjmení, e-mail, heslo, potvrzení hesla).
*   Možnost předvyplnění e-mailu z URL parametru.
*   HTML5 validace pro povinná pole a délku hesla.
*   Real-time validace shody hesel s vizuálním feedbackem.
*   Tlačítko pro odeslání formuláře aktivní pouze při shodě hesel.
*   Simulovaná zpráva o úspěšné registraci a přesměrování na úvodní stránku.

## Použité Externí Zdroje

*   **Font Awesome:** Pro zobrazení ikon.
*   **TVmaze API:** Pro načítání dat o filmech na stránce s filmy.

## Závěr

Projekt demonstruje dovednosti v oblasti front-end vývoje, včetně práce s HTML, CSS (včetně responzivního designu), JavaScriptem (manipulace s DOM, asynchronní volání API) a integrace externích zdrojů.
