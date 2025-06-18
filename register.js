/**
 * /CS/ JavaScript pro registrační formulář
 * Provádí validaci hesel s vizuálním feedbackem
 * /EN/ JavaScript for the registration form
 * Performs password validation with visual feedback
 */

document.addEventListener("DOMContentLoaded", function () {
  initRegistrationForm();
  prefillEmailFromURL();
});

/**
 * /CS/ Inicializace registračního formuláře
 * /EN/ Registration form initialization
 */
function initRegistrationForm() {
  const form = document.getElementById("registrationForm");
  const passwordField = document.getElementById("password");
  const confirmPasswordField = document.getElementById("confirmPassword");
  const submitButton = document.getElementById("submitButton");
  const indicator = document.getElementById("passwordMatchIndicator");

  // /CS/ Real-time validace hesel
  // /EN/ Real-time password validation
  passwordField.addEventListener("input", validatePasswords);
  confirmPasswordField.addEventListener("input", validatePasswords);

  // /CS/ Blur events pro dodatečnou validaci
  // /EN/ Blur events for additional validation
  passwordField.addEventListener("blur", validatePasswords);
  confirmPasswordField.addEventListener("blur", validatePasswords);

  // /CS/ Odeslání formuláře
  // /EN/ Form submission
  form.addEventListener("submit", handleFormSubmit);

  /**
   * /CS/ Validace shody hesel
   * /EN/ Password match validation
   */
  function validatePasswords() {
    const password = passwordField.value;
    const confirmPassword = confirmPasswordField.value;

    // /CS/ Kontrola pouze pokud jsou obě pole vyplněná
    // /EN/ Check only if both fields are filled
    if (password.length > 0 && confirmPassword.length > 0) {
      if (password === confirmPassword) {
        // /CS/ Hesla se shodují - zelené zvýraznění
        // /EN/ Passwords match - green highlighting
        setPasswordFieldsValid(true);
        showPasswordMatchMessage("Hesla se shodují", "success");
        submitButton.disabled = false;
      } else {
        // /CS/ Hesla se neshodují - červené zvýraznění
        // /EN/ Passwords do not match - red highlighting
        setPasswordFieldsValid(false);
        showPasswordMatchMessage("Hesla se neshodují", "error");
        submitButton.disabled = true;
      }
    } else {
      // /CS/ Reset stylů pokud jsou pole prázdná
      // /EN/ Reset styles if fields are empty
      resetPasswordFields();
      hidePasswordMatchMessage();
      submitButton.disabled = true;
    }

    // /CS/ Dodatečná validace délky hesla
    // /EN/ Additional password length validation
    if (password.length > 0 && password.length < 6) {
      showPasswordMatchMessage("Heslo musí mít alespoň 6 znaků", "warning");
      submitButton.disabled = true;
    }
  }

  /**
   * /CS/ Nastavení vizuálního stavu polí hesel
   * /EN/ Setting visual state of password fields
   */
  function setPasswordFieldsValid(isValid) {
    const className = isValid ? "valid" : "invalid";
    const removeClassName = isValid ? "invalid" : "valid";

    passwordField.classList.remove(removeClassName);
    passwordField.classList.add(className);
    confirmPasswordField.classList.remove(removeClassName);
    confirmPasswordField.classList.add(className);
  }

  /**
   * /CS/ Reset stylů polí hesel
   * /EN/ Reset password field styles
   */
  function resetPasswordFields() {
    passwordField.classList.remove("valid", "invalid");
    confirmPasswordField.classList.remove("valid", "invalid");
  }

  /**
   * /CS/ Zobrazení zprávy o shodě hesel
   * /EN/ Displaying password match message
   */
  function showPasswordMatchMessage(message, type) {
    indicator.textContent = message;
    indicator.className = `password-match-indicator ${type}`;
    indicator.classList.remove("hidden");
  }

  /**
   * /CS/ Skrytí zprávy o shodě hesel
   * /EN/ Hiding password match message
   */
  function hidePasswordMatchMessage() {
    indicator.classList.add("hidden");
    indicator.textContent = "";
    indicator.className = "password-match-indicator";
  }

  /**
   * /CS/ Zpracování odeslání formuláře
   * /EN/ Handling form submission
      */
  function handleFormSubmit(e) {
    e.preventDefault();

    // /CS/ Finální validace
    // /EN/ Final validation
    const formData = new FormData(form);
    const password = formData.get("password");
    const confirmPassword = formData.get("confirmPassword");

    if (password !== confirmPassword) {
      alert("Hesla se neshodují!");
      return;
    }

    if (password.length < 6) {
      alert("Heslo musí mít alespoň 6 znaků!");
      return;
    }

    // /CS/ Validace všech povinných polí
    // /EN/ Validation of all required fields
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    // /CS/ Simulace úspěšné registrace
    // /EN/ Simulating successful registration
    // /CS/ -- Dodatečně dodělané, není v zadání projektu ale myslím si že to je dobré --
    // /EN/ -- Added additionally, not in the project specification but I think it's good --
    showSuccessMessage();

    // /CS/ Přesměrování po 2 sekundách
    // /EN/ Redirection after 2 seconds
    // /CS/ -- Dodatečně dodělané, není v zadání projektu ale myslím si že to je dobré --
    // /EN/ -- Added additionally, not in the project specification but I think it's good --
    setTimeout(() => {
      window.location.href = "index.html";
    }, 2000);
  }
}

/**
 * /CS/ Předvyplnění emailu z URL parametru
 * /EN/ Prefilling email from URL parameter
 */
function prefillEmailFromURL() {
  const urlParams = new URLSearchParams(window.location.search);
  const email = urlParams.get("email");

  if (email) {
    const emailField = document.getElementById("email");
    emailField.value = decodeURIComponent(email);
  }
}

/**
 * /CS/ -- Dodatečně dodělané, není v zadání projektu ale myslím si že to je dobré --
 * /CS/ Zobrazení zprávy o úspěšné registraci
 * /EN/ -- Added additionally, not in the project specification but I think it's good --
 * /EN/ Displaying successful registration message
 */
function showSuccessMessage() {
  const form = document.getElementById("registrationForm");

  form.innerHTML = `
        <div class="success-message">
            <i class="fas fa-check-circle"></i>
            <h2>Registrace byla úspěšná!</h2>
            <p>Budete přesměrováni na úvodní stránku...</p>
        </div>
    `;
}
