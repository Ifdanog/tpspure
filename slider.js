const slides = [
        {
          title: "A+ Grade Talcum Powder",
          description:
            "Purchase your fine talc here, from our mine straight to you. Our Talc is milled using an Ultra-Fine Milling Technology, packaged and delivered straight to you!",
          image: "https://cdn.jsdelivr.net/gh/ifdanog/tpspure@main/3.jpg",
          buttonText: "Explore Now",
          buttonLink: "#",
        },
        {
          title: "A+ Grade Talcum Powder",
          description:
            "Purchase your fine talc here, from our mine straight to you. Our Talc is milled using an Ultra-Fine Milling Technology, packaged and delivered straight to you!",
          image: "https://cdn.jsdelivr.net/gh/ifdanog/tpspure@main/4.jpg",
          buttonText: "Explore Now",
          buttonLink: "#",
        },
        {
          title: "A+ Grade Talcum Powder",
          description:
            "Purchase your fine talc here, from our mine straight to you. Our Talc is milled using an Ultra-Fine Milling Technology, packaged and delivered straight to you!",
          image: "https://cdn.jsdelivr.net/gh/ifdanog/tpspure@main/5.jpg",
          buttonText: "Explore Now",
          buttonLink: "#",
        },
      ];

      const sliderContainer = document.createElement("div");
      sliderContainer.id = "slider";
      sliderContainer.style.cssText =
        "position: relative; overflow: hidden; max-width: 100%; height: 750px;";

      const slidesWrapper = document.createElement("div");
      slidesWrapper.className = "slides-wrapper";
      slidesWrapper.style.cssText =
        "display: flex; transition: transform 0.5s ease; height: 100%;";

      sliderContainer.appendChild(slidesWrapper);
      // Slide Indicators Container
      const indicatorsContainer = document.createElement("div");
      indicatorsContainer.style.cssText = `
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 10px 0;
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
`;

      const indicators = slides.map((_, index) => {
        const indicator = document.createElement("div");
        indicator.style.cssText = `
    height: 4px;
    flex: 1;
    max-width: 100px;
    background: rgba(255, 255, 255, 0.3);
    transition: background 0.3s;
    border-radius: 2px;
  `;
        indicatorsContainer.appendChild(indicator);
        return indicator;
      });

      sliderContainer.appendChild(indicatorsContainer);

      const header = document.querySelector(".custom-header");
      if (header && header.parentNode) {
        header.parentNode.insertBefore(sliderContainer, header.nextSibling);
      }

      slides.forEach((slide) => {
        const slideDiv = document.createElement("div");
        slideDiv.className = "slide";
        slideDiv.style.cssText = `
      min-width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      color: black;
      background-image: url('${slide.image}');
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    `;

        slideDiv.innerHTML = `
      <div style="margin-left: 100px; width: 50%;">
        <h1 style="margin-bottom: 10px; font-size: 64px; color: #004aad;">${slide.title}</h1>
        <p style="margin-bottom: 40px; font-size: 18px;">${slide.description}</p>
        <a href="${slide.buttonLink}" style="padding: 10px 20px; background: #0047ab; color: #fff; text-decoration: none; border-radius: 4px;">${slide.buttonText}</a>
      </div>
    `;
        slidesWrapper.appendChild(slideDiv);
      });

      const prevBtn = document.createElement("button");
      const nextBtn = document.createElement("button");

      [prevBtn, nextBtn].forEach((btn, i) => {
        btn.innerHTML = i === 0 ? "&#10094;" : "&#10095;";
        btn.style.cssText = `
      position: absolute;
      top: 50%;
      ${i === 0 ? "left" : "right"}: 10px;
      transform: translateY(-50%);
      font-size: 30px;
      background: transparent;
      color: black;
      border: none;
      width: 40px;
      height: 40px;
      cursor: pointer;
      z-index: 10;
    `;
        sliderContainer.appendChild(btn);
      });

      let currentSlide = 0;

      function showSlide(index) {
        const totalSlides = slides.length;
        if (index < 0) index = totalSlides - 1;
        if (index >= totalSlides) index = 0;
        slidesWrapper.style.transform = `translateX(-${index * 100}%)`;
        currentSlide = index;

        // Update indicator styles
        indicators.forEach((ind, i) => {
          ind.style.background = i === index ? "#000" : "rgba(0,0,0,0.3)";
        });
      }

      prevBtn.onclick = () => showSlide(currentSlide - 1);
      nextBtn.onclick = () => showSlide(currentSlide + 1);

      showSlide(0);
