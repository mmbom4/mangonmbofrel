// DARK MODE
const toggle = document.getElementById('darkToggle');

toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

// PAIEMENT
document.getElementById('payBtn').addEventListener('click', () => {
  alert("Paiement Mobile Money simulé");
});

// SCROLL SMOOTH
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
