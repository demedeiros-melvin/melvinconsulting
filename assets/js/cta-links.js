document.addEventListener("DOMContentLoaded", () => {
  const url = window.MAD_OBSIDIAN?.TALLY_URL;
  if (!url) {
    return;
  }

  document.querySelectorAll('[data-cta="book-call"]').forEach((link) => {
    link.setAttribute("href", url);
    link.setAttribute("target", "_blank");
    link.setAttribute("rel", "noopener noreferrer");
  });
});
