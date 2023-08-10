//Testimonial Data
const testimonials = [
  {
    name: "Eva Sawyer",
    job: "CEO, Fashworks",
    testimonial:
      "Neque volutpat ac tincidunt vitae semper quis lectus nulla at volutpat diam ut venenatis tellus in metus vulputate eu scelerisque felis imperdiet proin fermentum leo vel orci porta non pulvinar neque laoreet suspendisse interdum consectetur",
  },
  {
    name: "Katey Topaz",
    job: "Developer, TechCrew",
    testimonial:
      "Elementum tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse in est ante in nibh mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo elit at imperdiet dui accumsan sit amet nulla",
  },
  {
    name: "Jae Robin",
    job: "UI Designer, Affinity Agency",
    testimonial:
      "Orci nulla pellentesque dignissim enim sit amet venenatis urna cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque massa placerat duis ultricies lacus sed turpis",
  },
  {
    name: "Nicola Blakely",
    job: "CEO,Zeal Wheels",
    testimonial:
      "Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit",
  },
];

//Current Slide
let i = 0;
//Total Slides
let j = testimonials.length;

let testimonialContainer = document.getElementById("testimonial-container");
let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("prev");
let dotContainer = document.getElementById("dot-container");
// New code for automatic cycling
let intervalId;

const startAutoCycle = () => {
  intervalId = setInterval(() => {
    i = (i + 1) % j;
    displayTestimonial();
    updateDots();
  }, 2000); // 2000 milliseconds = 2 seconds
};

const stopAutoCycle = () => {
  clearInterval(intervalId);
};

testimonialContainer.addEventListener("mouseenter", stopAutoCycle);
testimonialContainer.addEventListener("mouseleave", startAutoCycle);
const createDot = (index) => {
  let dot = document.createElement("span");
  dot.classList.add("dot");
  dot.addEventListener("click", () => {
    stopAutoCycle();
    i = index;
    displayTestimonial();
    updateDots();
    startAutoCycle();
  });
  dotContainer.appendChild(dot);
  return dot;
};

let dotElements = [];

for (let k = 0; k < j; k++) {
  let dot = createDot(k);
  dotElements.push(dot);
}

const updateDots = () => {
  dotElements.forEach((dot, index) => {
    if (index === i) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });
};

nextBtn.addEventListener("click", () => {
  stopAutoCycle();
  i = (i + 1) % j;
  displayTestimonial();
  updateDots();
  startAutoCycle();
});

prevBtn.addEventListener("click", () => {
  stopAutoCycle();
  i = (i + j - 1) % j;
  displayTestimonial();
  updateDots();
  startAutoCycle();
});

let displayTestimonial = () => {
  testimonialContainer.innerHTML = `
    <p>${testimonials[i].testimonial}</p>
    <h3>${testimonials[i].name}</h3>
    <h6>${testimonials[i].job}</h6>
  `;
};

window.onload = () => {
  displayTestimonial();
  updateDots();
  startAutoCycle(); // Start auto-cycling when the page loads
};