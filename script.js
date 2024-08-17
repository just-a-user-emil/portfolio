

// navbar toggle
document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuOpenIcon = document.getElementById('menu-open-icon');
  const menuCloseIcon = document.getElementById('menu-close-icon');


  mobileMenu.classList.add('hidden');
  hamburger.addEventListener('click', function() {
    if (mobileMenu.classList.contains('hidden')) {
      mobileMenu.classList.remove('hidden');
      menuOpenIcon.classList.add('hidden');
      menuCloseIcon.classList.remove('hidden');
    } else {
      mobileMenu.classList.add('hidden');
      menuOpenIcon.classList.remove('hidden');
      menuCloseIcon.classList.add('hidden');
    }
  });
});


// Navlink click underine
document.addEventListener('DOMContentLoaded', function () {
  const links = document.querySelectorAll('.navbar-link');

  links.forEach(link => {
    link.addEventListener('click', function () {
      links.forEach(l => l.classList.remove('active')); // Remove 'active' from all links
      this.classList.add('active'); // Add 'active' to the clicked link
    });
  });
});



  
      // JavaScript to handle active link on scroll
      const sections = document.querySelectorAll('section[id]');
      const navLinks = document.querySelectorAll('.navbar-link');

      function setActiveLink() {
          let index = sections.length;
          while (--index && window.scrollY + 5 < sections[index].offsetTop) {}
          navLinks.forEach((link) => link.classList.remove('active'));
          navLinks[index].classList.add('active');
      }

      window.addEventListener('scroll', setActiveLink);
      setActiveLink();  // Initial check to set active link on page load
  
      emailjs.init("service_gccnfgj"); // Replace with your EmailJS user ID

document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const form = event.target;

  emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form)
      .then(function(response) {
          alert('Message sent successfully!');
          form.reset();
      }, function(error) {
          alert('Failed to send message. Please try again.');
          console.error('Error:', error);
      });
});



document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission

  // Get form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('textarea').value;

  // Basic validation
  if (!name || !email || !message) {
      alert('Please fill out all fields.');
      return;
  }

  // Create the mailto link
  const mailtoLink = `mailto:emilbinoy06@gmail.com?subject=Contact Form Submission from ${encodeURIComponent(name)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`)}`;

  // Open the mail client
  window.location.href = mailtoLink;
});
