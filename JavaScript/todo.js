const toDoForm = document.querySelectorAll(".todo-form"); // Array
const toDoInput = document.querySelectorAll("main input");
const toDoList = document.querySelectorAll(".todo-list");


let toDos1 = [];
let toDos2 = [];
let toDos3 = [];
const toDoFormSize= 3;

let toDosnum;
const TODOS_KEY=["form_1","form_2","form_3"];

function findToDos(event){
    if(event.target === toDoForm[0]) return toDos1;
    if(event.target === toDoForm[1]) return toDos2;
    if(event.target === toDoForm[2]) return toDos3;

    if(event === 0) return toDos1;
    if(event === 1) return toDos2;
    if(event === 2) return toDos3;
}

function findToDoForm(event){
    if(event.target === toDoForm[0]) return event.target;
    if(event.target === toDoForm[1]) return event.target;
    if(event.target === toDoForm[2]) return event.target;
}

function findToDoFormNumber(event){  
    if(event.target === toDoForm[0]) return 0;
    if(event.target === toDoForm[1]) return 1;
    if(event.target === toDoForm[2]) return 2;

}

function handleToDoSubmit(event){
    event.preventDefault();
    const toDoInputTarget = findToDoForm(event);
    const newTodo = toDoInputTarget.value;
    toDoInputTarget.value="";
    const newTodoObj = {
        text : newTodo,
        id : Date.now()
    };

    const toDo = findToDos(event);
    toDo.push(newTodoObj);
    paintToDo(newTodoObj,event);
    saveToDos(event);
}

function paintToDo(newTodo,event){
    // if(newTodo === null) return;

    const p = document.createElement("p");
    p.id = newTodo.id;
    
    const span = document.createElement("span");
    span.innerText = newTodo.text;

    const button = document.createElement("button");
    button.innerText="X";
    button.addEventListener("click",deleteToDo);
    
    p.appendChild(span);
    p.appendChild(button);
    toDoList[findToDoFormNumber(event)].appendChild(p);
}

function saveToDos(event){
    localStorage.setItem(TODOS_KEY[findToDoFormNumber(event)],JSON.stringify(findToDos(event)));
}

function deleteToDo(event){
    const p = event.target.parentElement; // event.target["parentElement"]도 가능
    p.remove();

    toDos = toDos.filter((toDo) => toDo.id !== parseInt(p.id));
    // filter -> array에 요소 하나씩 꺼내어 ( )안에 각각 적용한다.
    // toDo로 요소하나를 받고, => 오른쪽으로 연산을 하며 true면 새로운 array에 포함,
    // false면 새로운 array에서 제외한다.
    // 결과적으로 true가 반환되는 toDo를 새로운 array에 포함한다. -> 새로운 array 만듦.
    saveToDos(event);
}


toDoForm[0].addEventListener("submit",handleToDoSubmit);
toDoForm[1].addEventListener("submit",handleToDoSubmit);
toDoForm[2].addEventListener("submit",handleToDoSubmit);


// for(let i = 0 ; i < toDoFormSize ; i++)
// {
//     const savedToDos = localStorage.getItem(TODOS_KEY[i]);
//     if(savedToDos){
//         const parsedToDos = JSON.parse(savedToDos);
//         let toDo = findToDos(i);
//         toDo = parsedToDos;
//         for(let k = 0 ; k < parsedToDos.length ; k++){

//         }
//         // parsedToDos.forEach(paintToDo); //array 각 요소마다 forEach안에 있는 함수를 적용하여 실행, 즉 요소 개수만큼 실행된다.
//     }
// }
