/* ═══════════════════════════════════════════
   NAV / MOBILE MENU — shared across all pages
   ═══════════════════════════════════════════ */

const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const breakpoint = window.matchMedia('(max-width: 768px)');

// Detect viewport and switch nav accordingly
function handleViewport(e) {
  if (e.matches) {
    // Mobile: show hamburger
    hamburger.style.display = 'flex';
  } else {
    // Desktop: hide hamburger, close any open mobile menu
    hamburger.style.display = 'none';
    hamburger.classList.remove('open');
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
  }
}

breakpoint.addEventListener('change', handleViewport);
handleViewport(breakpoint); // run on page load

// Toggle mobile menu
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  mobileMenu.classList.toggle('open');
  document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
});

function closeMenu() {
  hamburger.classList.remove('open');
  mobileMenu.classList.remove('open');
  document.body.style.overflow = '';
}
