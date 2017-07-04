angular.module('myApp').controller('TodoCtrl', TodoCtrl);

function TodoCtrl() {
    var vm = this;
    vm.todoList = [];
    vm.activeTasks = function () {
        return getFilteredList().length;
    }

    var getFilteredList = function(){
        return vm.todoList.filter(function(todo) {return !todo.isCompleted});
    }

    vm.hasNoCompleted = function(){
        return vm.todoList.filter(function(todo) {return todo.isCompleted}).length == 0;
    }

    vm.submit = function(){
        vm.todoList.push({
            text: vm.newTodo,
            isCompleted: false
        });
        vm.newTodo = "";
    }

    vm.removeTodo = function(todo){
        var i = vm.todoList.indexOf(todo);
        if (i >= 0) {
            vm.todoList.splice(i, 1);
        }
    }

    vm.clearCompleted = function(){
        vm.todoList = getFilteredList();
    }

}

