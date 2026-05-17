(function() {
    emailjs.init("dNtXuMMDXe4pY0DeJ");
})();

document.getElementById("main-form").addEventListener("submit", function(e) {
    e.preventDefault();

    const statusMessage = document.getElementById("statusMessage");
    const button = document.getElementById("submit-btn");
    const originalText = button.innerHTML;

    // Show spinner
    button.disabled = true;
    button.innerHTML = '<div class="spinner"></div>';

    emailjs.sendForm("service_lrcrsc8", "template_txr160n", this)
    .then(() => {
        statusMessage.classList.remove("hidden");
        statusMessage.innerText = "Message sent successfully!";
        statusMessage.style.color = "#22c55e";

        // Restore button
        button.disabled = false;
        button.innerHTML = originalText;
        this.reset();

    }).catch((error) => {
        statusMessage.classList.remove("hidden");
        statusMessage.innerText = "Failed to send message.";
        statusMessage.style.color = "#ef4444";

        // Restore button
        button.disabled = false;
        button.innerHTML = originalText;
        console.error(error);
    });
});