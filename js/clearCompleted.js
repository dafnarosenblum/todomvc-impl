/**
 * Created by dafnar on 6/26/17.
 */

function validateClearCompletedStatus() {
    if (completedCounter == 0){
        changeClearCompletedVisibility(false);
    } else {
        changeClearCompletedVisibility(true);
    }
}

function changeClearCompletedVisibility(changeToVisible){
    var clearCompleted = document.getElementById("clear-completed");
    var toAdd = "hidden";
    var toRemove = "visible";
    if (changeToVisible){
        var toAdd = "visible"
        var toRemove = "hidden";
    }
    clearCompleted.classList.add(toAdd);
    clearCompleted.classList.remove(toRemove);
}

function onClearCompleted() {
    var elements = document.getElementsByClassName("new-task");
    var toRemove = [];
    for (var j = 0; j < elements.length; j++) {
        e = elements[j];
        if (!e.classList.contains("active")) {
            toRemove.push(e);
        }
    }
    toRemove.forEach(function (e) {
        e.remove()
    });
    completedCounter = 0;
    if (activeTasksCounter == 0) {
        document.getElementById("task-manager-footer").remove();
        makeHidden(document.getElementById("arrow"), false);
    }
}
