(function () {
  "use strict";

  document.querySelectorAll("a[href]").forEach(function (a) {
    if (/^https?:\/\//.test(a.getAttribute("href"))) {
      a.setAttribute("target", "_blank");
    }
  });

  var hash = window.location.hash.replace("#", "");
  if (!hash) return;
  var target = document.getElementById(hash);
  if (!target) return;

  target.classList.add("highlight-paper");
  target.scrollIntoView({ behavior: "smooth", block: "center" });

  setTimeout(function () {
    target.classList.remove("highlight-paper");
  }, 4000);
})();
