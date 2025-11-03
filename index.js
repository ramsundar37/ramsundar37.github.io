
      // Initialize AOS animation
      AOS.init({
        duration: 1000,
        once: true
      });


const chatbotBtn = document.getElementById('chatbotBtn');
const chatWindow = document.getElementById('chatWindow');
const closeChat = document.getElementById('closeChat');
const chatContent = document.getElementById('chatContent');
const chatInput = document.getElementById('chatInput');

const resumeInfo = {
  name: "Ramsundar B",
  skills: "Python, SQL, Power BI, Data Analysis",
  education: "BE-CSE (Sathayabama)",
  experience: "Hand on projects",
  phoneno:"9944612509",
  mail_id:"ramsundar3773@gmail.com",
  about : "Hi! I'm Ramsundar, passionate about Data Analysis ,DS ,and AI. I enjoy building projects that turn data into insights."
};

// Open / close chatbot
chatbotBtn.onclick = () => chatWindow.style.display = 'flex';
closeChat.onclick = () => chatWindow.style.display = 'none';

// Typing effect
function botType(message) {
  const typingDiv = document.createElement('div');
  typingDiv.className = 'botMsg';
  typingDiv.innerHTML = `<span class="typing">⌛...</span>`;
  chatContent.appendChild(typingDiv);
  chatContent.scrollTop = chatContent.scrollHeight;

  setTimeout(() => {
    typingDiv.remove();
    const botMsg = document.createElement('div');
    botMsg.className = 'botMsg';
    botMsg.textContent = message;
    chatContent.appendChild(botMsg);
    chatContent.scrollTop = chatContent.scrollHeight;
  }, 1200);
}

// Handle user input
chatInput.addEventListener('keypress', function(e) {
  if(e.key === 'Enter' && chatInput.value.trim() !== "") {
    const query = chatInput.value.toLowerCase();

    // Show user message
    const userMsg = document.createElement('div');
    userMsg.className = 'userMsg';
    userMsg.textContent = chatInput.value;
    chatContent.appendChild(userMsg);

    // Determine bot reply
    let botReply = "Try keywords: name, skills, education, experience, about.";
    if(query.includes("name")) botReply = "Name: " + resumeInfo.name;
    else if(query.includes("skill")) botReply = "Skills: " + resumeInfo.skills;
    else if(query.includes("education")) botReply = "Education: " + resumeInfo.education;
    else if(query.includes("experience")) botReply = "Experience: " + resumeInfo.experience;
    else if(query.includes("about")) botReply = resumeInfo.about;
    else if(query.includes("mailid")) botReply = resumeInfo.mail_id;
    else if(query.includes("phoneno")) botReply = resumeInfo.phoneno;

    // Show typing effect then reply
    botType(botReply);

    chatInput.value = '';
  }
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

      // Particles.js Configuration  animation in 1st page
      particlesJS("particles-js", {
        particles: {
          number: { value: 50 },
          color: { value: "#64ffda" },         // ← THIS CONTROLS DOT COLOR
          shape: { type: "circle" },
          opacity: { value: 0.5 },
          size: { value: 3 },
          move: {                               // ← THIS BLOCK CONTROLS THE LINES BETWEEN DOTS
            enable: true,
            speed: 2,
            direction: "none",                  // ← Direction of movement
            random: false,
            straight: false,
            out_mode: "out",                   // ← What happens when dot reaches canvas edge
            bounce: false,
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: { enable: true, mode: "repulse" },     // ← Mouse hover effect
            resize: true,
          },
        },
        retina_detect: true,
      });


  


// Register the ScrollTrigger plugin (needed for scroll-based animations)
gsap.registerPlugin(ScrollTrigger);

// Animate the Hero Heading (h1)
gsap.from(".hero h1", {
  duration: 1.5,       // Animation lasts 1.5 seconds
  y: 100,              // Start 100px below its final position
  opacity: 0,          // Start invisible (fade in)
  ease: "power4.out",  // Smooth easing (fast start, slow end)
});

// Animate the Hero Paragraph (p) below the heading
gsap.from(".hero p", {
  duration: 1.5,       // Animation lasts 1.5 seconds
  y: 50,               // Start 50px below its final position
  opacity: 0,          // Start invisible (fade in)
  delay: 0.3,          // Delay 0.3s after heading animation starts
  ease: "power4.out",  // Same easing for smooth effect
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
      gtag('config', 'G-RTZGXLZH53'); // Your GA4 Measurement ID

// Radar Chart (Skill Overview)
const ctxRadar = document.getElementById('skillRadarChart');

if (ctxRadar) {
  new Chart(ctxRadar, {
    type: 'radar',
    data: {
      labels: ['Programming and database', 'Data Analysis', 'Visualization', 'ML/DL', 'Data Science', 'AI'],
      datasets: [{
        label: 'Proficiency (%)',
        data: [90, 85, 80, 70, 75, 90],
        fill: true,
        backgroundColor: 'rgba(100, 255, 218, 0.2)',
        borderColor: '#64ffda',
        pointBackgroundColor: '#64ffda',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#64ffda'
      }]
    },
    options: {
      responsive: true,
      scales: {
        r: {
          angleLines: { color: 'rgba(100,255,218,0.2)' },
          grid: { color: 'rgba(100,255,218,0.2)' },
          suggestedMin: 0,
          suggestedMax: 100,
          pointLabels: { color: getComputedStyle(document.body).getPropertyValue('--text-primary'), font: { size: 13 } },
          ticks: { display: false }
        }
      },
      plugins: {
        legend: {
          labels: { color: getComputedStyle(document.body).getPropertyValue('--text-primary') }
        }
      }
    }
  });
}




// Light/Dark Theme Toggle Switch
const themeCheckbox = document.getElementById("themeToggleInput");
const body = document.body;

// Load saved theme from localStorage
if (localStorage.getItem("theme") === "light") {
  body.classList.add("light-theme");
  themeCheckbox.checked = true;
}

// Toggle theme on change
themeCheckbox.addEventListener("change", () => {
  if (themeCheckbox.checked) {
    body.classList.add("light-theme");
    localStorage.setItem("theme", "light");
  } else {
    body.classList.remove("light-theme");
    localStorage.setItem("theme", "dark");
  }
});
