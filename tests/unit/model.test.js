const { TodoService } = require('../../js/model');

describe('TodoService Unit Tests', () => {
    let service;

    beforeEach(() => {
        // Create a new service instance for each test to ensure isolation
        service = new TodoService();
        // This is a bit of a hack to reset the singleton for testing purposes
        service.todos = [];
    });

    test('should add a new todo', () => {
        // TODO: Call the addTodo method with some text.
        service.addTodo('Sleep');
        // Then, assert that the service's todos array has a length of 1.
        expect(service.getTodos().length).toBe(1);
        // Assert that the text of the first todo matches the input text.
        expect(service.getTodos()[0].text).toBe('Sleep');
    });

    test('should toggle the completed state of a todo', () => {
        // TODO: First, add a todo.
        service.addTodo('Eat');
        // Then, get its ID and call the toggleTodoComplete method.
        const todoId = service.getTodos()[0].id;
        service.toggleTodoComplete(todoId);
        // Assert that the 'completed' property of that todo is now true.
        expect(service.getTodos()[0].completed).toBe(true);
        // Call toggleTodoComplete again and assert that it's false.
        service.toggleTodoComplete(todoId);
        expect(service.getTodos()[0].completed).toBe(false);
    });

    test('should remove a todo', () => {
        // TODO: Add a todo.
        service.addTodo('Wash Dishes');
        // Get its ID and call the removeTodo method.
        const todoId = service.getTodos()[0].id;
        service.removeTodo(todoId);
        // Assert that the service's todos array is now empty (length of 0).
        expect(service.getTodos().length).toBe(0);
    });

    test('should not add a todo if text is empty', () => {
        // TODO: Call addTodo with an empty string.
        service.addTodo('');
        // Assert that the todos array still has a length of 0.
        expect(service.getTodos().length).toBe(0);
    });
});
