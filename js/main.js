// Minimal vanilla JS: mobile nav toggle + disable TBD links.
(function () {
  "use strict";

  const toggle = document.querySelector(".nav__toggle");
  const links = document.querySelector(".nav__links");

  if (toggle && links) {
    toggle.addEventListener("click", () => {
      const open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    // Close the menu after tapping a link on mobile.
    links.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => {
        links.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      })
    );
  }

  // Placeholder links (submission portal not live yet) shouldn't navigate.
  document.querySelectorAll("[data-tbd]").forEach((el) =>
    el.addEventListener("click", (e) => e.preventDefault())
  );
})();
