'use strict';
describe('Todo Controller Spec', function(){
	var scope;
	var TodoController;
	beforeEach(angular.mock.module('Todo'));
	beforeEach(angular.mock.inject(function($rootScope, $controller){
		scope = $rootScope.$new();
		TodoController = $controller('TodoController', {$scope: scope});
	}));
	it('TodoController가 정의되어 있어야 한다.', function(){
		expect(TodoController).toBeDefined();
	});
	it('Todo 추가 시 새로운 Todo가 추가되어야 한다.', function(){
		var todoCount = scope.todos.length;
		scope.newTodoTitle = 'hello?';
		scope.addTodo();
		expect(scope.todos.length).toEqual(todoCount + 1);
	});
	it('Todo 추가 후엔 newTodoTitle값이 초기화 되어야 한다', function(){
		expect(scope.newTodoTitle).toEqual('');
		scope.newTodoTitle = '새로 추가되면 없어져야 함';
		scope.addTodo();
		expect(scope.newTodoTitle).toEqual('');		
	});
	it('Todo 삭제 시 삭제가 되어야 한다.', function(){
		scope.newTodoTitle = 'asd';
		scope.addTodo();
		var AddAfterTodoCount = scope.todos.length;
		var lastAddedTodo = scope.todos[scope.todos.length - 1];
		scope.removeTodo(lastAddedTodo);

		expect(scope.todos.length).toEqual(AddAfterTodoCount - 1);
	});
});