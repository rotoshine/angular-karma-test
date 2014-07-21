'use strict';

angular.module('Todo').controller('TodoController', function($scope){
	$scope.todos = [];
	$scope.newTodoTitle = '';
	$scope.loadTodos = function(){
		$scope.todos = [
			{
				title: '할 일1',
				isComplete: false
			}
			,
			{
				title: '할 일2',
				isComplete: false
			}
		]
	};

	$scope.addTodo = function(){
		$scope.todos.push({
			title: $scope.newTodoTitle,
			isComplete: false
		});
		$scope.newTodoTitle = '';
	};

	$scope.removeTodo = function(todo){
		for(var i = 0; i < $scope.todos.length;i++){
			if($scope.todos[i] === todo){
				$scope.todos.splice(i, 1);
				break;
			}
		}
	};

	$scope.ifEnterKeyPressThenAddTodo = function($event){
		if($event.keyCode === 13){
			$scope.addTodo();
		}
	}
});