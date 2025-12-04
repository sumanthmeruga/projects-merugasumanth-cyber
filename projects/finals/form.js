document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contactForm');
  const message = document.getElementById('message');

  if (!form) return; // Only run if form exists on page

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('fname').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const favplace = document.getElementById('favplace').value.trim();
    const agree = document.getElementById('agree').checked;

    if (!name || !email || !phone || !favplace || !agree) {
      message.style.color = 'red';
      message.textContent = 'Please complete all fields and agree to the terms.';
      return;
    }

    if (!/^\d{10}$/.test(phone)) {
      message.style.color = 'red';
      message.textContent = 'Phone number must be 10 digits.';
      return;
    }

    message.style.color = 'green';
    message.innerHTML = `
      Thank you, <strong>${name}</strong>!<br>
      We have received your submission:<br>
      Email: ${email}<br>
      Phone: ${phone}<br>
      Favorite Place: ${favplace}
    `;

    form.reset();
  });
});
