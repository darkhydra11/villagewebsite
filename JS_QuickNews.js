document.addEventListener('DOMContentLoaded', () => {
    // Fetch news items
    fetch('news.html')
        .then(response => response.text())
        .then(data => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(data, 'text/html');

            // Fetch news items
            const newsItems = doc.querySelectorAll('.news-item');
            const newsContainer = document.getElementById('news-container');

            newsItems.forEach(item => {
                const clonedItem = item.cloneNode(true);
                newsContainer.appendChild(clonedItem);

                // Create and append the button
                const button = document.createElement('button');
                button.textContent = 'Read More'; // Set button text
                button.type = 'button'; // Set button type
                button.classList.add('news-button'); // Optional: add a class for styling
                newsContainer.appendChild(button);
            });
        })
        .catch(error => {
            console.error('Error fetching news:', error);
        });

// Fetch events from whatson.html
fetch('whatson.html')
    .then(response => response.text())
    .then(data => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(data, 'text/html');

        // Fetch events
        const events = doc.querySelectorAll('.event'); // Select all event elements
        const eventsContainer = document.getElementById('events-container'); // Ensure this ID matches your HTML

        events.forEach(event => {
            const clonedEvent = event.cloneNode(true);
            eventsContainer.appendChild(clonedEvent);
        });

        // Create and append the button after all events have been added
        const button = document.createElement('button');
        button.textContent = 'View Events'; // Set button text
        button.type = 'button'; // Set button type
        button.classList.add('event-button'); // Optional: add a class for styling
        eventsContainer.appendChild(button); // Append the button to the container
    })
    .catch(error => {
        console.error('Error fetching events:', error);
    })});