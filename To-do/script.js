const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');
const addTask = document.getElementById('addTask');
const checked = document.getElementById('checked');

addTask.addEventListener('click', () => {
    if (inputBox.value === '') {
        alert("Write something!");
    } else {
        const li = document.createElement('li');
        li.textContent = inputBox.value;
        listContainer.appendChild(li);

        inputBox.value = ''; 

        const span = document.createElement('span');
        span.textContent = "\u00d7";
        li.appendChild(span);

     
        
    }
  
});

listContainer.addEventListener('click', (e) => {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }
});

