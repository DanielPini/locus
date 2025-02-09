const menuIcon = document.querySelector(".menu_icon");
const menuNav = document.querySelector(".nav");
const lines = Array.from(document.querySelectorAll(".line"));

addMenuFunctionality();

lines[1].style.transition = "all 500ms ease";
lines[2].style.transition = "all 500ms ease";

// Add click function on burger menu to animate the div lines
function addMenuFunctionality() {
  menuIcon.addEventListener("click", () => {
    menuNav.classList.toggle("show-nav");
    if (menuNav.classList.contains("show-nav")) {
      lines[0].style.opacity = 0;
      lines[1].style.width = "55px";
      lines[2].style.width = "55px";
      lines[1].style.transform = "rotate(45deg)";
      lines[2].style.transform = "rotate(-45deg)";
      lines[3].style.opacity = 0;
      lines.forEach((line) => {
        line.style.right = "2px";
      });
    } else {
      lines[0].style.opacity = 1;
      lines[1].style.width = "40px";
      lines[2].style.width = "40px";
      lines[1].style.transform = "rotate(0deg)";
      lines[2].style.transform = "rotate(0deg)";
      lines[3].style.opacity = 1;
      lines.forEach((line) => {
        line.style.right = "10px";
      });
    }
  });
}
