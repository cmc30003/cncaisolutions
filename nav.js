// Hamburger menu toggle
(function () {
  var btn = document.getElementById('hamburger');
  var nav = document.getElementById('main-nav');
  if (!btn || !nav) return;
  btn.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', open);
    btn.classList.toggle('active', open);
  });
  // Close menu when a nav link is clicked
  nav.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () {
      nav.classList.remove('open');
      btn.classList.remove('active');
      btn.setAttribute('aria-expanded', false);
    });
  });
})();

// Services model tabs (only runs on services page)
(function () {
  var tabs = document.querySelectorAll('.model-tab');
  var sections = document.querySelectorAll('.pricing-section[data-model]');
  if (!tabs.length || !sections.length) return;

  function showModel(id) {
    sections.forEach(function (s) {
      s.style.display = s.dataset.model === id ? '' : 'none';
    });
    tabs.forEach(function (t) {
      t.classList.toggle('active', t.dataset.target === id);
    });
  }

  tabs.forEach(function (t) {
    t.addEventListener('click', function () { showModel(t.dataset.target); });
  });

  // Show first tab by default on mobile
  function applyTabs() {
    if (window.innerWidth <= 768) {
      showModel('handoff');
      document.querySelector('.model-tabs').style.display = 'flex';
    } else {
      sections.forEach(function (s) { s.style.display = ''; });
      document.querySelector('.model-tabs').style.display = 'none';
    }
  }
  applyTabs();
  window.addEventListener('resize', applyTabs);
})();
