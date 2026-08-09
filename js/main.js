/* ============================================================
   SKYWAY Air Cargo & Courier Services — Site Scripts
   ============================================================ */

/* ---- CONFIG: update these two numbers when you have the real ones ---- */
var SKYWAY_PHONE = "+919645487929";
var SKYWAY_WHATSAPP = "919645487929";
var SKYWAY_PHONE2 = "+918089390077";

document.addEventListener("DOMContentLoaded", function () {

  /* Stamp phone/WhatsApp everywhere */
  document.querySelectorAll("[data-phone-link]").forEach(function (a) {
    a.href = "tel:" + SKYWAY_PHONE;
  });
  document.querySelectorAll("[data-phone-text]").forEach(function (el) {
    el.textContent = SKYWAY_PHONE.replace("+91", "+91 ");
  });
  document.querySelectorAll("[data-phone2-link]").forEach(function (a) {
    a.href = "tel:" + SKYWAY_PHONE2;
  });
  document.querySelectorAll("[data-phone2-text]").forEach(function (el) {
    el.textContent = SKYWAY_PHONE2.replace("+91", "+91 ");
  });
  document.querySelectorAll("[data-wa-link]").forEach(function (a) {
    var msg = a.getAttribute("data-wa-msg") || "Hi SKYWAY! I need help with a shipment.";
    a.href = "https://wa.me/" + SKYWAY_WHATSAPP + "?text=" + encodeURIComponent(msg);
    a.target = "_blank";
    a.rel = "noopener";
  });

  /* Mobile nav */
  var burger = document.querySelector(".hamburger");
  var nav = document.querySelector("nav.main-nav");
  if (burger && nav) {
    burger.addEventListener("click", function () {
      nav.classList.toggle("open");
    });
    document.addEventListener("click", function (e) {
      if (nav.classList.contains("open") && !nav.contains(e.target) && !burger.contains(e.target)) {
        nav.classList.remove("open");
      }
    });
  }

  /* FAQ accordion */
  document.querySelectorAll(".faq-q").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var item = btn.closest(".faq-item");
      var ans = item.querySelector(".faq-a");
      var isOpen = item.classList.contains("open");
      document.querySelectorAll(".faq-item.open").forEach(function (o) {
        o.classList.remove("open");
        o.querySelector(".faq-a").style.maxHeight = null;
      });
      if (!isOpen) {
        item.classList.add("open");
        ans.style.maxHeight = ans.scrollHeight + "px";
      }
    });
  });

  /* ---- Destinations map: hover routes + quote link ---- */
  var wm = document.querySelector(".world-map");
  if (wm) {
    var HOME = { x: 71.19, y: 44.44 };
    var svgNS = "http://www.w3.org/2000/svg";
    var overlay = document.createElementNS(svgNS, "svg");
    overlay.setAttribute("class", "wm-routes");
    overlay.setAttribute("viewBox", "0 0 100 100");
    overlay.setAttribute("preserveAspectRatio", "none");
    var route = document.createElementNS(svgNS, "path");
    route.setAttribute("class", "wm-route");
    route.setAttribute("pathLength", "100");
    overlay.appendChild(route);
    wm.appendChild(overlay);

    var pop = document.createElement("div");
    pop.className = "map-pop";
    var popLink = document.createElement("a");
    pop.appendChild(popLink);
    wm.appendChild(pop);

    var hideT = null;
    function hide() {
      route.classList.remove("show");
      pop.classList.remove("show");
      wm.querySelectorAll(".map-pin.active").forEach(function (x) { x.classList.remove("active"); });
    }
    function scheduleHide() { hideT = setTimeout(hide, 350); }
    function cancelHide() { if (hideT) { clearTimeout(hideT); hideT = null; } }

    pop.addEventListener("mouseenter", cancelHide);
    pop.addEventListener("mouseleave", scheduleHide);
    document.addEventListener("click", function (e) { if (!wm.contains(e.target)) hide(); });

    wm.querySelectorAll(".map-pin:not(.pin-home)").forEach(function (pin) {
      var x = parseFloat(pin.style.left);
      var y = parseFloat(pin.style.top);
      var name = pin.querySelector("i") ? pin.querySelector("i").textContent.trim() : "";
      function show() {
        cancelHide();
        var cx = (HOME.x + x) / 2;
        var cy = Math.max(3, Math.min(HOME.y, y) - 16);
        route.setAttribute("d", "M " + HOME.x + " " + HOME.y + " Q " + cx + " " + cy + " " + x + " " + y);
        route.classList.add("show");
        popLink.innerHTML = "✈ Check rates for <b>" + name + "</b> →";
        popLink.href = "quote.html?dest=" + encodeURIComponent(name);
        pop.style.left = x + "%";
        pop.style.top = y + "%";
        pop.classList.toggle("below", y < 26);
        pop.classList.add("show");
        wm.querySelectorAll(".map-pin.active").forEach(function (p2) { p2.classList.remove("active"); });
        pin.classList.add("active");
      }
      pin.addEventListener("mouseenter", show);
      pin.addEventListener("mouseleave", scheduleHide);
      pin.addEventListener("click", function (e) { e.stopPropagation(); show(); });
    });
  }

  /* ---- Quote page: prefill destination from ?dest= ---- */
  var destField = document.getElementById("q-dest");
  if (destField) {
    var qd = new URLSearchParams(window.location.search).get("dest");
    if (qd) destField.value = qd;
  }

  /* ---- Quote request form → WhatsApp ---- */
  var quoteForm = document.getElementById("quote-form");
  if (quoteForm) {
    quoteForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var v = function (id) { var el = document.getElementById(id); return el ? el.value.trim() : ""; };
      var msg =
        "New Quote Request — SKYWAY website\n" +
        "Name: " + v("q-name") + "\n" +
        "Phone/WhatsApp number: " + v("q-phone") + "\n" +
        "Destination country: " + v("q-dest") + "\n" +
        "Place of contact: " + v("q-place") + "\n" +
        "Approx. weight: " + v("q-weight") + " kg\n" +
        "What you are sending: " + v("q-type") + "\n" +
        "Anything else we should know: " + v("q-msg");
      window.open("https://wa.me/" + SKYWAY_WHATSAPP + "?text=" + encodeURIComponent(msg), "_blank");
      var ok = document.getElementById("quote-sent");
      if (ok) ok.style.display = "block";
    });
  }

  /* ---- Contact form → WhatsApp ---- */
  var contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var v = function (id) { var el = document.getElementById(id); return el ? el.value.trim() : ""; };
      var msg =
        "Website enquiry — SKYWAY\n" +
        "Name: " + v("c-name") + "\n" +
        "Phone: " + v("c-phone") + "\n" +
        "Subject: " + v("c-subject") + "\n" +
        "Message: " + v("c-msg");
      window.open("https://wa.me/" + SKYWAY_WHATSAPP + "?text=" + encodeURIComponent(msg), "_blank");
      var ok = document.getElementById("contact-sent");
      if (ok) ok.style.display = "block";
    });
  }
});

/* ---- Footer accordions (phone): heading row + full-width panels ---- */
document.addEventListener("DOMContentLoaded", function () {
  if (window.innerWidth > 640) return;
  var grid = document.querySelector("footer .footer-grid");
  if (!grid) return;
  var bar = document.createElement("div");
  bar.className = "f-acc-bar";
  var panels = document.createElement("div");
  panels.className = "f-acc-panels";
  var pairs = [];
  Array.prototype.slice.call(grid.children).forEach(function (col) {
    var h = col.querySelector("h4");
    if (!h) return;
    bar.appendChild(h);
    var panel = document.createElement("div");
    while (col.firstChild) panel.appendChild(col.firstChild);
    panels.appendChild(panel);
    grid.removeChild(col);
    pairs.push([h, panel]);
    h.addEventListener("click", function () {
      var isOpen = panel.classList.contains("open");
      pairs.forEach(function (pr) { pr[0].classList.remove("open"); pr[1].classList.remove("open"); });
      if (!isOpen) { h.classList.add("open"); panel.classList.add("open"); }
    });
  });
  grid.appendChild(bar);
  grid.appendChild(panels);
});

/* ---- Horizontal card carousels ---- */
document.addEventListener("DOMContentLoaded", function () {
  function glide(el, delta) {
    var start = el.scrollLeft;
    var max = el.scrollWidth - el.clientWidth;
    var target = Math.max(0, Math.min(max, start + delta));
    var t0 = null;
    var moved = false;
    function frame(ts) {
      if (t0 === null) t0 = ts;
      moved = true;
      var p = Math.min(1, (ts - t0) / 380);
      var ease = 1 - Math.pow(1 - p, 3);
      el.scrollLeft = start + (target - start) * ease;
      if (p < 1) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
    setTimeout(function () { if (!moved) el.scrollLeft = target; }, 150);
  }
  document.querySelectorAll(".carousel-wrap").forEach(function (wrap) {
    var track = wrap.querySelector(".carousel");
    if (!track) return;
    var step = function () {
      var card = track.querySelector(".card");
      return card ? card.getBoundingClientRect().width + 20 : track.clientWidth * 0.8;
    };
    var prev = wrap.querySelector(".car-prev");
    var next = wrap.querySelector(".car-next");
    if (prev) prev.addEventListener("click", function () { glide(track, -step()); });
    if (next) next.addEventListener("click", function () { glide(track, step()); });

    /* pagination dots */
    var cards = track.querySelectorAll(".card, .testi");
    if (cards.length > 1) {
      var dots = document.createElement("div");
      dots.className = "car-dots";
      var dotEls = [];
      cards.forEach(function (card, i) {
        var d = document.createElement("button");
        d.type = "button";
        d.className = "car-dot" + (i === 0 ? " active" : "");
        d.setAttribute("aria-label", "Go to card " + (i + 1));
        d.addEventListener("click", function () {
          var target = card.offsetLeft - (track.clientWidth - card.clientWidth) / 2;
          glide(track, target - track.scrollLeft);
        });
        dots.appendChild(d);
        dotEls.push(d);
      });
      wrap.appendChild(dots);
      var syncT = null;
      track.addEventListener("scroll", function () {
        if (syncT) return;
        syncT = setTimeout(function () {
          syncT = null;
          var center = track.scrollLeft + track.clientWidth / 2;
          var best = 0, bestDist = Infinity;
          cards.forEach(function (card, i) {
            var c = card.offsetLeft + card.clientWidth / 2;
            var dist = Math.abs(c - center);
            if (dist < bestDist) { bestDist = dist; best = i; }
          });
          dotEls.forEach(function (d, i) { d.classList.toggle("active", i === best); });
        }, 80);
      });
    }
  });
});
