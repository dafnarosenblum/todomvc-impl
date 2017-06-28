/**
 * Created by dafnar on 6/26/17.
 */

function makeHidden(e, veryHidden) {
    if (!e.hasClass("hidden")) {
        if (veryHidden){
            e.addClass("very-hidden");
        } else {
            e.addClass("hidden");
        }
        e.removeClass("visible");
    }
}

function makeVisible(e) {
    if (!e.hasClass("visible")) {
        e.addClass("visible");
    }
    e.removeClass("very-hidden");
    e.removeClass("hidden");
}

function clearAddTaskInput() {
    $("#add-task-input").val("");
}

var addS = function (){
    if (activeTasksCounter > 1) {
        return "s";
    } else {
        return "";
    }
};
