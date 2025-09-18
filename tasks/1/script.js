const btn = document.getElementById('toggleBtn');
const para = document.getElementById('myPara');

btn.addEventListener('click', () => {
    const isHidden = para.classList.toggle('hidden');
});

