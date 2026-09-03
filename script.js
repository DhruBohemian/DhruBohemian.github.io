document.documentElement.classList.add("js-scroll");

document.addEventListener("DOMContentLoaded", () => {
  const revealElements = document.querySelectorAll(
    ".section-heading, .writing-card, .about, .contact"
  );

  console.log("Reveal elements found:", revealElements.length);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          console.log("Revealed:", entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  revealElements.forEach((element) => observer.observe(element));
});

console.log("DhruBohemian script loaded!");
