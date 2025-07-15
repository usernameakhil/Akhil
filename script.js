function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const maskLayer = document.querySelector('.profile-pic-border');
const container = document.querySelector('.section__pic-container');

container.addEventListener('mousemove', (e) => {
  const rect = container.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const maskStyle = `radial-gradient(circle 80px at ${x}px ${y}px, transparent 100%, black 100%)`;
  maskLayer.style.maskImage = maskStyle;
  maskLayer.style.webkitMaskImage = maskStyle;
});

container.addEventListener('mouseleave', () => {
  const maskStyle = `radial-gradient(circle 80px at -200px -200px, transparent 100%, black 100%)`;
  maskLayer.style.maskImage = maskStyle;
  maskLayer.style.webkitMaskImage = maskStyle;
});
