const scroll = () => {
let scrollButton = document.querySelector(".smooth-scroll");
scrollButton.style.display = "none";
  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 700) {
      scrollButton.style.display = "block";
    } else {
      scrollButton.style.display = "none";
    }
  });
  scrollButton.addEventListener("click", () => {
    window.scrollTo(0, 0);
  });
};

export default scroll;
