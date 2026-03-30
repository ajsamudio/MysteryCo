/**
 * main.js — Mystery Entertainment
 * Handles mobile navigation toggle and YouTube facade.
 */

(function () {
  const menuBtn   = document.getElementById('menu-btn');
  const mobileNav = document.getElementById('mobile-nav');
  const closeBtn  = document.getElementById('mobile-nav-close');

  if (!menuBtn || !mobileNav) return;

  function openNav() {
    mobileNav.classList.add('open');
    document.body.style.overflow = 'hidden';
    menuBtn.setAttribute('aria-expanded', 'true');
  }

  function closeNav() {
    mobileNav.classList.remove('open');
    document.body.style.overflow = '';
    menuBtn.setAttribute('aria-expanded', 'false');
  }

  menuBtn.addEventListener('click', openNav);

  if (closeBtn) {
    closeBtn.addEventListener('click', closeNav);
  }

  // Close when any nav link is clicked
  mobileNav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', closeNav);
  });

  // Close on Escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && mobileNav.classList.contains('open')) {
      closeNav();
    }
  });
}());

/* =============================================================
   YouTube facade — click opens video on YouTube (embedding disabled)
   ============================================================= */
(function () {
  document.querySelectorAll('.yt-facade').forEach(function (facade) {
    facade.addEventListener('click', function () {
      var videoId = facade.getAttribute('data-video-id');
      window.open('https://www.youtube.com/watch?v=' + videoId, '_blank', 'noopener,noreferrer');
    });
  });
}());
