document.addEventListener('DOMContentLoaded', () => {
    const socket = io();

    const messageForm = document.getElementById('message-form');
    const messageInput = document.getElementById('message-input');
    const chatMessages = document.getElementById('chat-messages');

    messageForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const message = messageInput.value.trim();

        if (message !== '') {
            socket.emit('chat message', message);
            messageInput.value = '';
        }
    });

    socket.on('chat message', (msg) => {
        displayMessage(msg);
    });

    function displayMessage(message) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message');
        messageElement.textContent = message;
        chatMessages.appendChild(messageElement);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
});
