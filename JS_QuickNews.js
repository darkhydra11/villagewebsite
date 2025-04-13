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

            // Append each news item to the container
            newsItems.forEach(item => {
                const clonedItem = item.cloneNode(true);
                newsContainer.appendChild(clonedItem);
            });

            // Create and append the button after all news items
            const newsButton = document.createElement('a');
            newsButton.textContent = 'Read More'; // Set button text
            newsButton.href = 'news.html'; // Set the href to the news page
            
            // Inline CSS for the news button
            newsButton.style.display = 'inline-block'; // Make the button a block element
            newsButton.style.width = '100%'; // Full width of the parent
            newsButton.style.padding = '10px'; // Padding for the button
            newsButton.style.backgroundColor = '#323232'; // Button background color
            newsButton.style.color = 'white'; // Button text color
            newsButton.style.textAlign = 'center'; // Center text
            newsButton.style.textDecoration = 'none'; // Remove underline
            newsButton.style.borderRadius = '5px'; // Rounded corners
            newsButton.style.transition = 'background-color 0.3s'; // Transition for hover effect

            // Add hover effect
            newsButton.addEventListener('mouseover', () => {
                newsButton.style.backgroundColor = '#383838'; // Darker background on hover
            });

            newsButton.addEventListener('mouseout', () => {
                newsButton.style.backgroundColor = '#323232'; // Reset background color
            });

            newsContainer.appendChild(newsButton);
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
            const eventsButton = document.createElement('a');
            eventsButton.textContent = 'View Events'; // Set button text
            eventsButton.href = 'whatson.html'; // Set the href to the events page
            
            // Inline CSS for the events button
            eventsButton.style.display = 'inline-block'; // Make the button a block element
            eventsButton.style.width = '100%'; // Full width of the parent
            eventsButton.style.padding = '10px'; // Padding for the button
            eventsButton.style.backgroundColor = '#323232'; // Button background color
            eventsButton.style.color = 'white'; // Button text color
            eventsButton.style.textAlign = 'center'; // Center text
            eventsButton.style.textDecoration = 'none'; // Remove underline
            eventsButton.style.borderRadius = '5px'; // Rounded corners
            eventsButton.style.transition = 'background-color 0.3s'; // Transition for hover effect

            // Add hover effect
            eventsButton.addEventListener('mouseover', () => {
                eventsButton.style.backgroundColor = '#383838'; // Darker background on hover
            });

            eventsButton.addEventListener('mouseout', () => {
                eventsButton.style.backgroundColor = '#323232'; // Reset background color
            });

            eventsContainer.appendChild(eventsButton); // Append the button to the container
        })
        .catch(error => {
            console.error('Error fetching events:', error);
        });
});