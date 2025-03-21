
let isConnected = true;

function changeStatus(statusInput, isConnected){
    statusInput.checked = isConnected;
    if(isConnected){
        statusInput.previousElementSibling.innerText = "Услуга включена"
    } else {
        statusInput.previousElementSibling.innerText = "Услуга отключена"
    }
}

const statusInput = document.querySelector('.food-status__input');
changeStatus(statusInput, isConnected);
statusInput.addEventListener('change', function(){
    isConnected = !isConnected
    changeStatus(this, isConnected);
})
