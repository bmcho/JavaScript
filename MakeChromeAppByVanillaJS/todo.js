const toDoForm = document.querySelector(".js-toDoForm"),
      toDoInput = toDoForm.querySelector("input"),
      toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';
let toDos = [];

function orderByListId(){
    let index = 1;
    let toDoListChild = toDoList.querySelectorAll("li")
    toDos.forEach(function(toDo){
        toDo.id = index;
        toDoListChild[index-1].id = index;
        index++;
    })
}

function deleteToDo(event){
    // event -> MouseEvent의 정보
    // event.target -> 해당 Element
    // event.target.parentNode -> 부모 Node(li)

    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id);
    })
    toDos = cleanToDos;
    saveToDos();
    orderByListId();
}

function saveToDos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1;
    delBtn.innerText = "❌"
    delBtn.style.background = "none";
    delBtn.style.border ="none";
    delBtn.addEventListener("click", deleteToDo);
    span.innerText = text;
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj ={
        text: text,
        id: newId
    };
    toDos.push(toDoObj);
    saveToDos();
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null){
        const parsedTodos = JSON.parse(loadedToDos);
        parsedTodos.forEach(function(toDo){
            paintToDo(toDo.text);
        });
    } 
}

function init(){
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit)
}

init(); 