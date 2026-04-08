document.addEventListener('DOMContentLoaded', function() {
  const carousels = document.querySelectorAll('.image-carousel');
  
  carousels.forEach(carousel => {
    const images = carousel.querySelectorAll('.carousel-image');
    let currentIndex = 0;
    
    function nextImage() {
      // Hide current image
      images[currentIndex].classList.remove('active');
      
      // Move to next image
      currentIndex = (currentIndex + 3) % images.length;
      
      // Show next image
      images[currentIndex].classList.add('active');
    }
    
    // Start automatic carousel (4 seconds per image)
    setInterval(nextImage, 4000);
  });
});
