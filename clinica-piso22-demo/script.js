const header = document.querySelector('[data-header]');
const menuToggle = document.querySelector('[data-menu-toggle]');
const nav = document.querySelector('[data-nav]');
const demoDialog = document.querySelector('[data-demo-dialog]');
let dialogTrigger;

const updateHeader = () => header?.classList.toggle('is-scrolled', window.scrollY > 10);
updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

menuToggle?.addEventListener('click', () => {
  const open = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!open));
  nav?.classList.toggle('is-open', !open);
  menuToggle.querySelector('.sr-only').textContent = open ? 'Abrir menú' : 'Cerrar menú';
});

nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  menuToggle?.setAttribute('aria-expanded', 'false');
  nav?.classList.remove('is-open');
  const label = menuToggle?.querySelector('.sr-only');
  if (label) label.textContent = 'Abrir menú';
}));

document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && nav?.classList.contains('is-open')) {
    menuToggle?.setAttribute('aria-expanded', 'false');
    nav.classList.remove('is-open');
    menuToggle.querySelector('.sr-only').textContent = 'Abrir menú';
    menuToggle.focus();
  }
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 900) {
    menuToggle?.setAttribute('aria-expanded', 'false');
    nav?.classList.remove('is-open');
    const label = menuToggle?.querySelector('.sr-only');
    if (label) label.textContent = 'Abrir menú';
  }
});

const observer = 'IntersectionObserver' in window
  ? new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -30px 0px' })
  : null;

document.querySelectorAll('.reveal').forEach(el => {
  if (observer) observer.observe(el);
  else el.classList.add('revealed');
});

document.querySelectorAll('[data-demo-action]').forEach(trigger => {
  trigger.addEventListener('click', event => {
    event.preventDefault();
    dialogTrigger = trigger;
    demoDialog?.showModal();
  });
});

demoDialog?.querySelectorAll('[data-dialog-close]').forEach(button => {
  button.addEventListener('click', () => demoDialog.close());
});

demoDialog?.addEventListener('click', event => {
  if (event.target === demoDialog) demoDialog.close();
});

demoDialog?.addEventListener('close', () => dialogTrigger?.focus());
