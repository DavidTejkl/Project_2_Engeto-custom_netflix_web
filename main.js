/*** /CS/ Hlavní JavaScript soubor pro Netflix Clone
   Obsahuje funkcionalitu pro úvodní stránku */
/*** /EN/ Main JavaScript file for Netflix Clone
   Contains functionality for the homepage */

document.addEventListener("DOMContentLoaded", function () {
  // Inicializace všech komponent
  initScrollToTop();
  initEmailForm();
  initMovieHovers();
});

/**
 * /CS/ Scroll to Top funkcionalita
 * /EN/ Scroll to Top functionality
 */
function initScrollToTop() {
  const scrollToTopBtn = document.getElementById("scrollToTop");
  const scrollThreshold = 300;

  // /CS/ Sledování scroll pozice
  // /EN/ Tracking scroll position
  window.addEventListener("scroll", function () {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > scrollThreshold) {
      scrollToTopBtn.classList.add("visible");
    } else {
      scrollToTopBtn.classList.remove("visible");
    }
  });

  // /CS/ Kliknutí na tlačítko - smooth scroll nahoru
  // /EN/ Button click - smooth scroll up
  scrollToTopBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

/**
 * /CS/ Email formulář validace a odeslání
 * /EN/ Email form validation and submission
 */
function initEmailForm() {
  const emailForm = document.getElementById("emailForm");
  const emailInput = document.getElementById("emailInput");

  emailForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = emailInput.value.trim();

    // /CS/ HTML5 validace
    // /EN/ HTML5 validation
    if (!emailInput.checkValidity()) {
      emailInput.focus();
      return;
    }

    // /CS/ Simulace přesměrování na registrační stránku s email parametrem
    //      Doděláno dodatečně - nebylo v zadání ale myslím si že je to dobré
    // /EN/ Simulation of redirection to the registration page with email parameter
    const registerUrl = `register.html?email=${encodeURIComponent(email)}`;
    window.location.href = registerUrl;
  });

  // /CS/ Real-time validace
  // /EN/ Real-time validation
  emailInput.addEventListener("input", function () {
    if (this.checkValidity()) {
      this.classList.add("valid");
      this.classList.remove("invalid");
    } else {
      this.classList.add("invalid");
      this.classList.remove("valid");
    }
  });

  // /CS/ Reset stylů při vyprázdnění pole
  // /EN/ Reset styles when the field is emptied
  emailInput.addEventListener("blur", function() {
    if (this.value.trim() === "") {
      this.classList.remove("valid", "invalid");
    }
  });
}

/**
 * /CS/ Hover efekty pro filmové karty
 * /EN/ Hover effects for movie cards
 */
function initMovieHovers() {
  const movieCards = document.querySelectorAll(".movie-card");

  movieCards.forEach((card) => {
    // /CS/ Box-shadow bude řešen přes CSS :hover
    // /EN/ Box-shadow will be handled via CSS :hover
  });
}

/**
 * /CS/ Utility funkce pro smooth scroll
 * /EN/ Utility function for smooth scroll
 */
function smoothScrollTo(element) {
  element.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

/**
 * /CS/ Responsive navigation helper
 * /EN/ Responsive navigation helper
 */
function handleResponsiveNavigation() {
  const header = document.querySelector(".header");
  let lastScrollTop = 0;

  window.addEventListener("scroll", function () {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // /CS/ Skrytí/zobrazení header při scrollování na mobilech
    // /EN/ Hide/show header when scrolling on mobile
    if (window.innerWidth <= 768) {
      if (scrollTop > lastScrollTop && scrollTop > 100) {
        header.classList.add("hidden-mobile");
      } else {
        header.classList.remove("hidden-mobile");
      }
    }

    lastScrollTop = scrollTop;
  });
}

// /CS/ Inicializace responzivní navigace
// /EN/ Responsive navigation initialization
handleResponsiveNavigation();
