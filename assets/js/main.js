
// Maxwellium main.js
(function(){
  document.body.classList.remove('no-js');

  // Theme toggle with localStorage
  const root = document.documentElement;
  const pref = localStorage.getItem('theme') || 'dark';
  if(pref === 'light') root.classList.add('light');

  const btn = document.querySelector('.theme-toggle');
  btn?.addEventListener('click', () => {
    root.classList.toggle('light');
    localStorage.setItem('theme', root.classList.contains('light') ? 'light' : 'dark');
  });

  // Mobile nav
  const nav = document.querySelector('.nav');
  const toggle = document.querySelector('.nav-toggle');
  toggle?.addEventListener('click', () => {
    const expanded = nav.getAttribute('aria-expanded') === 'true';
    nav.setAttribute('aria-expanded', String(!expanded));
    toggle.setAttribute('aria-expanded', String(!expanded));
  });

  // Highlight current nav item
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-menu a').forEach(a => {
    if(a.getAttribute('href') === path){ a.setAttribute('aria-current','page'); }
  });
})();
