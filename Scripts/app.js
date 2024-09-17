const navBar = document.querySelector("header");
const backToTop = document.querySelector(".back-to-top");
window.addEventListener("scroll", addShadow);
window.addEventListener("scroll", show);
function addShadow() {
  if (window.scrollY > navBar.offsetHeight + 10) {
    navBar.classList.add("active");
  } else {
    navBar.classList.remove("active");
  }
}
function show() {
  if (window.scrollY > 100) {
    backToTop.classList.add("active");
  } else {
    backToTop.classList.remove("active");
  }
}
/* ================================== MOBILE NAV ==================================  */
const mobileNavBtn = document.querySelector(".toggle-nav");
const mobileNav = document.querySelector(".mobile-nav");
const closeNav = document.querySelector(".close-nav");

mobileNavBtn.addEventListener("click", () => {
  mobileNav.style.top = "0";
});
closeNav.addEventListener("click", () => {
  mobileNav.style.top = "";
});

/* ================================== CHANGE COLOR OF ANCHOR TAGS ONCLICK ==================================  */
const links = document.querySelectorAll(".anchors");

links.forEach((anchors) => {
  anchors.addEventListener("click", () => {
    removeActiveClasses();
    anchors.classList.add("active");
    mobileNav.style.top = "";
  });
});

function removeActiveClasses() {
  links.forEach((anchors) => {
    anchors.classList.remove("active");
  });
}

/* ================================== THEME TOGGLE EFFECTS==================================  */
const themeSun = document.querySelector(".sun");
const themeMoon = document.querySelector(".moon");
const body = document.body;

themeMoon.addEventListener("click", () => {
  body.classList.add("dark-theme");
  themeMoon.style.display = "none";
  themeSun.style.display = "block";
});
themeSun.addEventListener("click", () => {
  body.classList.remove("dark-theme");
  themeMoon.style.display = "block";
  themeSun.style.display = "none";
});

let sections = document.querySelectorAll("section");
window.onscroll = () => {
  sections.forEach((section) => {
    let top = (window.innerHeight / 5) * 4;
    let offset = section.getBoundingClientRect().top;

    if (offset < top) {
      section.classList.add("animate");
    }
  });
};
