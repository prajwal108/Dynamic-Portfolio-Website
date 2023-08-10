// Capture the form submit event
document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from actually submitting

    // Get form data
    const name = document.getElementById("form_name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const occasion = document.getElementById("form_occasion").value;
    const date = document.getElementById("date-picker").value;
    const time = document.getElementById("time-picker").value;

    // Construct the WhatsApp message
    const message = `Name: ${name}%0AEmail: ${email}%0APhone: ${phone}%0AOccasion: ${occasion}%0ADate: ${date}%0ATime: ${time}`;

    // Construct the WhatsApp URL
    const whatsappUrl = `https://wa.me/9049058976?text=${message}`;

    // Open the WhatsApp link in a new tab/window
    window.open(whatsappUrl, "_blank");
  });
