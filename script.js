document.addEventListener("DOMContentLoaded", () => {
  const mapButtons = document.querySelectorAll(".map-btn");

  mapButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const submenu = btn.nextElementSibling;
      submenu.style.display =
        submenu.style.display === "block" ? "none" : "block";
    });
  });
});