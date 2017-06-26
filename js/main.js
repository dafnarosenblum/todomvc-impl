/**
 * Created by dafnar on 6/26/17.
 */

var activeTasksCounter = 0;
var completedCounter = 0;

function addTask(){
    var newTask = document.createElement("div");
    newTask.classList.add("new-task");
    newTask.classList.add("active");
    changeShadow(newTask);
    addCheckbox(newTask);
    addX(newTask);
    makeVisible(document.getElementById("arrow"));

    var tasksManager = document.getElementById("tasks-manager");
    tasksManager.appendChild(newTask);
    clearAddTaskInput();

    var footer = document.getElementById("task-manager-footer");
    if (footer != null) { footer.remove() };
    addTaskManagerFooter(tasksManager);
}

function addTaskManagerFooter(taskManager) {
    var bottomDiv = document.createElement("div");
    bottomDiv.setAttribute("id", "task-manager-footer");

    var span = document.createElement("span");
    span.setAttribute("id", "tasks-counter");
    span.innerHTML = activeTasksCounter + " item" + addS() + " left";
    bottomDiv.appendChild(span);

    addFilterButtons(bottomDiv);

    var clearCompleted = document.createElement("button");
    clearCompleted.innerHTML = "Clear completed";
    clearCompleted.setAttribute("type", "button");
    clearCompleted.setAttribute("id", "clear-completed");
    if (completedCounter == 0){
        clearCompleted.classList.add("hidden");
    }
    clearCompleted.addEventListener("click", function(){
        onClearCompleted();
    });
    bottomDiv.appendChild(clearCompleted);

    taskManager.appendChild(bottomDiv);
}

function changeShadow(newDiv) {
    newDiv.classList.add("box-shadow");
    var addTask = document.getElementById("add-task");
    addTask.classList.remove("box-shadow");
}



