// ===================== script.js =====================

window.addEventListener('DOMContentLoaded', () => {
  // --- BLOBS (statique pour l'instant) ---
  const blobs = document.querySelectorAll('.blob');

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    blobs.forEach(blob => blob.style.transform = 'none');
  }

  // --- ANIMATION AU SCROLL ---
  const faders = document.querySelectorAll('.fade-in');

  const appearOnScroll = () => {
    faders.forEach(fader => {
      const top = fader.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (top < windowHeight - 100) {
        fader.classList.add('visible');
      }
    });
  };

  window.addEventListener('scroll', appearOnScroll);
  appearOnScroll(); // pour les sections déjà visibles au chargement

  // --- SMOOTH SCROLL FIABLE AVEC NAVBAR FIXE ---
  document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const target = document.getElementById(targetId);
      if (!target) return;

      const navbarHeight = document.querySelector('.navbar').offsetHeight;
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    });
  });

  // --- MODALS PROJETS ---
  const btns = document.querySelectorAll(".btn-view");
  const closes = document.querySelectorAll(".close");

  btns.forEach(btn => {
    btn.addEventListener("click", () => {
      const modalId = btn.getAttribute("data-modal");
      const modal = document.getElementById(modalId);
      if(modal) modal.style.display = "block";
    });
  });

  closes.forEach(span => {
    span.addEventListener("click", () => {
      const modal = span.closest(".modal");
      if(modal) modal.style.display = "none";
    });
  });

  window.addEventListener("click", e => {
    if(e.target.classList.contains("modal")) {
      e.target.style.display = "none";
    }
  });
});
