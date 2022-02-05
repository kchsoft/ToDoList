const toDoForm = document.querySelectorAll(".todo-form"); // Array
const toDoInput = document.querySelectorAll("main .todo-form input");
const toDoList = document.querySelectorAll(".todo-list");

let toDos1 = [];
let toDos2 = [];
let toDos3 = [];
const toDoFormSize = toDoForm.length;

let toDosnum;
const TODOS_KEY=["form_1","form_2","form_3"];


/*-----------------------------------------------------------------------------*/
function setToDos(toDos,parsedToDos){
    if(toDos === toDos1) toDos1 = parsedToDos;
    if(toDos === toDos2) toDos2 = parsedToDos;
    if(toDos === toDos3) toDos3 = parsedToDos;
}

function filterToDo(toDos,p){
    if(toDos === toDos1) toDos1 = toDos1.filter((toDo) => toDo.id !== parseInt(p.id));
    if(toDos === toDos2) toDos2 = toDos2.filter((toDo) => toDo.id !== parseInt(p.id));
    if(toDos === toDos3) toDos3 = toDos3.filter((toDo) => toDo.id !== parseInt(p.id));
    // filter -> array에 요소 하나씩 꺼내어 ( )안에 각각 적용한다.
    // toDo로 요소하나를 받고, => 오른쪽으로 연산을 하며 true면 새로운 array에 포함,
    // false면 새로운 array에서 제외한다.
    // 결과적으로 true가 반환되는 toDo를 새로운 array에 포함한다. -> 새로운 array 만듦.
}

function findToDos(event){
    if(event.target === toDoForm[0] || event == toDoForm[0]) return toDos1;
    if(event.target === toDoForm[1] || event == toDoForm[1]) return toDos2;
    if(event.target === toDoForm[2] || event == toDoForm[2]) return toDos3;

    if(event === 0) return toDos1;
    if(event === 1) return toDos2;
    if(event === 2) return toDos3;
}


function findToDoFormNumber(event){  
    if(event.target === toDoForm[0] || event == toDoForm[0]) return 0;
    if(event.target === toDoForm[1] || event == toDoForm[1]) return 1;
    if(event.target === toDoForm[2] || event == toDoForm[2]) return 2;

    if(event === 0) return 0;
    if(event === 1) return 1;
    if(event === 2) return 2;

}

function handleToDoSubmit(event){
    event.preventDefault();
    console.log(this);
    const toDoInput = this.firstElementChild;
    const newTodo = toDoInput.value;
    toDoInput.value="";
    const newTodoObj = {
        text : newTodo,
        id : Date.now()
    };
    
    const toDos = findToDos(event);
    toDos.push(newTodoObj);
    paintToDo(newTodoObj,event);
    saveToDos(event);
}

function paintToDo(newTodo,event){
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
    
    const foundToDoForm = event.path[3].children[1]; //html이 바뀔때 마다 주의해야함.
    let toDos = findToDos(foundToDoForm);
    filterToDo(toDos,p);
    
    saveToDos(foundToDoForm);
}


/*-------------------------------------------------------*/ 
for(let i = 0 ; i < toDoFormSize ; i++){
    toDoForm[i].addEventListener("submit",handleToDoSubmit);
}


for(let FormNumber = 0 ; FormNumber < toDoFormSize ; FormNumber++)
{
    const savedToDos = localStorage.getItem(TODOS_KEY[FormNumber]);
    if(savedToDos){
        const parsedToDos = JSON.parse(savedToDos);
        setToDos(findToDos(FormNumber),parsedToDos);
        for(let ListNumber = 0 ; ListNumber < parsedToDos.length; ListNumber++){
            paintToDo(parsedToDos[ListNumber],FormNumber);
        }
        // parsedToDos.forEach(paintToDo); //array 각 요소마다 forEach안에 있는 함수를 적용하여 실행, 즉 요소 개수만큼 실행된다.
    }
}


