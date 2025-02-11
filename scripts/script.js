const boxes = Array.from(document.querySelectorAll(".box"));
const aboutBox = document.querySelector(".what-we-do");
const locusImage = document.querySelector(".locus-inline-image");
let width = window.innerWidth;

window.addEventListener("resize", () => {
  width = window.innerWidth;
});

const options = {
  root: document.querySelector(".container"),
  rootMargin: "0px",
  threshold: 1,
};

const observer = new IntersectionObserver((entries, options) => {
  entries.forEach((entry) => {
    entry.target.classList.toggle("show", entry.isIntersecting);
  });
});

addClickResponse();

// Style for boxes when over window width greater than 1100px
if (width > 1100) {
  setBoxStyle();
} else {
  boxes.forEach((box) => {
    observer.observe(box);
  });
}

// Set desktop box style
function setBoxStyle() {
  boxes.forEach((box) => {
    box.style.transform = "translateX(0)";
    box.style.tranistion = "none";
    box.style.opacity = 1;
    box.classList.add("shown");
    observer.unobserve(box);
  });
}

// Combine functionality of showMoreBox and showLessBox with logic...
//
//
//

function addClickResponse() {
  window.addEventListener("click", (e) => {
    boxes.forEach((box) => {
      // Go through each child of boxContents to allow for clicking on children for same response
      const boxContents = Array.from(box.children);
      if (
        e.target === box ||
        boxContents.forEach((content) => {
          e.target === content;
        })
      ) {
        box.classList.add("show-more-box");
        box.firstElementChild.classList.add("show");
        box.children[1].classList.add("show");
        box.children[1].children[0].classList.add("show-more-box_label");
        box.children[1].children[1].classList.add("show-more-box_text");
        if (width > 1100) {
          box.style.flex = 10;
        }
      } else {
        box.classList.remove("show-more-box");
        box.firstElementChild.classList.remove("show");
        box.children[1].classList.remove("show");
        box.children[1].children[0].classList.remove("show-more-box_label");
        box.children[1].children[1].classList.remove("show-more-box_text");
        if (width > 1100) {
          box.style.flex = 1;
        }
      }
    });
  });
}
