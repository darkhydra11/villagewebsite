window.onload = function() {
            // Show the popup when the window loads
            document.getElementById('popup').style.display = 'flex'; // Changed to 'flex' to center it
            
            // Get the <span> element that closes the popup
            var closeBtn = document.getElementById('close-btn');
            // When the user clicks on <span> (x), close the popup
            closeBtn.onclick = function() {
                document.getElementById('popup').style.display = 'none';
            }
            // When the user clicks anywhere outside of the popup, close it
            window.onclick = function(event) {
                var popup = document.getElementById('popup');
                if (event.target === popup) {
                    popup.style.display = 'none';
                }
            }
        }