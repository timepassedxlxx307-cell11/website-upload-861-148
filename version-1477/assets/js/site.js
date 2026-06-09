document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.querySelector("[data-menu-button]");
    const mobileMenu = document.querySelector("[data-mobile-menu]");

    if (menuButton && mobileMenu) {
        menuButton.addEventListener("click", function () {
            mobileMenu.classList.toggle("open");
        });
    }

    const slides = Array.from(document.querySelectorAll(".hero-slide"));
    const dots = Array.from(document.querySelectorAll(".hero-dot"));
    let activeSlide = 0;

    function setSlide(index) {
        if (!slides.length) {
            return;
        }

        activeSlide = (index + slides.length) % slides.length;
        slides.forEach(function (slide, slideIndex) {
            slide.classList.toggle("active", slideIndex === activeSlide);
        });
        dots.forEach(function (dot, dotIndex) {
            dot.classList.toggle("active", dotIndex === activeSlide);
        });
    }

    if (slides.length) {
        setSlide(0);
        dots.forEach(function (dot, dotIndex) {
            dot.addEventListener("click", function () {
                setSlide(dotIndex);
            });
        });
        window.setInterval(function () {
            setSlide(activeSlide + 1);
        }, 5600);
    }

    const filterInput = document.querySelector("[data-filter-input]");
    const cards = Array.from(document.querySelectorAll("[data-filter-card]"));

    function applyFilter(value) {
        const keyword = String(value || "").trim().toLowerCase();
        cards.forEach(function (card) {
            const text = card.getAttribute("data-filter-card") || card.textContent || "";
            card.classList.toggle("hidden-card", keyword && !text.toLowerCase().includes(keyword));
        });
    }

    if (filterInput && cards.length) {
        const params = new URLSearchParams(window.location.search);
        const initial = params.get("q") || "";
        if (initial) {
            filterInput.value = initial;
        }
        applyFilter(filterInput.value);
        filterInput.addEventListener("input", function () {
            applyFilter(filterInput.value);
        });
    }
});
