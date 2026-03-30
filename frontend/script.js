// ===================== HERO SLIDESHOW =====================
const heroImages = [
  'images/hero1.jpg',
  'images/hero2.jpg',
  'images/hero3.jpg'
];

let currentHero = 0;
const heroSection = document.querySelector('.hero');

function changeHero() {
  heroSection.style.backgroundImage = `url(${heroImages[currentHero]})`;
  currentHero = (currentHero + 1) % heroImages.length;
}

// Change hero image every 10 seconds
setInterval(changeHero, 10000);
changeHero(); // initial load

// ===================== FADE-IN ANIMATION =====================
const fadeElements = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
  fadeElements.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add('show');
    }
  });
});

// Make sections visible on page load
fadeElements.forEach(el => el.classList.add('show'));

// ===================== CONTACT FORM =====================
document.getElementById("contactForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  try {
    const res = await fetch('http://localhost:5001/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, message })
    });

    if (res.ok) {
      alert("Message sent successfully!");
      document.getElementById("contactForm").reset(); // clears form without reload
    } else {
      alert("Failed to send message.");
    }
  } catch (err) {
    alert("Failed to send message.");
    console.error(err);
  }
});