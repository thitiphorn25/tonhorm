document.addEventListener("DOMContentLoaded", () => {

  // Sidebar links
  const links = document.querySelectorAll(".sidebar ul li a");
  const sections = document.querySelectorAll(".section");

  // Smooth scroll & click active
  links.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }

      // Update active class immediately on click
      links.forEach(l => l.parentElement.classList.remove("active"));
      link.parentElement.classList.add("active");
    });
  });

  // Highlight sidebar link on scroll
  function setActiveLink() {
    let current = "";
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (window.scrollY >= sectionTop - sectionHeight / 3) {
        current = section.getAttribute("id");
      }
    });

    links.forEach(link => {
      link.parentElement.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.parentElement.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", setActiveLink);

  // Fade-in effect for all sections
  function fadeIn() {
    sections.forEach(sec => {
      const rect = sec.getBoundingClientRect();
      if (rect.top < window.innerHeight - 150) {
        sec.classList.add("show");
      }
    });
  }

  window.addEventListener("scroll", fadeIn);
  fadeIn();

  // Contact Form
  const form = document.querySelector(".contact-form");
  if (form) {
    form.addEventListener("submit", e => {
      e.preventDefault();
      alert("ขอบคุณที่ติดต่อ ต้นหอมจะตอบกลับโดยเร็วที่สุด");
      form.reset();
    });
  }
});
