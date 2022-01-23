const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
// const toDoInput = document.querySelector("#todo-form input"); 2와 같다.
const toDoList = document.querySelector("#todo-list");

let toDos = [];
const TODOS_KEY="todos";

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value="";
    const newTodoObj = {
        text : newTodo,
        id : Date.now()
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

function paintToDo(newTodo){
    const p = document.createElement("p");
    p.id = newTodo.id;
    
    const span = document.createElement("span");
    span.innerText = newTodo.text;

    const button = document.createElement("button");
    button.innerText="X";
    button.addEventListener("click",deleteToDo);
    
    p.appendChild(span);
    p.appendChild(button);
    toDoList.appendChild(p);
}

function saveToDos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}

function deleteToDo(event){
    const p = event.target.parentElement; // event.target["parentElement"]도 가능
    p.remove();

    toDos = toDos.filter((toDo) => toDo.id !== parseInt(p.id));
    // filter -> array에 요소 하나씩 꺼내어 ( )안에 각각 적용한다.
    // toDo로 요소하나를 받고, => 오른쪽으로 연산을 하며 true면 새로운 array에 포함,
    // false면 새로운 array에서 제외한다.
    // 결과적으로 true가 반환되는 toDo를 새로운 array에 포함한다. -> 새로운 array 만듦.
    saveToDos();
}


toDoForm.addEventListener("submit",handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
if(savedToDos){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo); //array 각 요소마다 forEach안에 있는 함수를 적용하여 실행, 즉 요소 개수만큼 실행된다.
}