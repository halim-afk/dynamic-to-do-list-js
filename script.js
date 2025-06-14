// Run this code after the DOM has fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Select key elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim(); // Remove whitespace

        // Check if input is empty
        if (taskText === '') {
            alert('Please enter a task!');
            return;
        }

        // Create <li> element for the task
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        // Create Remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.className = 'remove-btn';

        // Remove task on button click
        removeBtn.onclick = function () {
            taskList.removeChild(listItem);
        };

        // Append button to task and task to list
        listItem.appendChild(removeBtn);
        taskList.appendChild(listItem);

        // Clear input field
        taskInput.value = '';
    }

    // Event: Add task on button click
    addButton.addEventListener('click', addTask);

    // Event: Add task on pressing Enter
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
