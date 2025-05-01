const button = document.querySelector(".button");
const container = document.querySelector(".container");
const slides = document.querySelectorAll(".slide");
const next = document.querySelector(".slider__btn--right");
const prev = document.querySelector(".slider__btn--left");

// Change the background color
const changeBackgroundColor = function () {
  const colors = ["red", "orangered", "orange", "violet", "indigo"];
  const random = Math.floor(Math.random() * colors.length);
  const color = colors[random];
  container.style.backgroundColor = color;
  button.textContent = `Background color is: ${color}`;
};

button.addEventListener("click", changeBackgroundColor);

// Slider component
let curSlide = 0;
const maxSlide = slides.length - 1;

const goToSlide = function (s) {
  slides.forEach(
    (slide, i) => (slide.style.transform = `translateX(${100 * (i - s)}%)`)
  );
};

goToSlide(0);

// Next slide
const nextSlide = function () {
  if (curSlide === maxSlide) curSlide = 0;
  else curSlide++;

  goToSlide(curSlide);
};
next.addEventListener("click", nextSlide);

// Previous slide
const prevSlide = function () {
  if (curSlide === 0) curSlide = maxSlide;
  else curSlide--;
  goToSlide(curSlide);
};

prev.addEventListener("click", prevSlide);

// Tabbed component
const tabs = document.querySelectorAll(".tab-btn");
const content = document.querySelectorAll(".content");

tabs.forEach((tab, i) => {
  tab.addEventListener("click", function (e) {
    tabs.forEach((tab) => tab.classList.remove("active"));
    tab.classList.add("active");

    const line = document.querySelector(".line");
    line.style.width = e.target.offsetWidth + "px";
    line.style.left = e.target.offsetLeft + "px";

    content.forEach((c) => c.classList.remove("active"));
    content[i].classList.add("active");
  });
});
