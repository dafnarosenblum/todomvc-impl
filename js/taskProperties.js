/**
 * Created by dafnar on 6/26/17.
 */

function onXClicked(newDiv) {
    var checkInput = newDiv.find("input");
    if (checkInput.is(":checked")) {
        completedCounter--;
    } else {
        activeTasksCounter--;
        $("#tasks-counter").text(activeTasksCounter + " item" + addS() + " left");
    }
    if (completedCounter === 0) {
        var clearCompleted = $("#clear-completed");
        makeHidden(clearCompleted, false);
        if (activeTasksCounter === 0) {
            makeHidden($("#arrow"), false);
            $("#arrow").prop('checked', false);
            $("#task-manager-footer").remove();
        }
    }

    newDiv.remove();
}

function addX(newDiv, tasksManager){
    var x = $("<span></span>");
    x.addClass("x");
    x.attr("id", "x" + taskNextId);
    x.append("&#10005;");

    tasksManager.on("click", "#x" + taskNextId, function(){
        onXClicked(newDiv)
    });
    newDiv.append(x);
}

function updateTaskCounterDisplayedText() {
    $("#tasks-counter").text(activeTasksCounter + " item" + addS() + " left");
}

function onCheck(checkInput, newDiv){
    if (checkInput.is(":checked")){
        newDiv.removeClass("active");
        activeTasksCounter--;
        completedCounter++;

    } else {
        newDiv.addClass("active");
        activeTasksCounter++;
        completedCounter--;
    }
    updateTaskCounterDisplayedText();
    validateClearCompletedStatus();
}

function addCheckbox(newDiv, tasksManager){
    $("#arrow").attr('checked', false);
    var checkInput = $("<input>");
    checkInput.attr("type", "checkbox");
    checkInput.addClass("checkbox");
    var id = "checkbox" + taskNextId;
    checkInput.attr("id", id);
    tasksManager.on("click", "#" + id, function() {
        onCheck(checkInput, newDiv);
    });
    taskNextId++;
    $("#tasks-manager div input[type=checkbox]").unbind( "click" );
    var labelText = $("<label></label>");
    labelText.addClass("strikethrough");
    labelText.text($("#add-task-input").val());
    activeTasksCounter++;

    newDiv.append(checkInput);
    newDiv.append(labelText);
}
