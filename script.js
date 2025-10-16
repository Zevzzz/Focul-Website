// Set current year in footer
(function setYear() {
  var yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
})();

// Smooth scroll for same-page anchor links
// Kept small to avoid heavy dependencies
document.addEventListener('click', function (e) {
  var target = e.target;
  if (target.tagName === 'A' && target.getAttribute('href') && target.getAttribute('href').startsWith('#')) {
    var id = target.getAttribute('href').slice(1);
    var el = document.getElementById(id);
    if (el) {
      e.preventDefault();
      window.scrollTo({ top: el.offsetTop - 56, behavior: 'smooth' });
    }
  }
});


