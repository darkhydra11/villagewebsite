window.onload = function() {
    // Show the popup when the window loads
    document.getElementById('news-popup').style.display = 'block';
    
    // Get the <span> element that closes the popup
    var closeBtn = document.getElementById('close-btn');

    // When the user clicks on <span> (x), close the popup
    closeBtn.onclick = function() {
        document.getElementById('news-popup').style.display = 'none';
    }

    // When the user clicks anywhere outside of the popup, close it
    window.onclick = function(event) {
        var popup = document.getElementById('news-popup');
        if (event.target === popup) {
            popup.style.display = 'none';
        }
    }
}