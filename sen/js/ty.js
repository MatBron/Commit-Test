function resetForm() {
    document.getElementById("messageForm").reset();
}
document.getElementById("messageForm").addEventListener("submit", function (event) {
    event.preventDefault();
    sendMessage();

    setTimeout(function () {
        resetForm();
    }, 1000);
});

function sendMessage() {
    var message = document.querySelector("textarea[name='Message']").value;
    var thankYouMessage = "Thank you for contacting us! We will get back to you soon.";
    alert(thankYouMessage);
}