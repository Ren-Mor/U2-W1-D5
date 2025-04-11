window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  const startButton = document.querySelector(".start-button");
  if (window.scrollY > 15) {
    header.classList.add("scrolled");
    startButton.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
    startButton.classList.remove("scrolled");
  }
});
