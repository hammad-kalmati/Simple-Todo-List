var todo = JSON.parse(localStorage.getItem('Todo List')) || [];
var getInput = document.getElementById('userInput');
var saveIndex;

function addTodo() {
    if (getInput.value === '') {
        alert('Enter Something in Todo List !')
    } else {
        todo.push(getInput.value);
        localStorage.setItem("Todo List", JSON.stringify(todo));

        getInput.value = '';

        showList();
    }
}

function showList() {
    var list = document.getElementById('list-items');
    list.style.listStyleType = "none";
    list.style.marginTop = "30px";

    list.innerHTML = '';

    for (var i = 0; i < todo.length; i++) {
        list.innerHTML += `<li> <p> ${todo[i]} </p> <div> <button onclick = 'deleteItems(${i})'> Delete </button> 
        <button onclick = 'editItems(${i})'> Edit </button> </div> </li>`
    }
}

function deleteItems(index) {
    todo.splice(index, 1);

    showList();

    localStorage.setItem("Todo List", JSON.stringify(todo));
}

function editItems(index) {
    saveIndex = index;

    getInput.value = todo[index];

    var addBtn = document.getElementById('add-btn').style.display = 'none';
    var updateBtn = document.getElementById('update-btn').style.display = 'block';
}

function updateTodo() {
    var updatedValue = getInput.value;

    if (updatedValue !== "") {
        todo[saveIndex] = updatedValue;


        localStorage.setItem("Todo List", JSON.stringify(todo));

        getInput.value = '';
        document.getElementById('add-btn').style.display = 'block';
        document.getElementById('update-btn').style.display = 'none';

        showList();
    }
}


