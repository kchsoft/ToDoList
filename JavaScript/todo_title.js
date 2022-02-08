const toDoTitleForm = document.querySelectorAll(".todo-titleform");
const toDoTitle = document.querySelectorAll(".todo-title");
const resetTitle = document.querySelectorAll(".reset_title");

const toDoTitleSize = toDoTitleForm.length;
const titleName = ["title_1","title_2","title_3"];
/*----------------------------------*/

function findTitleNameIndex(event){

    if(event === toDoTitleForm[0]) return 0; 
    if(event === toDoTitleForm[1]) return 1;
    if(event === toDoTitleForm[2]) return 2;
}

function findResetButtonIndex(event){
    if(event === resetTitle[0]) return 0; 
    if(event === resetTitle[1]) return 1;
    if(event === resetTitle[2]) return 2;
}

function handleToDoTitle(event){
    event.preventDefault();
    this.classList.add(HIDDEN_CLASSNAME);
    const titleForm = this.firstElementChild;
    const title = titleForm.value;
    titleForm.value = "";

    const index = findTitleNameIndex(this);
    localStorage.setItem(titleName[index],title);
    paintTitles(title,index);
    
}


function paintTitles(title,index){
    toDoTitle[index].firstElementChild.innerHTML = `${title}`;
    toDoTitle[index].classList.remove(HIDDEN_CLASSNAME);
}





function ResetTitle(){
    const index = findResetButtonIndex(this);
    localStorage.removeItem(titleName[index]);
    toDoTitle[index].classList.add(HIDDEN_CLASSNAME);
    toDoTitleForm[index].classList.remove(HIDDEN_CLASSNAME);
}


/*----------------------------------*/


for(let i = 0; i < toDoTitleSize; i ++){
    toDoTitleForm[i].addEventListener("submit",handleToDoTitle);
}

for(let i = 0 ; i < toDoTitleSize; i++){
    const tempTitle = localStorage.getItem(titleName[i]);
    if(tempTitle){
        paintTitles(tempTitle,i);
        toDoTitleForm[i].classList.add(HIDDEN_CLASSNAME);
    }
    else 
        toDoTitleForm[i].classList.remove(HIDDEN_CLASSNAME);
}

for(let i = 0 ; i < toDoTitleSize ; i ++)
    resetTitle[i].addEventListener("click",ResetTitle);