const addTaskButton = document.getElementById("newTaskButton"); 
const newTaskInput = document.getElementById("newTaskInput");
const taskListContainer = document.getElementById("taskList");


class Task {
    constructor(description){
        this.description = description;
    }
}


class TaskList {
    constructor() {
        this.task = []; // atribuindo o valor de task ao array
    }
    addTask(description) {
        const task = new Task(description) // criando novo objeto 
        this.task.push(task)
    }
    removeTask(index) {
        this.task.splice(index, 1) // removendo a task do array
    }
    getTaskList(){
        return this.task
    }
}

const taskList = new TaskList();

addTaskButton.addEventListener("click", (event) => {
    event.preventDefault();

    const description = newTaskInput.value.trim();
    if (description !== "") {
        console.log("esta funcionando")
        taskList.addTask(description);
        taskListContainer.innerHTML = renderTask(taskList.getTaskList()); // taskList
    }
    else alert("You forgot to write your task!")
})

function renderTask(taskList) {
    return taskList.map((task) => {
        const doneClass = task.done ? "task done" : "task";
        return `<li class="${doneClass}">
                    <div>
                        <input type="checkbox" class="checkbox">
                        <p>${task.description}</p>
                    </div>
                    <button>Delete</button>
                </li>
    `;
    }).join("");
}

/*
function addNewTask(event) {
    event.preventDefault();

        const task = newTaskInput.value;

        const li = document.createElement("li"); // Criando o intem da lisa
        li.classList.add('task');
        
        const input = document.createElement("input"); // criando botão de checklist 
        const taskCheck = input.checked == true ? input.classList.add("checkbox taskCheck") : input.classList.add("checkbox")
        //input.classList.add("checkbox");
        input.type = "checkbox";

        const text = document.createElement("p"); // Criando o conteudo da tarefa
        text.innerHTML = `${task}`;

        const remove = document.createElement("button"); // botão de remover tarefa
        remove.classList.add("delete_button");
        

        taskList.appendChild(li)
        li.appendChild(input)
        li.appendChild(text)
        li.appendChild(remove)

        console.log(task)
    } 
    */
