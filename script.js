const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#site-nav');

if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  nav.querySelectorAll('a, button').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const revealElements = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    },
    { threshold: 0.14 }
  );

  revealElements.forEach((element, index) => {
    element.style.transitionDelay = `${Math.min(index * 70, 280)}ms`;
    observer.observe(element);
  });
} else {
  revealElements.forEach((element) => {
    element.classList.add('is-visible');
  });
}

// Typewriter
const typewriterEl = document.querySelector('.hero-animate-1');
if (typewriterEl) {
  const text = typewriterEl.textContent.trim();
  typewriterEl.textContent = '';
  typewriterEl.style.opacity = '1';
  typewriterEl.style.animation = 'none';

  const cursor = document.createElement('span');
  cursor.className = 'typewriter-cursor';
  cursor.textContent = '|';
  typewriterEl.appendChild(cursor);

  let i = 0;
  const speed = 38;

  function type() {
    if (i < text.length) {
      cursor.insertAdjacentText('beforebegin', text[i]);
      i++;
      setTimeout(type, speed);
    } else {
      cursor.classList.add('typewriter-done');
    }
  }

  setTimeout(type, 200);
}

// Modal
const modal = document.querySelector('#demo-modal');
const openBtn = document.querySelector('#open-demo');
const closeBtn = document.querySelector('#close-demo');

function openModal() {
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modal.classList.remove('open');
  document.body.style.overflow = '';
}

if (modal && openBtn) {
  openBtn.addEventListener('click', openModal);
  closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
}
