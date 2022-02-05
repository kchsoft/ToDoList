const toDoTitle = document.querySelectorAll(".todo-title");
const toDoTitleSize = toDoTitle.length;

/*----------------------------------*/

function handleToDoTitle(event){
    event.preventDefault();
    console.log(this);
}

/*----------------------------------*/


for(let i = 0; i < toDoTitleSize; i ++){
    toDoTitle[i].addEventListener("submit",handleToDoTitle);
}