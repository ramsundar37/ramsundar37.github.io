/* ===============================
   AOS INIT (SCROLL FADE)
   =============================== */
AOS.init({
  duration: 900,
  once: true,
  easing: "ease-out-cubic",
});






document.addEventListener("DOMContentLoaded", () => {
  /* ===============================
     EMAILJS – CONTACT FORM
     =============================== */
  if (typeof emailjs !== "undefined") {
    emailjs.init("lO81I8ExQNuJFRcR3");
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
      contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const statusEl = document.getElementById("form-status");
        if (statusEl) {
          statusEl.textContent = "Sending...";
          statusEl.style.color = "var(--cyan-hero)";
        }
        const params = {
          name: document.getElementById("name")?.value || "",
          email: document.getElementById("email")?.value || "",
          subject: document.getElementById("subject")?.value || "",
          message: document.getElementById("message")?.value || "",
          title: "Portfolio Contact Form Submission",
          time: new Date().toLocaleString()
        };
        emailjs.send("service_w9ju76l", "template_fehnk2f", params)
          .then(() => {
            if (statusEl) {
              statusEl.textContent = "Message sent successfully!";
              statusEl.style.color = "var(--cyan-hero)";
            }
            contactForm.reset();
          })
          .catch((err) => {
            if (statusEl) {
              statusEl.textContent = "Failed to send. Please try again.";
              statusEl.style.color = "#f87171";
            }
            console.error("EmailJS error:", err);
          });
      });
    }
  }

  /* ===============================
     THEME TOGGLE (old portfolio: switch below navbar)
     =============================== */
  const themeCheckbox = document.getElementById("themeToggleInput");
  if (themeCheckbox) {
    if (localStorage.getItem("theme") === "light") {
      document.body.classList.add("light");
      themeCheckbox.checked = true;
    }
    themeCheckbox.addEventListener("change", () => {
      if (themeCheckbox.checked) {
        document.body.classList.add("light");
        localStorage.setItem("theme", "light");
      } else {
        document.body.classList.remove("light");
        localStorage.setItem("theme", "dark");
      }
    });
  }


  // Skills & Tools animation
  const toolItems = document.querySelectorAll(".tool-item");

  const toolObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("show");
          }, index * 120);
        }
      });
    },
    { threshold: 0.2 }
  );

  toolItems.forEach(item => toolObserver.observe(item));




  /* ===============================
   SKILLS ANIMATION (ONCE)
   =============================== */
  const skillsSection = document.querySelector("#skills");
  const skillBars = document.querySelectorAll(".fill");

  const skillsObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          skillBars.forEach(bar => {
            bar.style.width = bar.dataset.width + "%";
          });
          skillsObserver.disconnect(); // run once
        }
      });
    },
    { threshold: 0.3 }
  );

  if (skillsSection) {
    skillsObserver.observe(skillsSection);
  }


  const radarCanvas = document.getElementById("skillRadarChart");

  if (radarCanvas) {
    new Chart(radarCanvas, {
      type: "radar",
      data: {
        labels: [
          "Programming",
          "Data Analytics",
          "Data Visualization",
          "Machine Learning",
          "AI",
          "Data Science"
        ],
        datasets: [
          {
            label: "Proficiency (%)",
            data: [90, 85, 87, 83, 80, 88],
            fill: true,
            backgroundColor: "rgba(45, 212, 191, 0.18)",
            borderColor: "#2dd4bf",
            pointBackgroundColor: "#2dd4bf",
            pointBorderColor: "#ffffff",
            pointHoverBackgroundColor: "#ffffff",
            pointHoverBorderColor: "#2dd4bf"
          }
        ]
      },
      options: {
        responsive: true,
        scales: {
          r: {
            suggestedMin: 0,
            suggestedMax: 100,
            angleLines: {
              color: "rgba(34, 211, 238, 0.25)"
            },
            grid: {
              color: "rgba(34, 211, 238, 0.25)"
            },
            pointLabels: {
              color: getComputedStyle(document.body)
                .getPropertyValue("--blue-soft"),
              font: { size: 12 }
            },
            ticks: {
              display: false
            }
          }
        },
        plugins: {
          legend: {
            labels: {
              color: getComputedStyle(document.body)
                .getPropertyValue("--blue-soft")
            }
          }
        }
      }
    });
  }

  // ===============================
  // SKILL TAG ANIMATION (OLD STYLE)
  // ===============================


  gsap.utils.toArray(".skill-tag").forEach((tag, i) => {
    gsap.from(tag, {
      scrollTrigger: {
        trigger: tag,
        start: "top 85%",
      },
      duration: 0.8,
      x: i % 2 === 0 ? -40 : 40,
      opacity: 0,
      scale: 0.9,
      delay: i * 0.08,
      ease: "back.out(1.6)",
    });
  });


  gsap.to(".skill-tag", {
    y: -4,
    duration: 2,
    ease: "sine.inOut",
    stagger: {
      each: 0.2,
      yoyo: true,
      repeat: -1
    }
  });

  /* Timeline (Experience) scroll animation */
  gsap.utils.toArray(".timeline-item").forEach((item, i) => {
    gsap.from(item, {
      scrollTrigger: { trigger: item, start: "top 88%" },
      duration: 0.8,
      y: 50,
      opacity: 0,
      delay: i * 0.12,
      ease: "power2.out"
    });
  });

  /* ===============================
     CHATBOT (old portfolio: resumeInfo, botType, Enter only)
     =============================== */
  const chatbotBtn = document.getElementById("chatbotBtn");
  const chatWindow = document.getElementById("chatWindow");
  const closeChat = document.getElementById("closeChat");
  const chatContent = document.getElementById("chatContent");
  const chatInput = document.getElementById("chatInput");

  const resumeInfo = {
    name: "Ramsundar B",
    skills: "Python, SQL, Power BI, Data Analysis",
    education: "BE-CSE (Sathyabama)",
    experience: "Hands on projects",
    mail_id: "ramsundar3773@gmail.com",
    about: "Hi! I'm Ramsundar, passionate about Data Analysis, DS, and AI. I enjoy building projects that turn data into insights."
  };

  /* Tooltip Element */
  const chatTooltip = document.getElementById("chatTooltip");

  if (chatbotBtn) chatbotBtn.onclick = () => {
    chatWindow.classList.remove("hidden");
    if (chatTooltip) chatTooltip.classList.add("hidden");
    // chatWindow.style.display = "flex"; // Handled by CSS
  };
  if (closeChat) closeChat.onclick = () => {
    chatWindow.classList.add("hidden");
    if (chatTooltip) chatTooltip.classList.remove("hidden");
    // chatWindow.style.display = "none"; // Handled by CSS
  };

  function botType(message) {
    const typingDiv = document.createElement("div");
    typingDiv.className = "botMsg";
    typingDiv.innerHTML = "<span class=\"typing\">⌛...</span>";
    chatContent.appendChild(typingDiv);
    chatContent.scrollTop = chatContent.scrollHeight;
    setTimeout(() => {
      typingDiv.remove();
      const botMsg = document.createElement("div");
      botMsg.className = "botMsg";
      botMsg.textContent = message;
      chatContent.appendChild(botMsg);
      chatContent.scrollTop = chatContent.scrollHeight;
    }, 1200);
  }

  if (chatInput) {
    chatInput.addEventListener("keypress", function (e) {
      if (e.key === "Enter" && chatInput.value.trim() !== "") {
        const query = chatInput.value.toLowerCase();
        const userMsg = document.createElement("div");
        userMsg.className = "userMsg";
        userMsg.textContent = chatInput.value;
        chatContent.appendChild(userMsg);
        let botReply = "Try keywords: name, skills, education, experience, about, mail_id.";
        if (query.includes("name")) botReply = "Name: " + resumeInfo.name;
        else if (query.includes("skill")) botReply = "Skills: " + resumeInfo.skills;
        else if (query.includes("education")) botReply = "Education: " + resumeInfo.education;
        else if (query.includes("experience")) botReply = "Experience: " + resumeInfo.experience;
        else if (query.includes("about")) botReply = resumeInfo.about;
        else if (query.includes("mail") || query.includes("phoneno")) botReply = resumeInfo.mail_id;
        botType(botReply);
        chatInput.value = "";
      }
    });
  }

  /* ===============================
     SCROLL-SYNCED LADDER CLIMBER
     =============================== */
  const climber = document.getElementById("scrollClimber");
  const eduColumn = document.getElementById("eduColumn");
  const speechBubble = document.getElementById("climberSpeech");

  if (climber && eduColumn && speechBubble) {
    gsap.registerPlugin(ScrollTrigger);

    // Timeline for the climber's movement
    const climberTl = gsap.timeline({
      scrollTrigger: {
        trigger: eduColumn,
        start: "top 65%", // Start when top of column enters
        end: "bottom 75%", // End when bottom of column clears
        scrub: 1, // Smoothly sync with scroll
      }
    });

    // Move climber from bottom (90%) to top (10%)
    climberTl.to(climber, {
      top: "10%",
      ease: "none"
    });

    // Speech bubble reveal timeline (staggered)
    gsap.to(speechBubble, {
      opacity: 1,
      scale: 1,
      scrollTrigger: {
        trigger: eduColumn,
        start: "75% center", // Appear when scrolly is near the end
        toggleActions: "play reverse play reverse"
      }
    });

    // Sub-animations for limbs (Step/Sway)
    // We use a constant loop for simpler "moving" effect
    const limbs = climber.querySelectorAll(".leg-l, .leg-r, .arm-l, .arm-r");
    limbs.forEach((limb, i) => {
      gsap.to(limb, {
        y: i % 2 === 0 ? -4 : 4,
        duration: 0.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    });
  }


  /* ===============================
     nav bar - Active state on scroll
     =============================== */
  document.querySelectorAll('.navbar-nav .nav-link')
    .forEach(link => {
      link.addEventListener('click', () => {
        const menu = document.getElementById('navbarNav');
        if (menu && menu.classList.contains('show')) {
          new bootstrap.Collapse(menu).hide();
        }
      });
    });

  // Update active nav link on scroll
  function updateActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.pageYOffset >= sectionTop - 200) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', updateActiveNav);
  updateActiveNav(); // Initial call



  /* ===============================
     PARTICLES.JS – HERO BACKGROUND
     =============================== */
  particlesJS("particles-js", {
    particles: {
      number: { value: 100 },
      color: { value: "#2dd4bf" },
      shape: { type: "circle" },
      opacity: { value: 0.50 },
      size: { value: 3.8 },
      line_linked: {
        enable: true,
        distance: 140,
        color: "#2dd4bf",
        opacity: 0.2,
        width: 1,
      },
      move: {
        enable: true,
        speed: 1.8,
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

  /* FOOTER PARTICLES - Replicate Hero style */
  if (document.getElementById("particles-footer")) {
    particlesJS("particles-footer", {
      particles: {
        number: { value: 80 },
        color: { value: "#2dd4bf" },
        shape: { type: "circle" },
        opacity: { value: 0.50 },
        size: { value: 3.8 },
        line_linked: {
          enable: true,
          distance: 140,
          color: "#2dd4bf",
          opacity: 0.2,
          width: 1,
        },
        move: {
          enable: true,
          speed: 1.8,
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
  }

  /* ===============================
     GSAP – HERO & SCROLL ANIMATIONS
     =============================== */
  gsap.registerPlugin(ScrollTrigger);

  /* HERO INTRO (TIMELINE) */
  const heroTl = gsap.timeline({
    defaults: {
      ease: "power4.out",
      duration: 1.2,
    },
  });

  heroTl
    .from(".hello", {
      y: 30,
      opacity: 0,
    })
    .from(".hero-title", {
      y: 60,
      opacity: 0,
    }, "-=0.6")
    .from(".hero-skill", {
      y: 40,
      opacity: 0,
    }, "-=0.6")
    .from(".hero-desc", {
      y: 30,
      opacity: 0,
    }, "-=0.5")
    .from(".hero-buttons a, .hero-buttons button", {
      y: 20,
      opacity: 0,
      stagger: 0.1,
    }, "-=1.1")
    .from(".social-icon", {
      y: 15,
      opacity: 0,
      stagger: 0.1,
    }, "-=0.4");





  /* ===============================
     FILTER (OLD PORTFOLIO STYLE)
     =============================== */
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

  /* ===============================
     GSAP – OLD PORTFOLIO FADE UP
     =============================== */
  gsap.registerPlugin(ScrollTrigger);

  // Card Animations (OLD PORTFOLIO STYLE)
  // Wait for layout, images, and fonts to fully load
  window.addEventListener("load", () => {
    // Wait for fonts to load
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => {
        // Wait for images to load
        const images = document.querySelectorAll("img");
        let imagesLoaded = 0;
        const totalImages = images.length;

        if (totalImages === 0) {
          initCardAnimations();
        } else {
          images.forEach((img) => {
            if (img.complete) {
              imagesLoaded++;
              if (imagesLoaded === totalImages) {
                initCardAnimations();
              }
            } else {
              img.addEventListener("load", () => {
                imagesLoaded++;
                if (imagesLoaded === totalImages) {
                  initCardAnimations();
                }
              });
              img.addEventListener("error", () => {
                imagesLoaded++;
                if (imagesLoaded === totalImages) {
                  initCardAnimations();
                }
              });
            }
          });
        }
      });
    } else {
      // Fallback if fonts API not available
      setTimeout(() => {
        initCardAnimations();
      }, 100);
    }
  });

  function initCardAnimations() {
    // Wait for next frame to ensure layout is complete
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        gsap.utils.toArray(".card").forEach((card) => {
          gsap.from(card, {
            scrollTrigger: card,
            duration: 1,
            y: 100,
            opacity: 0,
            ease: "power4.out",
          });
        });
        ScrollTrigger.refresh();
      });
    });
  }

  /* ===============================
     PROJECT INFO MODAL LOGIC
     =============================== */
  const projectModal = document.getElementById('projectModal');
  const modalClose = document.getElementById('modalClose');
  const infoButtons = document.querySelectorAll('.btn-info-circle');

  // Modal Elements
  const mTitle = document.getElementById('modalTitle');
  const mDescription = document.getElementById('modalDescription');
  const mTech = document.getElementById('modalTech');
  const mFeatures = document.getElementById('modalFeatures');
  const mCodeBtn = document.getElementById('modalCodeBtn');

  function openProjectModal(btn) {
    const data = btn.dataset;

    // Set Text Content
    mTitle.textContent = data.project;
    mDescription.textContent = data.description;

    // Set Tech Badges
    mTech.innerHTML = '';
    const techArray = data.tech.split(',').map(t => t.trim());
    techArray.forEach(tech => {
      const span = document.createElement('span');
      span.className = 'modal-tech-tag';
      span.textContent = tech;
      mTech.appendChild(span);
    });

    // Set Features
    mFeatures.innerHTML = '';
    const featuresArray = data.features.split(';').map(f => f.trim());
    featuresArray.forEach(feature => {
      const li = document.createElement('li');
      li.className = 'feature-item';
      li.innerHTML = `<i class="fas fa-check-circle"></i> ${feature}`;
      mFeatures.appendChild(li);
    });

    // Set Links
    mCodeBtn.href = data.code;

    // Show/Hide Code button if # is provided
    mCodeBtn.style.display = (data.code === '#' || !data.code) ? 'none' : 'inline-flex';

    // Activate Modal
    projectModal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent scroll

    // GSAP Animation for modal content
    gsap.from('.modal-glass-content', {
      y: 50,
      opacity: 0,
      duration: 0.5,
      ease: "power3.out"
    });
  }

  function closeProjectModal() {
    projectModal.classList.remove('active');
    document.body.style.overflow = ''; // Restore scroll
  }

  infoButtons.forEach(btn => {
    btn.addEventListener('click', () => openProjectModal(btn));
  });

  if (modalClose) {
    modalClose.addEventListener('click', closeProjectModal);
  }

  // Close on background click
  projectModal.addEventListener('click', (e) => {
    if (e.target === projectModal) {
      closeProjectModal();
    }
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && projectModal.classList.contains('active')) {
      closeProjectModal();
    }
  });

  /* ===============================
     IN-APP BROWSER DETECTION & BREAKOUT
     =============================== */
  function detectInApp() {
    const ua = navigator.userAgent || navigator.vendor || window.opera;
    const isInApp = (ua.indexOf("Instagram") > -1) ||
      (ua.indexOf("WhatsApp") > -1) ||
      (ua.indexOf("FBAN") > -1) ||
      (ua.indexOf("FBAV") > -1);

    if (isInApp) {
      const banner = document.getElementById("inAppBanner");
      if (banner) banner.classList.remove("hidden");
    }
  }

  const breakoutBtn = document.getElementById("breakoutBtn");
  if (breakoutBtn) {
    breakoutBtn.addEventListener("click", () => {
      const url = window.location.href.replace(/^https?:\/\//, "");
      const isAndroid = /Android/i.test(navigator.userAgent);

      if (isAndroid) {
        // Android Intent to open Chrome
        window.location.href = `intent://${url}#Intent;scheme=https;package=com.android.chrome;end`;
      } else {
        // For iOS/Other, we just show a tip or try a new tab (iOS is restricted)
        alert("Tap the three dots (⋮) or the 'browser' icon and select 'Open in Safari' or 'Open in Browser'.");
      }
    });
  }

  detectInApp();

});

/* ===============================
   PROJECT VIDEO (GLOBAL SCOPE)
   =============================== */
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
