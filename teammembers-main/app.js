const switchBtn = document.querySelector('#flexSwitchCheckDefault');
switchBtn.addEventListener('click', night);

function night() {
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
}