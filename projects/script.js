// script.js — form handling + optional small helpers
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      // show success and hide form
      const success = document.getElementById('formSuccess');
      const name = form.querySelector('input[name="fullname"]').value || 'Guest';
      success.innerHTML = `<strong>Thank you, ${escapeHtml(name)}.</strong> We received your message and will reply to the email you provided.`;
      success.classList.remove('hidden');
      form.classList.add('hidden');
      form.reset();
    });
  }
});

// Prevent simple XSS when injecting name into page
function escapeHtml(str) {
  return String(str).replace(/[&<>"'\/]/g, function (s) {
    return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;', '/': '&#x2F;' })[s];
  });
}
