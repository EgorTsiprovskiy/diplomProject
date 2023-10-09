const call = () => {
    const butCall = document.querySelectorAll('.service-button');

    butCall.forEach(element => {
        const butClose = document.querySelector('.services-modal__close');
        element.addEventListener('click', ()=> {
            document.querySelector('.services-modal').style.display = 'block';
            document.querySelector('.overlay').style.display = 'block';
        })
        butClose.addEventListener('click', ()=> {
            document.querySelector('.services-modal').style.display = 'none';
            document.querySelector('.overlay').style.display = 'none';
        })
    });

}

export default call