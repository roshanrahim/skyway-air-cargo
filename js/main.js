/* ============================================================
   SKYWAY Air Cargo & Courier Services — Site Scripts
   ============================================================ */

/* ---- CONFIG: update these two numbers when you have the real ones ---- */
var SKYWAY_PHONE = "+919846000000";      // TODO: replace with real phone number
var SKYWAY_WHATSAPP = "919846000000";    // TODO: replace with real WhatsApp number (country code, no +)

document.addEventListener("DOMContentLoaded", function () {

  /* Stamp phone/WhatsApp everywhere */
  document.querySelectorAll("[data-phone-link]").forEach(function (a) {
    a.href = "tel:" + SKYWAY_PHONE;
  });
  document.querySelectorAll("[data-phone-text]").forEach(function (el) {
    el.textContent = SKYWAY_PHONE.replace("+91", "+91 ");
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

  /* ---- Rate calculator ---- */
  var calcForm = document.getElementById("rate-calc-form");
  if (calcForm) {
    /* Indicative rates (INR): [first 0.5kg, each additional 0.5kg]
       TODO: replace with your actual Aramex agent tariff. */
    var RATES = {
      uae:       { label: "UAE / Gulf (GCC)",        first: 1450, addl: 380,  days: "2–4" },
      saudi:     { label: "Saudi Arabia",            first: 1550, addl: 420,  days: "3–5" },
      uk:        { label: "United Kingdom / Europe", first: 2100, addl: 650,  days: "4–6" },
      usa:       { label: "USA / Canada",            first: 2400, addl: 780,  days: "5–8" },
      australia: { label: "Australia / New Zealand", first: 2300, addl: 720,  days: "5–8" },
      singapore: { label: "Singapore / Malaysia",    first: 1700, addl: 520,  days: "3–5" },
      africa:    { label: "Africa",                  first: 2600, addl: 850,  days: "6–9" }
    };

    calcForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var zone = document.getElementById("calc-zone").value;
      var actual = parseFloat(document.getElementById("calc-weight").value) || 0;
      var L = parseFloat(document.getElementById("calc-l").value) || 0;
      var W = parseFloat(document.getElementById("calc-w").value) || 0;
      var H = parseFloat(document.getElementById("calc-h").value) || 0;

      if (!zone || actual <= 0) {
        alert("Please choose a destination and enter the weight.");
        return;
      }

      var volumetric = (L && W && H) ? (L * W * H) / 5000 : 0;
      var chargeable = Math.max(actual, volumetric);
      chargeable = Math.ceil(chargeable * 2) / 2;   // round UP to nearest 0.5 kg

      var r = RATES[zone];
      var units = Math.max(0, Math.ceil((chargeable - 0.5) / 0.5));
      var price = r.first + units * r.addl;

      var box = document.getElementById("calc-result");
      document.getElementById("res-zone").textContent = r.label;
      document.getElementById("res-chargeable").textContent = chargeable.toFixed(1) + " kg" +
        (volumetric > actual ? " (volumetric)" : " (actual)");
      document.getElementById("res-days").textContent = r.days + " working days";
      document.getElementById("res-price").textContent = "₹ " + price.toLocaleString("en-IN") + "*";
      box.classList.add("show");
      box.scrollIntoView({ behavior: "smooth", block: "nearest" });

      var waBtn = document.getElementById("res-wa");
      if (waBtn) {
        var msg = "Hi SKYWAY! I'd like a final quote.\nDestination: " + r.label +
          "\nChargeable weight: " + chargeable.toFixed(1) + " kg\nEstimated: ₹" + price.toLocaleString("en-IN");
        waBtn.href = "https://wa.me/" + SKYWAY_WHATSAPP + "?text=" + encodeURIComponent(msg);
      }
    });
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
        "Phone: " + v("q-phone") + "\n" +
        "Destination: " + v("q-dest") + "\n" +
        "Cargo type: " + v("q-type") + "\n" +
        "Approx. weight: " + v("q-weight") + " kg\n" +
        "Details: " + v("q-msg");
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
