(function () {
  function ready(callback) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", callback);
    } else {
      callback();
    }
  }

  function setupMenu() {
    var button = document.querySelector("[data-menu-button]");
    var panel = document.querySelector("[data-mobile-panel]");
    if (!button || !panel) {
      return;
    }
    button.addEventListener("click", function () {
      panel.classList.toggle("is-open");
      document.body.classList.toggle("menu-open", panel.classList.contains("is-open"));
    });
  }

  function setupHero() {
    var hero = document.querySelector("[data-hero]");
    if (!hero) {
      return;
    }
    var slides = Array.prototype.slice.call(hero.querySelectorAll(".hero-slide"));
    var dots = Array.prototype.slice.call(hero.querySelectorAll("[data-hero-dot]"));
    if (slides.length < 2) {
      return;
    }
    var active = 0;
    function show(index) {
      active = index % slides.length;
      slides.forEach(function (slide, slideIndex) {
        slide.classList.toggle("is-active", slideIndex === active);
      });
      dots.forEach(function (dot, dotIndex) {
        dot.classList.toggle("is-active", dotIndex === active);
      });
    }
    dots.forEach(function (dot, index) {
      dot.addEventListener("click", function () {
        show(index);
      });
    });
    window.setInterval(function () {
      show(active + 1);
    }, 5200);
  }

  function normalize(value) {
    return (value || "").toString().trim().toLowerCase();
  }

  function setupLocalFilters() {
    document.querySelectorAll("[data-filter-root]").forEach(function (root) {
      var textInput = root.querySelector("[data-filter-text]");
      var typeSelect = root.querySelector("[data-filter-type]");
      var yearSelect = root.querySelector("[data-filter-year]");
      var section = root.parentElement;
      var cards = Array.prototype.slice.call(section.querySelectorAll(".movie-card"));
      function applyFilter() {
        var text = normalize(textInput && textInput.value);
        var type = normalize(typeSelect && typeSelect.value);
        var year = normalize(yearSelect && yearSelect.value);
        cards.forEach(function (card) {
          var haystack = normalize([
            card.dataset.title,
            card.dataset.region,
            card.dataset.type,
            card.dataset.year,
            card.dataset.genre,
            card.dataset.category
          ].join(" "));
          var matched = true;
          if (text && haystack.indexOf(text) === -1) {
            matched = false;
          }
          if (type && normalize(card.dataset.type) !== type) {
            matched = false;
          }
          if (year && normalize(card.dataset.year) !== year) {
            matched = false;
          }
          card.classList.toggle("is-filter-hidden", !matched);
        });
      }
      [textInput, typeSelect, yearSelect].forEach(function (item) {
        if (item) {
          item.addEventListener("input", applyFilter);
          item.addEventListener("change", applyFilter);
        }
      });
    });
  }

  function movieCardTemplate(movie) {
    var tags = (movie.tags || []).slice(0, 3).map(function (tag) {
      return "<span>" + escapeHtml(tag) + "</span>";
    }).join("");
    return "<article class=\"movie-card\">" +
      "<a class=\"poster-link\" href=\"" + movie.url + "\" aria-label=\"" + escapeHtml(movie.title) + "\">" +
      "<span class=\"poster-frame\"><img src=\"" + movie.cover + "\" alt=\"" + escapeHtml(movie.title) + "\" loading=\"lazy\" decoding=\"async\" onerror=\"this.style.display='none'\"></span>" +
      "<span class=\"poster-glow\"></span></a>" +
      "<div class=\"movie-card-body\"><div class=\"movie-meta-line\"><span>" + escapeHtml(movie.year) + "</span><span>" + escapeHtml(movie.region) + "</span><span>" + escapeHtml(movie.type) + "</span></div>" +
      "<h3><a href=\"" + movie.url + "\">" + escapeHtml(movie.title) + "</a></h3>" +
      "<p>" + escapeHtml(movie.line) + "</p><div class=\"tag-row\">" + tags + "</div></div></article>";
  }

  function escapeHtml(value) {
    return (value || "").toString()
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function setupGlobalSearch() {
    var results = document.getElementById("search-results");
    var input = document.getElementById("global-search-input");
    if (!results || !input || !window.CATALOG_ENTRIES) {
      return;
    }
    var category = document.getElementById("global-category-filter");
    var type = document.getElementById("global-type-filter");
    var urlParams = new URLSearchParams(window.location.search);
    var initialQuery = urlParams.get("q");
    if (initialQuery) {
      input.value = initialQuery;
    }
    function render() {
      var query = normalize(input.value);
      var categoryValue = normalize(category && category.value);
      var typeValue = normalize(type && type.value);
      var matched = window.CATALOG_ENTRIES.filter(function (movie) {
        var haystack = normalize([
          movie.title,
          movie.region,
          movie.type,
          movie.year,
          movie.genre,
          movie.category,
          (movie.tags || []).join(" ")
        ].join(" "));
        if (query && haystack.indexOf(query) === -1) {
          return false;
        }
        if (categoryValue && normalize(movie.category) !== categoryValue) {
          return false;
        }
        if (typeValue && normalize(movie.type) !== typeValue) {
          return false;
        }
        return true;
      }).slice(0, 120);
      if (!matched.length) {
        results.innerHTML = "<div class=\"no-results\">没有找到匹配内容</div>";
        return;
      }
      results.innerHTML = matched.map(movieCardTemplate).join("");
    }
    [input, category, type].forEach(function (item) {
      if (item) {
        item.addEventListener("input", render);
        item.addEventListener("change", render);
      }
    });
    render();
  }

  function setupPlayers() {
    document.querySelectorAll("[data-player]").forEach(function (shell) {
      var video = shell.querySelector("video");
      var button = shell.querySelector(".video-start");
      if (!video || !button) {
        return;
      }
      var stream = video.getAttribute("data-stream");
      var hlsInstance = null;
      function attachSource() {
        if (video.dataset.ready === "1" || !stream) {
          return;
        }
        if (window.Hls && window.Hls.isSupported()) {
          hlsInstance = new window.Hls({
            enableWorker: true,
            lowLatencyMode: true
          });
          hlsInstance.loadSource(stream);
          hlsInstance.attachMedia(video);
        } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
          video.src = stream;
        } else {
          video.src = stream;
        }
        video.dataset.ready = "1";
      }
      function playVideo() {
        attachSource();
        button.classList.add("is-hidden");
        var promise = video.play();
        if (promise && typeof promise.catch === "function") {
          promise.catch(function () {
            button.classList.remove("is-hidden");
          });
        }
      }
      button.addEventListener("click", playVideo);
      video.addEventListener("play", function () {
        button.classList.add("is-hidden");
      });
      video.addEventListener("pause", function () {
        if (video.currentTime === 0 || video.ended) {
          button.classList.remove("is-hidden");
        }
      });
      video.addEventListener("click", function () {
        if (video.paused) {
          playVideo();
        }
      });
      window.addEventListener("beforeunload", function () {
        if (hlsInstance) {
          hlsInstance.destroy();
        }
      });
    });
  }

  ready(function () {
    setupMenu();
    setupHero();
    setupLocalFilters();
    setupGlobalSearch();
    setupPlayers();
  });
})();
