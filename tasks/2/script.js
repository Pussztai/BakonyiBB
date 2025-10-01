let tasks = [];

// DOM elemek
const form = document.getElementById('addTaskForm');
const input = document.getElementById('taskInput');
const todoList = document.getElementById('todoList');
const emptyState = document.getElementById('emptyState');

form.addEventListener('submit', addTask);


function updateClock() {
    const now = new Date(); 
    document.getElementById('clock').textContent = now.toLocaleTimeString(); 
}


setInterval(updateClock, 1000);


updateClock();



function addTask(e) {
  e.preventDefault();
  const text = input.value.trim();

  if (text) {
    const task = {
      id: Date.now(),
      text: text,
      completed: false 
    };

    tasks.push(task);
    input.value = '';
    renderTasks();
  }
}

function toggleTask(id) {
  const task = tasks.find(t => t.id === id);
  if (task) {
    task.completed = !task.completed;
    renderTasks();
  }
}

function deleteTask(id) {
  tasks = tasks.filter(task => task.id !== id);
  renderTasks();
}

function moveTaskUp(index) {
  if (index > 0) {
    [tasks[index - 1], tasks[index]] = [tasks[index], tasks[index - 1]];
    renderTasks();
  }
}

function moveTaskDown(index) {
  if (index < tasks.length - 1) {
    [tasks[index], tasks[index + 1]] = [tasks[index + 1], tasks[index]];
    renderTasks();
  }
}

function renderTasks() {
  if (tasks.length === 0) {
    todoList.style.display = 'none';
    emptyState.style.display = 'block';
    return;
  }

  todoList.style.display = 'block';
  emptyState.style.display = 'none';
  todoList.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.classList.add("todo-item");


  if (task.completed) {
      li.classList.add("completed");
    }


    const span = document.createElement("span");
    span.classList.add("task-text");
    span.textContent = task.text; 

    span.addEventListener("click", () => toggleTask(task.id));
    span.style.cursor = "pointer";

    const upBtn = document.createElement("button");
    upBtn.textContent = "⬆️";
    upBtn.addEventListener("click", () => moveTaskUp(index));


    const downBtn = document.createElement("button");
    downBtn.textContent = "⬇️";
    downBtn.addEventListener("click", () => moveTaskDown(index));

    const delBtn = document.createElement("button");
    delBtn.textContent = "❌";
    delBtn.addEventListener("click", () => deleteTask(task.id));

    li.append(span, upBtn, downBtn, delBtn);
    todoList.appendChild(li);
  });
}

renderTasks();
