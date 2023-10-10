const call = () => {
  const butCall = document.querySelectorAll(".service-button");
  const modal = document.querySelector(".services-modal");
  const overlay = document.querySelector(".overlay");

  butCall.forEach((element) => {
    const butClose = document.querySelector(".services-modal__close");
    element.addEventListener("click", () => {
      document.querySelector(".services-modal").style.display = "block";
      document.querySelector(".overlay").style.display = "block";
    });
    butClose.addEventListener("click", () => {
      document.querySelector(".services-modal").style.display = "none";
      document.querySelector(".overlay").style.display = "none";
    });
  });
  modal.addEventListener("click", (e) => {
    console.log(e.target.closest(".services-modal"));
    if (!e.target.closest(".order-call-modal")) {
      document.querySelector(".services-modal").style.display = "none";
      document.querySelector(".overlay").style.display = "none";
    }
  });
  overlay.addEventListener("click", (e) => {
    document.querySelector(".services-modal").style.display = "none";
    document.querySelector(".overlay").style.display = "none";
  });
};

export default call;
