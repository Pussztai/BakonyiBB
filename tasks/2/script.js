let tasks = [];

// DOM elemek
const form = document.getElementById('addTaskForm');
const input = document.getElementById('taskInput');
const todoList = document.getElementById('todoList');
const emptyState = document.getElementById('emptyState');

// Event listener a form-hoz
form.addEventListener('submit', addTask);

// a, feladat: hozzadas a listahoz
function addTask(e) {
    e.preventDefault();
    const text = input.value.trim();
    
    if (text) {
        // feladat objektum letrehoozasa
        const task = {
            id: Date.now(),
            text: text
        };
        
        // feladat hozzaadasa a tombhoz
        tasks.push(task);
    
        input.value = '';
        
        // Lista re-render
        renderTasks();
    }
}

// b, feladat: feladat torles
function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    renderTasks();
}

// lista megjelenitese
function renderTasks() {
    // Ha nincs feladat, ures allapot megjelenitese
    if (tasks.length === 0) {
        todoList.style.display = 'none';
        emptyState.style.display = 'block';
        return;
    }

    todoList.style.display = 'block';
    emptyState.style.display = 'none';

    // a, feladat: Feladatok listajanak HTML generalasa
    // b, feladat: torles gomb
    todoList.innerHTML = tasks.map(task => `
        <li class="todo-item">
            <span>${task.text}</span>
            <button class="delete-btn" onclick="deleteTask(${task.id})">Törlés</button>
        </li>
    `).join('');
}



renderTasks();