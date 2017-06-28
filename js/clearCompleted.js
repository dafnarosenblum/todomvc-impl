/**
 * Created by dafnar on 6/26/17.
 */

function validateClearCompletedStatus() {
    if (completedCounter === 0){
        changeClearCompletedVisibility(false);
    } else {
        changeClearCompletedVisibility(true);
    }
}

function changeClearCompletedVisibility(changeToVisible){
    var clearCompleted = $("#clear-completed");
    var toAdd = "hidden";
    var toRemove = "visible";
    if (changeToVisible){
        var toAdd = "visible"
        var toRemove = "hidden";
    }
    clearCompleted.addClass(toAdd);
    clearCompleted.removeClass(toRemove);
}

function onClearCompleted() {
    var toRemove = [];
    $(".new-task").each(function(i, e){
        if (!e.classList.contains("active")) {
            toRemove.push(e);
        }
    })

    toRemove.forEach(function (e) {
        e.remove();
    });
    completedCounter = 0;
    if (activeTasksCounter === 0) {
        $("#task-manager-footer").remove();
        makeHidden($("#arrow"), false);
    }
}
