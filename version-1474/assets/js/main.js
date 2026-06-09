(function () {
    var menuButton = document.querySelector('[data-menu-toggle]');
    var mobileMenu = document.querySelector('[data-mobile-menu]');

    if (menuButton && mobileMenu) {
        menuButton.addEventListener('click', function () {
            mobileMenu.classList.toggle('is-open');
        });
    }

    var slider = document.querySelector('[data-hero-slider]');

    if (slider) {
        var slides = Array.prototype.slice.call(slider.querySelectorAll('[data-hero-slide]'));
        var dots = Array.prototype.slice.call(slider.querySelectorAll('[data-hero-dot]'));
        var index = 0;

        function setSlide(nextIndex) {
            if (!slides.length) {
                return;
            }

            index = (nextIndex + slides.length) % slides.length;

            slides.forEach(function (slide, slideIndex) {
                slide.classList.toggle('is-active', slideIndex === index);
            });

            dots.forEach(function (dot, dotIndex) {
                dot.classList.toggle('is-active', dotIndex === index);
            });
        }

        dots.forEach(function (dot, dotIndex) {
            dot.addEventListener('click', function () {
                setSlide(dotIndex);
            });
        });

        if (slides.length > 1) {
            setInterval(function () {
                setSlide(index + 1);
            }, 5200);
        }
    }

    var filterPanel = document.querySelector('[data-filter-panel]');

    if (filterPanel) {
        var searchInput = filterPanel.querySelector('[data-search-input]');
        var categorySelect = filterPanel.querySelector('[data-filter-category]');
        var typeSelect = filterPanel.querySelector('[data-filter-type]');
        var yearSelect = filterPanel.querySelector('[data-filter-year]');
        var cards = Array.prototype.slice.call(document.querySelectorAll('[data-movie-card]'));
        var params = new URLSearchParams(window.location.search);
        var initialQuery = params.get('q');

        if (initialQuery && searchInput) {
            searchInput.value = initialQuery;
        }

        function normalize(value) {
            return (value || '').toString().trim().toLowerCase();
        }

        function updateCards() {
            var query = normalize(searchInput && searchInput.value);
            var category = normalize(categorySelect && categorySelect.value);
            var type = normalize(typeSelect && typeSelect.value);
            var year = normalize(yearSelect && yearSelect.value);

            cards.forEach(function (card) {
                var text = normalize(card.getAttribute('data-search'));
                var cardCategory = normalize(card.getAttribute('data-category'));
                var cardType = normalize(card.getAttribute('data-type'));
                var cardYear = normalize(card.getAttribute('data-year'));
                var matched = true;

                if (query && text.indexOf(query) === -1) {
                    matched = false;
                }

                if (category && cardCategory !== category) {
                    matched = false;
                }

                if (type && cardType !== type) {
                    matched = false;
                }

                if (year && cardYear !== year) {
                    matched = false;
                }

                card.classList.toggle('is-hidden', !matched);
            });
        }

        [searchInput, categorySelect, typeSelect, yearSelect].forEach(function (element) {
            if (element) {
                element.addEventListener('input', updateCards);
                element.addEventListener('change', updateCards);
            }
        });

        updateCards();
    }
})();
