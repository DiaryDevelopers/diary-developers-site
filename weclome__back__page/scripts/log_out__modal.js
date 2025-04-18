const modal = document.querySelector('#modal__window');

const toggleModal = () => {
    if (modal.classList.contains('modal_active')) {
        modal.classList.toggle('modal_active');
    }
    else {
        modal.classList.toggle('modal_active');
    }
}