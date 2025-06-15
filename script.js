// Ensure the DOM is fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {
    // Select DOM elements
    const taskInput = document.getElementById('task-input');
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');
    const messageBox = document.getElementById('message-box');

    /**
     * Displays a temporary message in the message box.
     * @param {string} message The message to display.
     * @param {string} type The type of message (e.g., 'error', 'success').
     */
    function showMessage(message, type = 'info') {
        messageBox.textContent = message;
        messageBox.className = `message-box rounded-md ${type}`; // Add type for custom styling if needed
        messageBox.classList.remove('hidden');

        // Hide the message after 3 seconds
        setTimeout(() => {
            messageBox.classList.add('hidden');
        }, 3000);
    }

    /**
     * Adds a new task to the to-do list.
     */
    function addTask() {
        const taskText = taskInput.value.trim(); // Get and trim the input value

        // Check if the task text is empty
        if (taskText === "") {
            showMessage("Please enter a task!", "error"); // Use custom message box
            return; // Exit the function if input is empty
        }

        // Create a new list item (li) for the task
        const listItem = document.createElement('li');
        listItem.textContent = taskText; // Set the text content of the list item

        // Create a new button for removing the task
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove"; // Set button text
        removeButton.classList.add('remove-btn'); // Add a class for styling

        // Assign an onclick event to the remove button
        // When clicked, it removes its parent <li> element from the taskList
        removeButton.onclick = () => {
            taskList.removeChild(listItem);
        };

        // Append the remove button to the list item
        listItem.appendChild(removeButton);

        // Append the new list item to the task list (ul)
        taskList.appendChild(listItem);

        // Clear the input field after adding the task
        taskInput.value = "";
        taskInput.focus(); // Keep focus on the input for quick adding
    }

    // Attach event listener to the "Add Task" button
    // Calls the addTask function when the button is clicked
    addTaskBtn.addEventListener('click', addTask);

    // Attach event listener to the task input field for the 'keypress' event
    // Allows adding tasks by pressing the "Enter" key
    taskInput.addEventListener('keypress', (event) => {
        // Check if the pressed key is 'Enter'
        if (event.key === 'Enter') {
            addTask(); // Call the addTask function
        }
    });

    // Initial setup: focus on the input field when the page loads
    taskInput.focus();
});
