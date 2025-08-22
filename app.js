document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".section");
  const sectionButtons = document.querySelectorAll(".control");
  const allSections = document.querySelector(".main-content");

  function PageTransitions() {
    // Handle section button clicks
    sectionButtons.forEach((btn, index) => {
      btn.addEventListener("click", function () {
        // Remove active button
        const currentButton = document.querySelector(".active-btn");
        if (currentButton) currentButton.classList.remove("active-btn");
        this.classList.add("active-btn");

        // Remove active section
        const activeSection = document.querySelector(".section.active");
        if (activeSection) activeSection.classList.remove("active");

        // Show the correct section
        if (sections[index]) {
          sections[index].classList.add("active");
        }
      });
    });

    // Handle clicks inside main-content
    if (allSections) {
      allSections.addEventListener("click", (e) => {
        const id = e.target.dataset.id;
        if (id) {
          // Remove active class from all sections
          sections.forEach((section) => section.classList.remove("active"));

          // Show correct section
          const activeSection = document.querySelector(`#${id}`);
          if (activeSection) activeSection.classList.add("active");

          // Remove active button
          const currentButton = document.querySelector(".active-btn");
          if (currentButton) currentButton.classList.remove("active-btn");

          // Highlight correct button
          const newActiveButton = document.querySelector(`[data-id="${id}"]`);
          if (newActiveButton) newActiveButton.classList.add("active-btn");
        }
      });
    }
  }

  // Initialize transitions
  PageTransitions();

  // ✅ Contact form (only if exists)
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const formMessage = document.getElementById("form-message");

      emailjs
        .sendForm(
          "service_zbacvbc",
          "template_harhkoi",
          this,
          "Rdwvcw20k9MUhXoj-"
        )
        .then(
          () => {
            formMessage.textContent = "✅ Message sent successfully!";
            formMessage.style.color = "limegreen";
            this.reset();
          },
          (err) => {
            formMessage.textContent =
              "❌ Failed to send message. Please try again.";
            formMessage.style.color = "red";
            console.error("EmailJS error:", err);
          }
        );
    });
  }
});
