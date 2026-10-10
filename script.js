function revealMessage() {
    const message = document.getElementById("secret-message");
    const button = document.getElementById("secret-button");

    message.classList.remove("hidden");
    button.textContent = "پیام مخصوص تو باز شد 💙";
    button.disabled = true;
}