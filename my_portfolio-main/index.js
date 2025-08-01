
      // Initialize AOS animation
      AOS.init({
        duration: 1000,
        once: true
      });



     

      // Project Filter
      const filterButtons = document.querySelectorAll('.project-filters button');
      const projectItems = document.querySelectorAll('[data-category]');
      
      filterButtons.forEach(button => {
        button.addEventListener('click', () => {
          // Update active button
          filterButtons.forEach(btn => btn.classList.remove('active'));
          button.classList.add('active');
          
          // Filter projects
          const filter = button.dataset.filter;
          projectItems.forEach(item => {
            if (filter === 'all' || item.dataset.category === filter) {
              item.style.display = 'block';
            } else {
              item.style.display = 'none';
            }
          });
        });
      });

      // Particles.js Configuration
      particlesJS("particles-js", {
        particles: {
          number: { value: 50 },
          color: { value: "#64ffda" },
          shape: { type: "circle" },
          opacity: { value: 0.5 },
          size: { value: 3 },
          move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: { enable: true, mode: "repulse" },
            resize: true,
          },
        },
        retina_detect: true,
      });

      // GSAP Animations
      gsap.registerPlugin(ScrollTrigger);

      // Hero Animation
      gsap.from(".hero h1", {
        duration: 1.5,
        y: 100,
        opacity: 0,
        ease: "power4.out",
      });

      gsap.from(".hero p", {
        duration: 1.5,
        y: 50,
        opacity: 0,
        delay: 0.3,
        ease: "power4.out",
      });

      // Section Animations
      gsap.utils.toArray(".section-title").forEach((title) => {
        gsap.from(title, {
          scrollTrigger: title,
          duration: 1,
          x: -100,
          opacity: 0,
          ease: "power4.out",
        });
      });

      
emailjs.init("lO81I8ExQNuJFRcR3"); // Replace with your public key

document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const statusElement = document.getElementById('form-status');
  statusElement.textContent = 'Sending...';
  statusElement.style.color = '#64ffda';

  const now = new Date().toLocaleString();

  // Template Params - matching both templates
  const templateParams = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    message: document.getElementById('message').value,
    title: "Portfolio Contact Form Submission",
    time: now
  };

  // Send to your inbox
  emailjs.send("service_w9ju76l","template_fehnk2f",templateParams) // <-- your actual IDs
    .then(function(response) {
      statusElement.textContent = 'Message sent successfully!';
      statusElement.style.color = '#64ffda';
      document.getElementById('contact-form').reset();

      // Auto-reply
      emailjs.send("service_w9ju76l","template_fehnk2f",templateParams);
    })
    .catch(function(error) {
      statusElement.textContent = 'Failed to send message. Please try again.';
      statusElement.style.color = '#ff6b6b';
      console.error("EmailJS error:", error);
    });
});

      // Skill Box Animation
      gsap.utils.toArray(".skill-box").forEach((box, i) => {
        gsap.from(box, {
          scrollTrigger: box,
          duration: 0.8,
          x: i % 2 === 0 ? -50 : 50,
          opacity: 0,
          delay: i * 0.1,
          ease: "back.out(1.7)",
        });
      });

      // show image and convert into video
function showVideo(imgElement) {
  const container = imgElement.parentElement;
  const video = container.querySelector("video");
  imgElement.style.display = "none";
  video.style.display = "block";
  video.play();

}


// traffic sign
function playTrafficVideo(button) {
  const cardBody = button.closest('.card-body');
  const wrapper = cardBody.previousElementSibling;
  const img = wrapper.querySelector("img");
  const video = wrapper.querySelector("video");

  // Hide image and show video
  img.style.display = "none";
  video.style.display = "block";
  video.play();

  // Hide the "View Demo" button after click
  button.style.display = "none";
}

//blinkit powerbi
function playpowerbi(button) {
  const cardBody = button.closest('.card-body');
  const wrapper = cardBody.previousElementSibling;
  const img = wrapper.querySelector("img");
  const video = wrapper.querySelector("video, iframe");

  img.style.display = "none";
  video.style.display = "block";
  video.play?.(); // Safe call only if it's a <video>
  button.style.display = "none";
}




      // Card Animations
      gsap.utils.toArray(".card").forEach((card) => {
        gsap.from(card, {
          scrollTrigger: card,
          duration: 1,
          y: 100,
          opacity: 0,
          ease: "power4.out",
        });
      });

      // Timeline Animation
      gsap.utils.toArray(".timeline-item").forEach((item, i) => {
        gsap.from(item, {
          scrollTrigger: item,
          duration: 0.8,
          y: 50,
          opacity: 0,
          delay: i * 0.2,
          ease: "power2.out",
        });
      });

      // Google Analytics
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'GA_MEASUREMENT_ID');
    