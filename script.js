function orderFood(foodItem) {
    const message = `Hello, I would like to order ${foodItem}`;
    const phoneNumber = "+2348060888138"; // Replace with your WhatsApp number
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
}
const form = document.getElementById("contactForm");
const messageBox = document.getElementById("formMessage");

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name === "" || email === "" || message === "") {
            messageBox.textContent = "❌ Please fill in all fields.";
            messageBox.style.color = "red";
        } else {
            messageBox.textContent = "✅ Message sent successfully!";
            messageBox.style.color = "green";
            form.reset();
        }
    });
}
