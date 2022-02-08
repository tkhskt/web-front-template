if (document.readyState === "complete" || (document.readyState !== "loading" && !document.documentElement.doScroll)) {
  // do something
} else {
  document.addEventListener("DOMContentLoaded", function () {
    // do something
  });
}
