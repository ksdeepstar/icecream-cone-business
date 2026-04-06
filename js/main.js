document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contactForm');
  const messageBox = document.getElementById('formMessage');

  if (!form) return;

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const phone = form.phone.value.trim();
    const subject = form.subject.value;
    const message = form.message.value.trim();

    if (!name || !email || !phone || !subject || !message) {
      showMessage('Please fill in all required fields.', 'error');
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      showMessage('Please enter a valid email address.', 'error');
      return;
    }

    const mailto = `mailto:products.sunny@gmail.com?subject=${encodeURIComponent(
      'Sunny Products - ' + subject
    )}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nCompany: ${form.company.value}\n\nMessage:\n${message}`
    )}`;

    showMessage('Thank you! Your email client will open shortly.', 'success');

    setTimeout(() => {
      window.location.href = mailto;
      form.reset();
    }, 800);
  });

  function showMessage(text, type) {
    messageBox.textContent = text;
    messageBox.className = `form-message ${type}`;
  }
});