document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Load tasks from localStorage on page load
    loadTasks();

    // Function to load tasks from localStorage and add them to the DOM
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => {
            addTask(taskText, false); // false = don't save again to localStorage
        });
    }

    // Function to add a new task to the DOM and optionally to localStorage
    function addTask(taskText, save = true) {
        // If triggered from UI (button/Enter), retrieve text from input field
        if (typeof taskText !== 'string') {
            taskText = taskInput.value.trim();
        }

        // Validate input
        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }

        // Create <li> element and set its text
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create "Remove" button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.classList.add('remove-btn');

        // On remove, delete task from DOM and localStorage
        removeButton.onclick = () => {
            taskList.removeChild(li);
            removeFromStorage(taskText);
        };

        // Add button to list item and add item to list
        li.appendChild(removeButton);
        taskList.appendChild(li);

        // Clear input field
        taskInput.value = '';

        // Save to localStorage if needed
        if (save) {
            const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
            storedTasks.push(taskText);
            localStorage.setItem('tasks', JSON.stringify(storedTasks));
        }
    }

    // Function to remove task from localStorage
    function removeFromStorage(taskText) {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        const updatedTasks = storedTasks.filter(task => task !== taskText);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    }

    // Event listener: button click adds task
    addButton.addEventListener('click', () => addTask());

    // Event listener: pressing Enter adds task
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
