        const button = document.getElementById('toggleButton');
        const container = document.getElementById('videoContainer');
        const video = document.getElementById('videoElement');
        // Use click/tap to toggle expansion for all devices
        button.addEventListener('click', function() {
            container.classList.toggle('expanded');
            if (container.classList.contains('expanded')) {
                // Autoplay when expanded
                video.play();
            } else {
                // Pause and reset when collapsed
                video.pause();
                video.currentTime = 0;
            }
        });