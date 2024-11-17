document.getElementById('add-task').addEventListener('click', function () {
    const taskInput = document.getElementById('task-input');
    if (taskInput.value.trim()) {
        addTask(taskInput.value.trim());
        taskInput.value = '';
        alert("Məlumat daxil edildi");
    } else {
        alert("Xananı boş saxlamayın");
    }
});

document.getElementById('sort-tasks').addEventListener('click', function () {
    sortTasks();
});

document.getElementById('input_remove').addEventListener('click', function () {
    clearInput();
});

function addTask(task) {
    const taskList = document.getElementById('task-list');
    const li = document.createElement('li');

    const currentCount = taskList.children.length + 1;
    li.textContent = currentCount + ") " + task;

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('list-remove');
  
    deleteButton.addEventListener('click', function () {
        taskList.removeChild(li);
        alert("Element silindi");
        updateTaskNumbers(); 
    });

    li.appendChild(deleteButton);
    taskList.appendChild(li);
}


function updateTaskNumbers() {
    const taskList = document.getElementById('task-list');
    Array.from(taskList.children).forEach((task, index) => {
        task.firstChild.textContent = `${index + 1}) ${task.firstChild.textContent.split(") ")[1]}`;
    });
}

let alphaSortable = false; 
let numericSortable = false; 

function sortTasks() {
    const taskList = document.getElementById('task-list');
    const tasks = Array.from(taskList.children);

    if (tasks.every(task => isNaN(task.textContent.trim().split(") ")[1]))) {
      
        if (alphaSortable) {
            tasks.sort((a, b) => b.textContent.trim().split(") ")[1].localeCompare(a.textContent.trim().split(") ")[1]));
        } else {
            tasks.sort((a, b) => a.textContent.trim().split(") ")[1].localeCompare(b.textContent.trim().split(") ")[1]));
        }
        alphaSortable = !alphaSortable;
    } else {
    
        if (numericSortable) {
            tasks.sort((a, b) => parseFloat(b.textContent.trim().split(") ")[1]) - parseFloat(a.textContent.trim().split(") ")[1]));
        } else {
            tasks.sort((a, b) => parseFloat(a.textContent.trim().split(") ")[1]) - parseFloat(b.textContent.trim().split(") ")[1]));
        }
        numericSortable = !numericSortable;
    }

   
    tasks.forEach(task => taskList.appendChild(task));

  
    updateTaskNumbers();
}

function clearInput() {
    document.getElementById('task-input').value = ''; 
}
