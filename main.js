const addTaskButton = document.getElementById("newTaskButton"); 
const newTask = document.getElementById("newTask");
const taskList = document.getElementById("taskList");
const newTaskValue = newTask.value;

addTaskButton.addEventListener("click", addNewTask) // Adiciona o evento ao botão

function addNewTask(event) {
    event.preventDefault();

        const task = addTaskButton.value;

        const li = document.createElement("li"); // Criando o intem da lisa
        li.classList.add('task');
        
        const input = document.createElement("input"); // criando botão de checklist 
        input.classList.add("checkbox");
        input.value = checkbox;
        input.type = "checkbox";

        const inputTask = document.createElement("p"); // Criando o conteudo da tarefa
        
        
        taskList.appendChild(li);
        li.appendChild(input);
        li.appendChild(inputTask)

    
        console.log(task)
    } 
    
