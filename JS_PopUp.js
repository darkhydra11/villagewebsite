window.onload = function() {
    const notification = document.getElementById('notification');
    notification.style.display = 'block'; // Show the notification
    notification.classList.add('flashing'); // Add flashing effect

    const closeButton = document.getElementById('close-btn');
    closeButton.onclick = function() {
        notification.style.display = 'none'; // Hide the notification when close button is clicked
    };
};