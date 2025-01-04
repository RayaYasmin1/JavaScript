    const button = document.getElementById('magicButton');
        const output = document.getElementById('output');
document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('magicButton');
    const output = document.getElementById('output');

    button.addEventListener('click', () => {
        const messages = [
            "You are amazing!",
            "Keep up the great work!",
            "JavaScript is awesome!",
            "Coding is fun!",
            "Believe in yourself!"
        ];
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        output.textContent = randomMessage;
    });
});
