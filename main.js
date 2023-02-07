const addTaskButton = document.getElementById("newTaskButton"); 
const newTask = document.getElementById("newTask");
const taskList = document.getElementById("taskList");

// Adicionar as novas tarefas
addTaskButton.addEventListener("click", addNewTask)

function addNewTask(event) {
    event.preventDefault();

        const task = newTask.value;

        const li = document.createElement("li"); // Criando o intem da lisa
        li.classList.add('task');
        
        const input = document.createElement("input"); // criando botão de checklist 
        input.classList.add("checkbox");
        input.type = "checkbox";

        const text = document.createElement("p"); // Criando o conteudo da tarefa
        text.innerHTML = `${task}`;

        taskList.appendChild(li);
        li.appendChild(input);
        li.appendChild(text)


    
        console.log(task)
    } 
    
