module('Tests with initial markup in test2.html');
test('createToDoItem creates 1 element', function () {
    sut.createToDoItem();
    strictEqual($(".js-totdoContainer").length, 1, 'todo item was successfully created');
});