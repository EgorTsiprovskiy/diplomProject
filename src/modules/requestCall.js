const requestCall = () => {
    let btnCall = document.querySelectorAll('.btn');

    btnCall[1].addEventListener("click", (e) => {
        e.preventDefault();

        const headerModal = document.querySelector('.header-modal');
        const substrate = document.querySelector('.overlay');

        headerModal.style.display = "block";
        substrate.style.display = "block";

        headerModal.addEventListener("click", (e) => {
            if (
                e.target.classList.contains("header-modal__close")
              ) {
                headerModal.style.display = "none";
                substrate.style.display = "none";
              }
        })

    })
}

export default requestCall