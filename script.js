document.documentElement.classList.add("js-scroll");

document.addEventListener("DOMContentLoaded", () => {

    const revealElements = document.querySelectorAll(
        ".section-heading, .writing-card, .about, .contact"
    );

    const observer = new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    observer.unobserve(entry.target);
                }

            });

        },
        {
            threshold: 0.12
        }
    );

    revealElements.forEach((element) => {
        observer.observe(element);
    });

});
