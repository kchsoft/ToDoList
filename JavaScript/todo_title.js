const toDoTitleForm = document.querySelectorAll(".todo-title");
const toDoTitle = document.querySelectorAll(".title");
const toDoTitleSize = toDoTitleForm.length;
const TITLE_KEY = ["title_1","title_2","title_3"];


/*----------------------------------*/
function findTitleKeyIndex(event){
    if(event.target === toDoTitleForm[0]) return 0;
    if(event.target === toDoTitleForm[1]) return 1;
    if(event.target === toDoTitleForm[2]) return 2;
}

function handleToDoTitle(event){
    event.preventDefault();
    const toDoInput = event.target.firstElementChild;
    const Title = toDoInput.value
    toDoInput.value = "";
    const TitleKeyIndex = findTitleKeyIndex(event);
    toDoInput.classList.add(HIDDEN_CLASSNAME);

    localStorage.setItem(TITLE_KEY[TitleKeyIndex],Title);
    paintTitle(Title,TitleKeyIndex);
}

function paintTitle(Title,Index){
    toDoTitle[Index].innerHTML = `${Title}`;
    toDoTitle[Index].classList.remove(HIDDEN_CLASSNAME);
}
/*----------------------------------*/


for(let i = 0; i < toDoTitleSize; i ++){
    toDoTitleForm[i].addEventListener("submit",handleToDoTitle);
}