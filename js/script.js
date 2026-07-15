// Fieldstone National Bank — shared front-end behavior
// Everything here is presentational only: no data leaves the browser.

document.addEventListener('DOMContentLoaded', function () {

  /* Mobile nav toggle -------------------------------------------------- */
  var toggle = document.querySelector('.nav-toggle');
  var mobileNav = document.querySelector('.mobile-nav');
  if (toggle && mobileNav) {
    toggle.addEventListener('click', function () {
      var isOpen = mobileNav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }

  /* Password show/hide toggles ------------------------------------------ */
  document.querySelectorAll('.pw-toggle').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var targetId = btn.getAttribute('data-target');
      var input = document.getElementById(targetId);
      if (!input) return;
      var showing = input.type === 'text';
      input.type = showing ? 'password' : 'text';
      btn.textContent = showing ? 'Show' : 'Hide';
      btn.setAttribute('aria-label', showing ? 'Show password' : 'Hide password');
    });
  });

  /* Demo-safe form submission -------------------------------------------
     Every form on the site is illustrative only. We prevent the default
     submit, show an inline confirmation, and never send data anywhere. */
  document.querySelectorAll('form[data-demo-form]').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var feedback = form.querySelector('.form-feedback');
      var confirmPw = form.querySelector('#confirmPassword');
      var newPw = form.querySelector('#newPassword');

      if (confirmPw && newPw && confirmPw.value !== newPw.value) {
        if (feedback) {
          feedback.textContent = 'Passwords do not match. Please re-enter them.';
          feedback.className = 'form-feedback show error';
        }
        confirmPw.focus();
        return;
      }

      if (feedback) {
        var message = form.getAttribute('data-success-message') || 'This is a demo — no information was submitted or stored.';
        feedback.textContent = message;
        feedback.className = 'form-feedback show success';
        feedback.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    });
  });

  /* Fade-in on scroll (respects reduced motion) --------------------------- */
  var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!prefersReduced && 'IntersectionObserver' in window) {
    var revealItems = document.querySelectorAll('[data-reveal]');
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    revealItems.forEach(function (el) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(16px)';
      el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      observer.observe(el);
    });
  }
});
