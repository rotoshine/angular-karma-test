'use strict';
describe('Todo App', function(){
    browser.get('index.html');
    var ALL_TODO_LIST_SELECTOR = '.todo-list article';
    it('화면 로딩 후 ng-init에 의해 todos가 불려진 상태여야 한다.', function(){
        expect(element.all(by.css(ALL_TODO_LIST_SELECTOR)).count()).toEqual(2);
    });

    it('add button 클릭 시 새로운 Todo가 추가되어야 한다.', function(){
        element.all(by.css(ALL_TODO_LIST_SELECTOR)).count().then(function(beforeAddTodoCount){
            var $newTodoTitle = element(by.model('newTodoTitle'));
            $newTodoTitle.click();
            $newTodoTitle.sendKeys('add Test');
            element(by.css('.add-button')).click();

            var $todos = element.all(by.css(ALL_TODO_LIST_SELECTOR));
            $todos.count().then(function(count){
                expect(count).toEqual(beforeAddTodoCount + 1);
            });
        });
    });
});