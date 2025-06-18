/**
 * /CS/ JavaScript pro stránku s filmy
 *  Implementuje API volání a filtrování
 * /EN/ JavaScript for the movies page
 *  Implements API calls and filtering
 *
 * @format
 */

document.addEventListener("DOMContentLoaded", function () {
  initMoviesPage();
});

/**
 * /CS/ Inicializace stránky s filmy
 * /EN/ Movies page initialization
 */
function initMoviesPage() {
  const filterDropdown = document.getElementById("movieFilter");

  // /CS/ Event listener pro změnu filtru
  // /EN/ Event listener for filter change
  filterDropdown.addEventListener("change", function () {
    const selectedValue = this.value;

    if (selectedValue) {
      fetchMovies(selectedValue);
    } else {
      clearMovies();
    }
  });
}

/**
 * /CS/ Načtení filmů z API
 * /EN/ Loading movies from API
 * @param {string} searchTerm 
 */
async function fetchMovies(searchTerm) {
  const loadingSpinner = document.getElementById("loadingSpinner");
  const moviesGrid = document.getElementById("moviesGrid");
  const noResults = document.getElementById("noResults");

    // /CS/ Zobrazení loading kolečka
    // /EN/ Displaying loading spinner
  showLoading(true);
  clearMovies();
  hideNoResults();

  try {
    // /CS/ API volání podle zadání projektu
    // /EN/ API call according to project specification
    const apiUrl = `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(
      searchTerm
    )}`;
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    // /CS/ Zpracování a zobrazení výsledků
    // /EN/ Processing and displaying results
    if (data && data.length > 0) {
      displayMovies(data);
    } else {
      showNoResults();
    }
  } catch (error) {
    console.error("Chyba při načítání filmů:", error);
    // /EN/ Error loading movies:
    showError("Chyba při načítání filmů. Zkuste to prosím znovu.");
    // /EN/ Error loading movies. Please try again.
  } finally {
    showLoading(false);
  }
}

/**
 * /CS/ Zobrazení filmů v gridu
 * /EN/ Displaying movies in the grid
 */
function displayMovies(movies) {
  const moviesGrid = document.getElementById("moviesGrid");

  // /CS/ Omezení na prvních 10 filmů pro lepší UX
  // /EN/ Limit to the first 10 movies for better UX
  const moviesToShow = movies.slice(0, 10);

  const moviesHTML = moviesToShow
    .map((item) => {
      const show = item.show;
      const imageUrl = show.image
        ? show.image.medium
        : "https://via.placeholder.com/250x350/333/fff?text=No+Image";
      const title = show.name || "Bez názvu";
      // /EN/ No title
      const summary = show.summary
        ? show.summary.replace(/<[^>]*>/g, "").substring(0, 100) + "..."
        : "Popis není k dispozici";
      // /EN/ Description not available

      return `
            <div class="movie-card-page">
                <div class="movie-poster-container">
                    <img src="${imageUrl}" alt="${title}" class="movie-poster-page">
                    <div class="movie-overlay">
                        <button class="play-button" onclick="showMovieDetails('${
                          show.id
                        }')">
                            <i class="fas fa-play"></i>
                        </button>
                    </div>
                </div>
                <div class="movie-info">
                    <h3 class="movie-title">${title}</h3>
                    <p class="movie-summary">${summary}</p>
                    <div class="movie-meta">
                        <span class="movie-year">${
                          show.premiered
                            ? new Date(show.premiered).getFullYear()
                            : "N/A"
                        }</span>
                        <span class="movie-rating">${
                          show.rating?.average || "N/A"
                        }</span>
                    </div>
                </div>
            </div>
        `;
    })
    .join("");

  moviesGrid.innerHTML = moviesHTML;

  // /CS/ Přidání hover efektů
  // /EN/ Adding hover effects
  addMovieHoverEffects();
}

/**
 * /CS/ Zobrazení/skrytí loading spinneru
 * /EN/ Show/hide loading spinner
 */
function showLoading(show) {
  const loadingSpinner = document.getElementById("loadingSpinner");

  if (show) {
    loadingSpinner.classList.remove("hidden");
  } else {
    loadingSpinner.classList.add("hidden");
  }
}

/**
 * /CS/ Vymazání filmů z gridu
 * /EN/ Clearing movies from the grid
 */
function clearMovies() {
  const moviesGrid = document.getElementById("moviesGrid");
  moviesGrid.innerHTML = "";
}

/**
 * /CS/ Zobrazení zprávy o nenalezených výsledcích
 * /EN/ Displaying no results message
 */
function showNoResults() {
  const noResults = document.getElementById("noResults");
  noResults.classList.remove("hidden");
}

/**
 * /CS/ Skrytí zprávy o nenalezených výsledcích
 * /EN/ Hiding no results message
 */
function hideNoResults() {
  const noResults = document.getElementById("noResults");
  noResults.classList.add("hidden");
}

/**
 * /CS/ Zobrazení chybové zprávy
 * /EN/ Displaying error message
  */
function showError(message) {
  const moviesGrid = document.getElementById("moviesGrid");
  moviesGrid.innerHTML = `
        <div class="error-message">
            <i class="fas fa-exclamation-triangle"></i>
            <p>${message}</p>
        </div>
    `;
}

/**
 * /CS/ Přidání hover efektů k filmovým kartám
 * /EN/ Adding hover effects to movie cards
 */
function addMovieHoverEffects() {
  const movieCards = document.querySelectorAll(".movie-card-page");

  movieCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.classList.add("hovered");
    });

    card.addEventListener("mouseleave", function () {
      this.classList.remove("hovered");
    });
  });
}

/**
 * /CS/ Zobrazení detailů filmu (placeholder funkce)
 * /EN/ Displaying movie details (placeholder function)
  */
function showMovieDetails(movieId) {
  // /CS/ Placeholder pro budoucí funkcionalitu
  // /EN/ Placeholder for future functionality
  alert(`Zobrazení detailů filmu s ID: ${movieId}`);
  // /EN/ Displaying movie details with ID: ${movieId}
}
