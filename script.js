
// script.js
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  const content = document.getElementById('content');
  
  loader.style.display = 'none';
  content.style.display = 'block';
});


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

function sendMail() {
  var name = encodeURIComponent(document.getElementById('name').value);
  var email = encodeURIComponent(document.getElementById('email').value);
  var message = encodeURIComponent(document.getElementById('textarea').value);
  var subject = "Message from " + name;
  var body = "Name: " + name + "%0D%0AEmail: " + email + "%0D%0AMessage: " + message;

  window.location.href = "mailto:emilbinoy06@gmail.com?subject=" + encodeURIComponent(subject) + "&body=" + body;
}

var TxtType = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
  this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
  this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
  delta = this.period;
  this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
  this.isDeleting = false;
  this.loopNum++;
  delta = 500;
  }

  setTimeout(function() {
  that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('typewrite');
  for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-type');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period);
      }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
  document.body.appendChild(css);
};
function sendMail() {
  var name = encodeURIComponent(document.getElementById('name').value);
  var email = encodeURIComponent(document.getElementById('email').value);
  var message = encodeURIComponent(document.getElementById('textarea').value);
  var subject = "Message from " + name;
  var body = "Name: " + name + "%0D%0AEmail: " + email + "%0D%0AMessage: " + message;

  window.location.href = "mailto:emilbinoy06@gmail.com?subject=" + encodeURIComponent(subject) + "&body=" + body;
}