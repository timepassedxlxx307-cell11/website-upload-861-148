(function () {
    function ready(fn) {
        if (document.readyState !== "loading") {
            fn();
        } else {
            document.addEventListener("DOMContentLoaded", fn);
        }
    }

    ready(function () {
        var toggle = document.querySelector(".menu-toggle");
        var panel = document.querySelector(".mobile-panel");
        if (toggle && panel) {
            toggle.addEventListener("click", function () {
                var open = panel.classList.toggle("open");
                toggle.setAttribute("aria-expanded", open ? "true" : "false");
            });
        }

        var slides = Array.prototype.slice.call(document.querySelectorAll(".hero-slide"));
        var dots = Array.prototype.slice.call(document.querySelectorAll(".hero-dot"));
        if (slides.length > 1) {
            var index = 0;
            var show = function (next) {
                index = (next + slides.length) % slides.length;
                slides.forEach(function (slide, i) {
                    slide.classList.toggle("active", i === index);
                });
                dots.forEach(function (dot, i) {
                    dot.classList.toggle("active", i === index);
                });
            };
            dots.forEach(function (dot, i) {
                dot.addEventListener("click", function () {
                    show(i);
                });
            });
            window.setInterval(function () {
                show(index + 1);
            }, 5200);
        }

        var filterInput = document.querySelector("[data-filter-input]");
        var categorySelect = document.querySelector("[data-category-filter]");
        var yearSelect = document.querySelector("[data-year-filter]");
        var cards = Array.prototype.slice.call(document.querySelectorAll(".movie-card"));
        var noResults = document.querySelector(".no-results");
        var params = new URLSearchParams(window.location.search);
        var query = params.get("q") || "";
        if (filterInput && query) {
            filterInput.value = query;
        }
        var applyFilter = function () {
            if (!cards.length) {
                return;
            }
            var text = filterInput ? filterInput.value.trim().toLowerCase() : "";
            var category = categorySelect ? categorySelect.value : "";
            var year = yearSelect ? yearSelect.value : "";
            var visible = 0;
            cards.forEach(function (card) {
                var source = [card.dataset.title, card.dataset.region, card.dataset.genre, card.dataset.year, card.dataset.category].join(" ").toLowerCase();
                var matchText = !text || source.indexOf(text) !== -1;
                var matchCategory = !category || card.dataset.category === category;
                var matchYear = !year || card.dataset.year === year;
                var matched = matchText && matchCategory && matchYear;
                card.style.display = matched ? "" : "none";
                if (matched) {
                    visible += 1;
                }
            });
            if (noResults) {
                noResults.classList.toggle("show", visible === 0);
            }
        };
        if (filterInput) {
            filterInput.addEventListener("input", applyFilter);
        }
        if (categorySelect) {
            categorySelect.addEventListener("change", applyFilter);
        }
        if (yearSelect) {
            yearSelect.addEventListener("change", applyFilter);
        }
        applyFilter();
    });

    window.setupPlayer = function (videoId, overlayId, sourceUrl) {
        var video = document.getElementById(videoId);
        var overlay = document.getElementById(overlayId);
        if (!video || !sourceUrl) {
            return;
        }
        var started = false;
        var attach = function () {
            if (video.canPlayType("application/vnd.apple.mpegurl")) {
                video.src = sourceUrl;
            } else if (window.Hls && window.Hls.isSupported()) {
                var hls = new window.Hls({ enableWorker: true });
                hls.loadSource(sourceUrl);
                hls.attachMedia(video);
            } else {
                video.src = sourceUrl;
            }
        };
        var start = function () {
            if (!started) {
                attach();
                started = true;
            }
            if (overlay) {
                overlay.classList.add("is-hidden");
            }
            video.controls = true;
            var promise = video.play();
            if (promise && typeof promise.catch === "function") {
                promise.catch(function () {});
            }
        };
        if (overlay) {
            overlay.addEventListener("click", start);
            var button = overlay.querySelector("button");
            if (button) {
                button.addEventListener("click", function (event) {
                    event.preventDefault();
                    event.stopPropagation();
                    start();
                });
            }
        }
        video.addEventListener("click", function () {
            if (!started) {
                start();
            }
        });
    };
})();
