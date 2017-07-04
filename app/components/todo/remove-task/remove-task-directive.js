/**
 * Created by dafnar on 7/2/17.
 */

angular.module('myApp').directive('removeTask', removeTask);

function removeTask() {
    return {
        templateUrl: "components/todo/remove-task/remove-task-template.html",
        controller: 'RemoveTaskCtrl',
        controllerAs: 'vm',
        bindToController: true,
        scope: {
            'removeParent': '&onRemove',
        },
    };
}