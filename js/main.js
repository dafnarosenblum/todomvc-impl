/**
 * Created by dafnar on 6/26/17.
 */

var activeTasksCounter = 0;
var completedCounter = 0;
var ENTER_KEY_CODE = 13;
var taskNextId = 0;
var task = null;


function addTask(){
    var tasksManager = $("#tasks-manager");

    var newTask = $("<div></div>").addClass("new-task active");
    changeShadow(newTask);
    addCheckbox(newTask, tasksManager);
    addX(newTask, tasksManager);
    makeVisible($("#arrow"));

    tasksManager.append(newTask);
    clearAddTaskInput();

    var footer = $("#task-manager-footer");
    if (footer != null) { footer.remove() };
    addTaskManagerFooter(tasksManager);
}

function addTaskManagerFooter(taskManager) {
    var bottomDiv = $("<div></div>");
    bottomDiv.attr("id", "task-manager-footer");

    var span = $("<span></span>");
    span.attr("id", "tasks-counter");
    span.text(activeTasksCounter + " item" + addS() + " left");
    bottomDiv.append(span);

    addFilterButtons(bottomDiv, taskManager);

    var clearCompleted = $("<button></button>");
    clearCompleted.text("Clear completed");
    clearCompleted.attr("type", "button");
    clearCompleted.attr("id", "clear-completed");
    if (completedCounter == 0){
        clearCompleted.addClass("hidden");
    }
    clearCompleted.click(function() {onClearCompleted()});
    bottomDiv.append(clearCompleted);

    taskManager.append(bottomDiv);
}

function changeShadow(newDiv) {
    newDiv.addClass("box-shadow");
    $("#add-task").removeClass("box-shadow");
}

$(document).ready(function() {
    $("#add-task-input").keydown(function (event) {
        if (event.keyCode === ENTER_KEY_CODE) {
            event.preventDefault();
            addTask();
        }
    });

    $("#arrow").change(function(){
        $(".new-task").each(function(i, task){
            var checkInput = $(this).find(".checkbox");

            if ($("#arrow").is(":checked") && !checkInput.is(":checked")){
                checkInput.attr('checked', true);
                onCheck(checkInput, $(this));
            }

            if (!$("#arrow").is(":checked")){
                checkInput.attr('checked', false);
                onCheck(checkInput, $(this));
            }
        });
    });
});


