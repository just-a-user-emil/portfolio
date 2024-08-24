

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

function sendMail() {
  var name = encodeURIComponent(document.getElementById('name').value);
  var email = encodeURIComponent(document.getElementById('email').value);
  var message = encodeURIComponent(document.getElementById('textarea').value);
  var subject = "Message from " + name;
  var body = "Name: " + name + "%0D%0AEmail: " + email + "%0D%0AMessage: " + message;

  window.location.href = "mailto:emilbinoy06@gmail.com?subject=" + encodeURIComponent(subject) + "&body=" + body;
}