/**
 * Created by dafnar on 6/26/17.
 */

function filterHandler(condition) {
    $(".new-task").each(function (i, e){
        if (condition(e)) {
            makeVisible($(this));
        } else {
            makeHidden($(this), true);
        }
    });
}

function addFilterButtons(taskManagerFooter, tasksManager) {
    var filterParent = $("<span></span>");

    var filterConfig = [
        ["All", function () { return true }],
        ["Active", function (element) { return element.classList.contains("active") }],
        ["Completed", function (element) { return !element.classList.contains("active"); }]
    ];

    var filterButtons = [];
    for (var i=0; i<3; i++){
        var filter = $("<button></button>");
        filter.text(filterConfig[i][0]);
        filter.attr("type", "button");
        filter.attr("id", filterConfig[i][0]);
        filter.addClass("filter-button");
        filterButtons.push(filter);
        filterParent.append(filter);
    }

    tasksManager.on("click", "#task-manager-footer span #All", function () {
        filterHandler(filterConfig[0][1]);
    });

    tasksManager.on("click", "#task-manager-footer span #Active", function () {
        filterHandler(filterConfig[1][1]);
    });

    tasksManager.on("click", "#task-manager-footer span #Completed", function () {
        filterHandler(filterConfig[2][1]);
    });

    taskManagerFooter.append(filterParent);
}