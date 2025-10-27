const { test, expect, _electron: electron } = require('@playwright/test');

test('End-to-end user workflow', async () => {
    // Launch the Electron app
    const electronApp = await electron.launch({ args: ['.'] });
    const window = await electronApp.firstWindow();

    const taskText = 'My new E2E test task';

    // --- TODO: Task 1: Add a new todo item ---
    // 1. Find the input field (use a locator like window.locator('#todo-input')).
    // 2. Type the `taskText` into it.
    // 3. Find and click the "Add" button.
    const todoInput = window.locator('#todo-input');
    await todoInput.fill(taskText);
    const addButton = window.locator('#add-button');
    await addButton.click();


    // --- TODO: Task 2: Verify the todo item was added ---
    // 1. Locate the new todo item in the list. A good locator might be `window.locator('.todo-item')`.
    const todoItem = window.locator('.todo-item', { hasText: taskText });
    // 2. Assert that its text content contains the `taskText`.
    await expect(todoItem).toBeVisible();
    await expect(todoItem).toHaveText(taskText);
    

    // --- TODO: Task 3: Mark the todo item as complete ---
    // 1. Find the checkbox within the new todo item.
    const todoCheckbox = todoItem.locator('.todo-checkbox');
    // 2. Click the checkbox.
    await todoCheckbox.check();
    // 3. Assert that the todo item now has the 'completed' class.
    await expect(todoItem).toHaveClass(/completed/);


    // --- TODO: Task 4: Delete the todo item ---
    // 1. Find the delete button within the todo item.
    const deleteButton = todoItem.locator('.delete-button');
    // 2. Click the delete button.
    await deleteButton.click();
    // 3. Assert that the todo item is no longer visible on the page.
    await expect(todoItem).toBeHidden();


    // Close the app
    await electronApp.close();
});
