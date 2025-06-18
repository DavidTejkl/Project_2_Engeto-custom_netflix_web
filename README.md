# Project_2_Engeto-custom_netflix_web
Project_2_Engeto

# Project Presentation: Netflix Simulation

## Introduction

This project simulates the basic functionality of a website similar to Netflix. It is built using standard web technologies and consists of three main pages: the homepage, a movies page, and a registration page.

## Project Architecture

The project utilizes a standard web architecture with separation of:

*   **Structure (HTML):** Defines the content and layout of the pages.
*   **Style (CSS):** Determines the visual presentation and responsive design. All color values are stored as CSS variables in the `:root` block in 			     `style.css` for easy management and consistency.
*   **Behavior (JavaScript):** Provides interactivity and dynamic elements.

The code is organized into separate files for each page and for global styles.

## Functionality - Homepage (index.html)

*   Displays an introductory section with project information.
*   Includes an email input form with validation.
*   Redirects to the registration page with the email pre-filled.
*   "Trending Movies" section with 3 example cards.
*   "Find More Movies" button for navigation to the movies page.
*   Footer with navigation links.
*   "Scroll to Top" button for smooth scrolling to the top.
*   Adaptive header for mobile devices (hiding/showing on scroll).

## Functionality - Movies Page (movies.html)

*   Header with a button to return to the homepage.
*   Dropdown list for filtering movies.
*   Asynchronous data loading from an external API (TVmaze API) based on the dropdown selection.
*   Displays movies in a responsive grid.
*   Loading spinner during data fetching.
*   Messages for no results found or API call errors.
*   Movie cards with hover effects.
*   Placeholder "Play" button (currently displays an alert with the movie ID).

## Functionality - Registration Page (register.html)

*   Header with logo and a button to return to the homepage.
*   Registration form (first name, last name, email, password, confirm password).
*   Option to pre-fill the email from a URL parameter.
*   HTML5 validation for required fields and password length.
*   Real-time password match validation with visual feedback.
*   Submit button active only when passwords match.
*   Simulated successful registration message and redirection to the homepage.

## Used External Resources

*   **Font Awesome:** For displaying icons.
*   **TVmaze API:** For fetching movie data on the movies page.

## Conclusion

The project demonstrates skills in front-end development, including working with HTML, CSS (including responsive design), JavaScript (DOM manipulation, asynchronous API calls), and integrating external resources.
