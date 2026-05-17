let todos = [];
let currentFilter = "all";

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const error = document.getElementById("error");

    let taskText = taskInput.value.trim();

    if (taskText === "") {
        error.innerText = "Task cannot be empty!";
        return;
    }

    error.innerText = "";

    const todo = {
        id: Date.now(),
        text: taskText,
        completed: false
    };

    todos.push(todo);

    taskInput.value = "";

    displayTasks();
}

function displayTasks(filteredTasks = todos) {

    const taskList = document.getElementById("taskList");

    taskList.innerHTML = "";

    filteredTasks.forEach((todo) => {

        const li = document.createElement("li");
        li.classList.add("task-item");

        li.innerHTML = `
            <span class="${todo.completed ? 'completed' : ''}">
                ${todo.text}
            </span>

            <div class="task-buttons">
                <button class="complete-btn" onclick="toggleComplete(${todo.id})">
                    ${todo.completed ? "Undo" : "Complete"}
                </button>

                <button class="edit-btn" onclick="editTask(${todo.id})">
                    Edit
                </button>

                <button class="delete-btn" onclick="deleteTask(${todo.id})">
                    Delete
                </button>
            </div>
        `;

        taskList.appendChild(li);
    });
}

function toggleComplete(id) {

    todos = todos.map(todo => {
        if (todo.id === id) {
            return {
                ...todo,
                completed: !todo.completed
            };
        }
        return todo;
    });

    applyFilter();
}


function editTask(id) {

    let newTask = prompt("Edit your task");

    if (newTask === null || newTask.trim() === "") {
        alert("Task cannot be empty");
        return;
    }

    todos = todos.map(todo => {
        if (todo.id === id) {
            return {
                ...todo,
                text: newTask
            };
        }
        return todo;
    });

    applyFilter();
}

function deleteTask(id) {

    if (confirm("Are you sure you want to delete this task?")) {

        todos = todos.filter(todo => todo.id !== id);

        applyFilter();
    }
}
function filterTasks(type) {

    currentFilter = type;

    applyFilter();
}

function applyFilter() {

    let filtered = [];

    if (currentFilter === "completed") {
        filtered = todos.filter(todo => todo.completed);
    }
    else if (currentFilter === "pending") {
        filtered = todos.filter(todo => !todo.completed);
    }
    else {
        filtered = todos;
    }

    displayTasks(filtered);
}

function searchTask() {

    const searchValue = document
        .getElementById("searchInput").value.toLowerCase();

    let searchedTasks = todos.filter(todo =>
        todo.text.toLowerCase().includes(searchValue)
    );

    displayTasks(searchedTasks);
}


displayTasks();