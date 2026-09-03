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

    /* Observe elements already on the page */
    revealElements.forEach((element) => {
        observer.observe(element);
    });

    /* Watch for writing cards loaded later from GitHub */
    const writingGrid = document.querySelector(".writing-grid");

    if (writingGrid) {

        const cardWatcher = new MutationObserver((mutations) => {

            mutations.forEach((mutation) => {

                mutation.addedNodes.forEach((node) => {

                    if (
                        node.nodeType === 1 &&
                        node.classList.contains("writing-card")
                    ) {
                        observer.observe(node);
                    }

                });

            });

        });

        cardWatcher.observe(writingGrid, {
            childList: true
        });
    }

});
