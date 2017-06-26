/**
 * Created by dafnar on 6/26/17.
 */

function onXClicked(newDiv) {
    var checkInput = newDiv.childNodes[0];
    if (checkInput.checked) {
        completedCounter--;
    } else {
        activeTasksCounter--;
        document.getElementById("tasks-counter").innerHTML = activeTasksCounter + " item" + addS() + " left";
    }
    if (completedCounter == 0) {
        var clearCompleted = document.getElementById("clear-completed");
        makeHidden(clearCompleted, false);
        if (activeTasksCounter == 0) {
            makeHidden(document.getElementById("arrow"), false);
            document.getElementById("task-manager-footer").remove();
        }
    }

    newDiv.remove();
}

function addX(newDiv){
    var x = document.createElement("span");
    x.setAttribute("id", "x");
    x.innerHTML = "&#10005;";

    x.addEventListener("click", function() {
        onXClicked(newDiv);
    });

    newDiv.appendChild(x);
}

function updateTaskCounterDisplayedText() {
    document.getElementById("tasks-counter").innerHTML = activeTasksCounter + " item" + addS() + " left";
}

function onCheck(checkInput, newDiv){
    if (checkInput.checked){
        newDiv.classList.remove("active");
        activeTasksCounter--;
        completedCounter++;

    } else {
        newDiv.classList.add("active");
        activeTasksCounter++;
        completedCounter--;
    }
    updateTaskCounterDisplayedText();
    validateClearCompletedStatus();
}

function addCheckbox(newDiv){
    document.getElementById("arrow").checked = false;
    var checkInput = document.createElement("input");
    checkInput.setAttribute("type", "checkbox");
    checkInput.classList.add("checkbox");
    checkInput.addEventListener("click", function() {
        onCheck(checkInput, newDiv);
    });

    var text = document.createElement("label");
    text.classList.add("strikethrough");
    text.innerHTML = task;
    activeTasksCounter++;

    newDiv.appendChild(checkInput);
    newDiv.appendChild(text);
}
