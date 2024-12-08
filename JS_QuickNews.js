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
                newsContainer.appendChild(item.cloneNode(true));
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
            const events = doc.querySelectorAll('.event');
            const eventsContainer = document.getElementById('events-container');

            events.forEach(event => {
                eventsContainer.appendChild(event.cloneNode(true));
            });
        })
        .catch(error => {
            console.error('Error fetching events:', error);
        });
});