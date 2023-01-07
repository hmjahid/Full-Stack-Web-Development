let newTask = document.querySelector('#new-task');
let form = document.querySelector('form');
let incompleteList = document.querySelector('#items');
let completeList = document.querySelector('complete-list');


let createTask = function(task){
    let listItem = document.createElement('li');
    let checkBox = document.createElement('input');
    let label = document.createElement('label');

    label.innerText = task;
    checkBox.type = 'checkbox';
    listItem.appendChild(checkBox);
    listItem.appendChild(label);

    return listItem;
}

let addTask = function(e){
    e.preventDefault();
    let listItem = createTask(newTask.value);
    incompleteList.appendChild(listItem);
    newTask.value = "";

    bindInCompleteTask(listItem, completeTask);
}

let completeTask = function(){
    let listItem = this.parentNode;
    let deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete';
    deleteBtn.className = 'delete';
    listItem.appendChild(deleteBtn);

    let checkBox = listItem.querySelector('input[type="checkbox"]');
    checkBox.remove();
    completeList.appendChild(listItem);
    
    bindCompleteTask(listItem, deleteTask);
}

let deleteTask = function(){
    let listItem = this.parentNode;
    let ul = listItem.parentNode;
    ul.removeChild(listItem);
}

let bindInCompleteTask = function(taskItem, checkboxClick){
    let checkbox = taskItem.querySelector('input[type="checkbox"]');
    checkbox.onchange = checkboxClick;

}

let bindCompleteTask = function(taskItem, deleteButtonClick){
    let deleteButton = taskItem.querySelector('.delete');
    deleteButton.onclick = deleteButtonClick;
}

for(let i = 0; i < incompleteList.children.length; i++){
    bindInCompleteTask(incompleteList.children[i], completeTask);

}

for(let i = 0; i < completeList.children.length; i++){
    bindCompleteTask(completeList.children[i], deleteTask);

}

form.addEventListener('submit', addTask);