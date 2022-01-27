const toDoTitle = document.querySelectorAll(".todo-title");
const toDoTitleSize = toDoTitle.length;

/*----------------------------------*/

function handleToDoTitle(event){
    event.preventDefault();
}

/*----------------------------------*/


for(let i = 0; i < toDoTitleSize; i ++){
    toDoTitle[i].addEventListener("submit",handleToDoTitle);
}