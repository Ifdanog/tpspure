document.addEventListener("DOMContentLoaded", () => {

  // 👉 CHANGE THIS to the selector of your current slider container
  const oldSlider = document.querySelector("#tile-slider-YNp9fF");

if (!oldSlider) {
  console.error("Slider target not found!");
  return;
}

// Create a wrapper element to hold the new slider
const newSlider = document.createElement("div");

// Put your new slider markup inside the wrapper
newSlider.innerHTML = `
  <section class="hero-slider" aria-label="Hero Image Slider">
    <div class="slider-wrapper">

      <div class="slide active">
        <picture>
          <source media="(max-width: 768px)" srcset="hero-slide1-mobile.jpg" />
          <img src="https://cdn.jsdelivr.net/gh/ifdanog/tpspure@main/3.jpg" alt="A+ Grade Talcum Powder" />
        </picture>
        <div class="overlay"></div>
        <div class="slide-content">
          <h1>New A+ Grade Talcum Powder</h1>
          <p>Purchase your fine talc here, from our mine straight to you. Our Talc is milled using an Ultra-Fine Milling Technology, packaged and delivered straight to you!</p>
          <a href="#" class="btn">Explore Now</a>
        </div>
      </div>

      <div class="slide">
        <picture>
          <source media="(max-width: 768px)" srcset="hero-slide2-mobile.jpg" />
          <img src="https://cdn.jsdelivr.net/gh/ifdanog/tpspure@main/4.jpg" alt="From Cosmetics to Pharmaceuticals" />
        </picture>
        <div class="overlay"></div>
        <div class="slide-content">
          <h1>From Cosmetics to Pharmaceuticals</h1>
          <p>Our talc is absestos-free, ISO certified, and suitable for use in the food, cosmetic, pharmaceutical industry, and many other industries. We got you covered!</p>
          <a href="#" class="btn">Request a sample</a>
        </div>
      </div>

      <div class="slide">
        <picture>
          <source media="(max-width: 768px)" srcset="hero-slide3-mobile.jpg" />
          <img src="https://cdn.jsdelivr.net/gh/ifdanog/tpspure@main/5.jpg" alt="High-quality and Safety" />
        </picture>
        <div class="overlay"></div>
        <div class="slide-content">
          <h1>Discover how we ensure high-quality and safety</h1>
          <p>Check out and download all our certificates and resources to ensure your safety.</p>
          <a href="#" class="btn">Discover Now</a>
        </div>
      </div>

    </div>

    <button class="nav prev" aria-label="Previous Slide">❮</button>
    <button class="nav next" aria-label="Next Slide">❯</button>

    <div class="dots"></div>
  </section>
`;

// Replace the entire old slider node with the new slider
oldSlider.replaceWith(newSlider);


  // --- Slider functionality ---
  const slides = oldSlider.querySelectorAll(".slide");
  const dotsContainer = oldSlider.querySelector(".dots");
  const prev = oldSlider.querySelector(".prev");
  const next = oldSlider.querySelector(".next");

  let index = 0;
  let autoPlay;

  slides.forEach((_, i) => {
    const dot = document.createElement("button");
    dot.setAttribute("aria-label", `Go to slide ${i + 1}`);
    if (i === 0) dot.classList.add("active");
    dot.addEventListener("click", () => goToSlide(i));
    dotsContainer.appendChild(dot);
  });

  const dots = dotsContainer.querySelectorAll("button");

  function showSlide(i) {
    slides.forEach(s => s.classList.remove("active"));
    dots.forEach(d => d.classList.remove("active"));

    slides[i].classList.add("active");
    dots[i].classList.add("active");
  }

  function nextSlide() {
    index = (index + 1) % slides.length;
    showSlide(index);
  }

  function prevSlide() {
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index);
  }

  function goToSlide(i) {
    index = i;
    showSlide(index);
    restartAutoplay();
  }

  function startAutoplay() {
    autoPlay = setInterval(nextSlide, 5000);
  }

  function stopAutoplay() {
    clearInterval(autoPlay);
  }

  function restartAutoplay() {
    stopAutoplay();
    startAutoplay();
  }

  oldSlider.addEventListener("mouseenter", stopAutoplay);
  oldSlider.addEventListener("mouseleave", startAutoplay);

  next.addEventListener("click", () => {
    nextSlide();
    restartAutoplay();
  });

  prev.addEventListener("click", () => {
    prevSlide();
    restartAutoplay();
  });

  showSlide(0);
  startAutoplay();
});


// Inject slider CSS into the page
const sliderStyles = `
  .hero-slider {
    position: relative;
    width: 100%;
    height: 90vh;
    overflow: hidden;
    color: #fff;
    font-family: Arial, sans-serif;
  }

  .slider-wrapper {
    height: 100%;
    position: relative;
  }

  .slide {
    position: absolute;
    inset: 0;
    opacity: 0;
    transition: opacity 0.9s ease-in-out;
  }

  .slide.active {
    opacity: 1;
    z-index: 2;
  }

  .slide img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to right, rgba(0,0,0,0.65), rgba(0,0,0,0.2));
    z-index: 1;
  }

  .slide-content {
    position: absolute;
    top: 50%;
    left: 5%;
    transform: translateY(-50%);
    max-width: 550px;
    z-index: 2;
  }

  .slide-content h1 {
    font-size: 2.8rem;
    margin-bottom: 15px;
    line-height: 1.2;
  }

  .slide-content p {
    font-size: 1.1rem;
    margin-bottom: 20px;
  }

  .btn {
    display: inline-block;
    background: #fff;
    color: #000;
    padding: 12px 25px;
    font-weight: bold;
    text-decoration: none;
    border-radius: 5px;
  }

  .nav {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(255,255,255,0.3);
    border: none;
    font-size: 2rem;
    cursor: pointer;
    padding: 5px 12px;
    border-radius: 5px;
    z-index: 3;
  }

  .nav.prev { left: 15px; }
  .nav.next { right: 15px; }

  .nav:hover {
    background: rgba(255,255,255,0.6);
  }

  .dots {
    position: absolute;
    bottom: 20px;
    left: 5%;
    display: flex;
    gap: 10px;
    z-index: 3;
  }

  .dots button {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    border: none;
    background: rgba(255,255,255,0.5);
    cursor: pointer;
  }

  .dots button.active {
    background: white;
  }

  @media (max-width: 768px) {
    .hero-slider {
      height: 75vh;
    }
    .slide-content h1 {
      font-size: 1.9rem;
    }
    .slide-content p {
      font-size: 1rem;
    }
  }
`;

// Create style tag and append to head
const styleTag = document.createElement("style");
styleTag.innerHTML = sliderStyles;
document.head.appendChild(styleTag);
