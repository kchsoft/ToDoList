const toDoTitleForm = document.querySelectorAll(".todo-titleform");
const toDoTitle = document.querySelectorAll(".todo-title");
const toDoTitleSize = toDoTitleForm.length;
const titleName = ["title_1","title_2","title_3"];
/*----------------------------------*/

function findTitleNameIndex(event){

    if(event === toDoTitleForm[0]) return 0; 
    if(event === toDoTitleForm[1]) return 1;
    if(event === toDoTitleForm[2]) return 2;
}

function handleToDoTitle(event){
    event.preventDefault();
    this.classList.add(HIDDEN_CLASSNAME);
    const titleForm = this.firstElementChild;
    const title = titleForm.value;
    titleForm.value = "";
    console.log(findTitleNameIndex(titleForm));
    const index = findTitleNameIndex(this);
    localStorage.setItem(titleName[index],title);
    paintTitles(title,index);
    
}


function paintTitles(title,index){
    toDoTitle[index].firstElementChild.innerHTML = `${title}`;
    toDoTitle[index].classList.remove(HIDDEN_CLASSNAME);
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