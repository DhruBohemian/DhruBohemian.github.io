document.addEventListener("DOMContentLoaded", () => {

    const revealElements = document.querySelectorAll(
        ".section-heading, .writing-card, .about, .contact, .featured-writing"
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


    window.observeWritingCard = function (card) {

        if (
            card &&
            card.nodeType === 1 &&
            card.classList.contains("writing-card")
        ) {

            observer.observe(card);

        }

    };


    const writingGrid =
        document.querySelector(".writing-grid");


    if (writingGrid) {

        const cardWatcher =
            new MutationObserver((mutations) => {

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
