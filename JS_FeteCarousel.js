const slidesWrapper = document.querySelector('.slides');
const slideItems = document.querySelectorAll('.slide');
const dotsContainer = document.querySelector('.dots-container');

let index = 0;
const total = slideItems.length;
const interval = 4000; // ms

// Clear existing dots (in case HTML had placeholders)
dotsContainer.innerHTML = "";

// Generate dots automatically
for (let i = 0; i < total; i++) {
  const dot = document.createElement('span');
  dot.classList.add('dot');
  if (i === 0) dot.classList.add('active');
  dot.setAttribute('aria-label', `Slide ${i + 1}`);
  dot.dataset.index = i;
  dotsContainer.appendChild(dot);
}

const dots = document.querySelectorAll('.dot');

function showSlide(i) {
  index = (i + total) % total;

  const slideWidth = document.querySelector('.slideshow').offsetWidth;

  slidesWrapper.style.transform = `translateX(-${index * slideWidth}px)`;

  dots.forEach((d, n) => d.classList.toggle('active', n === index));
}


dots.forEach(dot => {
  dot.addEventListener('click', () => {
    showSlide(parseInt(dot.dataset.index));
    restartAuto();
  });
});

let timer = setInterval(() => showSlide(index + 1), interval);

function restartAuto() {
  clearInterval(timer);
  timer = setInterval(() => showSlide(index + 1), interval);
}


/* --- Swipe Support --- */

let startX = 0;
let endX = 0;
const swipeThreshold = 50; // minimum px to count as a swipe

slidesWrapper.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
});

slidesWrapper.addEventListener('touchmove', (e) => {
  endX = e.touches[0].clientX;
});

slidesWrapper.addEventListener('touchend', () => {
  const diff = endX - startX;

  if (Math.abs(diff) > swipeThreshold) {
    if (diff < 0) {
      // swipe left → next slide
      showSlide(index + 1);
    } else {
      // swipe right → previous slide
      showSlide(index - 1);
    }
    restartAuto();
  }

  startX = 0;
  endX = 0;
});
