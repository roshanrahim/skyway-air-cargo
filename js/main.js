/* ============================================================
   SKYWAY Air Cargo & Courier Services — Site Scripts
   ============================================================ */

/* ---- CONFIG: update these two numbers when you have the real ones ---- */
var SKYWAY_PHONE = "+919645487929";
var SKYWAY_WHATSAPP = "919645487929";

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
