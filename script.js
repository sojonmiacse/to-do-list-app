document.getElementById("add-task-btn").addEventListener("click", addTask);
document.getElementById("task-list").addEventListener("click", handleTask);

function addTask() {
     const taskInput = document.getElementById("new-task");
     const taskText = taskInput.value.trim();

     if (taskText !== "") {
          const li = document.createElement("li");
          li.innerHTML = `
            <span class="task-text">${taskText}</span>
            <button class="edit-btn">Edit</button>
            <button class="save-btn">Save</button>
            <button class="delete-btn">Delete</button>
        `;
          document.getElementById("task-list").appendChild(li);
          taskInput.value = "";
     }
}

function handleTask(event) {
     const item = event.target;

     if (item.classList.contains("edit-btn")) {
          editTask(item);
     } else if (item.classList.contains("save-btn")) {
          saveTask(item);
     } else if (item.classList.contains("delete-btn")) {
          deleteTask(item);
     }
}

function editTask(button) {
     const li = button.parentElement;
     const taskText = li.querySelector(".task-text");
     const saveButton = li.querySelector(".save-btn");
     const editButton = li.querySelector(".edit-btn");

     taskText.contentEditable = "true";
     taskText.focus();
     taskText.classList.add("editing");
     saveButton.style.display = "inline-block";
     editButton.style.display = "none";
}

function saveTask(button) {
     const li = button.parentElement;
     const taskText = li.querySelector(".task-text");
     const saveButton = li.querySelector(".save-btn");
     const editButton = li.querySelector(".edit-btn");

     taskText.contentEditable = "false";
     taskText.classList.remove("editing");
     saveButton.style.display = "none";
     editButton.style.display = "inline-block";
}

function deleteTask(button) {
     const li = button.parentElement;
     li.remove();
}
