(function () {
  var menuButton = document.querySelector(".menu-toggle");
  var mobilePanel = document.querySelector("[data-mobile-panel]");

  if (menuButton && mobilePanel) {
    menuButton.addEventListener("click", function () {
      var open = mobilePanel.classList.toggle("is-open");
      menuButton.setAttribute("aria-expanded", open ? "true" : "false");
      document.body.classList.toggle("is-locked", open);
    });
  }

  document.querySelectorAll("[data-global-search]").forEach(function (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      var input = form.querySelector("input[name='q']");
      var value = input ? input.value.trim() : "";
      var target = "./search.html";
      if (value) {
        target += "?q=" + encodeURIComponent(value);
      }
      window.location.href = target;
    });
  });

  var hero = document.querySelector("[data-hero]");
  if (hero) {
    var slides = Array.prototype.slice.call(hero.querySelectorAll("[data-hero-slide]"));
    var dots = Array.prototype.slice.call(hero.querySelectorAll("[data-hero-dot]"));
    var current = 0;
    var timer = null;

    function showSlide(index) {
      if (!slides.length) {
        return;
      }
      current = (index + slides.length) % slides.length;
      slides.forEach(function (slide, slideIndex) {
        slide.classList.toggle("is-active", slideIndex === current);
      });
      dots.forEach(function (dot, dotIndex) {
        dot.classList.toggle("is-active", dotIndex === current);
      });
    }

    function startHero() {
      clearInterval(timer);
      timer = setInterval(function () {
        showSlide(current + 1);
      }, 5200);
    }

    dots.forEach(function (dot) {
      dot.addEventListener("click", function () {
        showSlide(Number(dot.getAttribute("data-hero-dot")) || 0);
        startHero();
      });
    });

    showSlide(0);
    startHero();
  }

  var filterPanel = document.querySelector("[data-filter-panel]");
  if (filterPanel) {
    var localInput = filterPanel.querySelector("[data-local-search]");
    var yearSelect = filterPanel.querySelector("[data-year-filter]");
    var typeSelect = filterPanel.querySelector("[data-type-filter]");
    var resetButton = filterPanel.querySelector("[data-filter-reset]");
    var cards = Array.prototype.slice.call(document.querySelectorAll("[data-movie-card]"));
    var empty = document.querySelector("[data-search-empty]");
    var params = new URLSearchParams(window.location.search);
    var query = params.get("q") || "";

    if (localInput && query) {
      localInput.value = query;
    }

    function normalize(value) {
      return String(value || "").toLowerCase().replace(/\s+/g, "");
    }

    function applyFilter() {
      var q = normalize(localInput ? localInput.value : "");
      var y = yearSelect ? yearSelect.value : "";
      var t = typeSelect ? typeSelect.value : "";
      var visible = 0;

      cards.forEach(function (card) {
        var text = normalize(card.getAttribute("data-text"));
        var ok = true;
        if (q && text.indexOf(q) === -1) {
          ok = false;
        }
        if (y && card.getAttribute("data-year") !== y) {
          ok = false;
        }
        if (t && card.getAttribute("data-type") !== t) {
          ok = false;
        }
        card.hidden = !ok;
        if (ok) {
          visible += 1;
        }
      });

      if (empty) {
        empty.classList.toggle("is-visible", visible === 0);
      }
    }

    [localInput, yearSelect, typeSelect].forEach(function (control) {
      if (control) {
        control.addEventListener("input", applyFilter);
        control.addEventListener("change", applyFilter);
      }
    });

    if (resetButton) {
      resetButton.addEventListener("click", function () {
        if (localInput) {
          localInput.value = "";
        }
        if (yearSelect) {
          yearSelect.value = "";
        }
        if (typeSelect) {
          typeSelect.value = "";
        }
        applyFilter();
      });
    }

    applyFilter();
  }

  var hlsLoader = null;

  function loadHls() {
    if (window.Hls) {
      return Promise.resolve();
    }
    if (hlsLoader) {
      return hlsLoader;
    }
    hlsLoader = new Promise(function (resolve, reject) {
      var script = document.createElement("script");
      script.src = "https://cdn.jsdelivr.net/npm/hls.js@1.5.17/dist/hls.min.js";
      script.async = true;
      script.onload = resolve;
      script.onerror = reject;
      document.head.appendChild(script);
    });
    return hlsLoader;
  }

  function prepareVideo(box) {
    var video = box.querySelector("video");
    var url = box.getAttribute("data-m3u8");

    if (!video || !url) {
      return Promise.resolve(null);
    }

    if (video.getAttribute("data-ready") === "1") {
      return Promise.resolve(video);
    }

    if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = url;
      video.setAttribute("data-ready", "1");
      return Promise.resolve(video);
    }

    return loadHls().then(function () {
      if (window.Hls && window.Hls.isSupported()) {
        var hls = new window.Hls({
          enableWorker: true,
          lowLatencyMode: true
        });
        hls.loadSource(url);
        hls.attachMedia(video);
        video.hlsInstance = hls;
      } else {
        video.src = url;
      }
      video.setAttribute("data-ready", "1");
      return video;
    }).catch(function () {
      video.src = url;
      video.setAttribute("data-ready", "1");
      return video;
    });
  }

  document.querySelectorAll(".movie-player").forEach(function (box) {
    var cover = box.querySelector(".player-cover");
    var video = box.querySelector("video");

    function play() {
      prepareVideo(box).then(function (readyVideo) {
        if (!readyVideo) {
          return;
        }
        box.classList.add("is-playing");
        readyVideo.controls = true;
        var promise = readyVideo.play();
        if (promise && typeof promise.catch === "function") {
          promise.catch(function () {
            readyVideo.controls = true;
          });
        }
      });
    }

    if (cover) {
      cover.addEventListener("click", play);
    }
    if (video) {
      video.addEventListener("click", function () {
        if (video.paused) {
          play();
        }
      });
    }
  });
})();
