const btnA = document.getElementById('toggleBtnAti');
const paragA = document.getElementById('AtiP');

const btnD = document.getElementById('toggleBtnDave');
const paragD = document.getElementById('DaveP');

const btnDom = document.getElementById('toggleBtnDomi');
const paragDom = document.getElementById('DomiP');

btnA.addEventListener('click', () => {
    const isHidden = paragA.classList.toggle('hidden');
});

btnD.addEventListener('click', () => {
    const isHidden = paragD.classList.toggle('hidden');
});

btnDom.addEventListener('click', () => {
    const isHidden = paragDom.classList.toggle('hidden');
});


function updateClock() {
    const now = new Date(); 
    document.getElementById('clock').textContent = now.toLocaleTimeString(); 
}


setInterval(updateClock, 1000);


updateClock();

