/**
 * Created by dafnar on 6/26/17.
 */

function filterHandler(condition) {
    var elements = document.getElementsByClassName("new-task");
    for (var j = 0; j < elements.length; j++) {
        e = elements[j];
        if (condition(e)) {
            makeVisible(e);
        } else {
            makeHidden(e, true);
        }
    }
    ;
}
function addFilterButtons(taskManagerFooter) {
    var filterParent = document.createElement("span");

    var filterConfig = [
        ["All", function (element) { return true }],
        ["Active", function (element) { return element.classList.contains("active") }],
        ["Completed", function (element) { return !element.classList.contains("active"); }]
    ];

    var filterButtons = [];
    for (var i=0; i<3; i++){
        var filter = document.createElement("button");
        filter.innerHTML = filterConfig[i][0];
        filter.setAttribute("type", "button");
        filter.classList.add("filter-button");
        filterButtons.push(filter);
        filterParent.appendChild(filter);
    }

    filterButtons[0].addEventListener("click", function () {
        filterHandler(filterConfig[0][1]);
    });

    filterButtons[1].addEventListener("click", function () {
        filterHandler(filterConfig[1][1]);
    });

    filterButtons[2].addEventListener("click", function () {
        filterHandler(filterConfig[2][1]);
    });

    taskManagerFooter.appendChild(filterParent);
}