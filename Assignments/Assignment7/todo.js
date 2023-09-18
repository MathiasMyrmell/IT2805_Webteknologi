var tasks = new Array();

function addTask(){
    createTask();
    outputField();
}

function createTask(){
    //create li element
    var task = document.createElement("li");
    //create checkbox
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("click", checked);
    //create label
    var label = document.createElement("label");
    var taskText = document.getElementById("task").value;
    label.innerText = taskText;
    //add checkbox and label to li
    task.appendChild(checkbox);//add checkbox to li element
    task.appendChild(label);//add label to li element
   //create tasklist 
    createList(task);
}

function createList(task){
    const date = Date.now();
    tasks.push({task, date});
    var taskList = document.getElementById("tasks");
    for(var i = tasks.length-1; i>= 0 ; i--){
        taskList.appendChild(tasks[i].task);
    }
}

function checked(){
    checkbox = this;
    label = checkbox.nextSibling;
    if(checkbox.checked){
        label.style.textDecoration = "line-through";
    }else{
        label.style.textDecoration = "none";
    }
    outputField();
}

function outputField(){
    var totalTasks = 0;
    var completedTasks = 0;
    for(var i = 0; i < tasks.length; i++){
        console.log(tasks[i].task);
        totalTasks++;
        if(tasks[i].task.firstChild.checked){
            completedTasks++;
        }
    }
    document.getElementById("message").innerHTML = completedTasks + "/" + totalTasks + " completed.";
}

