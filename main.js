(function () {
  "use strict";
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // --- Copyright year ---
  var yearEl = document.getElementById("copyright-year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // --- Typing effect on hero name ---
  var nameEl = document.getElementById("hero-name");
  if (nameEl) {
    var fullName = nameEl.textContent.trim();
    if (reduceMotion) {
      nameEl.textContent = fullName;
    } else {
      var i = 0;
      nameEl.textContent = "";
      var typeSpeed = 70;
      function type() {
        if (i < fullName.length) {
          nameEl.innerHTML = fullName.slice(0, i + 1) + '<span class="type-cursor">|</span>';
          i++;
          setTimeout(type, typeSpeed);
        } else {
          // hold the cursor briefly, then settle to clean text
          setTimeout(function () { nameEl.textContent = fullName; }, 900);
        }
      }
      setTimeout(type, 350);
    }
  }

  // --- Nav: scrolled state + mobile menu ---
  var nav = document.getElementById("site-nav");
  var toggle = document.querySelector(".mobile-menu");
  var links = document.getElementById("nav-links");

  function onScroll() {
    if (!nav) return;
    if (window.scrollY > 12) nav.classList.add("scrolled");
    else nav.classList.remove("scrolled");
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("active");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    links.addEventListener("click", function (e) {
      if (e.target.closest("a")) {
        links.classList.remove("active");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  // --- Scroll reveal ---
  var reveals = document.querySelectorAll(".fade-in");
  if (reduceMotion || !("IntersectionObserver" in window)) {
    reveals.forEach(function (el) { el.classList.add("visible"); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    reveals.forEach(function (el) { io.observe(el); });
  }

  // --- Scroll-spy: highlight the nav link for the section in view ---
  var spyMap = {};
  document.querySelectorAll('.nav-links a[href^="#"]').forEach(function (a) {
    spyMap[a.getAttribute("href").slice(1)] = a;
  });
  var spySections = document.querySelectorAll("main > section[id]");
  if (spySections.length && Object.keys(spyMap).length && "IntersectionObserver" in window) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          Object.keys(spyMap).forEach(function (id) { spyMap[id].classList.remove("active"); });
          if (spyMap[entry.target.id]) spyMap[entry.target.id].classList.add("active");
        }
      });
    }, { rootMargin: "-45% 0px -50% 0px", threshold: 0 });
    spySections.forEach(function (s) { spy.observe(s); });
  }
})();
