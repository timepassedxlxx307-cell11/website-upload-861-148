(function() {
    function ready(callback) {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', callback);
        } else {
            callback();
        }
    }

    ready(function() {
        var menuButton = document.querySelector('[data-menu-button]');
        var mobileNav = document.querySelector('[data-mobile-nav]');

        if (menuButton && mobileNav) {
            menuButton.addEventListener('click', function() {
                mobileNav.classList.toggle('is-open');
            });
        }

        var searchInputs = Array.prototype.slice.call(document.querySelectorAll('[data-search-input]'));
        var clearButtons = Array.prototype.slice.call(document.querySelectorAll('[data-clear-search]'));
        var cards = Array.prototype.slice.call(document.querySelectorAll('[data-search]'));

        function applySearch(value) {
            var keyword = value.trim().toLowerCase();

            cards.forEach(function(card) {
                var content = (card.getAttribute('data-search') || '').toLowerCase();
                card.classList.toggle('hidden-by-search', Boolean(keyword) && content.indexOf(keyword) === -1);
            });

            searchInputs.forEach(function(input) {
                if (input.value !== value) {
                    input.value = value;
                }
            });
        }

        searchInputs.forEach(function(input) {
            input.addEventListener('input', function() {
                applySearch(input.value);
            });
        });

        clearButtons.forEach(function(button) {
            button.addEventListener('click', function() {
                applySearch('');
            });
        });

        var slides = Array.prototype.slice.call(document.querySelectorAll('[data-hero-slide]'));
        var dots = Array.prototype.slice.call(document.querySelectorAll('[data-hero-dot]'));
        var current = 0;
        var timer = null;

        function showSlide(index) {
            if (!slides.length) {
                return;
            }

            current = (index + slides.length) % slides.length;

            slides.forEach(function(slide, slideIndex) {
                slide.classList.toggle('is-active', slideIndex === current);
            });

            dots.forEach(function(dot, dotIndex) {
                dot.classList.toggle('is-active', dotIndex === current);
            });
        }

        function startHero() {
            if (slides.length <= 1) {
                return;
            }

            timer = window.setInterval(function() {
                showSlide(current + 1);
            }, 5200);
        }

        dots.forEach(function(dot) {
            dot.addEventListener('click', function() {
                var index = Number(dot.getAttribute('data-hero-dot')) || 0;
                showSlide(index);
                if (timer) {
                    window.clearInterval(timer);
                    startHero();
                }
            });
        });

        startHero();
    });

    window.startInlinePlayer = function(videoId, coverId, streamUrl) {
        var video = document.getElementById(videoId);
        var cover = document.getElementById(coverId);
        var hls = null;

        if (!video || !cover || !streamUrl) {
            return;
        }

        function loadAndPlay() {
            cover.classList.add('is-hidden');

            if (video.canPlayType('application/vnd.apple.mpegurl')) {
                if (!video.src) {
                    video.src = streamUrl;
                }
            } else if (window.Hls && window.Hls.isSupported()) {
                if (!hls) {
                    hls = new window.Hls({
                        enableWorker: true,
                        lowLatencyMode: true
                    });
                    hls.loadSource(streamUrl);
                    hls.attachMedia(video);
                }
            } else if (!video.src) {
                video.src = streamUrl;
            }

            var playPromise = video.play();
            if (playPromise && typeof playPromise.catch === 'function') {
                playPromise.catch(function() {});
            }
        }

        cover.addEventListener('click', loadAndPlay);
        video.addEventListener('click', function() {
            if (!video.src) {
                loadAndPlay();
            }
        });
    };
})();
