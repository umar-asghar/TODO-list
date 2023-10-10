const inputList = document.getElementById('inputlist');
const addBtn = document.getElementById('addbtn');
const main = document.querySelector('main');

// Add a new task
function addTask(taskText) {
	// Create a new task list item
	const taskList = document.createElement('div');
	taskList.classList.add('tasklist');

	const taskInput = document.createElement('input');
	taskInput.type = 'text';
	taskInput.value = taskText;
	taskInput.readOnly = true;
    taskInput.id = 'task';

	const buttons = document.createElement('div');
	buttons.classList.add('btn');

	const editBtn = document.createElement('button');
	editBtn.textContent = 'Edit';
    editBtn.id = 'edit';

	const deleteBtn = document.createElement('button');
	deleteBtn.textContent = 'Delete';
    deleteBtn.id = 'delete';

	// Append elements to the task list
	buttons.appendChild(editBtn);
	buttons.appendChild(deleteBtn);
	taskList.appendChild(taskInput);
	taskList.appendChild(buttons);

	// Add task list item to the main container
	main.appendChild(taskList);

	// Clear the input field
	inputList.value = '';

	// Attach event listeners for edit and delete buttons
	editBtn.addEventListener('click', () => {
        if(editBtn.innerText.toLowerCase() =="edit")
        {
            taskInput.removeAttribute('readonly');
						taskInput.focus();
						editBtn.textContent = 'Save';

        }
        else{
            taskInput.setAttribute('readonly','readonly');
						editBtn.textContent = 'Edit';

        }
		
		
	});

	deleteBtn.addEventListener('click', () => {
		main.removeChild(taskList);
	});
}

// Add a new task when the "Add Task" button is clicked
addBtn.addEventListener('click', () => {
	const taskText = inputList.value.trim();
	if (taskText !== '') {
		addTask(taskText);
	}
});

// Add a new task when Enter key is pressed
inputList.addEventListener('keydown', (e) => {
	if (e.key === 'Enter') {
		const taskText = inputList.value.trim();
		if (taskText !== '') {
			addTask(taskText);
		}
	}
});
