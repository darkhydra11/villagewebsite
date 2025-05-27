  (function() {
    const slides = document.querySelector('.slides');
    const dots = document.querySelectorAll('.dot');
    const totalSlides = dots.length;
    let currentIndex = 0;
    let intervalId;
    function goToSlide(index) {
      if(index < 0) index = totalSlides - 1;
      else if(index >= totalSlides) index = 0;
      slides.style.transform = 'translateX(' + (-index * 100) + '%)';
      dots.forEach(dot => dot.classList.remove('active'));
      dots[index].classList.add('active');
      currentIndex = index;
    }
    dots.forEach((dot, idx) => {
      dot.addEventListener('click', () => {
        goToSlide(idx);
        resetInterval();
      });
    });
    function nextSlide() {
      goToSlide(currentIndex + 1);
    }
    function resetInterval() {
      clearInterval(intervalId);
      intervalId = setInterval(nextSlide, 4000);
    }
    // Initialize slideshow auto cycle
    intervalId = setInterval(nextSlide, 4000);

     // Show Earnings button click handler (currently just alerts a fixed message)
    document.getElementById('showEarningsBtn').addEventListener('click', () => {
      alert("Earnings information will be available soon.");
    });
  })();