const toDoForm = document.querySelector("#todo-form")
const toDoList = document.querySelector("#todo-list")
const toDoInput = document.querySelector("#todo-form input")

const TODOS_KEY = "todos"

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos))
}

function deleteToDo(event) {
    // event.preventDefault();
    const li = event.target.parentNode;
    li.classList.add("fade-out")
    // setTimeout(() => li.classList.add("slide-up"), 500)
    setTimeout(() => li.remove(), 500)
    toDos = toDos.filter(toDo => toDo.id !== Number(li.id))
    saveToDos();
}

function paintTodo(toDoObj) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const deleteBtn = document.createElement("button")

    span.textContent = toDoObj.text;
    deleteBtn.textContent = '✕'
    deleteBtn.addEventListener('click', deleteToDo)

    li.id = toDoObj.id
    li.classList.add('fade-in')
    li.appendChild(span)
    li.appendChild(deleteBtn)
    toDoList.appendChild(li)
}

function handleToDoSubmit(event) {
    event.preventDefault();
    if (toDos.length >= 5) return;
    const toDo = toDoInput.value;
    toDoInput.value = ''; // empty the input

    // new Date() => 생성자, 객체를 반환
    // Date() => 함수, 문자열을 반환

    const toDoObj = {
        id: Date.now(),
        text: toDo
    }
    toDos.push(toDoObj)

    saveToDos()
    paintTodo(toDoObj)
}

const savedTodos = localStorage.getItem(TODOS_KEY)
if (savedTodos) {
    toDos = JSON.parse(savedTodos)
    for (let toDoObj of toDos) {
        paintTodo(toDoObj);
    }
}

toDoForm.addEventListener("submit", handleToDoSubmit)
