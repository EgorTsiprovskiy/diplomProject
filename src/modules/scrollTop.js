const scroll = () => {
    document.querySelector('.smooth-scroll').onclick = () => {
        window.scrollTo(pageYOffset, 0);
    }
}

export default scroll