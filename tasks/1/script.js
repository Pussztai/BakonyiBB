

const toggleButtons = [
        { btnId: 'toggleBtnAti', targetId: 'AtiP' },
        { btnId: 'toggleBtnDave', targetId: 'DaveP' },
        { btnId: 'toggleBtnDomi', targetId: 'DomiP' }
    ];

toggleButtons.forEach(({ btnId, targetId }) => {
    const button = document.getElementById(btnId);
    const target = document.getElementById(targetId);
        
        if (button && target) {
            button.addEventListener('click', function() {
                if (target.classList.contains('hidden')) {
                    target.classList.remove('hidden');
                    this.textContent = 'Bezárás';
                    this.setAttribute('aria-expanded', 'true');
                } else {
                    target.classList.add('hidden');
                    this.textContent = 'Bemutatkozás';
                    this.setAttribute('aria-expanded', 'false');
                }
            });
        }
    });





function updateClock() {
    const now = new Date(); 
    document.getElementById('clock').textContent = now.toLocaleTimeString(); 
}


setInterval(updateClock, 1000);


updateClock();



const gomb = document.querySelector(".extraKepek");
const kepHely = document.getElementById("kepHely");
const descript = document.getElementById("diaPictureDescription")

const kepek = [
    "images/erasmus.png",
    "images/technikumi_rangsor.png",
    "images/cegléd_varos.jpg"
  ];


const leirasok = [
    "Erasmus Program 2024",
    "Országos Technikumok ranglistája (13.Helyezés)",
    "Cegléd"
]

let index = -1;


gomb.addEventListener("click", () => {
    index++;
    
    if (index < kepek.length) {
      let img = kepHely.querySelector("img");
      if (!img) {
        img = document.createElement("img");
        kepHely.appendChild(img);
      }
      
      img.src = kepek[index];
      gomb.textContent = "Következő kép";
      descript.textContent = leirasok[index];
    } else {
      // ha elerte a veget
      kepHely.innerHTML = ""; 
      descript.textContent = "";       
      gomb.textContent = "Nyomj ide Extra képekért";
      index = -1;
    }
  });