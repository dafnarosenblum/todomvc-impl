angular.module('myApp').directive('todo', todo);

function todo() {
    return {
        templateUrl: 'components/todo/todo-template.html',
        controller: 'TodoCtrl',
        controllerAs: 'vm',
        bindToController: true
    };
}