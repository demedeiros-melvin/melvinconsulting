const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");
const yearEl = document.getElementById("year");

// Lightweight interactions for mobile navigation and form placeholders
menuToggle?.addEventListener("click", () => {
  navMenu?.classList.toggle("open");
});

document.querySelectorAll("form").forEach((form) => {
  if (form.dataset.native === "true") {
    return;
  }
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    form.reset();
    alert("Thanks! We'll be in touch within one business day.");
  });
});

yearEl.textContent = new Date().getFullYear();
