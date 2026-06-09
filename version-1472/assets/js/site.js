document.addEventListener("DOMContentLoaded", function () {
    var yearTarget = document.querySelector("[data-year]");
    if (yearTarget) {
        yearTarget.textContent = new Date().getFullYear();
    }

    var menuButton = document.querySelector("[data-mobile-menu-button]");
    var mobileMenu = document.querySelector("[data-mobile-menu]");
    if (menuButton && mobileMenu) {
        menuButton.addEventListener("click", function () {
            mobileMenu.classList.toggle("is-open");
        });
    }

    var heroSlides = Array.prototype.slice.call(document.querySelectorAll("[data-hero-slide]"));
    var heroDots = Array.prototype.slice.call(document.querySelectorAll("[data-hero-dot]"));
    if (heroSlides.length > 1) {
        var activeIndex = 0;
        var showSlide = function (index) {
            activeIndex = index % heroSlides.length;
            heroSlides.forEach(function (slide, slideIndex) {
                slide.classList.toggle("is-active", slideIndex === activeIndex);
            });
            heroDots.forEach(function (dot, dotIndex) {
                dot.classList.toggle("is-active", dotIndex === activeIndex);
            });
        };
        heroDots.forEach(function (dot, dotIndex) {
            dot.addEventListener("click", function () {
                showSlide(dotIndex);
            });
        });
        window.setInterval(function () {
            showSlide(activeIndex + 1);
        }, 6000);
    }

    var filterInput = document.querySelector("[data-filter-input]");
    var cards = Array.prototype.slice.call(document.querySelectorAll("[data-card]"));
    var emptyState = document.querySelector("[data-empty-state]");
    var params = new URLSearchParams(window.location.search);
    var query = params.get("q") || "";

    var applyFilter = function (value) {
        var normalized = value.trim().toLowerCase();
        var visibleCount = 0;
        cards.forEach(function (card) {
            var haystack = (card.getAttribute("data-search") || card.textContent || "").toLowerCase();
            var matched = !normalized || haystack.indexOf(normalized) !== -1;
            card.hidden = !matched;
            if (matched) {
                visibleCount += 1;
            }
        });
        if (emptyState) {
            emptyState.classList.toggle("is-visible", visibleCount === 0);
        }
    };

    if (filterInput) {
        if (query) {
            filterInput.value = query;
        }
        filterInput.addEventListener("input", function () {
            applyFilter(filterInput.value);
        });
        applyFilter(filterInput.value);
    }

    var player = document.querySelector("[data-hls-player]");
    if (player) {
        var source = player.getAttribute("data-src");
        var overlay = document.querySelector("[data-play-button]");
        var startVideo = function () {
            var playPromise = player.play();
            if (playPromise && typeof playPromise.catch === "function") {
                playPromise.catch(function () {});
            }
        };

        if (source) {
            if (window.Hls && window.Hls.isSupported()) {
                var hls = new window.Hls({
                    enableWorker: true,
                    lowLatencyMode: true
                });
                hls.loadSource(source);
                hls.attachMedia(player);
            } else if (player.canPlayType("application/vnd.apple.mpegurl")) {
                player.src = source;
            } else {
                player.src = source;
            }
        }

        if (overlay) {
            overlay.addEventListener("click", startVideo);
            player.addEventListener("play", function () {
                overlay.classList.add("is-hidden");
            });
            player.addEventListener("pause", function () {
                overlay.classList.remove("is-hidden");
            });
        }
    }
});
