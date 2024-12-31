document.addEventListener("DOMContentLoaded", function() {
    fetch('JSON_News.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Populate the ticker
            const ticker = document.getElementById('ticker');
            ticker.innerHTML = data.tickerNews.join(' &nbsp; | &nbsp; ');

            // Create containers for news articles
            const newsListWithImage = document.createElement('div');
            newsListWithImage.classList.add('news-column');
            const newsListWithoutImage = document.createElement('div');
            newsListWithoutImage.classList.add('news-column');

            // Populate the other news
            data.otherNews.forEach(news => {
                const listItem = document.createElement('li');
                listItem.innerHTML = `<a href="${news.link}">${news.title}</a><p>${news.description}</p>`;

                if (news.image) {
                    const img = document.createElement('img');
                    img.src = news.image; // Use the local image path
                    listItem.prepend(img); // Add image to the beginning of the list item
                    newsListWithImage.appendChild(listItem);
                } else {
                    newsListWithoutImage.appendChild(listItem);
                }
            });

            // Append the columns to the main news section
            const otherNewsSection = document.querySelector('.other-news');
            otherNewsSection.appendChild(newsListWithImage);
            otherNewsSection.appendChild(newsListWithoutImage);
        })
        .catch(error => console.error('Error fetching news:', error));
});