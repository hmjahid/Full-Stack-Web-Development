let newTask = document.querySelector('#new-task');
let form = document.querySelector('Form');
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
}