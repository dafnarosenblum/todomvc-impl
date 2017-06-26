/**
 * Created by dafnar on 6/26/17.
 */

function makeHidden(e, veryHidden) {
    if (!e.classList.contains("hidden")) {
        if (veryHidden){
            e.classList.add("very-hidden");
        } else {
            e.classList.add("hidden");
        }
        e.classList.remove("visible");
    }
}

function makeVisible(e) {
    if (!e.classList.contains("visible")) {
        e.classList.add("visible");
    }
    e.classList.remove("very-hidden");
    e.classList.remove("hidden");
}

function clearAddTaskInput() {
    document.getElementById("add-task-input").value = "";
}

var addS = function (){
    if (activeTasksCounter > 1) {
        return "s";
    } else {
        return "";
    }
};
