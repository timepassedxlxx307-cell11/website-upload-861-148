(function () {
    const mobileButton = document.querySelector("[data-menu-toggle]");
    const mobileNav = document.querySelector("[data-mobile-nav]");

    if (mobileButton && mobileNav) {
        mobileButton.addEventListener("click", function () {
            mobileNav.classList.toggle("is-open");
        });
    }

    const hero = document.querySelector("[data-hero]");
    if (hero) {
        const slides = Array.from(hero.querySelectorAll("[data-hero-slide]"));
        const dots = Array.from(hero.querySelectorAll("[data-hero-dot]"));
        let current = 0;

        function showHero(index) {
            current = (index + slides.length) % slides.length;
            slides.forEach(function (slide, slideIndex) {
                slide.classList.toggle("is-active", slideIndex === current);
            });
            dots.forEach(function (dot, dotIndex) {
                dot.classList.toggle("is-active", dotIndex === current);
            });
        }

        dots.forEach(function (dot, index) {
            dot.addEventListener("click", function () {
                showHero(index);
            });
        });

        if (slides.length > 1) {
            setInterval(function () {
                showHero(current + 1);
            }, 5200);
        }
    }

    const panel = document.querySelector("[data-search-panel]");
    const searchInputs = Array.from(document.querySelectorAll("[data-site-search]"));
    const items = Array.isArray(window.siteSearchItems) ? window.siteSearchItems : [];

    function renderResults(value) {
        if (!panel) {
            return;
        }
        const query = value.trim().toLowerCase();
        if (!query) {
            panel.classList.remove("is-open");
            panel.innerHTML = "";
            return;
        }
        const results = items.filter(function (item) {
            return item.text.toLowerCase().includes(query);
        }).slice(0, 18);
        if (!results.length) {
            panel.innerHTML = '<p class="search-empty">没有找到匹配内容</p>';
            panel.classList.add("is-open");
            return;
        }
        panel.innerHTML = results.map(function (item) {
            return '<a class="search-result" href="' + item.url + '">' +
                '<img src="' + item.cover + '" alt="' + escapeHtml(item.title) + '">' +
                '<span><strong>' + escapeHtml(item.title) + '</strong>' +
                '<p>' + escapeHtml(item.year + ' · ' + item.region + ' · ' + item.category + ' · ' + item.genre) + '</p></span></a>';
        }).join("");
        panel.classList.add("is-open");
    }

    function escapeHtml(value) {
        return String(value).replace(/[&<>"']/g, function (char) {
            return {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                "\"": "&quot;",
                "'": "&#39;"
            }[char];
        });
    }

    searchInputs.forEach(function (input) {
        input.addEventListener("input", function () {
            renderResults(input.value);
            searchInputs.forEach(function (other) {
                if (other !== input) {
                    other.value = input.value;
                }
            });
        });
        const form = input.closest("form");
        if (form) {
            form.addEventListener("submit", function (event) {
                event.preventDefault();
                renderResults(input.value);
            });
        }
    });

    document.addEventListener("click", function (event) {
        if (!panel || !panel.classList.contains("is-open")) {
            return;
        }
        const insideSearch = event.target.closest("[data-site-search]") || event.target.closest("[data-search-panel]");
        if (!insideSearch) {
            panel.classList.remove("is-open");
        }
    });

    const filterPanel = document.querySelector("[data-filter-panel]");
    if (filterPanel) {
        const list = document.querySelector("[data-card-list]");
        const buttons = Array.from(filterPanel.querySelectorAll("[data-filter-value]"));
        buttons.forEach(function (button) {
            button.addEventListener("click", function () {
                const value = button.getAttribute("data-filter-value");
                buttons.forEach(function (item) {
                    item.classList.toggle("is-active", item === button);
                });
                if (!list) {
                    return;
                }
                Array.from(list.querySelectorAll(".movie-card")).forEach(function (card) {
                    const matched = value === "all" || card.getAttribute("data-year") === value;
                    card.style.display = matched ? "" : "none";
                });
            });
        });
    }
}());
